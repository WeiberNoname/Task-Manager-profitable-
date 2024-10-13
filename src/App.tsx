import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PremiumFeatures from './components/PremiumFeatures';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/premium" element={<PremiumFeatures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;