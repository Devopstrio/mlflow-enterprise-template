import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Zap, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Layers,
  ShieldCheck,
  FlaskConical,
  Database,
  Boxes
} from 'lucide-react';

const experimentHistoryData = [
  { day: 'Mon', runs: 45, accuracy: 0.88 },
  { day: 'Tue', runs: 65, accuracy: 0.91 },
  { day: 'Wed', runs: 120, accuracy: 0.94 },
  { day: 'Thu', runs: 180, accuracy: 0.96 },
  { day: 'Fri', runs: 320, accuracy: 0.95 },
  { day: 'Sat', runs: 450, accuracy: 0.97 },
];

const modelStageBreakdown = [
  { name: 'Production', value: 45, color: '#a855f7' },
  { name: 'Staging', value: 25, color: '#c084fc' },
  { name: 'None / Archived', value: 30, color: '#d8b4fe' },
];

const KPI_CARDS = [
  { title: 'Registered Models', value: '142', trend: 'MLflow Registry', color: 'purple', icon: Boxes },
  { title: 'Training Runs', value: '3.4k', trend: 'Total Experiments', color: 'purple', icon: FlaskConical },
  { title: 'Avg. Inference', value: '42ms', trend: 'K8s Edge Cluster', color: 'purple', icon: Cpu },
  { title: 'Model Drift', value: '2 Alerts', trend: 'Fraud-Detection-V4', color: 'purple', icon: Activity },
];

const MLOpsDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Enterprise MLOps Command Center</h1>
          <p className="text-slate-400">Institutional ML lifecycle management, experiment tracking, and model governance.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Open MLflow UI
          </button>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Launch Training Run
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-purple-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-purple-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Training Velocity */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Experiment Throughput & Model Accuracy</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={experimentHistoryData}>
                <defs>
                  <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="runs" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorRuns)" name="Total Experiment Runs" />
                <Area type="monotone" dataKey="accuracy" stroke="#d8b4fe" strokeWidth={2} fill="transparent" name="Avg. Accuracy" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stage Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Model Registry Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={modelStageBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {modelStageBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {modelStageBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Models Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Production Model Instances</h3>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">Manage Registry</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Model Identity</th>
                <th className="px-6 py-4 font-semibold">Stage</th>
                <th className="px-6 py-4 font-semibold">Accuracy</th>
                <th className="px-6 py-4 font-semibold">Health Status</th>
                <th className="px-6 py-4 font-semibold">Drift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Fraud-Detection-V4', stage: 'Production', accuracy: '99.2%', status: 'Healthy', drift: 'Low' },
                { name: 'Customer-Churn-X2', stage: 'Staging', accuracy: '92.4%', status: 'Degraded', drift: 'Med' },
                { name: 'Risk-Scoring-Alpha', stage: 'Production', accuracy: '96.5%', status: 'Healthy', drift: 'None' },
                { name: 'Inventory-Forecast-G1', stage: 'None', accuracy: '88.0%', status: 'Training', drift: 'N/A' },
              ].map((model, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Boxes className="w-5 h-5 text-purple-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{model.name}</span>
                        <span className="text-xs text-slate-500 font-mono">Ver: 4.2.1-stable</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      model.stage === 'Production' ? 'bg-purple-500/10 text-purple-500' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {model.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{model.accuracy}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${model.status === 'Healthy' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      <span className="text-xs text-slate-400">{model.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{model.drift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MLOpsDashboard;
