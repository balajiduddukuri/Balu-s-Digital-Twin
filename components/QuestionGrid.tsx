import React from 'react';
import { ChevronLeft, Zap, ArrowRight } from 'lucide-react';
import { MODE_QUESTIONS } from '../constants';

interface QuestionGridProps {
  selectedMode: string;
  onSelectQuestion: (question: string) => void;
  onBack: () => void;
}

const QuestionGrid: React.FC<QuestionGridProps> = ({ selectedMode, onSelectQuestion, onBack }) => {
  const questions = MODE_QUESTIONS[selectedMode as keyof typeof MODE_QUESTIONS] || [];

  return (
    <div className="h-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-10 py-10 animate-in slide-in-from-right duration-500">
      <div className="w-full flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-400 transition-all group px-4 py-2 rounded-xl hover:bg-white/5"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return to Protocol Selection</span>
        </button>
        <div className="flex items-center gap-3 bg-blue-600/10 border border-blue-500/20 px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <Zap className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">{selectedMode} INITIALIZED</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">Select Sub-Protocol</h3>
        <p className="text-slate-500 text-sm leading-[1.8] max-w-lg mx-auto font-medium tracking-tight">
          Drill down into specific deliverables. Each prompt triggers a high-fidelity PMP technical brief based on your selected mode requirements.
        </p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((q, idx) => (
          <button 
            key={idx}
            onClick={() => onSelectQuestion(q)}
            className="text-left p-6 rounded-[2rem] bg-[#0d0d0f] border border-white/5 hover:border-blue-500/40 hover:bg-white/[0.02] transition-all group shadow-xl flex items-center justify-between gap-6"
          >
            <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors leading-relaxed">
              {q}
            </span>
            <div className="w-10 h-10 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-slate-700 group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
      
      <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.5em] mt-8">
        Automation Pipeline: Ready for Execution
      </p>
    </div>
  );
};

export default QuestionGrid;