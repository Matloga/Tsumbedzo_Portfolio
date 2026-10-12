import { useEffect, useRef, useState } from 'react';
import { certificates } from './certificates';

const GITHUB_USERNAME = 'Matloga';

async function fetchGitHubStats() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!response.ok) throw new Error('GitHub API request failed');
  const user = await response.json();
  const years = Math.max(
    1,
    Math.floor((Date.now() - Date.parse(user.created_at)) / (365.25 * 24 * 60 * 60 * 1000))
  );
  return {
    repos: user.public_repos || 0,
    followers: user.followers || 0,
    years,
  };
}

function Counter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const [stats, setStats] = useState([
    { icon: 'bi-journal-richtext', end: 26, suffix: '+', label: 'Public Repositories' },
    { icon: 'bi-people', end: 3, suffix: '+', label: 'GitHub Followers' },
    { icon: 'bi-award', end: certificates.length, suffix: '', label: 'Certifications' },
    { icon: 'bi-gear', end: 5, suffix: '+', label: 'Years on GitHub' },
  ]);

  useEffect(() => {
    fetchGitHubStats()
      .then(({ repos, followers, years }) =>
        setStats([
          { icon: 'bi-journal-richtext', end: repos, suffix: '+', label: 'Public Repositories' },
          { icon: 'bi-people', end: followers, suffix: '+', label: 'GitHub Followers' },
          { icon: 'bi-award', end: certificates.length, suffix: '', label: 'Certifications' },
          { icon: 'bi-gear', end: years, suffix: '+', label: 'Years on GitHub' },
        ])
      )
      .catch(() => {});
  }, []);

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="row stats-row">
          {stats.map((stat) => (
            <div className="col-lg-3 col-md-6" key={stat.label}>
              <div className="stats-item">
                <i className={`bi ${stat.icon}`}></i>
                <Counter key={stat.end} end={stat.end} suffix={stat.suffix} />
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}