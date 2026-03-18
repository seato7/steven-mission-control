import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Wrench, Brain, GitCommit, Bot, MessageSquare, DollarSign, FolderKanban } from 'lucide-react';

const nav = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/chat', icon: MessageSquare, label: 'Chat' },
  { to: '/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/workshop', icon: Wrench, label: 'Workshop' },
  { to: '/memory', icon: Brain, label: 'Memory' },
  { to: '/commits', icon: GitCommit, label: 'Commits' },
  { to: '/costs', icon: DollarSign, label: 'API Costs' },
  { to: '/agent', icon: Bot, label: 'Agent' },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 210, minWidth: 210, height: '100vh',
      background: 'rgba(255,255,255,0.015)',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column',
      padding: '20px 0', backdropFilter: 'blur(20px)',
    }}>
      {/* Logo */}
      <div style={{ padding: '0 18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10, flexShrink: 0,
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, fontWeight: 800, boxShadow: '0 4px 15px rgba(59,130,246,0.35)',
          }}>S</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Steven</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: 0.5 }}>MISSION CONTROL</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '12px 10px', flex: 1, overflowY: 'auto' }}>
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end={to === '/'}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: 9,
              padding: '8px 10px', borderRadius: 8, marginBottom: 1,
              textDecoration: 'none',
              color: isActive ? '#fff' : 'var(--muted)',
              background: isActive ? 'rgba(59,130,246,0.12)' : 'transparent',
              borderLeft: `2px solid ${isActive ? '#3b82f6' : 'transparent'}`,
              fontWeight: isActive ? 600 : 400,
              fontSize: 13, transition: 'all 0.12s',
            })}
          >
            <Icon size={14} strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Status */}
      <div style={{ padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'pulse2 2s infinite' }} />
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Online</span>
        </div>
        <div style={{ fontSize: 10, color: 'var(--muted)' }}>Last seen: just now</div>
      </div>
    </aside>
  );
}
