import { Card } from "@/components/ui/card";
import { 
  Type, 
  Globe, 
  Server, 
  Wind, 
  GitBranch, 
  Database, 
  Code, 
  Github, 
  Leaf, 
  Binary, 
  Box,
  IterationCw,
  LayoutTemplate
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: 'TypeScript', icon: <Type /> },
      { name: 'Java', icon: <Code /> },
      { name: 'SQL', icon: <Database /> },
    ]
  },
  {
    title: "Frameworks & Databases",
    skills: [
      { name: 'Next.js', icon: <Globe /> },
      { name: 'Node.js', icon: <Server /> },
      { name: 'Spring', icon: <Leaf /> },
      { name: 'MySQL', icon: <Database /> },
      { name: 'SQL Server', icon: <Database /> },
      { name: 'Tailwind CSS', icon: <Wind /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: 'Git', icon: <GitBranch /> },
      { name: 'GitHub', icon: <Github /> },
      { name: 'VS Code', icon: <Code /> },
      { name: 'IntelliJ', icon: <Code /> },
      { name: 'Eclipse', icon: <Code /> },
    ]
  },
  {
    title: "Concepts",
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
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            My Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            A collection of technologies I'm proficient in and use to build modern web applications.
          </p>
        </div>
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-center font-headline text-2xl font-bold mb-8 text-primary">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                    <div className="text-primary mb-4 [&>svg]:h-12 [&>svg]:w-12">
                      {skill.icon}
                    </div>
                    <p className="font-semibold">{skill.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
