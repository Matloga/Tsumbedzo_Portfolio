import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/lib/theme-provider';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import CertificatesSection from '@/components/sections/certificates';
import ContactSection from '@/components/sections/contact';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
