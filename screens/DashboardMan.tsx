
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Badge } from '../components/UI';
import { DUMMY_CONVERSATIONS } from '../constants';

export const DashboardMan: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full pb-20">
      <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-slate-100 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
            <Icon name="favorite" size={20} />
          </div>
          <h2 className="font-bold text-lg">TrueConnect</h2>
        </div>
        <div className="flex items-center gap-3">
           <button className="relative">
              <Icon name="notifications" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
           </button>
           <div className="size-9 rounded-full overflow-hidden border-2 border-primary/20">
              <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" />
           </div>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Michael</h1>
          <p className="text-slate-500 text-sm">You have 7 conversation slots open.</p>
        </div>

        <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-3">
          <Icon name="verified_user" className="text-amber-500" />
          <div>
            <p className="font-bold text-sm text-amber-900">Verification Pending</p>
            <p className="text-xs text-amber-700">Your ID is currently being reviewed by our team.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-50">
          <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold">Conversation Slots</h3>
             <button className="text-primary text-xs font-bold" onClick={() => navigate('/capacity')}>How it works</button>
          </div>
          <div className="flex justify-between items-center">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="size-8 rounded-full border-2 border-white overflow-hidden ring-1 ring-slate-100">
                    <img src={`https://picsum.photos/80/80?random=${i+10}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                {[1,2,3,4,5,6,7].map(i => (
                  <div key={i} className="size-8 rounded-full border-2 border-dashed border-slate-200 bg-slate-50" />
                ))}
             </div>
             <Button size="sm" onClick={() => navigate('/browse')}>Browse</Button>
          </div>
          <p className="mt-3 text-[10px] text-slate-400 font-medium">7 of 10 slots available. Good capacity to meet new people.</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-50 space-y-4">
           <div className="flex justify-between items-center">
             <h3 className="font-bold">Recent Conversations</h3>
             <button className="text-primary text-xs font-bold">View All</button>
           </div>
           <div className="space-y-4">
              {DUMMY_CONVERSATIONS.map(conv => (
                <div key={conv.id} className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(`/chat/${conv.id}`)}>
                  <div className="relative">
                    <img src={conv.partner.avatar} className="size-12 rounded-full object-cover" />
                    {conv.partner.isOnline && <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-bold truncate">{conv.partner.firstName}</p>
                      <span className="text-[10px] text-slate-400">{conv.lastMessage.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{conv.lastMessage.text}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl text-white relative overflow-hidden">
           <Icon name="diamond" className="absolute top-4 right-4 text-amber-400" size={32} />
           <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Current Plan</p>
           <h2 className="text-2xl font-bold mb-4">Premium</h2>
           <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 p-2 rounded-xl text-center">
                 <p className="text-lg font-bold">Unl.</p>
                 <p className="text-[8px] uppercase">Msgs</p>
              </div>
              <div className="bg-white/10 p-2 rounded-xl text-center">
                 <p className="text-lg font-bold">5</p>
                 <p className="text-[8px] uppercase">Calls</p>
              </div>
              <div className="bg-white/10 p-2 rounded-xl text-center">
                 <p className="text-lg font-bold">3</p>
                 <p className="text-[8px] uppercase">Contacts</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <Button variant="secondary" className="flex-col gap-2 h-auto p-4" onClick={() => navigate('/browse')}>
              <Icon name="manage_search" className="text-primary" />
              <span>Browse</span>
           </Button>
           <Button variant="secondary" className="flex-col gap-2 h-auto p-4">
              <Icon name="edit_note" className="text-primary" />
              <span>Edit Profile</span>
           </Button>
        </div>
      </main>
    </div>
  );
};
