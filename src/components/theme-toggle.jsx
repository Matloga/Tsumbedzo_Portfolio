import { Moon, Sun } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/lib/theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const apply = () => setIsDark(mq.matches);
      apply();
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
    setIsDark(theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const options = [
    { value: 'light', icon: <Sun size={14} />, label: 'Light' },
    { value: 'dark', icon: <Moon size={14} />, label: 'Dark' },
    { value: 'system', icon: <span style={{fontSize:'0.75rem'}}>◐</span>, label: 'System' },
  ];

  return (
    <div className="theme-toggle-wrap" ref={ref}>
      <button
        className="theme-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle theme"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </button>
      {open && (
        <div className="theme-toggle-dropdown">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`theme-toggle-option ${theme === opt.value ? 'active' : ''}`}
              onClick={() => {
                setTheme(opt.value);
                setOpen(false);
              }}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
