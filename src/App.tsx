import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Projects from './pages/Projects';
import Workshop from './pages/Workshop';
import Memory from './pages/Memory';
import Commits from './pages/Commits';
import Costs from './pages/Costs';
import Agent from './pages/Agent';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar />
        <main style={{ flex: 1, overflow: 'hidden', minWidth: 0 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/commits" element={<Commits />} />
            <Route path="/costs" element={<Costs />} />
            <Route path="/agent" element={<Agent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
