import { Brain, Calendar } from 'lucide-react';
import { memoryEntries } from '../data';

const longTermMemory = `## People
- **Dan** — my human. First contact 2026-03-16. Based in Brisbane, AEST (UTC+10).

## About Me
- Name: Steven
- First came online: 2026-03-16
- Role: AI Personal Assistant via OpenClaw

## Dan's Projects
1. **InsiderPulse** — stock intelligence/trading platform. Built on Lovable (Supabase), Claude Code, Railway backend. Win rate target: 70%+. Current: 31.8% (below random baseline of 34.9%).
2. **University** — ongoing study, needs assistance with activities/assignments.
3. **Online selling** — wants to start an online selling venture, earn good money, run ad campaigns.

## InsiderPulse Status
- 155 PASS across full audit (Mar 17 2026)
- All non-payment FAILs cleared
- 142 edge functions deployed
- Stripe payment fixes pending Dan's approval
- Week 2 (Tavily/NewsAPI) pending purchases`;

export default function Memory() {
  return (
    <div className="fade-in" style={{ padding: 28, height: '100vh', overflow: 'auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Memory</h1>
      <p style={{ color: 'var(--muted)', marginTop: 4, marginBottom: 24 }}>Steven's knowledge base & notes</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 16 }}>
        {/* Long-term memory */}
        <div className="card" style={{ padding: 24 }}>
          <div style={{ fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Brain size={15} color="#a855f7" /> Long-Term Memory
            <span className="badge badge-gray" style={{ marginLeft: 'auto' }}>MEMORY.md</span>
          </div>
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: 16,
            fontFamily: 'monospace', fontSize: 12.5, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)',
            whiteSpace: 'pre-wrap',
          }}>
            {longTermMemory.split('\n').map((line, i) => {
              if (line.startsWith('##')) return <div key={i} style={{ color: '#93c5fd', fontWeight: 700, marginTop: 12 }}>{line}</div>;
              if (line.startsWith('- **')) return <div key={i} style={{ marginLeft: 8 }}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</div>;
              if (line.match(/^\d+\./)) return <div key={i} style={{ marginLeft: 8 }}>{line}</div>;
              return <div key={i}>{line}</div>;
            })}
          </div>
        </div>

        {/* Daily notes */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={15} color="#3b82f6" /> Daily Notes
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {memoryEntries.map((entry, i) => (
              <div key={i} style={{ paddingBottom: 12, borderBottom: i < memoryEntries.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <span className="badge badge-blue">{entry.date}</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{entry.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
