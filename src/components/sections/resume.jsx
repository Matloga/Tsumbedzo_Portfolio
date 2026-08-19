export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section">
      <div className="container content-box-lg">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h5>My Journey</h5>
              <h2>Education</h2>
            </div>
            <div className="resume-timeline">
              <div className="resume-item">
                <h4>BSc Honours in Computer Science</h4>
                <h5>2023 - 2024</h5>
                <p className="resume-institution">University of Limpopo</p>
                <p>Focused on advanced computing concepts, algorithms, and software engineering practices.</p>
              </div>
              <div className="resume-item">
                <h4>BSc in Mathematical Sciences</h4>
                <h5>2020 - 2023</h5>
                <p className="resume-institution">University of Limpopo</p>
                <p>Foundational studies in mathematics, statistics, and computer science.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <h5>Experience</h5>
              <h2>Professional <strong>Experience</strong></h2>
            </div>
            <div className="resume-timeline">
              <div className="resume-item">
                <h4>Software Engineer</h4>
                <h5>2024 - Present</h5>
                <p className="resume-institution">Freelance / Contract</p>
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
                <p className="resume-institution">University of Limpopo</p>
                <ul>
                  <li>Elected to represent and advocate for fellow students' academic interests</li>
                  <li>Organized study groups and technical workshops</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Computer Science Lab Assistant</h4>
                <h5>2022 - 2023</h5>
                <p className="resume-institution">University of Limpopo</p>
                <ul>
                  <li>Provided technical support and guidance to students in laboratory settings</li>
                  <li>Assisted with debugging and code review sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
