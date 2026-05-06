import ScrollReveal from "../ScrollReveal";
import { Briefcase, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Activity Tracking Chrome Extension",
    tag: "Browser Extension",
    description: "Validated a specialized extension tracking user activities within the browser. Verified accurate transfer and analysis of activity data within analytics software.",
  },
  {
    name: "On-Demand Cab Service Platform",
    tag: "Mobile App",
    description: "End-to-end testing for a dual-interface application with real-time booking, driver dispatch, and drop-off location accuracy.",
  },
  {
    name: "Fencing Design Platform",
    tag: "Mobile + Web",
    description: "Tested a contractor-focused system with Google Maps integration for layout drawing, material calculation, and appointment management.",
  },
  {
    name: "Social Food Marketplace",
    tag: "Full Stack",
    description: "Validated a cloud-kitchen app with buyer/seller roles, real-time order tracking, and social media integrations.",
  },
  {
    name: "System Inactivity Software",
    tag: "System App",
    description: "Tested a system-level extension managing screensavers and alerts based on user-defined inactivity timers.",
  },
];

const responsibilities = [
  "Lead QA process for diverse software products including mobile apps, websites, web apps, and system-level applications",
  "Managed projects single-handedly — direct client communication, scope definition, and delivery timelines",
  "Collaborated with developers to execute project plans and ensure software stability before release",
];

const ExperienceSection = () => {
  return (
    <section className="py-28 relative" id="experience">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container">
        <ScrollReveal>
          <span className="section-label">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 leading-tight">
            Building <span className="gradient-text">quality</span> products
          </h2>
        </ScrollReveal>

        {/* Role card */}
        <ScrollReveal delay={80}>
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-12 glow-accent relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 shrink-0">
                <Briefcase className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">Software Quality Assurance Engineer</h3>
                <p className="text-muted-foreground">
                  <span className="text-accent font-medium">Eitbiz</span> · April 2024 – Present
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-0">
              {responsibilities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects header with count */}
        <ScrollReveal delay={120}>
          <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-accent" />
            Key Projects
            <span className="ml-1 inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[10px] font-mono text-accent">
              20+ projects
            </span>
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={160 + i * 60}>
              <div className="project-card h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider bg-accent/10 rounded-full px-2.5 py-1">{project.tag}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40" />
                </div>
                <h4 className="font-semibold text-sm mb-2 leading-snug">{project.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
