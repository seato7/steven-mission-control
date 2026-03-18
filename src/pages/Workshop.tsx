import { useState } from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import { tasks as initialTasks } from '../data';

const priorityColor: Record<string, string> = { HIGH: '#ef4444', MED: '#f59e0b', LOW: '#6b7280' };
const statusClass: Record<string, string> = { QUEUED: 'badge-amber', ACTIVE: 'badge-green', DONE: 'badge-gray' };

export default function Workshop() {
  const [tasks, setTasks] = useState(initialTasks);
  const [form, setForm] = useState({ title: '', desc: '', priority: 'MED' });

  const addTask = () => {
    if (!form.title.trim()) return;
    setTasks(t => [...t, { id: Date.now(), title: form.title, desc: form.desc, priority: form.priority, status: 'QUEUED', added: 'just now' }]);
    setForm({ title: '', desc: '', priority: 'MED' });
  };

  return (
    <div className="fade-in" style={{ padding: 28, height: '100vh', overflow: 'auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Workshop</h1>
      <p style={{ color: 'var(--muted)', marginTop: 4, marginBottom: 24 }}>Task queue & autonomous work</p>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Queued', val: tasks.filter(t => t.status === 'QUEUED').length, color: '#f59e0b' },
          { label: 'Active', val: tasks.filter(t => t.status === 'ACTIVE').length, color: '#22c55e' },
          { label: 'Completed', val: 23, color: '#6b7280' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '12px 20px', display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.val}</span>
            <span style={{ color: 'var(--muted)', fontSize: 13 }}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        {/* Task list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tasks.map(t => (
            <div key={t.id} className="card" style={{ padding: 16, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{t.title}</span>
                  <span className={`badge ${statusClass[t.status]}`}>{t.status}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: priorityColor[t.priority] }}>{t.priority}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.5 }}>{t.desc}</p>
                <div style={{ marginTop: 6, fontSize: 11, color: 'var(--muted)' }}>Added {t.added}</div>
              </div>
              <ChevronRight size={16} color="var(--muted)" style={{ marginTop: 2 }} />
            </div>
          ))}
        </div>

        {/* Add task */}
        <div className="card" style={{ padding: 20, height: 'fit-content' }}>
          <div style={{ fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Plus size={15} color="#3b82f6" /> Add Task
          </div>
          <input
            placeholder="Task title"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: 'var(--text)', marginBottom: 10, fontSize: 13 }}
          />
          <textarea
            placeholder="Description..."
            value={form.desc}
            onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
            rows={3}
            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: 'var(--text)', marginBottom: 10, fontSize: 13, resize: 'none' }}
          />
          <select
            value={form.priority}
            onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}
            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: 'var(--text)', marginBottom: 16, fontSize: 13 }}
          >
            <option value="HIGH">HIGH priority</option>
            <option value="MED">MED priority</option>
            <option value="LOW">LOW priority</option>
          </select>
          <button onClick={addTask} style={{
            width: '100%', background: '#3b82f6', color: '#fff', border: 'none',
            borderRadius: 8, padding: '10px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>Add to Queue</button>
        </div>
      </div>
    </div>
  );
}
