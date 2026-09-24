import Anthropic from '@anthropic-ai/sdk';

/* ================================================================
   What is this person trying to do? One cheap classification per
   payer-chat question, stored next to it in the usage log so the team
   can see what people care about (carelu.com/sources/questions).

   Runs after the answer has streamed, inside waitUntil: the visitor
   never waits on it, and a failure only means the row has no tags.
   Haiku 4.5 is plenty for a short label and costs ~$0.001 a question.
   ================================================================ */

export const INTENTS = [
  'family-coverage-check',   // verifying one specific family's coverage / eligibility right now
  'intake-process',          // how to run intake: documents, referrals, diagnosis, forms
  'billing-and-rates',       // rates, codes, units, claims, reimbursement
  'authorization',           // prior auth / reauth mechanics and timelines
  'credentialing-network',   // enrolling, contracting, licensure, network access
  'market-research',         // comparing states or payers, deciding where to expand
  'vendor-evaluation',       // evaluating Carelu or the tool itself
  'other',
] as const;

export interface QuestionTags {
  intent: (typeof INTENTS)[number];
  topics: string[];   // short lowercase topics, e.g. 'prior auth', 'diagnosis recency', 'rates'
  payers: string[];   // payers named or clearly implied
  states: string[];   // 2-letter state codes named or clearly implied
  summary: string;    // one line: what this person wants, in plain words
}

const SCHEMA = {
  type: 'object',
  properties: {
    intent: { type: 'string', enum: [...INTENTS] },
    topics: { type: 'array', items: { type: 'string' } },
    payers: { type: 'array', items: { type: 'string' } },
    states: { type: 'array', items: { type: 'string' } },
    summary: { type: 'string' },
  },
  required: ['intent', 'topics', 'payers', 'states', 'summary'],
  additionalProperties: false,
};

const INSTRUCTIONS = `You label questions asked to an ABA-therapy payer directory chat (users are mostly intake, billing and owners at ABA provider agencies).
Return: intent (one of the enum values), 1-3 short lowercase topics, the payers and 2-letter US state codes the question names or clearly implies (empty arrays if none), and a one-line plain summary of what the person wants (max 20 words, no preamble).
If a previous question is given, use it to resolve follow-ups like "what about Ohio?".`;

export async function classifyQuestion(question: string, previous?: string): Promise<QuestionTags | undefined> {
  try {
    const client = new Anthropic();
    const res = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 400,
      system: INSTRUCTIONS,
      output_config: { format: { type: 'json_schema', schema: SCHEMA } },
      messages: [{
        role: 'user',
        content: (previous ? `Previous question: ${previous.slice(0, 500)}\n\n` : '') + `Question: ${question.slice(0, 1000)}`,
      }],
    });
    if (res.stop_reason === 'refusal') return undefined;
    const text = res.content.find((b) => b.type === 'text');
    if (!text || text.type !== 'text') return undefined;
    const tags = JSON.parse(text.text) as QuestionTags;
    tags.states = tags.states.map((s) => s.toUpperCase()).filter((s) => /^[A-Z]{2}$/.test(s));
    return tags;
  } catch (err) {
    console.error('askIntent: classify failed', err);
    return undefined;
  }
}
