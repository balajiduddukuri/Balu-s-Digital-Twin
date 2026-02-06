
import React from 'react';
import { ShieldCheck, Download, Home } from 'lucide-react';
import { Message } from '../types';
import MarkdownRenderer from './MarkdownRenderer';

interface MessageListProps {
  messages: Message[];
  loading: boolean;
  onReturnHome: () => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, loading, onReturnHome }) => {
  return (
    <div className="space-y-16 pb-20">
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
        >
          <div className={`max-w-[95%] md:max-w-[85%] rounded-[2rem] overflow-hidden ${
            msg.role === 'user' 
              ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl border border-white/10' 
              : 'bg-[#0d0d0f] border border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative'
          }`}>
            {msg.role === 'assistant' && (
              <div className="bg-white/[0.02] px-8 py-5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Encrypted Deliverable Packet</span>
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                </div>
              </div>
            )}
            
            <div className="p-8 md:p-10">
              {msg.role === 'assistant' ? (
                <MarkdownRenderer content={msg.content} />
              ) : (
                <p className="leading-relaxed font-bold text-base md:text-lg tracking-tight whitespace-pre-wrap">{msg.content}</p>
              )}
            </div>

            {msg.role === 'assistant' && (
              <div className="bg-black/40 px-8 py-5 border-t border-white/5 flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">PMP Integrity Validated</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <Download className="w-3.5 h-3.5 text-slate-700 hover:text-blue-500 cursor-pointer transition-colors" />
                  <span className="text-[10px] font-mono text-slate-800 font-black">TWIN_HASH_{msg.id.slice(-8)}</span>
                </div>
              </div>
            )}
          </div>
          <div className={`mt-4 text-[10px] font-black text-slate-800 tracking-[0.4em] uppercase ${msg.role === 'user' ? 'mr-6' : 'ml-6'}`}>
            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>
      ))}
      
      {loading && (
        <div className="flex justify-start">
          <div className="bg-[#0d0d0f] border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-6 shadow-2xl">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/5"></div>
              <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Processing Protocol</p>
              <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Compiling PM Logic + Automation Triggers...</p>
            </div>
          </div>
        </div>
      )}

      {!loading && messages.length > 0 && (
        <div className="flex justify-center pt-10">
          <button 
            onClick={onReturnHome}
            className="flex items-center gap-3 px-10 py-5 bg-[#0d0d0f] border border-white/10 rounded-3xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all group shadow-2xl active:scale-95"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-black uppercase tracking-[0.2em]">Return to Home Stream</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageList;
