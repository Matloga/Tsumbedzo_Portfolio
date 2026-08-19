import { useEffect, useRef, useState } from 'react';

const titles = ['Software Engineer', 'Software Developer', 'Full Stack Developer'];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/backgroundWallpaper.jpg" alt="" className="hero-bg-img" />
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <h2>Tsumbedzo Matloga</h2>
        <p>
          I'm <span className="typed">{displayText}</span>
          <span className="typed-cursor">|</span>
        </p>
      </div>
    </section>
  );
}
