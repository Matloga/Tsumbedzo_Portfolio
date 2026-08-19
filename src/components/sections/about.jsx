const cards = [
  { icon: 'bi-code-slash', title: 'Clean Code', desc: 'Writing maintainable, efficient, and well-documented code is my passion.' },
  { icon: 'bi-lightbulb', title: 'Innovation', desc: 'Always exploring new technologies and creative solutions to complex problems.' },
  { icon: 'bi-book', title: 'Continuous Learning', desc: 'Committed to growing my skills and staying current with industry trends.' },
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
                I am a software engineer with expertise in Java, object-oriented design, and backend development.
                Skilled in building scalable applications, debugging, and contributing to agile teams.
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
                My dedication is to writing clean, efficient, and maintainable code while continuously
                expanding my knowledge of modern software engineering practices.
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
