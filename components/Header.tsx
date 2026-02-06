
import React from 'react';
import { RotateCcw } from 'lucide-react';

interface HeaderProps {
  hasMessages: boolean;
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ hasMessages, onReset }) => {
  return (
    <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-[#08080a]/90 backdrop-blur-2xl z-20">
      <div className="flex items-center gap-6">
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#08080a] bg-blue-600 flex items-center justify-center text-[10px] font-black shadow-2xl relative text-white">
            B <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#08080a]"></div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black text-white tracking-widest uppercase italic">Active Sprint Stream</h2>
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold mt-1">Status: Architecture Alignment</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {hasMessages && (
          <button 
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group"
          >
            <RotateCcw className="w-3.5 h-3.5 text-blue-500 group-hover:rotate-[-45deg] transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400">New Sprint</span>
          </button>
        )}
        <div className="hidden md:flex items-center gap-3 text-[10px] font-black text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/10">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="tracking-widest">SYNC_STATUS: OPTIMAL</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
