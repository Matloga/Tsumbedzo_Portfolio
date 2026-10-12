const certificates = [
  {
    name: 'AWS Certified Cloud Practitioner',
    iconSrc: '/certifications/aws.svg',
    description: 'Demonstrates a fundamental understanding of AWS Cloud concepts, services, and terminology.',
    href: 'https://drive.google.com/file/d/1lsfO44WSq9RgRhKWZYd0CV7lhR0EHNuy/view?usp=drive_link'
  },
  {
    name: 'AWS Certified SysOps Administrator',
    iconSrc: '/certifications/aws.svg',
    description: 'Validation of technical expertise in deploying, managing, and operating on the AWS platform.',
    href: 'https://drive.google.com/file/d/1zRTLQ9luB_UIp6jRJIfBmaF_MfZS8ze9/view?usp=drive_link'
  },
  {
    name: 'BSc Honours in Computer Science',
    iconSrc: '/certifications/ul-logo.svg',
    description: 'Bachelor of Science Honours in Computer Science from the University of Limpopo.',
    href: 'https://drive.google.com/file/d/11s4GGbZP4VoVbAe7rmzw3GiC2In6ORIL/view?usp=drive_link'
  },
  {
    name: 'BSc in Mathematical Sciences',
    iconSrc: '/certifications/ul-logo.svg',
    description: 'Bachelor of Science in Mathematical Sciences from the University of Limpopo.',
    href: 'https://drive.google.com/file/d/13cdahTCOiolTKGybBePuGbWn2yB4QBwj/view?usp=drive_link'
  },
  {
    name: 'Class Representative',
    iconSrc: '/certifications/ul-logo.svg',
    description: 'Elected to represent and advocate for fellow students\' academic interests and concerns.',
    href: 'https://drive.google.com/file/d/1faY7P4RS-e8IgmgLSRE5Ip91E5F5DU29/view?usp=drive_link'
  },
  {
    name: 'CS Laboratory Assistant',
    iconSrc: '/certifications/ul-logo.svg',
    description: 'Provided technical support and guidance to students in a laboratory setting.',
    href: 'https://drive.google.com/file/d/17VfpZopWgE65tZybZ1QoNBFfR50JrD-b/view?usp=drive_link'
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="container content-box-lg">
        <div className="section-heading text-center">
          <h5>Achievements</h5>
          <h2>My <strong>Certificates</strong></h2>
        </div>

        <div className="row">
          {certificates.map((cert) => (
            <div className="col-lg-4 col-md-6" key={cert.name}>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-service-box"
              >
                <div className="cert-service-icon">
                  <img src={cert.iconSrc} alt={`${cert.name} logo`} />
                </div>
                <h4>{cert.name}</h4>
                <hr />
                <p>{cert.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
