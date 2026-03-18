import { useState } from 'react';
import { Search, GitCommit } from 'lucide-react';
import { commits } from '../data';

export default function Commits() {
  const [search, setSearch] = useState('');
  const filtered = commits.filter(c => c.message.toLowerCase().includes(search.toLowerCase()) || c.hash.includes(search));

  return (
    <div className="fade-in" style={{ padding: 28, height: '100vh', overflow: 'auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Commit History</h1>
      <p style={{ color: 'var(--muted)', marginTop: 4, marginBottom: 24 }}>GitHub activity — seato7/radar-signal-finder-Latest</p>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
        <input
          placeholder="Search commits..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '9px 12px 9px 34px', color: 'var(--text)', fontSize: 13,
          }}
        />
      </div>

      {/* Commit list */}
      <div className="card">
        {filtered.map((c, i) => (
          <div key={c.hash} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '12px 16px',
            borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none',
            transition: 'background 0.1s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
            <GitCommit size={14} color="#3b82f6" style={{ flexShrink: 0 }} />
            <a
              href={`https://github.com/seato7/radar-signal-finder-Latest/commit/${c.hash}`}
              target="_blank" rel="noreferrer"
              style={{ fontFamily: 'monospace', fontSize: 12, color: '#93c5fd', background: 'rgba(59,130,246,0.1)', padding: '2px 7px', borderRadius: 4, textDecoration: 'none', flexShrink: 0 }}
            >{c.hash}</a>
            <span style={{ flex: 1, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.message}</span>
            <span className="badge badge-gray">{c.files} files</span>
            <span style={{ color: 'var(--muted)', fontSize: 12, whiteSpace: 'nowrap', minWidth: 70, textAlign: 'right' }}>{c.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
