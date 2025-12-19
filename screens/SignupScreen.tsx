
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, ProgressBar, Badge } from '../components/UI';
import { Gender } from '../types';

export const SignupScreen: React.FC<{ gender: Gender }> = ({ gender }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else navigate(gender === Gender.MALE ? '/dashboard-man' : '/dashboard-woman');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold mb-2">Let's Get Started</h1>
              <p className="text-slate-500">Join the community focused on trust & connection.</p>
            </div>
            <div className="space-y-4">
              <Button fullWidth size="lg">Continue with Google</Button>
              <Button variant="secondary" fullWidth size="lg">Continue with Apple</Button>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-slate-100"></div>
              <span className="absolute px-4 bg-white dark:bg-background-dark text-slate-400 text-xs uppercase font-bold">or continue with email</span>
            </div>
            <div className="space-y-4">
              <input className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="Email Address" type="email" />
              <input className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary" placeholder="Password" type="password" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold mb-2">Tell Us About Yourself</h1>
              <p className="text-slate-500">Your matches want to know the real you.</p>
            </div>
            <div className="space-y-5">
               <div className="space-y-1">
                 <label className="text-xs font-bold text-slate-400 uppercase">First Name</label>
                 <input className="w-full p-4 rounded-xl border-slate-200" placeholder="e.g., Maria" />
               </div>
               <div className="space-y-1">
                 <label className="text-xs font-bold text-slate-400 uppercase">Date of Birth</label>
                 <input className="w-full p-4 rounded-xl border-slate-200" type="date" />
               </div>
               <div className="space-y-1">
                 <label className="text-xs font-bold text-slate-400 uppercase">Country of Residence</label>
                 <select className="w-full p-4 rounded-xl border-slate-200">
                    <option>Vietnam</option>
                    <option>United States</option>
                    <option>Colombia</option>
                 </select>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold mb-2">What are you looking for?</h1>
              <p className="text-slate-500">Help us find the right match for your goals.</p>
            </div>
            <div className="space-y-6">
               <div className="space-y-3">
                 <h3 className="font-bold text-lg">Relationship Goal</h3>
                 {['Long-term / Marriage', 'Serious dating', 'Still figuring it out'].map(goal => (
                   <label key={goal} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-primary/5 transition-colors">
                      <span className="font-medium">{goal}</span>
                      <input type="radio" name="goal" className="text-primary" />
                   </label>
                 ))}
               </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 text-center">
            <h1 className="text-3xl font-extrabold mb-2">Add Your Photos</h1>
            <p className="text-slate-500">Matches will see your photos after meaningful conversation.</p>
            <div className="aspect-[3/4] w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-100 transition-colors">
               <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <Icon name="add_a_photo" size={32} />
               </div>
               <div>
                  <p className="font-bold">Upload Main Photo</p>
                  <p className="text-xs text-slate-400">Required</p>
               </div>
            </div>
            <div className="p-4 bg-primary/5 rounded-2xl flex gap-3 text-left">
              <Icon name="lock" className="text-primary" size={20} />
              <p className="text-xs text-slate-500 leading-relaxed">
                 Your photos are <strong>private by default</strong>. They are only revealed to matches you build trust with.
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold mb-2">Introduce Yourself</h1>
              <p className="text-slate-500">Your bio is the first impression. Your words matter.</p>
            </div>
            <div className="space-y-5">
              <textarea 
                className="w-full h-40 p-4 rounded-2xl border-slate-200 resize-none" 
                placeholder="Tell us about your passions, what you're looking for..."
              />
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                <Icon name="lightbulb" className="text-amber-500 filled" size={20} />
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Tip:</strong> Be specific. "I love hiking" is forgettable. "I hiked the Appalachian Trail last summer" is memorable.
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold mb-2">Verify Your Identity</h1>
              <p className="text-slate-500">Protects everyone and builds trust in our community.</p>
            </div>
            <div className="space-y-4">
              <Button variant="secondary" fullWidth className="p-6 h-auto flex-col">
                <Icon name="badge" size={32} className="text-primary mb-2" />
                <p className="font-bold">Upload ID Photo</p>
                <p className="text-xs text-slate-400">Government-issued ID (Front)</p>
              </Button>
              <Button variant="secondary" fullWidth className="p-6 h-auto flex-col">
                <Icon name="add_a_photo" size={32} className="text-primary mb-2" />
                <p className="font-bold">Upload Selfie with ID</p>
                <p className="text-xs text-slate-400">Hold your ID next to your face</p>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
               <Icon name="verified" className="text-secondary filled" />
               <div className="text-left">
                  <p className="text-xs font-bold">Get the Verified Badge</p>
                  <p className="text-[10px] text-slate-500">Verified members increase matches by 3x.</p>
               </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-background-dark p-6">
      <header className="flex items-center justify-between mb-8">
        <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}>
          <Icon name="arrow_back" />
        </button>
        <span className="text-sm font-bold text-slate-400">Step {step} of {totalSteps}</span>
        <button className="text-primary font-bold text-sm">Help</button>
      </header>

      <ProgressBar progress={(step / totalSteps) * 100} className="mb-8" />

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderStep()}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md max-w-md mx-auto">
        <Button fullWidth size="lg" onClick={nextStep}>
          Continue
          <Icon name="arrow_forward" size={18} className="ml-2" />
        </Button>
      </footer>
    </div>
  );
};
