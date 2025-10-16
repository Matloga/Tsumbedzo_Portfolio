import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/tsumbedzo-matloga.jpg"
              alt="A professional headshot of Tsumbedzo Matloga."
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Tsumbedzo, a dedicated software developer with a knack for turning complex problems into beautiful, intuitive designs. My journey in tech started with a fascination for how things work, and it has evolved into a full-fledged passion for software development.
              </p>
              <p>
                I specialize in front-end development, with a strong command of React and its ecosystem. I thrive on building responsive, scalable, and accessible web applications. I'm also proficient in back-end technologies like Node.js, allowing me to build full-stack solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest technology trends, contributing to open-source projects, or enjoying a good cup of coffee. I believe in continuous learning and am always looking for new challenges to grow my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
