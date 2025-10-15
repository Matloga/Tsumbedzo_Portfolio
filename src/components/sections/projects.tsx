import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, cart functionality, and a secure checkout process. Built with a modern MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description: 'A collaborative task management application that helps teams organize, track, and manage their work. Features real-time updates.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 'project3',
    title: 'Personal Blog',
    description: 'A statically generated blog using Next.js and Markdown for content. Optimized for performance and SEO.',
    tags: ['Next.js', 'Markdown', 'Vercel'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Here are some of the projects I've worked on. Each demonstrates my skills in different areas of web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-background">
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-video relative">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex w-full justify-start gap-4">
                    <Button asChild variant="outline">
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
