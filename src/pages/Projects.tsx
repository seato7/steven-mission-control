import { useState } from 'react';
import { TrendingUp, GraduationCap, ShoppingBag, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const projects = {
  insiderpulse: {
    icon: TrendingUp, color: '#3b82f6', label: 'InsiderPulse',
    desc: 'Stock intelligence/trading platform · Target 70%+ win rate',
    status: 'ACTIVE', progress: 35,
    tabs: ['Overview', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Audit'],
    overview: [
      { label: 'Win Rate', val: '31.8%', target: '70%+', bad: true },
      { label: 'Pipelines', val: '11/20', target: '20/20', bad: true },
      { label: 'Audit', val: '155 PASS, 0 FAIL', target: 'Complete', bad: false },
      { label: 'Stripe', val: 'Pending approval', target: 'Fixed', bad: true },
    ],
    weeks: {
      'Week 1': [
        { item: 'Fix Railway/Options Flow', status: 'pending', note: 'Needs Polygon.io ($99/mo)' },
        { item: 'Technical pipelines restored', status: 'done', note: 'ingest-advanced-technicals v5 ✓' },
        { item: 'Search trends fixed', status: 'done', note: 'Cron re-added, running daily ✓' },
        { item: 'Earnings pipeline rate limits', status: 'done', note: 'BATCH_SIZE=2, AV_DELAY=15s ✓' },
        { item: 'Prediction grading', status: 'done', note: 'Cron job 486 scheduled ✓' },
        { item: 'RLS Fix price_ingestion_log', status: 'done', note: 'WITH CHECK (true) policy ✓' },
        { item: 'Magnitude 0-5 normalisation', status: 'done', note: 'All 15 signal generators fixed ✓' },
        { item: 'ingest-form4 0-row bug', status: 'done', note: '174 signals on first run ✓' },
        { item: 'Fake data disabled', status: 'done', note: 'economic-calendar, smart-money ✓' },
      ],
      'Week 2': [
        { item: 'Tavily Search API', status: 'pending', note: 'Needs purchase: $100/mo' },
        { item: 'NewsAPI integration', status: 'pending', note: 'Needs purchase: $449/mo' },
        { item: 'Text-based options intelligence', status: 'pending', note: 'Free — Reddit/Twitter parsing' },
        { item: 'End-to-end validation', status: 'pending', note: 'After APIs purchased' },
      ],
      'Week 3': [
        { item: 'compute-ai-scores function', status: 'pending', note: 'LLM reasoning layer' },
        { item: 'Chain-of-thought prompting', status: 'pending', note: 'Step-by-step scoring' },
        { item: 'Hybrid scoring (40/60)', status: 'pending', note: '40% formula + 60% AI' },
      ],
      'Week 4': [
        { item: 'Entry/exit signal generation', status: 'pending', note: 'trade_signals table' },
        { item: 'Position sizing (Kelly)', status: 'pending', note: 'Kelly criterion' },
        { item: 'Stop-loss logic', status: 'pending', note: 'Trailing -5%, hard -10%' },
        { item: 'Backtesting engine', status: 'pending', note: 'Historical simulation' },
      ],
      'Audit': [
        { item: '210-check full audit', status: 'done', note: '155 PASS, 9 deferred (Stripe)' },
        { item: 'Stripe payment fixes', status: 'pending', note: 'Awaiting Dan approval' },
        { item: 'Round 2 critical bugs', status: 'done', note: 'All 91 issues addressed' },
      ],
    },
  },
  university: {
    icon: GraduationCap, color: '#a855f7', label: 'University',
    desc: 'Academic support — assignments, research, study',
    status: 'READY', progress: 0,
    tabs: ['Overview'],
    overview: [],
    weeks: {},
  },
  selling: {
    icon: ShoppingBag, color: '#f59e0b', label: 'Online Selling',
    desc: 'eCommerce strategy, listings, ad campaigns',
    status: 'READY', progress: 0,
    tabs: ['Overview'],
    overview: [],
    weeks: {},
  },
};

const statusIcon = (s: string) => {
  if (s === 'done') return <CheckCircle size={12} color="#22c55e" />;
  if (s === 'active') return <Clock size={12} color="#f59e0b" />;
  return <AlertCircle size={12} color="rgba(255,255,255,0.2)" />;
};

export default function Projects() {
  const [proj, setProj] = useState<keyof typeof projects>('insiderpulse');
  const [tab, setTab] = useState('Overview');
  const p = projects[proj];

  return (
    <div className="page fade-up" style={{ display: 'flex', gap: 16, height: '100vh', overflow: 'hidden' }}>
      {/* Project selector */}
      <div style={{ width: 180, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>Projects</div>
        {(Object.entries(projects) as any[]).map(([key, pj]) => {
          const Icon = pj.icon;
          return (
            <div key={key} onClick={() => { setProj(key); setTab('Overview'); }}
              className="glass" style={{
                padding: '10px 12px', cursor: 'pointer',
                borderColor: proj === key ? `${pj.color}40` : 'var(--border)',
                background: proj === key ? `${pj.color}08` : 'var(--glass)',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
                <Icon size={13} color={pj.color} />
                <span style={{ fontWeight: 600, fontSize: 12 }}>{pj.label}</span>
              </div>
              <span className={`badge ${pj.status === 'ACTIVE' ? 'b-green' : 'b-gray'}`}>{pj.status}</span>
            </div>
          );
        })}
      </div>

      {/* Project detail */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 16 }}>
          <h1 className="page-title">{p.label}</h1>
          <p className="page-sub">{p.desc}</p>
        </div>

        {/* Sub-tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16, flexWrap: 'wrap' }}>
          {p.tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '5px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: tab === t ? 'rgba(59,130,246,0.15)' : 'var(--glass)',
              color: tab === t ? '#93c5fd' : 'var(--muted)',
              fontWeight: tab === t ? 600 : 400, fontSize: 12,
              borderBottom: tab === t ? '2px solid #3b82f6' : '2px solid transparent',
            }}>{t}</button>
          ))}
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {tab === 'Overview' && (
            <div className="glass" style={{ padding: 20 }}>
              {proj === 'insiderpulse' ? (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 16 }}>
                    {p.overview.map((r: any) => (
                      <div key={r.label} className="glass" style={{ padding: '12px 14px' }}>
                        <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{r.label}</div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: r.bad ? '#ef4444' : '#22c55e', margin: '4px 0' }}>{r.val}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted)' }}>Target: {r.target}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                    InsiderPulse is a stock intelligence platform targeting a 70%+ win rate (currently 31.8%, below 34.9% random baseline). Week 1 fixes are complete. Week 2-4 require paid API purchases and Dan's approval for Stripe fixes.
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: 40, color: 'var(--muted)' }}>
                  <p>No active tasks for this project yet.</p>
                  <p style={{ marginTop: 8, fontSize: 12 }}>Send me a message in Chat to get started!</p>
                </div>
              )}
            </div>
          )}

          {tab !== 'Overview' && p.weeks[tab as keyof typeof p.weeks] && (
            <div className="glass" style={{ padding: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(p.weeks[tab as keyof typeof p.weeks] as any[]).map((item: any, i: number) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 12px', borderRadius: 8,
                    background: item.status === 'done' ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${item.status === 'done' ? 'rgba(34,197,94,0.15)' : 'var(--border)'}`,
                  }}>
                    {statusIcon(item.status)}
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: 13, fontWeight: 500, textDecoration: item.status === 'done' ? 'line-through' : 'none', color: item.status === 'done' ? 'var(--muted)' : 'var(--text)' }}>{item.item}</span>
                      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>{item.note}</div>
                    </div>
                    <span className={`badge ${item.status === 'done' ? 'b-green' : item.status === 'active' ? 'b-amber' : 'b-gray'}`}>{item.status === 'done' ? 'DONE' : item.status === 'active' ? 'ACTIVE' : 'PENDING'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
