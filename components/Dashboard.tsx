
import React from 'react';
import { Activity, Clock, Zap, ChevronRight, Briefcase } from 'lucide-react';
import { METRICS } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-16 space-y-16 bg-[#08080a]">
      <header className="flex justify-between items-end border-b border-white/5 pb-10">
        <div>
          <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">System Analytics</h2>
          <p className="text-slate-700 font-black text-xs uppercase tracking-[0.3em] mt-4 flex items-center gap-3">
             <Activity className="w-4 h-4 text-blue-500" />
             Health Check / Global Asset Management
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-[2rem] flex items-center gap-5 shadow-2xl">
          <Clock className="w-5 h-5 text-blue-500" />
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Protocol Last Synced: <span className="text-white">Just Now</span></span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {METRICS.map((metric, i) => (
          <div key={i} className="group bg-[#0d0d0f] border border-white/5 p-12 rounded-[3rem] shadow-2xl hover:border-blue-500/40 transition-all relative overflow-hidden">
             <div className="absolute -top-16 -right-16 p-16 opacity-[0.02] group-hover:opacity-[0.06] group-hover:scale-125 transition-all duration-700">
              <Activity className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-600">{metric.label}</p>
                <div className={`p-3 rounded-2xl ${
                  metric.trend === 'up' ? 'bg-emerald-500/10 text-emerald-500' :
                  metric.trend === 'down' ? 'bg-blue-500/10 text-blue-500' :
                  'bg-slate-500/10 text-slate-500'
                }`}>
                  {metric.trend === 'up' ? <Zap className="w-6 h-6 fill-current" /> : <ChevronRight className="w-6 h-6 rotate-90" />}
                </div>
              </div>
              <h3 className="text-6xl font-black text-white tracking-tighter">{metric.value}</h3>
              <div className="mt-8 h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 w-3/4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="bg-[#0d0d0f] border border-white/5 rounded-[3.5rem] p-12 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-5">
              <Briefcase className="w-8 h-8 text-blue-500" />
              Sprint Backlog
            </h3>
            <button className="text-[10px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-[0.4em] border-b-2 border-blue-500/20 pb-2">Full Repository</button>
          </div>
          <div className="space-y-5">
            {[
              { title: "Optimize Webhook Router", status: "In Progress", priority: "High", color: 'bg-blue-500' },
              { title: "Refactor Python Scraping Logic", status: "Review", priority: "Med", color: 'bg-emerald-500' },
              { title: "Stakeholder Alignment Call", status: "Scheduled", priority: "High", color: 'bg-blue-500' },
              { title: "Make.com Error Handling Module", status: "Backlog", priority: "Low", color: 'bg-slate-800' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/20 transition-all group cursor-pointer">
                <div className="flex items-center gap-8">
                  <div className={`w-2 h-12 rounded-full ${item.color} shadow-[0_0_15px_currentcolor]`}></div>
                  <div>
                    <p className="text-xl font-black text-slate-200 group-hover:text-white transition-colors">{item.title}</p>
                    <div className="flex items-center gap-5 mt-3">
                      <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">{item.status}</span>
                      <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                      <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">Priority: {item.priority}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-8 h-8 text-slate-900 group-hover:text-blue-500 transition-all group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0d0d0f] border border-white/5 rounded-[3.5rem] p-12 flex flex-col shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)] overflow-hidden relative">
          <h3 className="text-2xl font-black text-white uppercase italic mb-12 flex items-center gap-5 relative z-10">
            <Activity className="w-8 h-8 text-emerald-500" />
            Load Profiles
          </h3>
          <div className="flex-1 h-64 flex items-end gap-2.5 mb-12 relative z-10">
            {Array.from({ length: 45 }).map((_, i) => {
              const h = Math.random() * 80 + 20;
              return (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-blue-600/5 via-blue-500/30 to-blue-400 rounded-full transition-all hover:to-emerald-400 group relative"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter shadow-2xl">{Math.round(h)}%</div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-10 relative z-10">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              <p className="text-[11px] text-slate-600 uppercase font-black tracking-[0.3em] mb-4">Triggers Executed</p>
              <p className="text-5xl font-black text-white tracking-tighter">4.8k <span className="text-lg text-slate-700 uppercase">total</span></p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              <p className="text-[11px] text-slate-600 uppercase font-black tracking-[0.3em] mb-4">Pipeline Delta</p>
              <p className="text-5xl font-black text-emerald-500 tracking-tighter">0.01<span className="text-lg uppercase">ms</span></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
