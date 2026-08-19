import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: 'bi-emoji-smile', end: 10, label: 'Happy Clients', suffix: '+' },
  { icon: 'bi-journal-richtext', end: 15, label: 'Projects', suffix: '+' },
  { icon: 'bi-headset', end: 500, label: 'Hours Of Support', suffix: '+' },
  { icon: 'bi-people', end: 5, label: 'Team Collaborations', suffix: '+' },
];

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
  return (
    <section id="stats" className="stats section">
      <div className="container">
        <div className="row gy-4 stats-row">
          {stats.map((stat) => (
            <div className="col-lg-3 col-md-6" key={stat.label}>
              <div className="stats-item">
                <i className={`bi ${stat.icon}`}></i>
                <Counter end={stat.end} suffix={stat.suffix} />
                <p><strong>{stat.label}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
