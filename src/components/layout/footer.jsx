import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Tsumbedzo Matloga. All rights reserved.
          </p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/Matloga" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/matloga-tsumbedzo-a44724343" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
