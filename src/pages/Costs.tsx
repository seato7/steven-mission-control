import { TrendingUp, Zap, AlertCircle } from 'lucide-react';

const sessions = [
  { date: 'Mar 18 2026', tokens: '66.5M cache read', cost: '$29.64', tasks: 'Mission Control build + audit verification + ongoing fixes' },
  { date: 'Mar 17 2026', tokens: '100.6M cache read', cost: '$56.66', tasks: 'Full InsiderPulse audit remediation — 6 audit runs, 90+ commits, 142 edge functions deployed' },
  { date: 'Mar 16 2026', tokens: '74.8M cache read', cost: '$36.69', tasks: 'Round 2 fixes — sub-agents, priority bug queue, admin-diagnostics setup, cron schedules' },
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
          { label: 'SPENT TODAY', val: '$29.64', sub: '66.5M cache reads', color: '#ef4444' },
          { label: 'TOTAL (MAR 16-18)', val: '$123.36', sub: '242M tokens processed', color: '#f59e0b' },
          { label: 'BIGGEST COST', val: 'Cache reads', sub: '$0.30/M — 95% of bill', color: '#a855f7' },
          { label: 'MODEL', val: 'Sonnet 4-6', sub: '$3/M write · $0.30/M read', color: '#3b82f6' },
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
          <div style={{ marginTop: 4, padding: '10px 12px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 8, fontSize: 11, color: 'var(--muted)', lineHeight: 1.5 }}>
            <strong style={{ color: '#fca5a5' }}>Why so high?</strong> The InsiderPulse audit required reading 142 edge function files repeatedly across 6 audit runs. Each run reloaded the full codebase into context (cache reads). The sub-agents I spun up each loaded the entire repo. Cache reads at $0.30/M are cheap per token but 242M total adds up fast. Mar 17 alone hit $56 — that was the day of the most intensive work.
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
