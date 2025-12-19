
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../components/UI';

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard-man');
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 bg-background-light dark:bg-background-dark">
      <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          <Icon name="diversity_1" size={32} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">TrueConnect<span className="text-primary">.fit</span></h2>
      </div>

      <div className="w-full bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-100 dark:border-slate-700">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-slate-500 text-sm">Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email address</label>
            <div className="relative">
              <Icon name="mail" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="email" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Icon name="lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="password" 
                className="w-full pl-10 pr-10 py-3 rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary text-sm"
                placeholder="••••••••"
                required
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icon name="visibility" size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded text-primary focus:ring-primary" />
              Remember me
            </label>
            <a href="#" className="text-primary font-bold hover:underline">Forgot password?</a>
          </div>

          <Button fullWidth size="lg" type="submit">Sign In</Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-700"></div></div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest text-slate-400"><span className="px-3 bg-white dark:bg-slate-800">or</span></div>
        </div>

        <div className="space-y-3">
          <Button fullWidth variant="secondary">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-4 h-4 mr-2" />
             Continue with Google
          </Button>
          <Button fullWidth variant="secondary">
             <Icon name="ios" className="mr-2" size={20} />
             Continue with Apple
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center space-y-4">
        <p className="text-sm text-slate-500">Don't have an account?</p>
        <div className="flex gap-4">
           <Button variant="secondary" onClick={() => navigate('/signup-man')}>Signup as Man</Button>
           <Button variant="secondary" onClick={() => navigate('/signup-woman')}>Signup as Woman</Button>
        </div>
      </div>
    </div>
  );
};
