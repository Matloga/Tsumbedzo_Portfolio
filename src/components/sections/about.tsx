import Image from 'next/image';
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
    <section id="about" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                About Me
            </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3 md:gap-16 items-start">
          <div className="md:col-span-1 space-y-6">
            <div className="relative aspect-square max-w-sm mx-auto">
                <Image
                src="/tsumbedzo-matloga.jpg"
                alt="A professional headshot of Tsumbedzo Matloga."
                fill
                className="rounded-lg object-contain shadow-lg"
                />
            </div>
            <div className="space-y-4 text-muted-foreground text-center md:text-left">
              <h3 className="font-headline text-2xl font-bold">Tsumbedzo Matloga</h3>
              <p className="text-primary font-medium">Full Stack Developer</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-12">
            <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-primary">Bio</h3>
                <p className='text-muted-foreground'>
                    Hello! I'm Tsumbedzo, a dedicated software developer with a knack for turning complex problems into beautiful, intuitive designs. My journey in tech started with a fascination for how things work, and it has evolved into a full-fledged passion for software development. I specialize in front-end development, with a strong command of React and its ecosystem. I thrive on building responsive, scalable, and accessible web applications. I'm also proficient in back-end technologies like Node.js, allowing me to build full-stack solutions.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-primary">Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {details.map(detail => (
                        <div key={detail.label} className="flex items-start gap-4">
                            <div className="text-primary flex-shrink-0 mt-1">{detail.icon}</div>
                            <div className='min-w-0 flex-1'>
                                <span className='text-sm text-muted-foreground'>{detail.label}</span>
                                {detail.label === 'Email' ? (
                                    <a href={`mailto:${detail.value}`} className='font-semibold block hover:underline break-all text-sm'>{detail.value}</a>
                                ) : (
                                    <p className='font-semibold break-words'>{detail.value}</p>
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
