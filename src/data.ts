export const commits = [
  { hash: 'a7ffba7', message: 'fix: all 21 remaining audit FAILs', files: 19, time: '2h ago' },
  { hash: '1cc8373', message: 'fix: final 4 remaining audit items', files: 3, time: '3h ago' },
  { hash: '13926b8', message: 'fix: final 20 remaining audit items', files: 8, time: '4h ago' },
  { hash: '9e1277c', message: 'fix: document items - keyword index O(1), error caps, webhook 503', files: 3, time: '5h ago' },
  { hash: '32d4ce4', message: 'fix: form4 minimum dollar threshold, signal quality improvements', files: 2, time: '6h ago' },
  { hash: '3086e0c', message: 'fix: duplicate broker list, credentials security, relevance tiers', files: 1, time: '7h ago' },
  { hash: 'bbf52f3', message: 'fix: per-function bugs continued - batching, NaN guards', files: 2, time: '8h ago' },
  { hash: 'c322af1', message: 'fix: document per-function bugs - FIFO, parallelisation, magnitude', files: 2, time: '9h ago' },
  { hash: '95ef38a', message: 'fix: more document items - options magnitude, remaining upserts', files: 3, time: '10h ago' },
  { hash: '77be188', message: 'fix: document items + audit pass 3 - scoring, signals, upserts', files: 7, time: '11h ago' },
  { hash: 'fac0e13', message: 'deploy: force redeploy all 70+ fixed edge functions', files: 75, time: '12h ago' },
  { hash: '12f80d6', message: 'fix: complete audit remediation - all FAIL items addressed', files: 18, time: '14h ago' },
  { hash: 'be08722', message: 'fix: Round 2 priority fixes batch 1 - disable fake data, magnitude 0-5 scale', files: 24, time: '16h ago' },
  { hash: '77f6e34', message: 'fix: Round 2 batch 2 - scoring, prediction, ingestion bugs + cron schedules', files: 9, time: '17h ago' },
  { hash: 'b797b8d', message: 'fix: Round 2 batch 3 - compute-signal-scores, manage-brokers', files: 4, time: '18h ago' },
];

export const tasks = [
  { id: 1, title: 'Fix Stripe payment functions', desc: 'Update API version from 2025-08-27.basil to 2024-11-20 and fix open redirect vulnerability in 3 functions.', priority: 'HIGH', status: 'QUEUED', added: '1h ago' },
  { id: 2, title: 'Build Tavily search integration', desc: 'Week 2: integrate Tavily Pro for real-time web search in AI scoring pipeline. Needs Dan approval for $100/mo.', priority: 'HIGH', status: 'QUEUED', added: '2h ago' },
  { id: 3, title: 'Build compute-ai-scores function', desc: 'Week 3: LLM reasoning layer. Hybrid scoring: 40% formula + 60% AI. Chain-of-thought per asset.', priority: 'HIGH', status: 'QUEUED', added: '2h ago' },
  { id: 4, title: 'Trade signals system', desc: 'Week 4: trade_signals table, generate-trade-signals function, entry/exit/stop-loss logic.', priority: 'MED', status: 'QUEUED', added: '2h ago' },
  { id: 5, title: 'Backtesting engine', desc: 'Simulate trades on historical signals + prices. Compare vs benchmark. Deploy to UI.', priority: 'LOW', status: 'QUEUED', added: '2h ago' },
];

export const activity = [
  { type: 'commit', title: 'Pushed 19 files to radar-signal-finder-Latest', sub: 'fix: all 21 remaining audit FAILs', time: '2h ago', color: '#3b82f6' },
  { type: 'task', title: 'Completed InsiderPulse audit remediation', sub: '155 PASS, 0 non-payment FAILs', time: '3h ago', color: '#22c55e' },
  { type: 'commit', title: 'Deployed 134 edge functions via Lovable', sub: 'Commit 1cc8373 — all functions synced', time: '4h ago', color: '#3b82f6' },
  { type: 'memory', title: 'Updated daily notes', sub: 'memory/2026-03-17.md — InsiderPulse session notes', time: '5h ago', color: '#a855f7' },
  { type: 'commit', title: 'Fixed 21 audit FAILs across 19 files', sub: 'Input validation, auth checks, signal quality', time: '6h ago', color: '#3b82f6' },
  { type: 'task', title: 'Verified 4 final fixes with Claude Code', sub: '20 PASS, 2 INTENTIONAL, 0 FAIL', time: '7h ago', color: '#22c55e' },
  { type: 'commit', title: 'Force-redeployed 75 edge functions', sub: 'Touch commit to force Lovable full sync', time: '12h ago', color: '#3b82f6' },
  { type: 'commit', title: 'Fixed Round 2 priority bugs — 24 files', sub: 'Disabled fake data, normalised magnitude scale', time: '16h ago', color: '#3b82f6' },
];

export const memoryEntries = [
  { date: 'Mar 17, 2026', summary: 'Completed full InsiderPulse audit remediation. 155 PASS across 7 audit agents. All non-payment FAILs cleared. Deployment gap between Lovable internal state and GitHub resolved.' },
  { date: 'Mar 16, 2026', summary: 'Worked through 128 → 56 → 21 → 0 non-payment FAILs across 6 audit runs. Fixed form4 0-row bug, disabled fake economic calendar data, normalised all signal magnitudes to 0-5 scale.' },
  { date: 'Mar 16, 2026', summary: 'Confirmed ingest-economic-calendar disabled live. ingest-form4 writing 174 signals on first run after fix. Triggered ingest-cot-cftc — no longer crashing.' },
];
