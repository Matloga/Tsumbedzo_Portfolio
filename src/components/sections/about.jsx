import { Briefcase, CalendarCheck, Mail, MapPin, GraduationCap, Phone } from 'lucide-react';

const details = [
  { icon: <Briefcase size={20} />, label: 'Experience', value: '1+ Years' },
  { icon: <GraduationCap size={20} />, label: 'BSc', value: 'Mathematical Sciences' },
  { icon: <GraduationCap size={20} />, label: 'BSc Honours', value: 'Computer Sciences' },
  { icon: <MapPin size={20} />, label: 'Based In', value: '3266, Milkweed Street, Riverside View 2191, Ext 35, Fourways' },
  { icon: <Mail size={20} />, label: 'Email', value: 'tsumbedzomatloga@gmail.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '0763664740 & 0751412268' },
  { icon: <CalendarCheck size={20} />, label: 'Availability', value: 'Open to Work' },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            About Me
          </h2>
        </div>
        <div className="about-grid md:grid-cols-3 md:gap-16">
          <div className="md:col-span-1 space-y-6">
            <div className="about-photo-wrapper">
              <img src="/tsumbedzo-matloga.jpg" alt="A professional headshot of Tsumbedzo Matloga." />
            </div>
            <div className="space-y-4 text-muted-foreground text-center md:text-left">
              <h3 className="font-headline text-2xl font-bold">Tsumbedzo Matloga</h3>
              <p className="text-primary font-medium">Full Stack Developer</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-12">
            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold text-primary">Bio</h3>
              <p className="text-muted-foreground">
                I am a software engineer with expertise in Java, object-oriented design, and backend development. I am skilled in building scalable applications, debugging, and contributing to agile teams. My dedication is to writing clean, efficient, and maintainable code while continuously expanding my knowledge of modern software engineering practices.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold text-primary">Details</h3>
              <div className="about-details-grid">
                {details.map(detail => (
                  <div key={detail.label} className="about-detail-item">
                    <div className="about-detail-icon">{detail.icon}</div>
                    <div className="about-detail-text">
                      <span className="about-detail-label">{detail.label}</span>
                      {detail.label === 'Email' ? (
                        <a href={`mailto:${detail.value}`} className="about-detail-value block hover:underline break-all text-sm">{detail.value}</a>
                      ) : (
                        <p className="about-detail-value break-words">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
