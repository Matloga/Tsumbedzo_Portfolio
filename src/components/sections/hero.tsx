import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const skills = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-cover bg-center" style={{backgroundImage: "url('/backgroundWallpaper.jpg')"}}>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-primary">Hello.</span>
              I'm Tsumbedzo
            </h1>
            <p className="mt-4 text-2xl text-white font-medium md:text-3xl">
              Software Developer
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Got a project?</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                 <a href="/Tsumbedzo_Matloga_Resume.pdf" download>My resume</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-full border-4 border-primary/40 animate-pulse-slow"></div>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/tsumbedzo-matloga.png"
                alt="A professional headshot of Tsumbedzo Matloga."
                data-ai-hint="professional portrait"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-muted-foreground font-medium">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
