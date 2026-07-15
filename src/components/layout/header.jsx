import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
            break;
          }
        }
      }
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="header-logo">
          <span className="header-logo-text">Tsumbedzo Matloga</span>
        </a>
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`header-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Button asChild variant="outline">
            <a href="/Tsumbedzo_Matloga_Resume.pdf" download>My Resume</a>
          </Button>
        </div>
        <div className="header-mobile">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <a href="/" className="flex items-center space-x-2">
                  <span className="font-bold font-headline">Tsumbedzo Matloga</span>
                </a>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary' : ''}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild size="lg" variant="outline">
                  <a href="/Tsumbedzo_Matloga_Resume.pdf" download>My Resume</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
