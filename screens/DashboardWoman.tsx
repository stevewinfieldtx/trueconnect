
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Badge } from '../components/UI';
import { DUMMY_CONVERSATIONS } from '../constants';

export const DashboardWoman: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full pb-20 bg-background-light">
      <header className="sticky top-0 z-50 bg-white p-4 flex items-center justify-between border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
            <Icon name="favorite" size={20} />
          </div>
          <h2 className="font-bold text-lg tracking-tight">TrueConnect</h2>
        </div>
        <div className="flex items-center gap-3">
           <Icon name="notifications" className="text-slate-400" />
           <div className="size-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img src="https://picsum.photos/100/100?random=10" className="w-full h-full object-cover" />
           </div>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div>
          <h1 className="text-[32px] font-bold leading-tight">Welcome back, Sarah</h1>
          <p className="text-slate-500 text-sm">You have 1 pending contact request</p>
        </div>

        <div className="relative bg-white border border-secondary/30 rounded-3xl overflow-hidden shadow-sm p-5">
           <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
           <div className="flex justify-between items-start mb-4">
              <Badge variant="red">Action Required</Badge>
              <span className="text-[10px] text-slate-400">2h ago</span>
           </div>
           <h3 className="font-bold text-lg mb-1">Contact Request</h3>
           <p className="text-sm text-slate-500 mb-6">Michael has requested to share contact information with you.</p>
           
           <div className="bg-slate-50 p-3 rounded-2xl flex items-center gap-4 mb-4">
              <img src="https://picsum.photos/100/100?random=50" className="size-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-sm">Michael, 32</p>
                <p className="text-[10px] text-slate-400">London, UK • 98% Trust Score</p>
              </div>
           </div>
           <Button fullWidth variant="primary" className="bg-secondary hover:bg-secondary/90 shadow-secondary/20">Review Request</Button>
        </div>

        <div className="space-y-4">
           <div className="flex justify-between items-center">
              <h3 className="font-bold">Your Conversations</h3>
              <button className="text-secondary font-bold text-sm">View all</button>
           </div>
           <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50">
              {DUMMY_CONVERSATIONS.map(conv => (
                <div key={conv.id} className="p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-50" onClick={() => navigate(`/chat/${conv.id}`)}>
                  <div className="relative">
                    <img src={conv.partner.avatar} className="size-14 rounded-full object-cover shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow">
                       <Icon name="lock_open" size={16} className="text-green-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                       <p className="font-bold text-sm">{conv.partner.firstName}</p>
                       <span className="text-[10px] text-slate-400">10m ago</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium truncate">{conv.lastMessage.text}</p>
                    <div className="mt-1"><Badge variant="green">Photo Unlocked</Badge></div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-teal-900 rounded-3xl p-6 text-white relative overflow-hidden">
           <Icon name="shield" size={100} className="absolute -right-4 -bottom-4 opacity-10" />
           <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="security" />
                <h3 className="font-bold">Your Safety Features</h3>
              </div>
              <ul className="space-y-3">
                 {['You control who sees your clear photo', 'Contact sharing requires your approval', 'End any connection instantly'].map(f => (
                   <li key={f} className="flex items-center gap-2 text-xs font-medium text-teal-100">
                     <Icon name="check_circle" size={16} className="text-teal-400" />
                     {f}
                   </li>
                 ))}
              </ul>
              <div className="flex gap-3">
                 <Button variant="secondary" size="sm" className="bg-white/10 text-white border-white/20 flex-1">Learn More</Button>
                 <Button variant="secondary" size="sm" className="bg-white text-teal-900 flex-1">Report</Button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};
