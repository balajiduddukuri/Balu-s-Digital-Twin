
import React from 'react';
import { Terminal, Briefcase, ClipboardList, ShieldAlert, Layers, Sparkles } from 'lucide-react';

interface PersonaGridProps {
  onSelectPersona: (mode: string) => void;
}

const PersonaGrid: React.FC<PersonaGridProps> = ({ onSelectPersona }) => {
  const protocols = [
    { 
      mode: 'BA MODE', 
      icon: <ClipboardList className="w-6 h-6"/>, 
      title: 'Requirement Mapping', 
      color: 'text-amber-500'
    },
    { 
      mode: 'PM MODE', 
      icon: <Briefcase className="w-6 h-6"/>, 
      title: 'Strategic Roadmap', 
      color: 'text-blue-500'
    },
    { 
      mode: 'DEV MODE', 
      icon: <Terminal className="w-6 h-6"/>, 
      title: 'Logic Engineering', 
      color: 'text-emerald-500'
    },
    { 
      mode: 'TESTER MODE', 
      icon: <ShieldAlert className="w-6 h-6"/>, 
      title: 'QA & Edge Cases', 
      color: 'text-rose-500'
    },
    { 
      mode: 'DEVOPS MODE', 
      icon: <Layers className="w-6 h-6"/>, 
      title: 'CI/CD Automation', 
      color: 'text-indigo-500'
    },
    { 
      mode: 'COACH MODE', 
      icon: <Sparkles className="w-6 h-6"/>, 
      title: 'AI Productivity Coach', 
      color: 'text-violet-500'
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-12 py-10 animate-in fade-in zoom-in duration-500">
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
        <div className="w-28 h-28 rounded-[2.5rem] bg-[#0d0d0f] border border-white/10 flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
           <Terminal className="w-12 h-12 text-blue-500" />
           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">Balu Twin v2.5</h3>
        <p className="text-slate-500 text-sm leading-[1.8] max-w-md mx-auto font-medium tracking-tight">
          Select a specialized technical protocol to initialize the sprint context and drill down into specific deliverables.
        </p>
      </div>
      
      <div className="w-full">
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-10">Select Protocol Mode</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {protocols.map((item, idx) => (
            <button 
              key={idx}
              onClick={() => onSelectPersona(item.mode)}
              className="text-left p-8 rounded-[2.5rem] bg-[#0d0d0f] border border-white/5 hover:border-blue-500/50 hover:bg-white/[0.02] transition-all group shadow-xl relative overflow-hidden min-h-[160px] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-125 transition-all">{item.icon}</div>
              <p className={`text-[9px] font-black ${item.color} uppercase tracking-[0.3em] mb-4 flex items-center gap-2`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-current`}></span>
                {item.mode}
              </p>
              <p className="text-base font-black text-slate-300 group-hover:text-white transition-colors">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaGrid;
