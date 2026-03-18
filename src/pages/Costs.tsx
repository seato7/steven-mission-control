import { TrendingUp, Zap, AlertCircle } from 'lucide-react';

const sessions = [
  { date: 'Mar 17 2026', tokens: '28.1M', cost: '$0.42', tasks: 'InsiderPulse full audit + 10 deploy cycles' },
  { date: 'Mar 16 2026', tokens: '41.5M', cost: '$0.62', tasks: 'Round 2 fixes + 3 sub-agent runs + admin-diagnostics setup' },
  { date: 'Mar 16 2026 (AM)', tokens: '16.2M', cost: '$0.24', tasks: 'Priority bug fixes batch 1-3' },
];

const taskCosts = [
  { task: 'Fix Stripe payment functions (4 files)', est: '~$0.02', tokens: '~1.5M', type: 'code' },
  { task: 'Build Tavily integration (Week 2)', est: '~$0.15', tokens: '~10M', type: 'code' },
  { task: 'compute-ai-scores function (Week 3)', est: '~$0.25', tokens: '~17M', type: 'architecture' },
  { task: 'Trade signals + backtesting (Week 4)', est: '~$0.40', tokens: '~27M', type: 'architecture' },
  { task: 'Mission Control v2 (this app)', est: '~$0.08', tokens: '~5M', type: 'code' },
  { task: 'Full audit re-run', est: '~$0.06', tokens: '~4M', type: 'audit' },
];

const typeColor: Record<string, string> = { code: 'b-blue', architecture: 'b-purple', audit: 'b-green' };

export default function Costs() {

  return (
    <div className="page fade-up">
      <h1 className="page-title">API Usage & Costs</h1>
      <p className="page-sub">Token consumption, session costs, and task estimates</p>

      {/* Top stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, margin: '20px 0' }}>
        {[
          { label: 'SPENT TODAY', val: '$0.42', sub: '28.1M tokens', color: '#22c55e' },
          { label: 'TOTAL (MAR)', val: '$1.28', sub: '85M tokens total', color: '#3b82f6' },
          { label: 'PROJECTED (MONTH)', val: '$8.50', sub: 'At current rate', color: '#f59e0b' },
          { label: 'MODEL', val: 'Sonnet 4-6', sub: '$3/M in · $15/M out', color: '#a855f7' },
        ].map(s => (
          <div key={s.label} className="glass" style={{ padding: '14px 16px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}50, transparent)` }} />
            <div style={{ fontSize: 9, color: 'var(--muted)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {/* Session history */}
        <div className="glass" style={{ padding: '18px 18px' }}>
          <div style={{ fontWeight: 600, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 7, fontSize: 13 }}>
            <TrendingUp size={13} color="#3b82f6" /> Session History
          </div>
          {sessions.map((s, i) => (
            <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: i < sessions.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontWeight: 600, fontSize: 12 }}>{s.date}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span className="badge b-gray">{s.tokens}</span>
                  <span className="badge b-green">{s.cost}</span>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.4 }}>{s.tasks}</div>
            </div>
          ))}
          <div style={{ marginTop: 4, padding: '10px 12px', background: 'rgba(59,130,246,0.06)', borderRadius: 8, fontSize: 11, color: 'var(--muted)' }}>
            <strong style={{ color: '#93c5fd' }}>Note:</strong> Costs are estimated based on Claude Sonnet 4-6 pricing. Actual billing via your Anthropic account.
          </div>
        </div>

        {/* Task cost estimates */}
        <div className="glass" style={{ padding: '18px 18px' }}>
          <div style={{ fontWeight: 600, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 7, fontSize: 13 }}>
            <Zap size={13} color="#f59e0b" /> Task Cost Estimates
          </div>
          {taskCosts.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, paddingBottom: 8, borderBottom: i < taskCosts.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2 }}>{t.task}</div>
                <div style={{ fontSize: 10, color: 'var(--muted)' }}>{t.tokens} tokens</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#fcd34d' }}>{t.est}</span>
                <span className={`badge ${typeColor[t.type]}`}>{t.type}</span>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 10, padding: '10px 12px', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 8, display: 'flex', gap: 6 }}>
            <AlertCircle size={13} color="#f59e0b" style={{ flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>Estimates are rough guides. Complex tasks with many iterations cost more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
