import { useEffect, useState } from 'react';

const titles = ['Software Engineer', 'Software Developer', 'Full Stack Developer'];

const backgrounds = [
  { src: '/backgrounds/01-code-screen.jpg', name: 'Code on Screen' },
  { src: '/backgrounds/02-laptop-coding.jpg', name: 'Laptop Coding' },
  { src: '/backgrounds/03-neon-tech.jpg', name: 'Neon Tech' },
  { src: '/backgrounds/04-circuit-board.jpg', name: 'Circuit Board' },
  { src: '/backgrounds/05-matrix.jpg', name: 'Matrix' },
  { src: '/backgrounds/06-server-room.jpg', name: 'Server Room' },
  { src: '/backgrounds/07-dual-monitors.jpg', name: 'Dual Monitors' },
  { src: '/backgrounds/08-devices-laptop.jpg', name: 'Devices & Laptop' },
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [bgIndex, setBgIndex] = useState(() => {
    const saved = localStorage.getItem('hero-bg');
    return saved !== null ? Number(saved) : 0;
  });
  const [previewing, setPreviewing] = useState(false);

  const pickBg = (i) => {
    setBgIndex(i);
    localStorage.setItem('hero-bg', i);
  };

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

  useEffect(() => {
    if (!previewing) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setPreviewing(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [previewing]);

  return (
    <section id="hero" className="hero-section">
      <img
        src={backgrounds[bgIndex].src}
        alt=""
        className="hero-bg-video"
        key={bgIndex}
      />
      <div className="hero-overlay"></div>
      <div id="home-content">
        <div id="home-content-inner">
          <div id="home-heading">
            <h1>Tsumbedzo <span>Matloga</span></h1>
            <h3>Aspiring Professional</h3>
            <div className="typed">
              <h2>
                {displayText}
                <span className="typed-cursor">|</span>
              </h2>
            </div>
            <a
              href="#projects"
              className="btn-general btn-home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="arrow-down"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <i className="bi bi-chevron-double-down"></i>
      </a>

      {previewing && (
        <div className="bg-preview-panel">
          <div className="bg-preview-header">
            <span className="bg-preview-title">Choose a Background</span>
            <button onClick={() => setPreviewing(false)} className="bg-preview-close">
              <i className="bi bi-x-lg"></i> Done
            </button>
          </div>
          <div className="bg-preview-grid">
            {backgrounds.map((bg, i) => (
              <button
                key={bg.src}
                className={`bg-preview-thumb ${i === bgIndex ? 'active' : ''}`}
                onClick={() => pickBg(i)}
              >
                <img src={bg.src} alt={bg.name} />
                <span>{bg.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
