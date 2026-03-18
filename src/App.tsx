import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Workshop from './pages/Workshop';
import Memory from './pages/Memory';
import Commits from './pages/Commits';
import Agent from './pages/Agent';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1, overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/commits" element={<Commits />} />
            <Route path="/agent" element={<Agent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
