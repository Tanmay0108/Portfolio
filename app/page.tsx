import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import {
  About,
  Experience,
  Contact,
  Footer,
  Projects,
  Skills,
  Credentials,
} from "@/components/Sections";
import { TechEcosystem, TechStackFlow } from "@/components/TechStackFlow";
import { Reveal } from "@/components/Reveal";
import { BackToTop } from "@/components/BackToTop";
import { GMAIL_COMPOSE_URL } from "@/components/ContactEmail";

const github = "https://github.com/Tanmay0108";
const linkedin = "https://www.linkedin.com/in/tanmay-potnurwar-a76745357/";

export default function Home() {
  return (
    <main id="top" className="page">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-12 lg:pt-14">
        <div className="grid-pattern absolute inset-x-0 top-0 h-[600px]" />
        <div className="shell relative grid items-center gap-10 lg:gap-12 py-6 sm:py-8 lg:py-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <div className="flex flex-col gap-3">
                <p className="eyebrow">AI · DATA SCIENCE · GENAI · BACKEND</p>
                <div
                  className="inline-flex flex-wrap items-center gap-2 rounded-full border px-3.5 py-1.5 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface-raised)] cursor-default select-none w-fit"
                  style={{
                    borderColor: "var(--line)",
                    backgroundColor: "color-mix(in srgb, var(--surface) 80%, transparent)",
                  }}
                >
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                    <span
                      className="availability-dot absolute inline-flex h-full w-full rounded-full opacity-70"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-1.5 w-1.5"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  </span>
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[var(--text)]">
                    Available for opportunities
                  </span>
                  <span className="text-[var(--muted)] text-xs select-none">•</span>
                  <span className="font-mono text-[0.68rem] text-[var(--muted)] font-medium">
                    Internships · Full-time
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display mt-5 text-4xl sm:text-6xl lg:text-[3.75rem] xl:text-[4.15rem] leading-[1.06] tracking-tight">
                Hi, I'm Tanmay.
                <br />
                <span style={{ color: "var(--accent)" }}>
                  I build intelligent systems.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 max-w-xl space-y-3">
                <p className="muted text-base sm:text-lg lg:text-xl leading-relaxed">
                  I build practical AI, data, and backend systems—from RAG pipelines and NLP applications to analytics workflows and APIs.
                </p>
                <p className="muted text-sm sm:text-base leading-relaxed text-[var(--muted)]">
                  Final-year Computer Engineering student focused on turning complex technical problems into dependable, production-ready solutions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                <span>View my projects</span>
                <ArrowRight size={17} />
              </a>
              <a
                href="/resume/tanmay-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn group/resume"
              >
                <span>Download resume</span>
                <ArrowDown size={17} className="transition-transform duration-200 group-hover/resume:translate-y-0.5" />
              </a>
            </Reveal>

            <Reveal delay={0.24} className="mt-8 flex items-center gap-3.5">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tanmay on GitHub (opens in new tab)"
                className="icon-link"
              >
                <Github size={20} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tanmay on LinkedIn (opens in new tab)"
                className="icon-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Tanmay via Gmail (opens compose in new tab)"
                className="icon-link"
              >
                <Mail size={20} />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="hidden lg:block">
            <TechEcosystem />
          </Reveal>
        </div>
      </section>

      <TechStackFlow />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
