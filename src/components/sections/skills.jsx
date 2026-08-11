import { Binary, Box, Database, IterationCw, LayoutTemplate } from 'lucide-react';

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', img: devicon('typescript/typescript-plain.svg') },
      { name: 'Java', img: devicon('java/java-original.svg') },
      { name: 'SQL', icon: <Database /> },
    ]
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'Next.js', img: devicon('nextjs/nextjs-original.svg') },
      { name: 'Node.js', img: devicon('nodejs/nodejs-original.svg') },
      { name: 'Spring', img: devicon('spring/spring-original.svg') },
      { name: 'MySQL', img: devicon('mysql/mysql-original.svg') },
      { name: 'SQL Server', img: devicon('microsoftsqlserver/microsoftsqlserver-plain.svg') },
      { name: 'Tailwind CSS', img: devicon('tailwindcss/tailwindcss-original.svg') },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', img: devicon('git/git-original.svg') },
      { name: 'GitHub', img: devicon('github/github-original.svg') },
      { name: 'VS Code', img: devicon('vscode/vscode-original.svg') },
      { name: 'IntelliJ', img: devicon('intellij/intellij-original.svg') },
      { name: 'Eclipse', img: devicon('eclipse/eclipse-original.svg') },
    ]
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <Binary /> },
      { name: 'Object-Oriented Programming', icon: <Box /> },
      { name: 'Design Patterns', icon: <LayoutTemplate /> },
      { name: 'Agile', icon: <IterationCw /> },
    ]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            My Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            A collection of technologies I'm proficient in and use to build modern web applications.
          </p>
        </div>
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-center font-headline text-2xl font-bold mb-8 text-primary">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon">
                      {skill.img ? (
                        <img src={skill.img} alt={`${skill.name} logo`} loading="lazy" />
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <p className="font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
