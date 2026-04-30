import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MLOpsDashboard from './pages/MLOpsDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The MLflow Enterprise Platform is currently orchestrating institutional machine learning lifecycles and optimizing distributed model delivery. Automated experiment tracking and model drift monitoring will be fully operational once the MLflow tracking synchronization is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<MLOpsDashboard />} />
          <Route path="/experiments" element={<Placeholder name="MLflow Experiment Tracking" />} />
          <Route path="/registry" element={<Placeholder name="Enterprise Model Registry" />} />
          <Route path="/training" element={<Placeholder name="Automated Training Pipelines" />} />
          <Route path="/serving" element={<Placeholder name="Scalable Model Serving Clusters" />} />
          <Route path="/features" element={<Placeholder name="ML Feature Store & Versioning" />} />
          <Route path="/artifacts" element={<Placeholder name="Secure ML Artifact Storage" />} />
          <Route path="/monitoring" element={<Placeholder name="Model Drift & Performance Analytics" />} />
          <Route path="/governance" element={<Placeholder name="ML Governance & Approval Workflows" />} />
          <Route path="/finops" element={<Placeholder name="AI FinOps & Resource Optimization" />} />
          <Route path="/settings" element={<Placeholder name="Platform & MLflow Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
