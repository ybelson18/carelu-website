/* Every page served by /resources/:slug, in one map.
   `resources` holds the original intake guides; `growthResources` holds the
   practice-growth cluster; `answerResources` holds the one-question answer
   pages (CPT codes, intake software, AI). They are split only to keep each file readable —
   ResourcePage renders both identically. */

import { resources } from './resources';
import { growthResources } from './growth';
import { answerResources } from './answers';
import type { ResourceConfig } from './resources';

export const allResources: Record<string, ResourceConfig> = {
  ...resources,
  ...growthResources,
  ...answerResources,
};
