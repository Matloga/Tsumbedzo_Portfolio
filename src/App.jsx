import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from '@/components/layout/sidebar';
import { ThemeProvider } from '@/lib/theme-provider';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import StatsSection from '@/components/sections/stats';
import SkillsSection from '@/components/sections/skills';
import ResumeSection from '@/components/sections/resume';
import ProjectsSection from '@/components/sections/projects';
import CertificatesSection from '@/components/sections/certificates';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/scroll-to-top';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Sidebar />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
      <ScrollToTop />
      <Toaster />
      <Analytics />
    </ThemeProvider>
  );
}
