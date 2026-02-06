
import React from 'react';
import { Rocket, Target, BarChart3, Settings } from 'lucide-react';
import { Language } from '../types';

interface SidebarProps {
  activeTab: 'chat' | 'dashboard';
  setActiveTab: (tab: 'chat' | 'dashboard') => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, language, onLanguageChange }) => {
  return (
    <aside className="w-20 md:w-64 border-r border-white/5 bg-[#0d0d0f] flex flex-col transition-all duration-300 z-30">
      <div className="p-8 flex items-center gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl border border-white/10">
            <Rocket className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="font-black text-xl tracking-tighter text-white uppercase italic">Balu <span className="text-blue-500 not-italic">.</span></h1>
          <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] font-bold">Automation Twin</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <div className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] mb-4 px-4">Core Systems</div>
        <button 
          onClick={() => setActiveTab('chat')}
          className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${activeTab === 'chat' ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'hover:bg-white/5 text-slate-500 border border-transparent'}`}
        >
          <Target className={`w-5 h-5 ${activeTab === 'chat' ? 'text-blue-400' : 'group-hover:text-slate-300'}`} />
          <span className="hidden md:block font-bold text-xs uppercase tracking-widest">Workspace</span>
        </button>
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${activeTab === 'dashboard' ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'hover:bg-white/5 text-slate-500 border border-transparent'}`}
        >
          <BarChart3 className={`w-5 h-5 ${activeTab === 'dashboard' ? 'text-blue-400' : 'group-hover:text-slate-300'}`} />
          <span className="hidden md:block font-bold text-xs uppercase tracking-widest">Realtime Stats</span>
        </button>
      </nav>

      <div className="p-6 mt-auto border-t border-white/5 bg-black/20">
        <div className="mb-6 hidden md:block px-2">
          <p className="text-[9px] text-slate-700 uppercase font-black mb-4 tracking-[0.3em]">Language Protocol</p>
          <div className="flex gap-2">
            {(Object.keys(Language) as Array<keyof typeof Language>).map((key) => (
              <button
                key={key}
                onClick={() => onLanguageChange(Language[key])}
                className={`flex-1 py-2 text-[9px] font-black rounded-lg border transition-all ${language === Language[key] ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-[#16161a] border-white/5 text-slate-600 hover:text-slate-400'}`}
              >
                {key.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 hover:text-blue-400 transition-all hover:bg-blue-500/5 group">
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          <span className="hidden md:block font-bold text-[10px] uppercase tracking-widest">Maintenance</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
