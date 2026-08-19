import { useEffect, useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

const navLinks = [
  { href: '#hero', icon: 'bi-house', label: 'Home' },
  { href: '#about', icon: 'bi-person', label: 'About' },
  { href: '#skills', icon: 'bi-gear', label: 'Skills' },
  { href: '#resume', icon: 'bi-file-earmark-text', label: 'Resume' },
  { href: '#projects', icon: 'bi-images', label: 'Projects' },
  { href: '#certificates', icon: 'bi-award', label: 'Certificates' },
  { href: '#contact', icon: 'bi-envelope', label: 'Contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let current = '';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
      </button>

      <aside className={`sidebar ${mobileOpen ? 'sidebar-mobile-open' : ''}`}>
        <div className="sidebar-header">
          <a href="#hero" className="sidebar-profile" onClick={(e) => handleNavClick(e, '#hero')}>
            <img src="/tsumbedzo-matloga.jpg" alt="Tsumbedzo Matloga" />
          </a>
          <h1 className="sidebar-name">Tsumbedzo Matloga</h1>
          <div className="sidebar-social">
            <a href="https://github.com/Matloga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/matloga-tsumbedzo-a44724343" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <i className={`bi ${link.icon} navicon`}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <ThemeToggle />
        </div>
      </aside>

      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
