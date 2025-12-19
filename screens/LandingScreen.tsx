
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Icon } from '../components/UI';

export const LandingScreen: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: 'chat', title: 'Unlimited Texting', desc: 'No per-message fees ever.' },
    { icon: 'photo_library', title: 'Private Galleries', desc: 'You control who sees what.' },
    { icon: 'add_photo_alternate', title: 'Image Sharing', desc: 'Secure sharing within chats.' },
    { icon: 'videocam', title: '10hr Video Chat', desc: 'High-quality calls included.' },
    { icon: 'security', title: 'Scam Protection', desc: 'Advanced AI-driven safety.' },
    { icon: 'verified_user', title: 'Safe Conversations', desc: 'Verified, high-trust community.' },
    { icon: 'fact_check', title: 'Active Screening', desc: 'Manual profile verification.' },
    { icon: 'add_circle', title: 'And more...', desc: 'Constantly improving for you.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      <section className="relative h-[35vh] overflow-hidden shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUN4HtcSCZm_ttj44cw_0kxF_lYX8C9sHqxvf4jdNWWVrYe8EfPTkyOpsorSwEUMYDj0eO2rIonuiyKKuF43Jt10cnJq9Nu1NcY6Zdmm7ko9dYjSfhF-9bRhdHMkPSv3k2iup9Gi4CGUOPrb5Yn6Eln01pK6FGTX-yad1GYHyJMoO5AELGOPDrxIu-G0c7KWNc5-l9uVHuA9LiKaNoXLM69Mlfs8xyZ0ezAyf3dVjXqy1pHe7hSlfLBkwNwBeZ5HKklsZtlMDMN7je')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="size-20 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
              <Icon name="favorite" size={48} className="text-primary" />
           </div>
        </div>
      </section>

      <main className="flex-1 flex flex-col items-center text-center px-6 gap-6 -mt-8 z-10 pb-12">
        <div className="space-y-2">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
            The Ethical Choice
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
            Dating Without <br/> the <span className="text-primary">Manipulation</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 font-medium text-sm">
            Flat pricing. Real connections. <span className="text-secondary font-bold">No $10 messages.</span>
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <Button fullWidth size="lg" onClick={() => navigate('/signup-man')}>
            <Icon name="man" size={20} className="mr-2" />
            I'm a Man Seeking Connection
          </Button>
          <Button fullWidth size="lg" variant="secondary" onClick={() => navigate('/signup-woman')}>
            <Icon name="woman" size={20} className="mr-2" />
            I'm a Woman Seeking Connection
          </Button>
        </div>

        <div className="flex flex-col gap-2 items-center text-xs text-slate-400">
           <p>Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link></p>
        </div>

        <section className="w-full mt-8 space-y-6">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-xl font-bold">Everything You Need</h2>
            <div className="h-1 w-12 bg-primary/30 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 w-full">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-start p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-left border border-slate-100 dark:border-slate-700/50 shadow-sm transition-transform active:scale-95">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Icon name={f.icon} size={20} />
                </div>
                <h3 className="font-bold text-xs text-slate-800 dark:text-white mb-1">{f.title}</h3>
                <p className="text-[10px] text-slate-500 leading-tight">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden text-left mt-4">
          <Icon name="verified_user" size={120} className="absolute -right-8 -bottom-8 opacity-10 text-white" />
          <div className="relative z-10 space-y-2">
            <h3 className="text-lg font-bold">Safe by Design</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We screen every profile and use proprietary AI to detect patterns of manipulation before they reach you.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Live Protection Active</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
