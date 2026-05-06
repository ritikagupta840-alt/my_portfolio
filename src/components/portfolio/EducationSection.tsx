import ScrollReveal from "../ScrollReveal";
import { GraduationCap, Award, Sparkles } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-28 bg-secondary/50" id="education">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Credentials</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 leading-tight">
            Education & Growth
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal delay={60}>
              <div className="glass-card rounded-xl p-6 flex gap-5 group hover:glow-accent transition-all duration-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 shrink-0 transition-colors">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5">Master of Computer Applications (MCA)</h4>
                  <p className="text-sm text-muted-foreground">Jagan Institute of Management Studies (GGSIPU), Rohini</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="font-mono text-xs text-accent bg-accent/10 rounded-full px-3 py-1">2022–24</span>
                    <span className="font-mono text-xs text-muted-foreground">75%</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="glass-card rounded-xl p-6 flex gap-5 group hover:glow-accent transition-all duration-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 shrink-0 transition-colors">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-sm text-muted-foreground">BVIMR (Pune University), Delhi</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="font-mono text-xs text-accent bg-accent/10 rounded-full px-3 py-1">2019–22</span>
                    <span className="font-mono text-xs text-muted-foreground">85%</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={180}>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {[
                  { title: "Python Certificate", source: "E-Learning" },
                  { title: "Data Structure in C", source: "E-Learning" },
                ].map((cert, i) => (
                  <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:glow-accent transition-all duration-400">
                    <Award className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm">{cert.title}</h5>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Personal traits */}
          <ScrollReveal delay={200}>
            <div className="glass-card rounded-xl p-6 h-fit glow-accent">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">Personal Qualities</h3>
              </div>
              <div className="space-y-5">
                {[
                  { trait: "Active Learner", desc: "Dedicated to keeping up with changing IT trends and tools." },
                  { trait: "Collaborative", desc: "Strong experience working with developers and stakeholders to achieve goals." },
                  { trait: "Adaptive", desc: "Flexible in adjusting to new project requirements and fast-paced environments." },
                ].map((item) => (
                  <div key={item.trait}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-semibold">{item.trait}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;