import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';

const GITHUB_USERNAME = 'Matloga';
const categories = ['All', 'Web', 'Java', 'AI'];

const fallbackProjects = [
  {
    id: 'project1',
    title: 'Tsumbedzo Portfolio',
    description: 'This portfolio website, built with React and Vite.',
    category: 'Web',
    repoUrl: 'https://github.com/Matloga/Tsumbedzo_Portfolio',
    homepage: 'https://tsumbedzo-portfolio.vercel.app',
    image: 'https://opengraph.githubassets.com/1/Matloga/Tsumbedzo_Portfolio',
    stars: 0,
    forks: 0,
  },
  {
    id: 'project2',
    title: 'jobapp',
    description: 'A job application tracking application.',
    category: 'Java',
    repoUrl: 'https://github.com/Matloga/jobapp',
    homepage: null,
    image: 'https://opengraph.githubassets.com/1/Matloga/jobapp',
    stars: 0,
    forks: 0,
  },
  {
    id: 'project3',
    title: 'challenge-front-end-live',
    description: 'A live front-end coding challenge project.',
    category: 'Web',
    repoUrl: 'https://github.com/Matloga/challenge-front-end-live',
    homepage: null,
    image: 'https://opengraph.githubassets.com/1/Matloga/challenge-front-end-live',
    stars: 0,
    forks: 0,
  },
];

function cleanName(name) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function guessCategory(repo) {
  const lang = (repo.language || '').toLowerCase();
  const topics = (repo.topics || []).map((t) => t.toLowerCase());
  if (topics.some((t) => t.includes('ai') || t.includes('machine-learning') || t.includes('ml'))) return 'AI';
  if (topics.some((t) => t.includes('android') || t.includes('java'))) return 'Java';
  if (lang === 'java') return 'Java';
  if (lang === 'python' && topics.some((t) => t.includes('ai'))) return 'AI';
  return 'Web';
}

function handleImageError(e, fallback) {
  if (fallback && e.target.src !== fallback) {
    e.target.src = fallback;
  }
}

async function fetchProjects() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=10&type=public`
  );
  if (!response.ok) throw new Error('GitHub API request failed');
  const repos = (await response.json())
    .filter((r) => !r.fork && r.name !== 'Tsumbedzo_Portfolio')
    .slice(0, 6);

  return repos.map((repo) => ({
    id: repo.name,
    title: cleanName(repo.name),
    description: repo.description || `${cleanName(repo.name)} — a project by Tsumbedzo Matloga.`,
    category: guessCategory(repo),
    repoUrl: repo.html_url,
    homepage: repo.homepage,
    image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
    fallbackImage: `https://via.placeholder.com/600x400/14213d/fca311?text=${encodeURIComponent(repo.name.slice(0, 12))}`,
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
  }));
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data.length > 0 ? data : fallbackProjects))
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.portfolio-item');
    items.forEach((item) => {
      if (activeFilter === 'All' || item.dataset.category === activeFilter) {
        item.style.display = '';
        item.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        item.style.display = 'none';
      }
    });
  }, [activeFilter]);

  const filtered = loading ? [] : projects;

  return (
    <section id="projects" className="projects-section">
      <div className="container content-box-lg">
        <div className="section-heading text-center">
          <h5>My Work</h5>
          <h2>Featured <strong>Projects</strong></h2>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-filter-btn ${activeFilter === cat ? 'filter-active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row" ref={gridRef}>
          {(loading ? [1, 2, 3] : filtered).map((project, index) =>
            loading ? (
              <div className="col-lg-4 col-md-6 portfolio-item" key={index}>
                <div className="portfolio-skeleton">
                  <div className="skeleton-bar" style={{ height: '200px' }}></div>
                </div>
              </div>
            ) : (
              <div
                className="col-lg-4 col-md-6 portfolio-item"
                key={project.id}
                data-category={project.category}
              >
                <div className="portfolio-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => handleImageError(e, project.fallbackImage)}
                  />
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="portfolio-links">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="bi bi-github"></i>
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" title="Live Demo">
                          <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-general btn-yellow"
          >
            View All on GitHub <Github size={16} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
