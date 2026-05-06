import ScrollReveal from "../ScrollReveal";

const AboutSection = () => {
  return (
    <section className="py-28 relative" id="about">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="section-label">About Me</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Ensuring <span className="gradient-text">quality</span> at every layer
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                Results-oriented Software Quality Assurance Engineer with 2 years of experience 
                specializing in manual testing across web, mobile, and system applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Expert in ensuring product reliability and stability through rigorous end-to-end testing, 
                bug tracking, and documentation. Proven ability to bridge the gap between technical 
                teams and clients, managing project lifecycles from scoping to delivery.
              </p>
            </ScrollReveal>
          </div>

          {/* Visual element */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 glow-accent">
                <div className="space-y-4">
                  {[
                    { label: "Test Coverage", value: 98, color: "bg-accent" },
                    { label: "Bug Detection Rate", value: 95, color: "bg-accent" },
                    { label: "Client Satisfaction", value: 100, color: "bg-accent" },
                    { label: "On-Time Delivery", value: 97, color: "bg-accent" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className="font-mono text-sm text-accent">{item.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl border border-accent/20" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;