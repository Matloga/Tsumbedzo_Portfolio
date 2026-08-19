import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-provider';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

function useIsDark(theme) {
  const [isDark, setIsDark] = useState(() => {
    if (theme === 'dark') return true;
    if (theme === 'system') return window.matchMedia('(prefers-color-scheme: dark)').matches;
    return false;
  });

  useEffect(() => {
    if (theme === 'dark') {
      setIsDark(true);
    } else if (theme === 'light') {
      setIsDark(false);
    } else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mq.matches);
      const handler = (e) => setIsDark(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, [theme]);

  return isDark;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();
  const isDark = useIsDark(theme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navLinks.map(l => document.getElementById(l.href.substring(1)));
      let current = 'hero';
      for (const s of sections) {
        if (s) {
          const r = s.getBoundingClientRect();
          if (r.top <= 150 && r.bottom >= 150) {
            current = s.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cycleTheme = () => {
    const order = ['light', 'dark', 'system'];
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
  };

  return (
    <header className={`navbar ${scrolled ? 'white-nav-top' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={(e) => handleNav(e, '#hero')}>
          Tsumbedzo<span>.dev</span>
        </a>

        <button
          className="navbar-toggler"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>

        <nav className={`navbar-menu ${mobileOpen ? 'navbar-menu-open' : ''}`}>
          <ul className="navbar-nav">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                  onClick={(e) => handleNav(e, link.href)}
                >
                  {link.label}
                  <span></span><span></span><span></span><span></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-toggle-nav" onClick={cycleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>

      {mobileOpen && <div className="navbar-overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
