import ScrollReveal from "../ScrollReveal";
import { Shield, Monitor, FileText, Users, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Testing Specialties",
    icon: Shield,
    items: ["Manual QA Testing", "End-to-End Testing", "UI/UX Testing", "Functional & Regression Testing", "API Testing"],
  },
  {
    title: "Platform Expertise",
    icon: Monitor,
    items: ["Web Applications", "Mobile Apps (iOS/Android)", "Chrome Extensions", "System Applications"],
  },
  {
    title: "QA Tools",
    icon: Wrench,
    items: [
      "TestRail — Test case management",
      "Jira — Bug tracking",
      "Postman — API testing",
      "Chrome DevTools — Debugging",
      "Firefox Dev Tools — UI testing",
      "Excel / Sheets / Notion — Documentation",
      "Snipping Tool — Screenshots",
      "Loom — Video bug reporting",
    ],
  },
  {
    title: "Documentation",
    icon: FileText,
    items: ["Test Case Creation", "Test Reports", "Bug Reporting", "Project Scoping & Planning"],
  },
  {
    title: "Project Management",
    icon: Users,
    items: ["Client Communication", "Agile Methodologies", "Requirement Analysis", "Delivery Management"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-28 bg-primary" id="skills">
      <div className="container">
        <ScrollReveal>
          <span className="section-label" style={{ color: "hsl(var(--accent))" }}>
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary-foreground leading-tight">
            What I bring to the table
          </h2>
          <p className="text-primary-foreground/50 text-lg mb-16 max-w-xl">
            A comprehensive skill set spanning testing, documentation, project management, and technical proficiency.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 80}>
              <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 h-full hover:bg-primary-foreground/8 hover:border-accent/30 transition-all duration-400 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 group-hover:bg-accent/25 transition-colors">
                    <group.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground text-sm">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-full px-3 py-1 text-xs bg-primary-foreground/5 text-primary-foreground/60 border border-primary-foreground/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;