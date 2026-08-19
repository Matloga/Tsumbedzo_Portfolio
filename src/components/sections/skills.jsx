import { useEffect, useRef } from 'react';

const skills = [
  { name: 'Java', percent: 90 },
  { name: 'TypeScript', percent: 85 },
  { name: 'Next.js / React', percent: 85 },
  { name: 'Node.js', percent: 80 },
  { name: 'Spring Boot', percent: 75 },
  { name: 'SQL / MySQL', percent: 80 },
  { name: 'Git / GitHub', percent: 90 },
  { name: 'Tailwind CSS', percent: 85 },
];

export default function SkillsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.progress-bar').forEach((bar) => {
            bar.style.width = bar.getAttribute('data-percent') + '%';
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title">
        <h2>Skills</h2>
        <p>Technologies and tools I use to build modern applications.</p>
      </div>

      <div className="container" ref={ref}>
        <div className="row skills-content">
          <div className="col-lg-6">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span>
                  <i className="val">{skill.percent}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-percent={skill.percent}
                    aria-valuenow={skill.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span>
                  <i className="val">{skill.percent}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-percent={skill.percent}
                    aria-valuenow={skill.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
