import { Card } from "@/components/ui/card";
import { Award, ShieldCheck, Users, Briefcase, Cloud } from "lucide-react";

const certificates = [
  {
    name: "Honours Degree",
    icon: <Award />,
    description: "Bachelor of Science Honours in Computer Science."
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    icon: <ShieldCheck />,
    description: "Validation of technical expertise in deploying, managing, and operating on the AWS platform."
  },
  {
    name: "Class Representative",
    icon: <Users />,
    description: "Elected to represent and advocate for fellow students' academic interests and concerns."
  },
  {
    name: "Computer Science Laboratory Assistant",
    icon: <Briefcase />,
    description: "Provided technical support and guidance to students in a laboratory setting."
  },
  {
    name: "AWS Certified Cloud Practitioner",
    icon: <Cloud />,
    description: "Demonstrates a fundamental understanding of AWS Cloud concepts, services, and terminology."
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Certificates & Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            A showcase of my professional certifications and notable achievements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card key={certificate.name} className="flex flex-col items-center justify-start p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg bg-card">
              <div className="text-primary mb-4 [&>svg]:h-12 [&>svg]:w-12">
                {certificate.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{certificate.name}</h3>
              <p className="text-muted-foreground text-sm">{certificate.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
