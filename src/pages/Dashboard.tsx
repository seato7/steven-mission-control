import { GitCommit, CheckCircle, MemoryStick, ExternalLink } from 'lucide-react';
import { commits, activity } from '../data';

const statCards = [
  { label: 'STATUS', value: 'ONLINE', sub: 'AI Assistant Active', color: '#22c55e', dot: true },
  { label: 'LAST SEEN', value: 'Just now', sub: 'Telegram · Brisbane', color: '#3b82f6' },
  { label: 'TASKS', value: '5 queued', sub: '0 active · 23 done', color: '#a855f7' },
  { label: 'MEMORY', value: 'Updated', sub: '1h ago · Mar 17', color: '#f59e0b' },
];

const typeIcon = (type: string) => {
  if (type === 'commit') return <GitCommit size={14} />;
  if (type === 'task') return <CheckCircle size={14} />;
  return <MemoryStick size={14} />;
};

export default function Dashboard() {
  return (
    <div className="fade-in" style={{ padding: 28, height: '100vh', overflow: 'auto' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.5px' }}>Mission Control</h1>
        <p style={{ color: 'var(--muted)', marginTop: 4 }}>Real-time overview of all systems</p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {statCards.map(c => (
          <div key={c.label} className="card" style={{ padding: '16px 18px' }}>
            <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{c.label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {c.dot && <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, animation: 'pulse 2s infinite' }} />}
              <span style={{ fontSize: 18, fontWeight: 700, color: c.color }}>{c.value}</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16 }}>
        {/* Activity feed */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6', animation: 'pulse 2s infinite' }} />
              <span style={{ fontWeight: 600 }}>Live Activity</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {activity.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '10px 12px', borderRadius: 8,
                borderLeft: `3px solid ${item.color}`,
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ color: item.color, marginTop: 1 }}>{typeIcon(item.type)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: 13 }}>{item.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2 }}>{item.sub}</div>
                </div>
                <div style={{ color: 'var(--muted)', fontSize: 11, whiteSpace: 'nowrap' }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Recent commits */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <GitCommit size={15} color="#3b82f6" /> Recent Commits
            </div>
            {commits.slice(0, 5).map(c => (
              <div key={c.hash} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#93c5fd', background: 'rgba(59,130,246,0.1)', padding: '1px 6px', borderRadius: 4 }}>{c.hash}</span>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>{c.time}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.message}</div>
              </div>
            ))}
          </div>

          {/* Quick links */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>Quick Links</div>
            {[
              { label: 'GitHub Repo', url: 'https://github.com/seato7/radar-signal-finder-Latest' },
              { label: 'Workshop →', url: '/workshop' },
              { label: 'View Memory →', url: '/memory' },
            ].map(l => (
              <a key={l.label} href={l.url} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 10px', borderRadius: 6, marginBottom: 4,
                background: 'rgba(255,255,255,0.03)', textDecoration: 'none',
                color: 'var(--text)', fontSize: 13,
              }}>
                {l.label} <ExternalLink size={12} color="var(--muted)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
