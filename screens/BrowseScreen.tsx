
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Badge } from '../components/UI';
import { DUMMY_MATCHES } from '../constants';

export const BrowseScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
             <Icon name="menu" />
             <h1 className="text-xl font-bold">Browse Matches</h1>
          </div>
          <Icon name="notifications" />
        </div>
        
        <div className="space-y-3">
           <div className="flex justify-between items-center text-xs font-bold">
              <span>7 of 10 slots available</span>
              <span className="text-primary">How it works</span>
           </div>
           <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
           </div>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-4">
           <button className="size-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
             <Icon name="tune" size={20} />
           </button>
           <button className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-bold shrink-0">
              Vietnam <Icon name="close" size={16} />
           </button>
           <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-bold shrink-0">
              Age: 25-35 <Icon name="expand_more" size={16} />
           </button>
        </div>
      </header>

      <main className="p-4 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-24">
        <p className="text-xs font-bold text-slate-400">142 women match your preferences</p>

        {DUMMY_MATCHES.map(match => (
          <article key={match.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
             <div className="relative aspect-[4/5]">
                <img src={match.avatar} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                   {match.isVerified && <Badge variant="green">Verified</Badge>}
                   {match.isOnline && <Badge variant="blue">Online</Badge>}
                   {match.isNew && <Badge variant="amber">New</Badge>}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-xl text-white text-[10px] font-bold flex items-center gap-1">
                   <Icon name="photo_camera" size={14} /> {match.photoCount}
                </div>
             </div>
             
             <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                   <div>
                      <h2 className="text-xl font-bold">{match.firstName}, {match.age}</h2>
                      <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                        <Icon name="location_on" size={14} />
                        {match.location}
                      </div>
                   </div>
                   <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-500">
                      {match.languages.join(' | ')}
                   </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex gap-3">
                   <Icon name="auto_awesome" className="text-primary" size={20} />
                   <p className="text-xs leading-relaxed">
                      <strong className="text-primary">Compatibility:</strong> {match.compatibility}
                   </p>
                </div>

                <p className="text-sm text-slate-500 line-clamp-2">{match.bio}</p>

                <div className="flex gap-3 pt-2">
                   <Button fullWidth className="gap-2" onClick={() => navigate(`/chat/${match.id}`)}>
                      <Icon name="chat_bubble" size={18} />
                      Start Conversation
                   </Button>
                   <Button variant="secondary" className="aspect-square p-0 w-12 rounded-2xl">
                      <Icon name="favorite" className="text-slate-300 hover:text-red-500 transition-colors" />
                   </Button>
                </div>
             </div>
          </article>
        ))}

        <div className="flex flex-col items-center gap-3 py-8 text-slate-400">
           <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
           <span className="text-xs font-bold">Finding more matches...</span>
        </div>
      </main>
    </div>
  );
};
