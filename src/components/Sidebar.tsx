import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Wrench, Brain, GitCommit, Bot } from 'lucide-react';

const nav = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/workshop', icon: Wrench, label: 'Workshop' },
  { to: '/memory', icon: Brain, label: 'Memory' },
  { to: '/commits', icon: GitCommit, label: 'Commits' },
  { to: '/agent', icon: Bot, label: 'Agent' },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 220, minWidth: 220, height: '100vh',
      background: 'rgba(255,255,255,0.02)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      padding: '24px 0',
    }}>
      {/* Logo */}
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 700,
          }}>S</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Steven</div>
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>Mission Control</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '16px 12px', flex: 1 }}>
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end={to === '/'}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px', borderRadius: 8,
              marginBottom: 2, textDecoration: 'none',
              color: isActive ? '#fff' : 'var(--muted)',
              background: isActive ? 'rgba(59,130,246,0.12)' : 'transparent',
              borderLeft: isActive ? '2px solid #3b82f6' : '2px solid transparent',
              fontWeight: isActive ? 600 : 400,
              transition: 'all 0.15s',
            })}
          >
            <Icon size={16} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Status */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%', background: '#22c55e',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Online</span>
        </div>
      </div>
    </aside>
  );
}
