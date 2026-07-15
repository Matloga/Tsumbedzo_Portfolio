import { Button } from '@/components/ui/button';

const allSkills = ['Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring', 'Tailwind CSS', 'Git'];
const skillsToDisplay = [...allSkills, ...allSkills];

const titles = ['Software Engineer', 'Software Developer'];
const titlesToDisplay = [...titles, ...titles, ...titles, ...titles];

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src="/backgroundWallpaper.jpg" alt="Ocean background" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-primary">Hello.</span>
              I'm Tsumbedzo
            </h1>
            <div className="hero-titles">
              <div className="flex animate-scroll w-max gap-x-8">
                {titlesToDisplay.map((title, index) => (
                  <span key={index} className="text-2xl text-white font-medium md:text-3xl">
                    {title}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-btn-row">
              <Button asChild size="lg">
                <a href="#contact">Got a project?</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/Tsumbedzo_Matloga_Resume.pdf" download>My resume</a>
              </Button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-pulse-ring"></div>
            <div className="hero-pulse-ring-border"></div>
            <div className="hero-profile-img">
              <img src="/tsumbedzo-matloga.png" alt="A professional headshot of Tsumbedzo Matloga." />
            </div>
          </div>
        </div>
        
        <div className="hero-skills-scroll">
          <div className="flex animate-scroll w-max gap-x-8">
            {skillsToDisplay.map((skill, index) => (
              <span key={index} className="text-muted-foreground font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
