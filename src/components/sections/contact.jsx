import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '../ui/label';

const FORMSPREE_ID = 'xzdnddyy';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Card className="contact-card">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Get In Touch
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              Have a question or want to work together? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              className="contact-form"
              target="_blank"
            >
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this empty</label>
                <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
              </div>

              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-field">
                <Label htmlFor="name">Name</Label>
                <input
                  className="input"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  minLength={2}
                />
              </div>
              <div className="form-field">
                <Label htmlFor="email">Email</Label>
                <input
                  className="input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-field">
                <Label htmlFor="message">Message</Label>
                <textarea
                  className="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                  minLength={10}
                  rows={5}
                />
              </div>

              <button type="submit" className="btn btn-default form-submit">
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
