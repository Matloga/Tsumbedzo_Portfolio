const FORMSPREE_ID = 'xzdnddyy';

export default function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>Get in touch — I'd love to hear from you.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>Fourways, South Africa</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>tsumbedzomatloga@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-phone"></i>
                <div>
                  <h3>Call</h3>
                  <p>076 366 4740</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              className="php-email-form"
              target="_blank"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field">Your Name</label>
                  <input type="text" name="name" id="name-field" className="input" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field">Your Email</label>
                  <input type="email" name="email" id="email-field" className="input" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field">Subject</label>
                  <input type="text" name="subject" id="subject-field" className="input" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field">Message</label>
                  <textarea name="message" id="message-field" className="textarea" rows="8" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-default">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
