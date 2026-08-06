import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const GITHUB_USERNAME = 'Matloga';

const gradients = [
  ['#6366f1', '#8b5cf6', '#ec4899'],
  ['#06b6d4', '#3b82f6', '#6366f1'],
  ['#10b981', '#22d3ee', '#3b82f6'],
];

function cleanName(name) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function projectImage(title, index) {
  const colors = gradients[index % gradients.length];
  const name = cleanName(title);
  const short = name.length > 20 ? name.slice(0, 20) + '...' : name;
  const initials = title.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() || 'TM';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="50%" stop-color="${colors[1]}"/>
          <stop offset="100%" stop-color="${colors[2]}"/>
        </linearGradient>
        <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.15)"/>
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#g)"/>
      <rect width="600" height="400" fill="url(#dots)"/>
      <circle cx="500" cy="70" r="120" fill="rgba(255,255,255,0.08)"/>
      <circle cx="60" cy="360" r="140" fill="rgba(0,0,0,0.08)"/>
      <text x="40" y="190" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="rgba(255,255,255,0.25)">${initials}</text>
      <text x="40" y="290" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#ffffff">${short}</text>
      <text x="40" y="330" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.8)">GitHub Project</text>
    </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const fallbackProjects = [
  {
    id: 'project1',
    title: 'Tsumbedzo Portfolio',
    description: 'This portfolio website, built with React and Vite.',
    tags: ['React', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/Matloga/Tsumbedzo_Portfolio',
    homepage: 'https://tsumbedzo-portfolio.vercel.app',
    image: 'https://opengraph.githubassets.com/1/Matloga/Tsumbedzo_Portfolio',
    fallbackImage: projectImage('Tsumbedzo Portfolio', 0),
  },
  {
    id: 'project2',
    title: 'jobapp',
    description: 'A job application tracking application.',
    tags: ['Java'],
    repoUrl: 'https://github.com/Matloga/jobapp',
    homepage: null,
    image: 'https://opengraph.githubassets.com/1/Matloga/jobapp',
    fallbackImage: projectImage('jobapp', 1),
  },
  {
    id: 'project3',
    title: 'challenge-front-end-live',
    description: 'A live front-end coding challenge project.',
    tags: ['JavaScript'],
    repoUrl: 'https://github.com/Matloga/challenge-front-end-live',
    homepage: null,
    image: 'https://opengraph.githubassets.com/1/Matloga/challenge-front-end-live',
    fallbackImage: projectImage('challenge-front-end-live', 2),
  },
];

async function fetchReadmeDescription(repo) {
  const branches = [repo.default_branch || 'main', 'master'];
  for (const branch of branches) {
    try {
      const response = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${branch}/README.md`);
      if (!response.ok) continue;
      const text = await response.text();
      const clean = text
        .replace(/```[\s\S]*?```/g, '')
        .replace(/<[^>]+>/g, '')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/^#+\s+/gm, '')
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 15);
      if (clean.length > 0) {
        return clean[0].slice(0, 140) + (clean[0].length > 140 ? '...' : '');
      }
      return `${cleanName(repo.name)} — a project by Tsumbedzo Matloga.`;
    } catch (err) {
      // try next branch
    }
  }
  return null;
}

async function fetchProjects() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=10&type=public`
  );
  if (!response.ok) throw new Error('GitHub API request failed');
  const repos = (await response.json())
    .filter((r) => !r.fork && r.name !== 'Tsumbedzo_Portfolio')
    .slice(0, 3);

  const projects = await Promise.all(
    repos.map(async (repo, index) => {
      const desc = await fetchReadmeDescription(repo);
      const tags = [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 5);
      return {
        id: `project${index + 1}`,
        title: repo.name,
        description: desc || (repo.description ? repo.description : `${cleanName(repo.name)} — a project by Tsumbedzo Matloga.`),
        tags,
        repoUrl: repo.html_url,
        homepage: repo.homepage,
        image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
        fallbackImage: projectImage(repo.name, index),
      };
    })
  );

  return projects.length > 0 ? projects : fallbackProjects;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    let cancelled = false;
    fetchProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch((err) => {
        console.warn('GitHub fetch failed, using fallback projects:', err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Auto-synced from my GitHub. Here are my 3 latest public projects.
          </p>
        </div>
        <div className="projects-grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="project-card card">
              <div className="project-card-img">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage && e.target.src !== project.fallbackImage) {
                      e.target.src = project.fallbackImage;
                    }
                  }}
                />
              </div>
              <div className="card-content flex-grow p-6">
                <h3 className="project-card-title mb-2">{project.title}</h3>
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
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.homepage ? (
                    <Button asChild>
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="secondary">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Repo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
