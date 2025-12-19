
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Badge } from '../components/UI';

export const CapacityScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark text-white p-4">
      <header className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)}><Icon name="arrow_back" /></button>
        <h1 className="text-lg font-bold">Conversation Capacity</h1>
        <Icon name="pie_chart" className="text-primary" filled />
      </header>

      <div className="space-y-8 pb-12 overflow-y-auto no-scrollbar">
         <div className="space-y-1">
            <h1 className="text-2xl font-bold">Your Attention Wallet</h1>
            <p className="text-sm text-slate-500">Manage your attention wisely. Quality over quantity.</p>
         </div>

         <div className="bg-slate-800 p-8 rounded-3xl ring-1 ring-white/10 space-y-6">
            <div className="flex justify-between items-end">
               <div>
                  <p className="text-5xl font-extrabold text-white">7<span className="text-slate-600 text-3xl font-medium">/10</span></p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-2">Slots in Use</p>
               </div>
               <div className="text-right">
                  <p className="text-2xl font-bold text-slate-500">3</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mt-1">Available</p>
               </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
               <div className="size-12 rounded-full bg-amber-500/20 ring-2 ring-amber-500 flex items-center justify-center text-amber-500">
                  <Icon name="star" filled />
               </div>
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="size-12 rounded-full bg-primary/20 ring-2 ring-primary flex items-center justify-center text-primary">
                    <Icon name="chat_bubble" size={18} filled />
                 </div>
               ))}
               {[1,2,3].map(i => (
                 <div key={i} className="size-12 rounded-full border-2 border-dashed border-slate-700 bg-white/5" />
               ))}
            </div>
         </div>

         <div className="p-4 bg-indigo-900/30 border border-indigo-500/30 rounded-2xl relative overflow-hidden">
            <Icon name="auto_awesome" size={100} className="absolute -right-4 -top-4 opacity-5 text-indigo-400" />
            <h3 className="font-bold flex items-center gap-2 mb-2">
              <Icon name="lightbulb" size={18} />
              Suggestion
            </h3>
            <p className="text-xs text-indigo-100/70 leading-relaxed mb-4">
              <strong>Sofia</strong> hasn't responded in 12 days. Consider ending this chat to free up a slot for someone new.
            </p>
            <Button size="sm" className="bg-indigo-600 border-none">Review Conversation</Button>
         </div>

         <div className="space-y-4">
            <h3 className="font-bold">Active Conversations</h3>
            <div className="space-y-3">
               {[1,2,3].map(i => (
                 <div key={i} className="bg-slate-800 p-4 rounded-2xl flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                       <img src={`https://picsum.photos/100/100?random=${i}`} className="size-10 rounded-full object-cover" />
                       <div>
                          <p className="font-bold text-sm">Elena, 28</p>
                          <p className="text-[10px] text-slate-500">Last active 4 days ago</p>
                       </div>
                    </div>
                    <Button variant="danger" size="sm" className="h-8 py-0 px-4 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">End</Button>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};
