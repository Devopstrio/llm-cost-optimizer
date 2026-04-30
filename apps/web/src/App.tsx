import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import CostDashboard from './pages/CostDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The LLM Cost Optimization engine is currently processing real-time token usage streams and calculating provider-specific billing forecasts. Advanced routing models and prompt compression recommendations will be fully operational once the token ingestion is synchronized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<CostDashboard />} />
          <Route path="/tokens" element={<Placeholder name="Token Usage & Velocity Analytics" />} />
          <Route path="/models" element={<Placeholder name="Model Performance vs Cost Comparison" />} />
          <Route path="/optimization" element={<Placeholder name="Model Routing & Prompt Optimization" />} />
          <Route path="/budget" element={<Placeholder name="Budget Enforcement & Thresholds" />} />
          <Route path="/governance" element={<Placeholder name="AI Usage Governance & Policy" />} />
          <Route path="/attribution" element={<Placeholder name="Multi-Tenant Cost Attribution" />} />
          <Route path="/forecasting" element={<Placeholder name="Usage Forecasting & Growth Analytics" />} />
          <Route path="/reports" element={<Placeholder name="Executive AI FinOps Reporting" />} />
          <Route path="/settings" element={<Placeholder name="System & API Key Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
