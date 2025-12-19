
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Icon, Badge } from '../components/UI';
import { DUMMY_MATCHES } from '../constants';
import { Message } from '../types';

export const ChatScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = DUMMY_MATCHES.find(m => m.id === id) || DUMMY_MATCHES[0];
  
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: match.id, text: 'Hi! I saw on your profile that you\'re into hiking. Have you tried the new trail by the lake?', timestamp: '4:32 PM', status: 'read' },
    { id: '2', senderId: 'user', text: 'Hey Sarah! Yes, I actually went there last weekend. The views are incredible, especially at sunset. 🌅', timestamp: '4:35 PM', status: 'read', isMeaningful: true },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'user',
      text: input,
      timestamp: 'Just now',
      status: 'sent'
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-background-light overflow-hidden">
      <header className="bg-white border-b border-slate-100 p-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
           <button onClick={() => navigate(-1)} className="p-1"><Icon name="arrow_back" /></button>
           <div className="relative">
              <img src={match.avatar} className="size-10 rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
           </div>
           <div>
              <p className="text-sm font-bold">{match.firstName}</p>
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online now</p>
           </div>
        </div>
        <div className="flex items-center gap-1">
           <Button variant="ghost" className="size-10 p-0 text-primary"><Icon name="videocam" /></Button>
           <Button variant="ghost" className="size-10 p-0 text-slate-400"><Icon name="more_vert" /></Button>
        </div>
      </header>

      <div className="bg-primary/10 border-b border-primary/20 py-2 px-4 flex items-center justify-center gap-2">
         <Icon name="stars" className="text-primary filled" size={14} />
         <p className="text-[10px] font-bold text-primary">2 meaningful convos — <strong>3 more to unlock photo</strong></p>
      </div>

      <main ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar pb-32">
         <div className="flex flex-col items-center py-8 opacity-60">
            <img src={match.avatar} className="size-20 rounded-full object-cover mb-3 shadow-lg" />
            <h3 className="font-bold text-lg">{match.firstName}, {match.age}</h3>
            <p className="text-xs font-medium text-slate-500">{match.location}</p>
         </div>

         <div className="flex justify-center"><span className="text-[10px] font-bold uppercase text-slate-300 bg-slate-100 px-3 py-1 rounded-full">Yesterday</span></div>

         {messages.map(msg => {
           const isMe = msg.senderId === 'user';
           return (
             <div key={msg.id} className={`flex flex-col gap-1 ${isMe ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-end gap-2 max-w-[85%] ${isMe ? 'flex-row-reverse' : ''}`}>
                   {!isMe && <img src={match.avatar} className="size-6 rounded-full object-cover mb-1" />}
                   <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${isMe ? 'bg-primary text-white rounded-br-none' : 'bg-white text-slate-800 rounded-bl-none'}`}>
                      {msg.text}
                   </div>
                </div>
                <div className={`flex items-center gap-1 text-[10px] text-slate-400 ${isMe ? 'mr-1' : 'ml-8'}`}>
                   {msg.timestamp}
                   {isMe && <Icon name="done_all" size={14} className="text-primary" filled={msg.status === 'read'} />}
                </div>
             </div>
           );
         })}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 pb-8 max-w-md mx-auto">
         <div className="flex justify-center mb-3">
            <div className="bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1.5">
               <div className="size-1.5 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">4 of 7 messages remaining</span>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <Button variant="secondary" className="size-12 p-0 rounded-full"><Icon name="translate" /></Button>
            <div className="flex-1 bg-slate-100 rounded-3xl px-4 py-3">
               <input 
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && handleSend()}
                 className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm" 
                 placeholder="Type your message..." 
               />
            </div>
            <Button className="size-12 p-0 rounded-full" onClick={handleSend}><Icon name="send" size={20} className="ml-1" /></Button>
         </div>
      </footer>
    </div>
  );
};
