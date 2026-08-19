export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>About</h2>
        <p>Passionate software engineer building scalable, efficient applications.</p>
      </div>

      <div className="container">
        <div className="row gy-4 about-row">
          <div className="col-lg-4">
            <img src="/tsumbedzo-matloga.jpg" className="about-img" alt="Tsumbedzo Matloga" />
          </div>
          <div className="col-lg-8 about-content">
            <h2>Software Engineer &amp; Developer.</h2>
            <p className="about-italic">
              I am a software engineer with expertise in Java, object-oriented design, and backend development.
              Skilled in building scalable applications, debugging, and contributing to agile teams.
            </p>
            <div className="row about-details">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc Honours Computer Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>tsumbedzo-portfolio.vercel.app</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>076 366 4740</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Fourways, South Africa</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Experience:</strong> <span>1+ Years</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>tsumbedzomatloga@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              My dedication is to writing clean, efficient, and maintainable code while continuously
              expanding my knowledge of modern software engineering practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
