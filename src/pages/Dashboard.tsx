import { GitCommit, CheckCircle, MemoryStick, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import { commits, activity } from '../data';

const stats = [
  { label: 'STATUS', val: 'ONLINE', sub: 'AI Assistant Active', color: '#22c55e', pulse: true },
  { label: 'SESSION COST', val: '$0.42', sub: 'Today · 28M tokens', color: '#f59e0b' },
  { label: 'TASKS', val: '5 queued', sub: '0 active · 23 done', color: '#3b82f6' },
  { label: 'WIN RATE', val: '31.8%', sub: 'InsiderPulse · target 70%', color: '#ef4444' },
];

const typeIcon = (type: string) => {
  if (type === 'commit') return <GitCommit size={13} />;
  if (type === 'task') return <CheckCircle size={13} />;
  return <MemoryStick size={13} />;
};

export default function Dashboard() {
  return (
    <div className="page fade-up">
      {/* Header */}
      <div style={{ marginBottom: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Mission Control</h1>
          <p className="page-sub">Real-time overview · Wed 18 Mar 2026 · Brisbane AEST</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'glow 2s infinite' }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: '#86efac' }}>ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 20 }}>
        {stats.map(s => (
          <div key={s.label} className="glass" style={{ padding: '14px 16px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}40, transparent)` }} />
            <div style={{ fontSize: 9, color: 'var(--muted)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              {s.pulse && <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, animation: 'glow 2s infinite', flexShrink: 0 }} />}
              <span style={{ fontSize: 17, fontWeight: 800, color: s.color }}>{s.val}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 14 }}>
        {/* Activity feed */}
        <div className="glass" style={{ padding: '18px 18px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontWeight: 600, fontSize: 13 }}>
              <Zap size={13} color="#3b82f6" fill="#3b82f6" />
              Live Activity
            </div>
            <span className="badge b-blue">LIVE</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {activity.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                padding: '9px 11px', borderRadius: 8,
                borderLeft: `2px solid ${item.color}`,
                background: `${item.color}08`,
                transition: 'background 0.1s',
              }}>
                <div style={{ color: item.color, marginTop: 1, flexShrink: 0 }}>{typeIcon(item.type)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 11, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.sub}</div>
                </div>
                <div style={{ color: 'var(--muted)', fontSize: 10, whiteSpace: 'nowrap', flexShrink: 0 }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Alerts */}
          <div className="glass" style={{ padding: '14px 16px', borderColor: 'rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, fontWeight: 600, fontSize: 12 }}>
              <AlertCircle size={13} color="#f59e0b" /> Pending Approval
            </div>
            <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5 }}>Stripe payment fixes ready — 4 functions, invalid API version + open redirect. Just say go.</p>
            <div style={{ marginTop: 8 }}><span className="badge b-amber">AWAITING DAN</span></div>
          </div>

          {/* Recent commits */}
          <div className="glass" style={{ padding: '14px 16px' }}>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              <GitCommit size={13} color="#3b82f6" /> Recent Commits
            </div>
            {commits.slice(0, 4).map((c, i) => (
              <div key={c.hash} style={{ marginBottom: i < 3 ? 10 : 0, paddingBottom: i < 3 ? 10 : 0, borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span className="mono badge b-blue" style={{ fontSize: 10 }}>{c.hash}</span>
                  <span style={{ fontSize: 10, color: 'var(--muted)' }}>{c.time}</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-dim)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.message}</div>
              </div>
            ))}
          </div>

          {/* InsiderPulse snapshot */}
          <div className="glass" style={{ padding: '14px 16px' }}>
            <div style={{ fontWeight: 600, marginBottom: 10, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              <TrendingUp size={13} color="#22c55e" /> InsiderPulse
            </div>
            {[
              { label: 'Win Rate', val: '31.8%', target: '70%', bad: true },
              { label: 'Pipelines', val: '11/20', target: '20/20', bad: true },
              { label: 'Audit', val: '155 PASS', target: 'Done ✓', bad: false },
              { label: 'Week', val: 'Week 1 ✓', target: 'Week 2 next', bad: false },
            ].map(r => (
              <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 11 }}>
                <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                <span style={{ color: r.bad ? '#ef4444' : '#22c55e', fontWeight: 600 }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
