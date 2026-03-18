import { Zap } from 'lucide-react';

const skills = [
  { name: 'Code Review & Debugging', desc: 'Read, audit and fix codebases across TypeScript, Python, SQL', badge: 'b-blue' },
  { name: 'GitHub & Deployments', desc: 'Push commits, manage repos, trigger Vercel/Lovable deploys', badge: 'b-blue' },
  { name: 'Supabase / PostgreSQL', desc: 'Write migrations, fix RLS policies, query live databases', badge: 'b-blue' },
  { name: 'Research & Analysis', desc: 'Deep research on any topic, summarise documents, web search', badge: 'b-purple' },
  { name: 'Project Management', desc: 'Track tasks, priorities, deadlines across multiple projects', badge: 'b-purple' },
  { name: 'Memory & Context', desc: 'Persistent memory across sessions via MEMORY.md + daily notes', badge: 'b-purple' },
  { name: 'University Assignments', desc: 'Essays, research, study notes, exam prep', badge: 'b-green' },
  { name: 'eCommerce Strategy', desc: 'Product listings, ad copy, campaign strategy, competitor research', badge: 'b-green' },
  { name: 'API Integrations', desc: 'Wire up third-party APIs — Stripe, Tavily, OpenAI, Supabase', badge: 'b-amber' },
  { name: 'Data Analysis', desc: 'Interpret metrics, identify patterns, diagnose bugs in data pipelines', badge: 'b-amber' },
];

const quickTasks = [
  { task: 'Fix Stripe payment functions', cost: '~$0.02', time: '~15min' },
  { task: 'Write a university essay outline', cost: '~$0.01', time: '~5min' },
  { task: 'Research competitors for online store', cost: '~$0.03', time: '~20min' },
  { task: 'Review and improve any document', cost: '~$0.01', time: '~5min' },
  { task: 'Build a new feature for InsiderPulse', cost: '~$0.10+', time: '~30-60min' },
  { task: 'Create product listings for selling', cost: '~$0.02', time: '~10min' },
];

export default function Agent() {
  return (
    <div className="page fade-up">
      <h1 className="page-title">Agent Profile</h1>
      <p className="page-sub">Steven — AI Personal Assistant · OpenClaw</p>

      {/* Profile */}
      <div className="glass-glow" style={{ padding: 24, margin: '20px 0 16px', display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, flexShrink: 0, background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, boxShadow: '0 8px 30px rgba(59,130,246,0.4)' }}>S</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800 }}>Steven</h2>
            <span className="badge b-green">● ONLINE</span>
          </div>
          <div style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 6 }}>AI Personal Assistant · Brisbane AEST (UTC+10)</div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', lineHeight: 1.5 }}>
            "Calm, resourceful, direct. Helpful without being a pushover. Be genuinely helpful, not performatively helpful."
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flexShrink: 0 }}>
          {[['47', 'Commits'], ['23', 'Tasks Done'], ['156', 'Memory'], ['99.2%', 'Uptime']].map(([v, l]) => (
            <div key={l} className="glass" style={{ padding: '8px 12px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#3b82f6' }}>{v}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {/* Skills */}
        <div className="glass" style={{ padding: '18px 18px' }}>
          <div style={{ fontWeight: 600, marginBottom: 14, fontSize: 13 }}>What I Can Do For You</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {skills.map(s => (
              <div key={s.name} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: 12, marginBottom: 2 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{s.desc}</div>
                </div>
                <span className={`badge ${s.badge}`} style={{ flexShrink: 0 }}>skill</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick tasks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="glass" style={{ padding: '18px 18px' }}>
            <div style={{ fontWeight: 600, marginBottom: 14, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Zap size={13} color="#f59e0b" fill="#f59e0b" /> Quick Task Recommendations
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {quickTasks.map(t => (
                <div key={t.task} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.02)', cursor: 'default' }}>
                  <div style={{ flex: 1, fontSize: 12, fontWeight: 500 }}>{t.task}</div>
                  <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                    <span className="badge b-green">{t.cost}</span>
                    <span className="badge b-gray">{t.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, fontSize: 11, color: 'var(--muted)' }}>
              💬 Just send me a message in the Chat tab to start any of these.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
