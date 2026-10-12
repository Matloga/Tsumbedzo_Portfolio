const cards = [
  { icon: 'bi-code-slash', title: 'Software Engineering', desc: 'Building scalable, maintainable applications with Java, full-stack tooling, and clean design.' },
  { icon: 'bi-shield-lock', title: 'Cybersecurity', desc: 'Securing enterprise systems through network defence, threat detection, and anomaly analysis.' },
  { icon: 'bi-graph-up', title: 'Data-Driven Research', desc: 'Applying analytics to network flows to uncover patterns and detect threats before they strike.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container content-box-lg">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left">
              <img src="/tsumbedzo-matloga.jpg" alt="Tsumbedzo Matloga" className="about-img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <div className="section-heading">
                <h5>Who I Am</h5>
                <h2>About <strong>Me</strong></h2>
              </div>
              <p>
                I am a software engineer and cybersecurity enthusiast who believes the same people who
                build systems should also help protect them. My skills span Java, object-oriented design,
                and full-stack development — sharpened by network security and threat detection. My MSc
                research develops a context-aware anomaly detection framework that secures Enterprise
                Resource Planning (ERP) systems using network flow analytics.
              </p>
              <div className="about-details-grid">
                <div className="about-detail">
                  <i className="bi bi-chevron-right"></i>
                  <div>
                    <strong>Degree:</strong> <span>BSc Honours Computer Science</span>
                  </div>
                </div>
                <div className="about-detail">
                  <i className="bi bi-chevron-right"></i>
                  <div>
                    <strong>Email:</strong> <span>tsumbedzomatloga@gmail.com</span>
                  </div>
                </div>
                <div className="about-detail">
                  <i className="bi bi-chevron-right"></i>
                  <div>
                    <strong>Phone:</strong> <span>076 366 4740</span>
                  </div>
                </div>
                <div className="about-detail">
                  <i className="bi bi-chevron-right"></i>
                  <div>
                    <strong>City:</strong> <span>Fourways, South Africa</span>
                  </div>
                </div>
                <div className="about-detail">
                  <i className="bi bi-chevron-right"></i>
                  <div>
                    <strong>Experience:</strong> <span>1+ Years</span>
                  </div>
                </div>
                <div className="about-detail">
                  <i className="bi bi-chevron-right"></i>
                  <div>
                    <strong>Freelance:</strong> <span>Available</span>
                  </div>
                </div>
              </div>
              <p className="about-closing">
                My dedication is to writing clean, efficient, and secure code while expanding my
                knowledge of network security, data analytics, and modern software engineering practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="about-02" className="about-cards-section">
        <div className="container">
          <div className="row">
            {cards.map((card, i) => (
              <div className="col-lg-4 col-md-6" key={card.title}>
                <div className={`about-card ${i === 1 ? 'about-card-dark' : ''}`}>
                  <i className={`bi ${card.icon}`}></i>
                  <h3>{card.title}</h3>
                  <hr />
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
