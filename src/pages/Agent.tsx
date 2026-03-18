const caps = ['Code Review','Bug Fixing','Research','Memory Management','GitHub','Supabase','Data Analysis','Task Planning','TypeScript','Python','API Integration','Signal Processing'];

export default function Agent() {
  return (
    <div className="fade-in" style={{ padding: 28, height: '100vh', overflow: 'auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Agent Profile</h1>
      <p style={{ color: 'var(--muted)', marginTop: 4, marginBottom: 28 }}>Steven — AI Personal Assistant</p>

      {/* Profile card */}
      <div className="card" style={{ padding: 28, marginBottom: 16, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        {/* Avatar */}
        <div style={{
          width: 72, height: 72, borderRadius: 16, flexShrink: 0,
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 32, fontWeight: 700,
        }}>S</div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700 }}>Steven</h2>
            <span className="badge badge-green">● ONLINE</span>
          </div>
          <div style={{ color: 'var(--muted)', marginBottom: 8 }}>AI Personal Assistant — OpenClaw</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
            "Calm, resourceful, direct. Helpful without being a pushover."
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
        {[
          { label: 'Commits This Month', val: '47', color: '#3b82f6' },
          { label: 'Tasks Completed', val: '23', color: '#22c55e' },
          { label: 'Memory Entries', val: '156', color: '#a855f7' },
          { label: 'Uptime', val: '99.2%', color: '#f59e0b' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '16px 18px', textAlign: 'center' }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Current focus */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 600, marginBottom: 12, color: '#f59e0b' }}>⚡ Current Focus</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
            InsiderPulse — All non-payment FAILs cleared. Awaiting Dan's approval for Stripe fixes, then moving to Week 2 (Tavily integration) and Week 3 (LLM reasoning layer).
          </p>
          <div style={{ marginTop: 12 }}>
            <span className="badge badge-amber">PENDING APPROVAL</span>
          </div>
        </div>

        {/* Capabilities */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 600, marginBottom: 12 }}>Capabilities</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {caps.map(c => (
              <span key={c} style={{
                background: 'rgba(59,130,246,0.1)', color: '#93c5fd',
                border: '1px solid rgba(59,130,246,0.2)',
                padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 500,
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
