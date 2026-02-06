import React from 'react';
import { Zap, Send, ShieldCheck, Activity } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  onSend: (text: string) => void;
  loading: boolean;
  selectedMode: string | null;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSend, loading, selectedMode }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(input);
  };

  return (
    <div className="p-8 md:p-12 bg-[#08080a] relative">
      <div className="max-w-5xl mx-auto relative group">
        <form 
          onSubmit={handleSubmit}
          className="flex gap-4 p-3 bg-[#0d0d0f] border border-white/10 rounded-[2.5rem] focus-within:border-blue-500/50 focus-within:ring-[20px] focus-within:ring-blue-500/5 transition-all shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]"
        >
          <div className="hidden md:flex items-center px-6 border-r border-white/10 text-slate-700">
            <Zap className={`w-6 h-6 ${selectedMode ? 'text-blue-500 animate-pulse' : ''}`} />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={selectedMode ? `Enter ${selectedMode} specific parameters...` : "Input project parameters for execution..."}
            className="flex-1 bg-transparent px-6 py-5 outline-none text-slate-200 placeholder:text-slate-800 font-black text-sm tracking-tight"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-900 disabled:text-slate-800 text-white px-10 rounded-full transition-all flex items-center gap-4 group/btn shadow-2xl shadow-blue-500/20"
          >
            <span className="font-black text-[10px] uppercase tracking-[0.3em]">{loading ? 'Running' : 'Execute'}</span>
            <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </form>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[9px] font-black text-slate-900 uppercase tracking-[0.5em] opacity-80 pointer-events-none">
          <div className="flex gap-2 items-center">
            <ShieldCheck className="w-3 h-3" />
            <span>Secure Channel v2.5</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
          <div className="flex gap-2 items-center">
            <Activity className="w-3 h-3" />
            <span>{selectedMode ? `${selectedMode} PROTOCOL` : 'Balu.OS Live'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;