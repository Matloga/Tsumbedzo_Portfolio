import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="py-24 sm:py-32 md:py-40">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Tsumbedzo Matloga
        </h1>
        <p className="mt-4 text-lg text-primary font-medium md:text-xl">
          Software Developer
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-lg">
          Crafting elegant and efficient solutions through code. Passionate about building modern web applications and creating exceptional user experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
