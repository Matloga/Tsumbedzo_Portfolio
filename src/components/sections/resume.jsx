export default function ResumeSection() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title">
        <h2>Resume</h2>
        <p>My educational background and professional experience.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 resume-column">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Tsumbedzo Matloga</h4>
              <p>
                <em>
                  Innovative and deadline-driven Software Engineer with experience designing and
                  developing user-centered digital applications from initial concept to final deliverable.
                </em>
              </p>
              <ul>
                <li>Fourways, South Africa</li>
                <li>tsumbedzomatloga@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BSc Honours in Computer Science</h4>
              <h5>2023 - 2024</h5>
              <p><em>University of Limpopo</em></p>
              <p>Focused on advanced computing concepts, algorithms, and software engineering practices.</p>
            </div>
            <div className="resume-item">
              <h4>BSc in Mathematical Sciences</h4>
              <h5>2020 - 2023</h5>
              <p><em>University of Limpopo</em></p>
              <p>Foundational studies in mathematics, statistics, and computer science.</p>
            </div>
          </div>

          <div className="col-lg-6 resume-column">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>2024 - Present</h5>
              <p><em>Freelance / Contract</em></p>
              <ul>
                <li>Developing full-stack web applications using React, Next.js, and Java Spring Boot</li>
                <li>Designing and implementing RESTful APIs and database schemas</li>
                <li>Deploying applications on cloud platforms including AWS and Vercel</li>
                <li>Collaborating with teams using Git, GitHub, and agile methodologies</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Class Representative</h4>
              <h5>2023 - 2024</h5>
              <p><em>University of Limpopo</em></p>
              <ul>
                <li>Elected to represent and advocate for fellow students' academic interests</li>
                <li>Organized study groups and technical workshops</li>
                <li>Mediated between students and faculty on academic matters</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Computer Science Laboratory Assistant</h4>
              <h5>2022 - 2023</h5>
              <p><em>University of Limpopo</em></p>
              <ul>
                <li>Provided technical support and guidance to students in laboratory settings</li>
                <li>Assisted with debugging and code review sessions</li>
                <li>Maintained lab equipment and software environments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
