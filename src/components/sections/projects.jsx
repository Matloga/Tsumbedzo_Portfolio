import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Here are some of the projects I've worked on. Each demonstrates my skills in different areas of web development.
          </p>
        </div>
        <div className="projects-grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <div key={project.title} className="project-card card">
                <div className="project-card-img">
                  {image && (
                    <img src={image.imageUrl} alt={image.description} />
                  )}
                </div>
                <div className="card-content flex-grow p-6">
                  <h3 className="card-title font-headline mb-2">{project.title}</h3>
                  <p className="card-description text-muted-foreground mb-4">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="card-footer p-6 pt-0">
                  <div className="project-card-footer">
                    <Button asChild variant="outline">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
