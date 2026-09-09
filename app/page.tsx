import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import {
  About,
  Experience,
  Contact,
  Footer,
  Projects,
  Skills,
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
      <section className="relative">
        <div className="grid-pattern absolute inset-x-0 top-0 h-[620px]" />
        <div className="shell relative grid min-h-[600px] items-center gap-10 py-14 sm:py-18 lg:py-22 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <div className="flex flex-col gap-3">
                <p className="eyebrow">AI · DATA SCIENCE · GENAI · BACKEND</p>
                <div
                  className="group/avail inline-flex w-fit items-center gap-2.5 rounded-full border px-3.5 py-1.5 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface-raised)] cursor-default"
                  style={{
                    borderColor: "var(--line)",
                    backgroundColor: "color-mix(in srgb, var(--surface) 80%, transparent)",
                  }}
                >
                  <span
                    className="availability-dot h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--text)]">
                    Available for opportunities
                  </span>
                  <span className="text-[var(--line)] text-xs leading-none select-none">•</span>
                  <span className="text-[0.72rem] font-medium text-[var(--muted)]">
                    Internships · Full-time
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display mt-5 text-4xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.06] tracking-tight">
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

            <Reveal delay={0.24} className="mt-8 flex gap-5">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tanmay on GitHub"
                className="icon-link"
              >
                <Github size={19} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tanmay on LinkedIn"
                className="icon-link"
              >
                <Linkedin size={19} />
              </a>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Tanmay via Gmail (opens compose in new tab)"
                className="icon-link"
              >
                <Mail size={19} />
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
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
