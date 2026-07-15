import { Award, ShieldCheck, Users, Briefcase, Cloud } from 'lucide-react';

const certificates = [
  {
    name: 'Honours Degree',
    icon: <Award />,
    description: 'Bachelor of Science Honours in Computer Science.',
    href: 'https://drive.google.com/file/d/1tsu_748fGVcDXssY8KBmdff0dWjuIYjX/view?usp=drive_link'
  },
  {
    name: 'AWS Certified SysOps Administrator - Associate',
    icon: <ShieldCheck />,
    description: 'Validation of technical expertise in deploying, managing, and operating on the AWS platform.',
    href: 'https://drive.google.com/file/d/1zRTLQ9luB_UIp6jRJIfBmaF_MfZS8ze9/view?usp=drive_link'
  },
  {
    name: 'Class Representative',
    icon: <Users />,
    description: 'Elected to represent and advocate for fellow students\' academic interests and concerns.',
    href: 'https://drive.google.com/file/d/1faY7P4RS-e8IgmgLSRE5Ip91E5F5DU29/view?usp=drive_link'
  },
  {
    name: 'Computer Science Laboratory Assistant',
    icon: <Briefcase />,
    description: 'Provided technical support and guidance to students in a laboratory setting.',
    href: 'https://drive.google.com/file/d/17VfpZopWgE65tZybZ1QoNBFfR50JrD-b/view?usp=drive_link'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    icon: <Cloud />,
    description: 'Demonstrates a fundamental understanding of AWS Cloud concepts, services, and terminology.',
    href: 'https://drive.google.com/file/d/1lsfO44WSq9RgRhKWZYd0CV7lhR0EHNuy/view?usp=drive_link'
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="skills-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Certificates & Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            A showcase of my professional certifications and notable achievements.
          </p>
        </div>
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <a key={certificate.name} href={certificate.href} target="_blank" rel="noopener noreferrer" className="certificate-link">
              <div className="certificate-card">
                <div className="certificate-icon">{certificate.icon}</div>
                <h3 className="certificate-name">{certificate.name}</h3>
                <p className="certificate-desc">{certificate.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
