#!/usr/bin/env python3
"""
One-way sync: carelu-website src/data/payers  ->  LeadTrap backend/src/data/payer-guides.

    python3 scripts/leadtrap-sync/sync.py <path-to-LeadTrap-checkout>

Why a script: LeadTrap keeps guides that exist ONLY in LeadTrap, some inside files it
shares with the website (e.g. anthem-indiana in indiana.ts, medcost in north-carolina.ts,
their vob entries plus helper constants). A plain copy deletes them silently. This script
copies the website's version of every file and merges LeadTrap-only content back in:
  - guide files: LeadTrap-only guide entries are appended to the exported object;
  - vob files:   LeadTrap-only entries of the exported *Vob object are appended, together
                 with the top-level helpers they use and any imports those need;
  - LeadTrap-only files (e.g. non-insurance-payers.ts, README.md, vob/iowa.ts) are untouched;
  - index.ts / vob/index.ts / types.ts are NOT overwritten (LeadTrap registers its own
    files and keeps a looser types.ts); the script prints what the website adds to them so
    the operator ports those lines by hand.
The only intentional transform: the ' | Carelu' suffix is stripped from metaTitle strings.

"LeadTrap-only" is detected, not listed: any top-level key LeadTrap has that the website's
same file lacks. Run `npx tsc --noEmit -p backend/tsconfig.json` in LeadTrap afterwards.
First written for the 2026-09-24 sync (LeadTrap PR #4096).
"""
import os
import re
import sys

WEB = os.path.join(os.path.dirname(__file__), '..', '..', 'src', 'data', 'payers')
SKIP = {'index.ts', 'types.ts'}
TOP = re.compile(r'^(?:export )?(?:const|let|function|type|interface) ([A-Za-z_]\w*)')
KEY = re.compile(r"^  (?:'([a-z0-9-]+)'|([a-z][A-Za-z0-9]*)): ")


def strip_carelu(s):
    return re.sub(r"( \| Carelu)(['\"`])", r"\2", s)


def segments(src):
    """Top-level declarations by line -> {name: text incl. the comment block above it}."""
    lines = src.split('\n')
    starts = [i for i, l in enumerate(lines)
              if TOP.match(l) or l.startswith(('import ', 'export {', 'export *'))]
    starts.append(len(lines))
    out = {}
    for a, b in zip(starts, starts[1:]):
        m = TOP.match(lines[a])
        if not m:
            continue
        s = a
        while s > 0 and (lines[s - 1].startswith(('//', '/*')) or lines[s - 1].strip().startswith(('*', '*/'))):
            s -= 1
        e = b
        while e > a + 1 and (lines[e - 1].strip() == '' or lines[e - 1].startswith(('//', '/*'))
                             or lines[e - 1].strip().startswith(('*', '*/'))):
            e -= 1
        out[m.group(1)] = '\n'.join(lines[s:e])
    return out


def entries(obj_text):
    """Entries of an exported object literal, keyed by their 2-space-indented key line."""
    lines = obj_text.split('\n')
    keys = [(i, m.group(1) or m.group(2)) for i, l in enumerate(lines) for m in [KEY.match(l)] if m]
    end = max(i for i, l in enumerate(lines) if l.startswith('};'))
    keys.append((end, None))
    return {k: '\n'.join(lines[a:b]) for (a, k), (b, _) in zip(keys, keys[1:])}


def merge(web_src, lt_src, suffix):
    """Website file + LeadTrap-only entries (and, for vob, their helpers and imports)."""
    ws, ls = segments(web_src), segments(lt_src)
    name = next((n for n in ls if n.endswith(suffix) and n in ws), None)
    if not name:
        return web_src, []
    we, le = entries(ws[name]), entries(ls[name])
    keep = [k for k in le if k not in we]
    if not keep:
        return web_src, []
    helpers = [n for n in ls if n not in ws and n != name]
    kept_text = '\n'.join(le[k] for k in keep) + '\n'.join(ls[n] for n in helpers)
    obj = ws[name]
    cut = obj.rstrip().rfind('};')
    new_obj = obj[:cut].rstrip() + '\n' + '\n'.join(le[k].rstrip() for k in keep) + '\n' + obj[cut:]
    prefix = ''
    if helpers:
        prefix = '// LeadTrap-only guides (not in carelu-website) and their helpers\n' + \
                 '\n\n'.join(ls[n] for n in helpers) + '\n\n'
    out = web_src.replace(obj, prefix + new_obj)
    # imports the kept code needs (value and type imports)
    for m in re.finditer(r"^import (type )?\{([^}]*)\} from '([^']+)';", lt_src, re.M):
        need = [x.strip() for x in m.group(2).split(',')
                if x.strip() and re.search(rf'\b{re.escape(x.strip())}\b', kept_text)]
        im = re.search(rf"^import {re.escape(m.group(1) or '')}\{{([^}}]*)\}} from '{re.escape(m.group(3))}';", out, re.M)
        missing = [x for x in need if not im or not re.search(rf'\b{re.escape(x)}\b', im.group(1))]
        if missing and im:
            out = out.replace(im.group(0), f"import {m.group(1) or ''}{{{im.group(1).rstrip()}, {', '.join(missing)} }} from '{m.group(3)}';")
        elif missing:
            out = f"import {m.group(1) or ''}{{ {', '.join(missing)} }} from '{m.group(3)}';\n" + out
    return out, keep


def sync_dir(web_dir, lt_dir, suffix, report):
    for f in sorted(os.listdir(web_dir)):
        if not f.endswith('.ts') or f in SKIP:
            continue
        web = strip_carelu(open(os.path.join(web_dir, f)).read())
        lp = os.path.join(lt_dir, f)
        if os.path.exists(lp) and f != 'changelog.ts':
            web, kept = merge(web, open(lp).read(), suffix)
            if kept:
                report.append(f'{os.path.basename(lt_dir)}/{f}: kept LeadTrap-only {kept}')
        elif not os.path.exists(lp):
            report.append(f'NEW {f} (register it in index.ts)')
        open(lp, 'w').write(web)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    lt = os.path.join(sys.argv[1], 'backend', 'src', 'data', 'payer-guides')
    report = []
    sync_dir(WEB, lt, 'Payers', report)
    sync_dir(os.path.join(WEB, 'vob'), os.path.join(lt, 'vob'), 'Vob', report)
    print('\n'.join(report) or 'no LeadTrap-only content in shared files')
    for idx in ('index.ts', 'vob/index.ts'):
        w = set(re.findall(r"^import .*$", open(os.path.join(WEB, idx)).read(), re.M))
        l = set(re.findall(r"^import .*$", open(os.path.join(lt, idx)).read(), re.M))
        for line in sorted(w - l):
            print(f'PORT to LeadTrap {idx}: {line}  (and its ...spread)')
    print('types.ts is not overwritten: port new fields / STATE_META rows by hand, keep LeadTrap-only unions.')


if __name__ == '__main__':
    main()
