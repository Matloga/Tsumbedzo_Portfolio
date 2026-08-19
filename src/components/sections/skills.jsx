const skills = [
  { name: 'Java', src: '/skills/java.svg' },
  { name: 'TypeScript', src: '/skills/typescript.svg' },
  { name: 'React / Next.js', src: '/skills/react.svg' },
  { name: 'Node.js', src: '/skills/nodejs.svg' },
  { name: 'Spring Boot', src: '/skills/springboot.svg' },
  { name: 'SQL / MySQL', src: '/skills/mysql.svg' },
  { name: 'Git / GitHub', src: '/skills/github.svg' },
  { name: 'Tailwind CSS', src: '/skills/tailwindcss.svg' },
  { name: 'AWS', src: '/skills/aws.svg' },
  { name: 'Python', src: '/skills/python.svg' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="container content-box-lg">
        <div className="section-heading text-center">
          <h5>What I Do</h5>
          <h2>My <strong>Skills</strong></h2>
        </div>

        <div className="row">
          {skills.map(skill => (
            <div className="col-lg-3 col-md-4 col-6" key={skill.name}>
              <div className="service-box">
                <div className="service-icon">
                  <img src={skill.src} alt={skill.name} width="30" height="30" />
                </div>
                <h4>{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
