import ScrollReveal from "../ScrollReveal";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-28 bg-primary relative overflow-hidden" id="contact">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="section-label" style={{ color: "hsl(var(--accent))" }}>Get In Touch</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-primary-foreground leading-tight">
                Let's build something <span className="gradient-text">reliable</span> together
              </h2>
              <p className="text-primary-foreground/50 text-lg">
                Open to QA roles, freelance testing projects, and collaboration opportunities.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 backdrop-blur-sm">
              {/* Terminal-style contact */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
                <span className="ml-auto font-mono text-[10px] text-primary-foreground/30">contact_info</span>
              </div>

              <div className="space-y-5">
                <a href="mailto:ritikagupta840@gmail.com" className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-primary-foreground/30 uppercase tracking-wider">Email</p>
                    <p className="text-sm text-primary-foreground/80 group-hover:text-accent transition-colors">ritikagupta840@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-primary-foreground/30 uppercase tracking-wider">Phone</p>
                    <p className="text-sm text-primary-foreground/80">+91-7988643428</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-primary-foreground/30 uppercase tracking-wider">Location</p>
                    <p className="text-sm text-primary-foreground/80">Paschim Vihar, New Delhi-110063</p>
                  </div>
                </div>

                <a href="https://linkedin.com/in/ritika-g-b69900350" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-primary-foreground/30 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm text-primary-foreground/80 group-hover:text-accent transition-colors">ritika-g-b69900350</p>
                  </div>
                </a>

                <div className="pt-4 border-t border-primary-foreground/10">
                  <a
                    href="mailto:ritikagupta840@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-all duration-300 active:scale-[0.97] w-full justify-center"
                  >
                    <Send className="h-4 w-4" />
                    Send me a message
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <ScrollReveal delay={200}>
          <div className="mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-primary-foreground/30">
              © 2024 Ritika Gupta. All tests passed.
            </p>
            <p className="font-mono text-xs text-primary-foreground/20">
              Built with precision & attention to detail
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;