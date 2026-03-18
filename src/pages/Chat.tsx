import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; text: string; time: string };

const WEBHOOK = 'https://detxhoqiarohjevedmxh.supabase.co/functions/v1/chat-assistant';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldHhob3FpYXJvaGpldmVkbXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MDIxNDYsImV4cCI6MjA3NjE3ODE0Nn0.fovKuUCw2EZ6HBiQ-ykgLVf2QmkHoA8hCynfFHeD4TQ';

const now = () => new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });

const initMsgs: Msg[] = [
  { role: 'assistant', text: "Hey Dan 👋 I'm Steven. You can talk to me directly here — ask me anything, give me tasks, or check on the InsiderPulse project. What's up?", time: now() }
];

export default function Chat() {
  const [msgs, setMsgs] = useState<Msg[]>(initMsgs);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const userMsg: Msg = { role: 'user', text, time: now() };
    setMsgs(m => [...m, userMsg]);
    setLoading(true);

    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ANON_KEY}` },
        body: JSON.stringify({ messages: [...msgs, userMsg].map(m => ({ role: m.role, content: m.text })) }),
      });
      
      if (res.ok) {
        // Handle streaming or JSON response
        const contentType = res.headers.get('content-type') || '';
        let reply = '';
        if (contentType.includes('text/event-stream') || contentType.includes('stream')) {
          const reader = res.body?.getReader();
          const decoder = new TextDecoder();
          if (reader) {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              const chunk = decoder.decode(value);
              const lines = chunk.split('\n');
              for (const line of lines) {
                if (line.startsWith('data: ') && !line.includes('[DONE]')) {
                  try {
                    const data = JSON.parse(line.slice(6));
                    reply += data.choices?.[0]?.delta?.content || '';
                  } catch {}
                }
              }
            }
          }
        } else {
          const data = await res.json();
          reply = data.choices?.[0]?.message?.content || data.message || JSON.stringify(data);
        }
        setMsgs(m => [...m, { role: 'assistant', text: reply || "Got it!", time: now() }]);
      } else {
        setMsgs(m => [...m, { role: 'assistant', text: "I'm having trouble connecting right now. Try messaging me on Telegram instead!", time: now() }]);
      }
    } catch {
      setMsgs(m => [...m, { role: 'assistant', text: "Connection error — I'm still reachable on Telegram though.", time: now() }]);
    }
    setLoading(false);
  };

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 0 }}>
      {/* Header */}
      <div style={{ padding: '20px 28px 16px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16 }}>S</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Steven</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#86efac' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} /> Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: m.role === 'assistant' ? 'linear-gradient(135deg,#3b82f6,#8b5cf6)' : 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {m.role === 'assistant' ? <Bot size={14} /> : <User size={14} />}
            </div>
            <div style={{ maxWidth: '72%' }}>
              <div style={{
                padding: '10px 14px', borderRadius: m.role === 'user' ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
                background: m.role === 'user' ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${m.role === 'user' ? 'rgba(59,130,246,0.2)' : 'var(--border)'}`,
                fontSize: 13, lineHeight: 1.55,
              }}>{m.text}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4, textAlign: m.role === 'user' ? 'right' : 'left' }}>{m.time}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={14} /></div>
            <div style={{ padding: '10px 14px', borderRadius: '4px 12px 12px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#3b82f6', animation: `pulse2 1.2s ${i*0.2}s infinite` }} />)}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '14px 28px 20px', borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
        <input
          className="input"
          style={{ flex: 1 }}
          placeholder="Ask Steven anything..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
        />
        <button className="btn btn-primary" onClick={send} disabled={loading || !input.trim()}>
          <Send size={13} /> Send
        </button>
      </div>
    </div>
  );
}
