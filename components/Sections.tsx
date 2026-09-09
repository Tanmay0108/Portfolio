import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Brain,
  Sparkles,
  BarChart3,
  Server,
  Terminal,
  MapPin,
} from "lucide-react";
import { skillGroups } from "@/data/technologies";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";
import { ContactEmailActions, FooterEmailLink, EMAIL_ADDRESS } from "./ContactEmail";

const projectAssets: Record<string, string> = {
  "niyam-drishti": "/projects/niyam-drishti.png",
  coursequery: "/projects/coursequery.png",
  iverix: "/projects/iverix.svg",
  "reddinsight-ollama": "/projects/reddinsight-ollama.png",
  medvora: "/projects/medvora.png",
  "movie-recommendation-system": "/projects/movie-recommendation-system.png",
  "real-time-global-development-dashboard": "/projects/real-time-global-development-dashboard.png",
  "stock-portfolio-management-system": "/projects/stock-portfolio-management-system.png",
};

const projectGithub: Record<string, string> = {
  "niyam-drishti": "https://github.com/Tanmay0108/NiyamDrishti",
  coursequery: "https://github.com/Tanmay0108/CourseQuery",
  medvora: "https://github.com/Tanmay0108/Medvora",
  "real-time-global-development-dashboard": "https://github.com/Tanmay0108/Real-Time-Global-Development-Dashboard",
  "reddinsight-ollama": "https://github.com/Tanmay0108/ReddInsight-Ollama",
  "movie-recommendation-system": "https://github.com/Tanmay0108/movie-recommendation",
};

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell grid gap-10 lg:gap-14 items-center lg:grid-cols-[1.25fr_.75fr]">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-7">
            {/* Professional Headshot */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl border aspect-[4/5] w-32 sm:w-36 lg:w-40 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                borderColor: "var(--line)",
                backgroundColor: "var(--surface-raised)",
              }}
            >
              <Image
                src="/profile/tanmay.jpg"
                alt="Tanmay Potnurwar"
                fill
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 144px, 128px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="eyebrow">01 — About</p>
              <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Practical systems,
                <br />
                thoughtfully built.
              </h2>
              {/* Profile location & availability metadata */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2.5 text-xs font-semibold text-[var(--muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} style={{ color: "var(--accent)" }} /> Pune, India
                </span>
                <span className="text-[var(--line)]">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <span>Open to Internships & Full-Time</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="muted max-w-xl text-base sm:text-lg leading-relaxed">
              I'm Tanmay, a final-year Computer Engineering student who enjoys turning messy real-world problems into practical AI, data, and backend systems.
            </p>
            <p className="muted max-w-xl text-sm sm:text-base leading-relaxed">
              I build systems across RAG, NLP, machine learning, analytics, and backend APIs—focusing on grounded context, reliable data flow, and clean architecture rather than isolated models.
            </p>
          </div>
        </Reveal>

        {/* Education Card */}
        <Reveal delay={0.08} className="card p-6 sm:p-7">
          <p className="eyebrow">Education</p>
          <h3 className="mt-3.5 text-2xl font-bold tracking-tight">B.E. Computer Engineering</h3>
          <p className="muted mt-1 text-sm">Ajeenkya DY Patil School of Engineering · 2023–2027</p>

          <div className="mt-7 border-t pt-5" style={{ borderColor: "var(--line)" }}>
            <p className="eyebrow">Academic performance</p>
            <p className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Current SGPA
            </p>
            <p className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">
              9.14 <span className="text-base font-normal text-[var(--muted)]">/ 10</span>
            </p>

            <p className="eyebrow mt-6">Current focus</p>
            <p className="muted mt-1 text-sm font-medium">AI · Generative AI · Data · Backend</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const categoryIcons: Record<string, React.ReactNode> = {
  "AI / Machine Learning": <Brain size={18} />,
  "NLP / Generative AI": <Sparkles size={18} />,
  "Data Analytics": <BarChart3 size={18} />,
  "Backend": <Server size={18} />,
  "Engineering & Tools": <Terminal size={18} />,
};

const categoryDescriptors: Record<string, string> = {
  "AI / Machine Learning": "Data processing, modeling, and evaluation.",
  "NLP / Generative AI": "RAG pipelines, LLM workflows, and agentic systems.",
  "Data Analytics": "Business intelligence, star schemas, and reporting.",
  "Backend": "RESTful APIs, relational databases, and microservices.",
  "Engineering & Tools": "Version control, containers, and deployment tooling.",
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">02 — Capabilities</p>
          <div className="mt-3.5 flex flex-wrap items-end justify-between gap-5">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              A focused technical<br />toolkit.
            </h2>
            <p className="muted max-w-sm text-sm sm:text-base leading-relaxed">
              A growing set of tools I use to turn data and ideas into practical products.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map(([category, items], i) => {
            const spanClass =
              i < 3
                ? "col-span-1 md:col-span-1 lg:col-span-2"
                : i === 4
                ? "col-span-1 md:col-span-2 lg:col-span-3"
                : "col-span-1 md:col-span-1 lg:col-span-3";

            return (
              <Reveal
                key={category}
                delay={i * 0.04}
                className={`${spanClass} flex`}
              >
                <article className="card flex w-full flex-col justify-between p-5 sm:p-6 transition-all duration-200 hover:border-opacity-80">
                  <div>
                    <div
                      className="flex items-start justify-between gap-3 pb-3.5 border-b"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-lg border shrink-0 mt-0.5"
                          style={{
                            borderColor: "var(--line)",
                            background: "var(--surface-raised)",
                            color: "var(--accent)",
                          }}
                        >
                          {categoryIcons[category] ?? <Code2 size={16} />}
                        </span>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg tracking-tight leading-snug">
                            {category}
                          </h3>
                          <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                            {categoryDescriptors[category]}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-[0.65rem] font-medium tracking-wider px-2 py-0.5 rounded-full border uppercase shrink-0 mt-0.5"
                        style={{
                          borderColor: "var(--line)",
                          color: "var(--muted)",
                          background: "color-mix(in srgb, var(--surface-raised) 60%, transparent)",
                        }}
                      >
                        {items.length} tools
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((tech) => (
                        <div key={tech.name} className="skill-chip group/chip">
                          <TechIcon
                            name={tech.name}
                            size={16}
                            className="transition-transform duration-200 group-hover/chip:scale-110"
                          />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
  isFlagship = false,
}: {
  project: Project;
  featured?: boolean;
  isFlagship?: boolean;
}) {
  const github = projectGithub[project.slug];
  const imageSrc = projectAssets[project.slug] ?? project.image;

  return (
    <article
      className={`card group flex h-full flex-col justify-between overflow-hidden transition-all duration-200 hover:-translate-y-1 ${
        isFlagship ? "ring-1 ring-[var(--accent)]/40 shadow-lg" : ""
      }`}
    >
      <div>
        {/* Project Thumbnail Image */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden border-b bg-[var(--surface-raised)]"
          style={{ borderColor: "var(--line)" }}
        >
          <Image
            src={imageSrc}
            alt={`${project.title} project preview`}
            fill
            sizes={featured ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.018]"
          />
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="eyebrow !text-[0.68rem]">{project.category}</p>
            {isFlagship && (
              <span
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider border"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
              >
                <Sparkles size={10} /> Flagship Project
              </span>
            )}
          </div>

          <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)]">
            {project.title}
          </h3>

          {/* Concise 2-3 line description with no truncation ellipses */}
          <p className="muted mt-2.5 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>

          {/* 4 Important Technology Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-2.5 py-0.5 text-[0.72rem] font-medium"
                style={{ borderColor: "var(--line)", color: "var(--muted)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 sm:p-6 pt-0 flex flex-wrap items-center gap-2.5">
        <Link
          className="btn btn-primary text-xs sm:text-sm !py-2 !px-3.5 group/cta"
          href={`/projects/${project.slug}`}
        >
          <span>View case study</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/cta:translate-x-1"
          />
        </Link>
        {github && (
          <a
            className="btn text-xs sm:text-sm !py-2 !px-3"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  // Top 3 featured systems: 1. Niyam Drishti (flagship), 2. CourseQuery, 3. Iverix
  const featuredSlugs = ["niyam-drishti", "coursequery", "iverix"];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  // Remaining 5 projects in clean 2-column grid
  const moreProjects = projects.filter((p) => !featuredSlugs.includes(p.slug));

  return (
    <section id="projects" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">03 — Selected work</p>
          <h2 className="display mt-3.5 text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Proof, not promises.
          </h2>
          <p className="muted mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed">
            A selection of projects where I apply AI, data, and software engineering to real-world problems.
          </p>
        </Reveal>

        {/* FEATURED SYSTEMS (3-Column Desktop Grid) */}
        <div className="mt-10 sm:mt-12">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              <p className="eyebrow !text-xs tracking-wider">Featured Systems</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06} className="h-full">
                <ProjectCard
                  project={project}
                  featured
                  isFlagship={project.slug === "niyam-drishti"}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ADDITIONAL WORK (2-Column Desktop Grid) */}
        <div className="mt-14 sm:mt-16">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--muted)" }} />
              <p className="eyebrow !text-xs tracking-wider !text-[var(--muted)]">Additional Work</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {moreProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal className="card relative overflow-hidden p-7 sm:p-11 lg:p-12">
          <div className="grid-pattern absolute inset-0" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <p className="eyebrow">04 — Contact</p>
              <h2 className="display mt-3.5 text-3xl sm:text-5xl lg:text-5xl tracking-tight">
                Let's build something useful.
              </h2>
              <p className="muted mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
                I'm currently open to internship and full-time opportunities in AI, Data Science, Generative AI, Data Analytics, and Backend Engineering.
              </p>

              {/* Visibly displayed email address */}
              <div className="mt-5 flex items-center gap-2 text-sm font-mono text-[var(--accent)]">
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-sans">
                  Email:
                </span>
                <span className="selection:bg-accent">{EMAIL_ADDRESS}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 lg:justify-end">
              <ContactEmailActions />
              <a
                className="btn"
                href="https://www.linkedin.com/in/tanmay-potnurwar-a76745357/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} /> <span>LinkedIn</span>
              </a>
              <a
                className="btn"
                href="https://github.com/Tanmay0108"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} /> <span>GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8 sm:py-10" style={{ borderColor: "var(--line)" }}>
      <div className="shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-lg sm:text-xl font-bold tracking-tight">
            Tanmay<span style={{ color: "var(--accent)" }}>.</span>
          </p>
          <p className="muted mt-1 text-xs sm:text-sm">
            Computer Engineering · AI · Data · Backend
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/Tanmay0108"
            target="_blank"
            rel="noopener noreferrer"
            className="muted hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tanmay-potnurwar-a76745357/"
            target="_blank"
            rel="noopener noreferrer"
            className="muted hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <FooterEmailLink />
        </div>
        <div className="text-xs sm:text-sm sm:text-right">
          <p className="muted">© 2026 Tanmay</p>
          <p className="muted mt-0.5 text-xs">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
