const PHONE_DISPLAY = '076 366 4740';
const PHONE_E164 = '+27763664740';
const WHATSAPP_NUMBER = '27763664740';

function buildMessage(name, subject, message) {
  const parts = [];
  if (name) parts.push(`Name: ${name}`);
  if (subject) parts.push(`Subject: ${subject}`);
  parts.push('', message || '');
  return parts.join('\n');
}

export default function ContactSection() {
  const handleSend = (channel) => (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const name = form.querySelector('[name="name"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!message) {
      form.querySelector('[name="message"]').focus();
      return;
    }

    const text = buildMessage(name, subject, message);

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    } else {
      window.location.href = `sms:${PHONE_E164}?body=${encodeURIComponent(text)}`;
    }
  };

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
                <i className="bi bi-whatsapp"></i>
                <span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-inline-link"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </li>
              <li>
                <i className="bi bi-phone"></i>
                <span>
                  <a href={`sms:${PHONE_E164}`} className="contact-inline-link">
                    {PHONE_DISPLAY}
                  </a>
                </span>
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
            <p>Write your message below, then send it via WhatsApp or SMS — no email needed.</p>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="contact-name">Your Name</label>
                  <input type="text" name="name" id="contact-name" className="form-control" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-subject">Subject</label>
                  <input type="text" name="subject" id="contact-subject" className="form-control" placeholder="What's it about?" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="contact-message">Message</label>
                  <textarea name="message" id="contact-message" className="form-control" rows="6" placeholder="Type your message..." required></textarea>
                </div>
                <div className="col-md-12 contact-send-buttons">
                  <button type="button" className="btn-general btn-yellow contact-send-btn" onClick={handleSend('whatsapp')}>
                    <i className="bi bi-whatsapp"></i> Send via WhatsApp
                  </button>
                  <button type="button" className="btn-general btn-outline contact-send-btn" onClick={handleSend('sms')}>
                    <i className="bi bi-chat-dots"></i> Send via SMS
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
