import { Mail, MapPin, Phone, ArrowDown, Linkedin, Download } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Key Projects" },
  { value: "100%", label: "Test Coverage" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroPattern} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-accent/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-xs text-accent tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.92] mb-6 text-primary-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              Ritika
              <br />
              <span className="gradient-text">Gupta</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 font-light mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
              Software Quality Assurance Engineer crafting reliable digital experiences through meticulous testing.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 animate-fade-up" style={{ animationDelay: "250ms" }}>
              <a
                href="/Ritika_Gupta_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/60 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <span className="inline-flex items-center gap-1.5 bg-primary-foreground/5 rounded-full px-3 py-1.5 border border-primary-foreground/10">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                New Delhi, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary-foreground/5 rounded-full px-3 py-1.5 border border-primary-foreground/10">
                <Phone className="h-3.5 w-3.5 text-accent" />
                +91-7988643428
              </span>
              <a href="mailto:ritikagupta840@gmail.com" className="inline-flex items-center gap-1.5 bg-primary-foreground/5 rounded-full px-3 py-1.5 border border-primary-foreground/10 hover:border-accent/40 transition-colors">
                <Mail className="h-3.5 w-3.5 text-accent" />
                ritikagupta840@gmail.com
              </a>
              <a href="https://linkedin.com/in/ritika-g-b69900350" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary-foreground/5 rounded-full px-3 py-1.5 border border-primary-foreground/10 hover:border-accent/40 transition-colors">
                <Linkedin className="h-3.5 w-3.5 text-accent" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Terminal + Stats */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {/* Terminal */}
            <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 backdrop-blur-sm glow-accent">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
                <span className="ml-auto font-mono text-[10px] text-primary-foreground/30">qa_terminal</span>
              </div>
              <div className="font-mono text-xs space-y-1.5">
                <p className="text-primary-foreground/40">$ run test-suite --comprehensive</p>
                <p className="text-accent">✓ Manual QA Testing <span className="text-primary-foreground/30">────── passed</span></p>
                <p className="text-accent">✓ API Testing <span className="text-primary-foreground/30">──────────── passed</span></p>
                <p className="text-accent">✓ E2E Testing <span className="text-primary-foreground/30">─────────── passed</span></p>
                <p className="text-accent">✓ Regression Testing <span className="text-primary-foreground/30">──── passed</span></p>
                <p className="text-primary-foreground/40 mt-3">
                  <span className="text-accent">4 passed</span> · 0 failed · 0 skipped
                  <span className="inline-block w-px h-3 bg-accent ml-1 animate-cursor-blink" />
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="text-center rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[10px] text-primary-foreground/40 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-primary-foreground/30 hover:text-accent transition-colors">
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;