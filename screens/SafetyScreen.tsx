
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../components/UI';

export const SafetyScreen: React.FC = () => {
  const navigate = useNavigate();

  const resources = [
    { title: 'Recognizing Warning Signs', desc: 'Learn about common scams and manipulation tactics.', icon: 'visibility', color: 'blue' },
    { title: 'Meeting in Person', desc: 'Safety tips for your first physical date.', icon: 'health_and_safety', color: 'teal' },
    { title: 'TrueConnect Features', desc: 'How our AI and verification systems protect you.', icon: 'verified_user', color: 'purple' }
  ];

  return (
    <div className="flex flex-col h-full bg-background-light">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)}><Icon name="arrow_back" /></button>
        <h1 className="text-lg font-bold">Safety Resources</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-4 space-y-6 pb-24 overflow-y-auto no-scrollbar">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold leading-tight">Your Safety Toolkit</h2>
          <p className="text-slate-500 text-sm">Tools and information to keep you in control.</p>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-white border border-red-100 p-5 rounded-2xl flex items-start gap-4 text-left shadow-sm hover:bg-red-50 transition-colors">
            <div className="size-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
               <Icon name="report_problem" filled />
            </div>
            <div className="flex-1">
               <p className="font-bold text-lg">Report a Concern</p>
               <p className="text-xs text-slate-500">If you feel unsafe or encounter inappropriate behavior.</p>
            </div>
            <Icon name="chevron_right" className="self-center text-slate-300" />
          </button>

          <button className="w-full bg-white border border-amber-100 p-5 rounded-2xl flex items-start gap-4 text-left shadow-sm hover:bg-amber-50 transition-colors">
            <div className="size-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
               <Icon name="person_remove" filled />
            </div>
            <div className="flex-1">
               <p className="font-bold text-lg">End a Connection</p>
               <p className="text-xs text-slate-500">Instantly stop communication with any user.</p>
            </div>
            <Icon name="chevron_right" className="self-center text-slate-300" />
          </button>
        </div>

        <div className="space-y-4">
           <h3 className="font-bold px-1">Safety Guides</h3>
           <div className="space-y-3">
              {resources.map(res => (
                <div key={res.title} className="bg-white p-5 rounded-3xl shadow-sm space-y-4 border border-slate-50">
                  <div className="flex justify-between items-center">
                    <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <Icon name={res.icon} size={20} />
                    </div>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest cursor-pointer">Read Guide →</span>
                  </div>
                  <h4 className="font-bold">{res.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{res.desc}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden">
           <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold">Women's Safety Community</h3>
              <p className="text-sm opacity-90 leading-relaxed">Connect with other women in your city for support, vetting matches, and sharing safety tips.</p>
              <Button fullWidth variant="secondary" className="bg-white text-primary border-none">Join Community</Button>
           </div>
           <Icon name="groups" size={150} className="absolute -right-8 -bottom-8 opacity-10" />
        </div>
      </main>
    </div>
  );
};
