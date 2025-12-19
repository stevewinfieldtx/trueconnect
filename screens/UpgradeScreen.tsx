
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../components/UI';

export const UpgradeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark text-white p-4">
      <header className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)}><Icon name="arrow_back" /></button>
        <h1 className="text-lg font-bold">Upgrade</h1>
        <button className="text-sm font-bold text-slate-500">Restore</button>
      </header>

      <div className="space-y-8 pb-32 overflow-y-auto no-scrollbar">
         <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold">Choose Your Plan</h1>
            <p className="text-sm text-slate-500 px-12">Transparent pricing. No credits. No per-message fees. Ever.</p>
         </div>

         <div className="bg-slate-800 p-1 rounded-2xl flex">
            <button className="flex-1 py-3 text-sm font-bold text-slate-500">Monthly</button>
            <button className="flex-1 py-3 text-sm font-bold bg-background-dark rounded-xl text-primary shadow-sm">Annually (Save 20%)</button>
         </div>

         <div className="space-y-4">
            <div className="p-6 rounded-3xl border border-white/5 bg-slate-800 opacity-60">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl">Free</h3>
                  <p className="text-2xl font-bold">$0</p>
               </div>
               <Button fullWidth variant="secondary" disabled>Current Plan</Button>
            </div>

            <div className="relative p-1 rounded-[2rem] bg-gradient-to-br from-primary to-blue-600">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-[10px] font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
               <div className="bg-slate-900 rounded-[1.8rem] p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">Premium</h3>
                      <p className="text-xs text-slate-500">Best value for connection</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 line-through">$39.99</p>
                      <p className="text-3xl font-bold text-white">$29.99</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                     {['Unlimited messaging', '30 min video calls / mo', 'Contact unlock eligibility', 'Priority matching'].map(f => (
                       <li key={f} className="flex items-center gap-3 text-sm font-medium">
                          <Icon name="check_circle" className="text-primary" size={20} filled />
                          {f}
                       </li>
                     ))}
                  </ul>
                  <Button fullWidth size="lg" className="h-14">Select Premium <Icon name="arrow_forward" size={18} className="ml-2" /></Button>
               </div>
            </div>

            <div className="p-6 rounded-3xl border border-white/5 bg-slate-800">
               <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-amber-500">Ultimate</h3>
                    <p className="text-xs text-slate-500">The VIP Experience</p>
                  </div>
                  <p className="text-2xl font-bold">$49.99</p>
               </div>
               <Button fullWidth variant="secondary">Select Ultimate</Button>
            </div>
         </div>
      </div>
    </div>
  );
};
