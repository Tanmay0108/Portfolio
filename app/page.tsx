import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { About, Contact, Footer, Projects, Skills } from "@/components/Sections";
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
      <section className="relative">
        <div className="grid-pattern absolute inset-x-0 top-0 h-[620px]" />
        <div className="shell relative grid min-h-[640px] items-center gap-12 py-16 sm:py-20 lg:py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <div className="flex flex-col gap-2">
                <p className="eyebrow">AI · DATA SCIENCE · GENAI · BACKEND</p>
                <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[var(--muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to internships & full-time opportunities</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display mt-6 text-4xl sm:text-6xl lg:text-[4.15rem] xl:text-[4.85rem] leading-[1.02] tracking-tight">
                Hi, I'm Tanmay.
                <br />
                <span style={{ color: "var(--accent)" }}>
                  I build intelligent systems.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="muted mt-7 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed">
                Final-year Computer Engineering student building practical systems with AI, data, and backend technologies. Focused on Data Science, NLP, Generative AI, analytics, and automation.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                View my projects <ArrowRight size={17} />
              </a>
              <a
                href="/resume/tanmay-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Download resume <ArrowDown size={17} />
              </a>
            </Reveal>

            <Reveal delay={0.3} className="mt-9 flex gap-5">
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

          <Reveal delay={0.2} className="hidden lg:block">
            <TechEcosystem />
          </Reveal>
        </div>
      </section>

      <TechStackFlow />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
