
import React from 'react';
import { Terminal, FileText, ClipboardList, Zap, Layers, CheckCircle2 } from 'lucide-react';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  const parseLine = (line: string) => {
    // Handle bolding **text**
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold border-b border-blue-500/30">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        const lang = line.replace('```', '').trim() || 'code';
        elements.push(
          <div key={`code-h-${i}`} className="flex items-center justify-between bg-[#1e1e24] px-4 py-2 rounded-t-xl border-x border-t border-white/10 mt-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{lang}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
            </div>
          </div>
        );
      } else {
        inCodeBlock = false;
        elements.push(
          <div key={`code-b-${i}`} className="bg-[#0c0c0e] p-5 rounded-b-xl border border-white/10 font-mono text-sm overflow-x-auto text-emerald-400 mb-6 shadow-2xl relative">
            <pre className="relative z-10"><code>{codeBuffer.join('\n')}</code></pre>
            <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
          </div>
        );
        codeBuffer = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.startsWith('---')) {
      elements.push(<hr key={i} className="my-8 border-white/5" />);
      continue;
    }

    if (line.startsWith('###')) {
      const headerText = line.replace('###', '').trim();
      const isLogic = headerText.toUpperCase().includes('LOGIC SUMMARY');
      const isMode = headerText.toUpperCase().includes('ACTIVATED');
      
      elements.push(
        <div key={i} className={`mt-8 mb-4 p-4 rounded-xl border flex items-center gap-4 transition-all hover:bg-white/[0.02] ${
          isLogic ? 'bg-blue-600/5 border-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.05)]' : 
          isMode ? 'bg-emerald-600/5 border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.05)]' :
          'bg-white/5 border-white/10 text-white'
        }`}>
          {isLogic ? <ClipboardList className="w-5 h-5" /> : 
           isMode ? <Zap className="w-5 h-5 animate-pulse" /> : 
           <Layers className="w-5 h-5 text-slate-500" />}
          <h3 className="text-xs font-black tracking-[0.3em] uppercase italic">
            {headerText}
          </h3>
          {isMode && <div className="ml-auto flex items-center gap-2 bg-emerald-500/20 px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest border border-emerald-500/30">Live</div>}
        </div>
      );
      continue;
    }

    if (line.startsWith('-')) {
      elements.push(
        <li key={i} className="ml-2 flex gap-4 text-slate-300 my-3 group">
          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          <span className="text-sm font-medium">{parseLine(line.replace('-', '').trim())}</span>
        </li>
      );
      continue;
    }

    if (line.trim() === '') continue;

    elements.push(
      <p key={i} className="text-slate-400 text-sm leading-[1.8] mb-5 tracking-tight font-medium">
        {parseLine(line)}
      </p>
    );
  }

  return <div className="markdown-brief">{elements}</div>;
};

export default MarkdownRenderer;
