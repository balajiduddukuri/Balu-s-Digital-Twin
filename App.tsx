import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PersonaGrid from './components/PersonaGrid';
import QuestionGrid from './components/QuestionGrid';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import Dashboard from './components/Dashboard';
import { baluService } from './services/geminiService';
import { Language, Message } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState<Language>(Language.ENGLISH);
  const [activeTab, setActiveTab] = useState<'chat' | 'dashboard'>('chat');
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    // Apply the protocol activation header if a mode is active and it's the first message or a specific trigger
    const formattedText = selectedMode && !text.includes('ACTIVATED') 
      ? `### [${selectedMode}] ACTIVATED\n${text}` 
      : text;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text, // Store the clean text for display
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const response = await baluService.sendMessage(formattedText);

    const baluMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, baluMessage]);
    setLoading(false);
  };

  const handleSelectMode = (mode: string) => {
    setSelectedMode(mode);
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
    setSelectedMode(null);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    baluService.setLanguage(lang);
  };

  return (
    <div className="flex h-screen w-full bg-[#08080a] text-slate-200 overflow-hidden font-inter selection:bg-blue-500/30">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        language={language} 
        onLanguageChange={handleLanguageChange} 
      />

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {activeTab === 'chat' ? (
          <>
            <Header 
              hasMessages={messages.length > 0 || !!selectedMode} 
              onReset={handleReset} 
            />

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 md:p-12 space-y-16 scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed"
            >
              {messages.length === 0 ? (
                !selectedMode ? (
                  <PersonaGrid onSelectPersona={handleSelectMode} />
                ) : (
                  <QuestionGrid 
                    selectedMode={selectedMode} 
                    onSelectQuestion={handleSendMessage}
                    onBack={() => setSelectedMode(null)}
                  />
                )
              ) : (
                <MessageList 
                  messages={messages} 
                  loading={loading} 
                  onReturnHome={handleReset} 
                />
              )}
            </div>

            <ChatInput 
              input={input} 
              setInput={setInput} 
              onSend={handleSendMessage} 
              loading={loading} 
              selectedMode={selectedMode}
            />
          </>
        ) : (
          <Dashboard />
        )}
      </main>
    </div>
  );
};

export default App;