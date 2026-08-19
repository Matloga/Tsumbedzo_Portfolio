const FORMSPREE_ID = 'xzdnddyy';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container content-box-md">
        <div className="row">
          <div className="col-lg-5" id="contact-left">
            <div className="section-heading">
              <h5>Get In Touch</h5>
              <h2>Contact <strong>Me</strong></h2>
            </div>
            <p>Feel free to reach out. I'd love to hear from you.</p>
            <ul className="office-details">
              <li>
                <i className="bi bi-geo-alt"></i>
                <span>Fourways, South Africa</span>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <span>tsumbedzomatloga@gmail.com</span>
              </li>
              <li>
                <i className="bi bi-phone"></i>
                <span>076 366 4740</span>
              </li>
            </ul>
            <div className="social-menu">
              <ul>
                <li>
                  <a href="https://github.com/Matloga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/matloga-tsumbedzo-a44724343" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7" id="contact-right">
            <h4>Send a Message</h4>
            <p>Fill out the form below and I'll get back to you.</p>
            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              target="_blank"
            >
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="contact-name">Your Name</label>
                  <input type="text" name="name" id="contact-name" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-email">Your Email</label>
                  <input type="email" name="email" id="contact-email" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-phone">Phone</label>
                  <input type="text" name="phone" id="contact-phone" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-subject">Subject</label>
                  <input type="text" name="subject" id="contact-subject" className="form-control" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="contact-message">Message</label>
                  <textarea name="message" id="contact-message" className="form-control" rows="6" required></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn-general btn-yellow">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
