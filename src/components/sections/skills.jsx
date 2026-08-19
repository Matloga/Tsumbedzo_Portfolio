const skills = [
  { name: 'Java', src: '/skills/java.svg' },
  { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React / Next.js', src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Spring Boot', src: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  { name: 'SQL / MySQL', src: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Git / GitHub', src: 'https://cdn.simpleicons.org/github/F05032' },
  { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'AWS', src: '/skills/aws.svg' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB' },
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
