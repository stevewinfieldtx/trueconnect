
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-[0.98] disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20",
    secondary: "bg-white dark:bg-surface-dark text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
  };
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ProgressBar: React.FC<{ progress: number; className?: string }> = ({ progress, className = '' }) => (
  <div className={`h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden ${className}`}>
    <div 
      className="h-full bg-primary transition-all duration-500 ease-out rounded-full" 
      style={{ width: `${progress}%` }}
    />
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'blue' | 'green' | 'red' | 'amber' | 'gray' }> = ({ children, variant = 'blue' }) => {
  const styles = {
    blue: "bg-primary/10 text-primary",
    green: "bg-green-500/10 text-green-600",
    red: "bg-red-500/10 text-red-600",
    amber: "bg-amber-500/10 text-amber-600",
    gray: "bg-slate-100 text-slate-600"
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

export const Icon: React.FC<{ name: string; filled?: boolean; className?: string; size?: number }> = ({ name, filled = false, className = '', size = 24 }) => (
  <span 
    className={`material-symbols-outlined ${filled ? 'filled' : ''} ${className}`}
    style={{ fontSize: size }}
  >
    {name}
  </span>
);
