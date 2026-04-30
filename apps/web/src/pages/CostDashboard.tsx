import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Coins, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Layers,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

const tokenUsageData = [
  { time: '00:00', input: 450, output: 1200 },
  { time: '04:00', input: 520, output: 1500 },
  { time: '08:00', input: 850, output: 3500 },
  { time: '12:00', input: 650, output: 2800 },
  { time: '16:00', input: 950, output: 4500 },
  { time: '20:00', input: 750, output: 3200 },
];

const costPerProviderBreakdown = [
  { name: 'OpenAI (GPT-4)', value: 45, color: '#6366f1' },
  { name: 'Anthropic (Claude 3)', value: 30, color: '#818cf8' },
  { name: 'Azure OpenAI', value: 15, color: '#a5b4fc' },
  { name: 'Google (Gemini)', value: 10, color: '#c7d2fe' },
];

const KPI_CARDS = [
  { title: 'Total LLM Spend', value: '$12.4k', trend: '+12% MoM', color: 'indigo', icon: Coins },
  { title: 'Token Velocity', value: '4.5M/day', trend: '+8.4% MoM', color: 'indigo', icon: Zap },
  { title: 'Cost Efficiency Score', value: '88/100', trend: 'Improving', color: 'indigo', icon: Activity },
  { title: 'Est. Savings (Optimized)', value: '$2.8k', trend: 'Annualized', color: 'indigo', icon: TrendingUp },
];

const CostDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">AI FinOps Intelligence Hub</h1>
          <p className="text-slate-400">Institutional cost optimization and performance governance for LLM environments.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Export Usage Report
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Recalculate Routing
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-indigo-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-indigo-400`} />
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
        {/* Token Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Token Usage Velocity (Input vs Output)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tokenUsageData}>
                <defs>
                  <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="output" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorOutput)" name="Output Tokens" />
                <Area type="monotone" dataKey="input" stroke="#f59e0b" strokeWidth={2} fillOpacity={0} name="Input Tokens" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Provider Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Spend by Provider / Model</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costPerProviderBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {costPerProviderBreakdown.map((entry, index) => (
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
            {costPerProviderBreakdown.map((item) => (
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

      {/* Model Registry Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active LLM Optimization Ledger</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Model Comparisons</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Application / Feature</th>
                <th className="px-6 py-4 font-semibold">Active Model</th>
                <th className="px-6 py-4 font-semibold">Token Efficiency</th>
                <th className="px-6 py-4 font-semibold">Budget Status</th>
                <th className="px-6 py-4 font-semibold">Cost Per 1k Req</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Customer Service Bot', model: 'GPT-4o', efficiency: '82%', budget: 'Within Budget', cost: '$12.40' },
                { name: 'Content Generator v2', model: 'Claude 3.5 Sonnet', efficiency: '95%', budget: 'Warning', cost: '$4.20' },
                { name: 'Data Extractor (Batch)', model: 'GPT-3.5 Turbo', efficiency: '99%', budget: 'Healthy', cost: '$0.80' },
              ].map((app) => (
                <tr key={app.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{app.name}</span>
                      <span className="text-xs text-slate-500 font-mono">ID: AI-APP-921</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <span className="bg-slate-800 px-2 py-1 rounded text-xs font-mono">{app.model}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full" style={{ width: app.efficiency }}></div>
                      </div>
                      <span className="text-xs text-slate-400">{app.efficiency}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.budget === 'Within Budget' || app.budget === 'Healthy' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {app.budget}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{app.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CostDashboard;
