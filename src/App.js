import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TestResults from './pages/TestResults';
import Settings from './pages/Settings';
import './App.css'; 

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <nav style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '16px' }}>
          <h2>Navigation</h2>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/results">Test Results</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        <main style={{ flexGrow: 1, padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/results" element={<TestResults />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
