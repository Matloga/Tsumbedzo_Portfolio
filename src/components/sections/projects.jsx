import { useEffect, useRef, useState } from 'react';
import { ExternalLink, GitFork, Github, Star } from 'lucide-react';

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
    stars: 0,
    forks: 0,
    pushedAt: new Date().toISOString(),
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
    stars: 0,
    forks: 0,
    pushedAt: new Date().toISOString(),
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
    stars: 0,
    forks: 0,
    pushedAt: new Date().toISOString(),
  },
];

function timeAgo(dateString) {
  const date = new Date(dateString);
  const diff = Date.now() - date.getTime();
  if (Number.isNaN(date.getTime()) || diff < 0) return '';
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

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

/* --- On-device summary + AI cover image --- */

function generateLocalSummary(repo) {
  const title = cleanName(repo.name);
  const desc = (repo.description || '').trim();
  if (desc) {
    return `${title} — ${desc}`;
  }
  const language = repo.language || 'software';
  const topics = (repo.topics || []).map((t) => t.toLowerCase());
  if (topics.length > 0) {
    return `${title} is a ${language} project focused on ${topics.slice(0, 2).join(' and ')}.`;
  }
  return `${title} is a ${language} project I built to solve real-world problems and showcase my development skills.`;
}

function hashSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function aiProjectImage(repo, index) {
  const seed = hashSeed(`${GITHUB_USERNAME}/${repo.name}`);
  const subject = repo.language || repo.name;
  const prompt = encodeURIComponent(
    `Modern developer app cover image for the project "${cleanName(repo.name)}", ${subject} technology theme, sleek software branding, abstract shapes and code elements, flat illustration, vibrant colors, no text, no watermark`
  );
  return `https://image.pollinations.ai/prompt/${prompt}?width=800&height=1000&seed=${seed}&nologo=true&model=flux`;
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
      const readmeDesc = await fetchReadmeDescription(repo);
      const description = readmeDesc || generateLocalSummary(repo);
      const tags = [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 5);
      return {
        id: `project${index + 1}`,
        title: repo.name,
        description,
        tags,
        repoUrl: repo.html_url,
        homepage: repo.homepage,
        image: aiProjectImage(repo, index),
        fallbackImage: projectImage(repo.name, index),
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        pushedAt: repo.pushed_at,
      };
    })
  );

  return projects.length > 0 ? projects : fallbackProjects;
}

function handleImageError(e, project) {
  if (project.fallbackImage && e.target.src !== project.fallbackImage) {
    e.target.src = project.fallbackImage;
  }
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const gridRef = useReveal();

  useEffect(() => {
    let cancelled = false;
    fetchProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch((err) => {
        console.warn('GitHub fetch failed, using fallback projects:', err);
        if (!cancelled) setProjects(fallbackProjects);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
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
            A selection of what I've built — auto-synced from GitHub, with
            AI-generated covers and summaries for every project.
          </p>
        </div>

        <div ref={gridRef} className="projects-image-cards">
          {(loading ? [1, 2, 3] : projects).map((project, index) =>
            loading ? (
              <article key={project} className="project-image-card is-skeleton reveal-item">
                <div className="skeleton-bar skeleton-title"></div>
                <div className="skeleton-bar skeleton-line"></div>
                <div className="skeleton-bar skeleton-line short"></div>
              </article>
            ) : (
              <article
                key={project.title}
                className="project-image-card reveal-item"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} cover`}
                  loading="lazy"
                  onError={(e) => handleImageError(e, project)}
                />
                <div className="project-image-card-overlay"></div>
                <div className="project-image-card-content">
                  <span className="project-image-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.tags.length > 0 && (
                    <div className="project-image-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="project-image-card-stats">
                    {(project.stars > 0 || project.forks > 0) && (
                      <span className="project-image-card-stat">
                        {project.stars > 0 && (
                          <span className="project-image-card-stat-item">
                            <Star size={13} fill="currentColor" /> {project.stars}
                          </span>
                        )}
                        {project.forks > 0 && (
                          <span className="project-image-card-stat-item">
                            <GitFork size={13} /> {project.forks}
                          </span>
                        )}
                      </span>
                    )}
                    {timeAgo(project.pushedAt) && (
                      <span className="project-image-card-updated">Updated {timeAgo(project.pushedAt)}</span>
                    )}
                  </div>
                  <div className="project-image-card-links">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={15} /> GitHub
                    </a>
                    {project.homepage && (
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all"
          >
            View all on GitHub <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
