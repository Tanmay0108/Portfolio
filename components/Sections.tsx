import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Brain,
  Sparkles,
  BarChart3,
  Server,
  Terminal,
} from "lucide-react";
import { skillGroups } from "@/data/technologies";
import { projectCategories, projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";

const projectAssets: Record<string, string> = { "niyam-drishti": "/projects/niyam-drishti.png", "reddinsight-ollama": "/projects/reddinsight-ollama.png", coursequery: "/projects/coursequery.png", medvora: "/projects/medvora.png", "movie-recommendation-system": "/projects/movie-recommendation-system.png", "real-time-global-development-dashboard": "/projects/real-time-global-development-dashboard.png", "stock-portfolio-management-system": "/projects/stock-portfolio-management-system.png" };
const projectGithub: Record<string, string> = { medvora: "https://github.com/Tanmay0108/Medvora", "real-time-global-development-dashboard": "https://github.com/Tanmay0108/Real-Time-Global-Development-Dashboard", "reddinsight-ollama": "https://github.com/Tanmay0108/ReddInsight-Ollama", coursequery: "https://github.com/Tanmay0108/CourseQuery", "movie-recommendation-system": "https://github.com/Tanmay0108/movie-recommendation", "niyam-drishti": "https://github.com/Tanmay0108/NiyamDrishti" };

export function About() { return <section id="about" className="section"><div className="shell grid gap-12 lg:grid-cols-[1.35fr_.65fr]"><Reveal><p className="eyebrow">01 — About</p><h2 className="display mt-4 text-5xl sm:text-6xl">Practical systems,<br/>thoughtfully built.</h2><p className="muted mt-7 max-w-xl text-lg leading-relaxed">I'm Tanmay, a final-year Computer Engineering student interested in building useful work at the intersection of AI, data, and backend engineering. I enjoy translating complex problems into clear, dependable applications—not just exploring technologies in isolation.</p></Reveal><Reveal delay={.1} className="card p-7 sm:p-8"><p className="eyebrow">Education</p><h3 className="mt-7 text-2xl font-bold tracking-tight">B.E. Computer Engineering</h3><p className="muted mt-2">Ajeenkya DY Patil School of Engineering · 2023–2027</p><div className="mt-10 border-t pt-5" style={{ borderColor: "var(--line)" }}><p className="eyebrow">Academic performance</p><p className="mt-3 text-sm font-bold">TE SGPA</p><p className="mt-1 text-4xl font-bold tracking-tight">9.14</p><p className="eyebrow mt-8">Current focus</p><p className="muted mt-2 text-sm">AI · Generative AI · Data · Backend</p></div></Reveal></div></section>; }

const categoryIcons: Record<string, React.ReactNode> = {
  "AI / Machine Learning": <Brain size={18} />,
  "NLP / Generative AI": <Sparkles size={18} />,
  "Data Analytics": <BarChart3 size={18} />,
  "Backend": <Server size={18} />,
  "Engineering & Tools": <Terminal size={18} />,
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">02 — Capabilities</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="display text-5xl sm:text-6xl">
              A focused technical<br />toolkit.
            </h2>
            <p className="muted max-w-sm text-base leading-relaxed">
              A growing set of tools I use to turn data and ideas into practical products.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
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
                delay={i * 0.06}
                className={`${spanClass} flex`}
              >
                <article className="card flex w-full flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:border-opacity-80">
                  <div>
                    <div
                      className="flex items-center justify-between pb-4 border-b"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-xl border shrink-0"
                          style={{
                            borderColor: "var(--line)",
                            background: "var(--surface-raised)",
                            color: "var(--accent)",
                          }}
                        >
                          {categoryIcons[category] ?? <Code2 size={18} />}
                        </span>
                        <h3 className="font-bold text-lg tracking-tight">{category}</h3>
                      </div>
                      <span
                        className="text-[0.7rem] font-medium tracking-wider px-2.5 py-0.5 rounded-full border uppercase shrink-0"
                        style={{
                          borderColor: "var(--line)",
                          color: "var(--muted)",
                          background: "color-mix(in srgb, var(--surface-raised) 60%, transparent)",
                        }}
                      >
                        {items.length} tools
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {items.map((tech) => (
                        <div key={tech.name} className="skill-chip group/chip">
                          <TechIcon
                            name={tech.name}
                            size={18}
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


function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) { const github = projectGithub[project.slug]; return <article className={`card group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-opacity-60 ${featured ? "featured-project" : ""}`}><div className="relative aspect-[16/9] overflow-hidden border-b" style={{borderColor:"var(--line)"}}><Image src={projectAssets[project.slug] ?? project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]"/></div><div className="p-6 sm:p-7"><p className="eyebrow">{project.category}</p><h3 className="mt-3 text-2xl font-bold tracking-tight">{project.title}</h3><p className="muted mt-3 line-clamp-3">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.slice(0, 6).map(tech => <span key={tech} className="rounded-full border px-2.5 py-1 text-xs font-medium" style={{borderColor:"var(--line)",color:"var(--muted)"}}>{tech}</span>)}</div><div className="mt-7 flex flex-wrap gap-3"><Link className="btn btn-primary" href={`/projects/${project.slug}`}>View case study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></Link>{github && <a className="btn" href={github} target="_blank" rel="noreferrer"><Github size={16}/><span className="sr-only sm:not-sr-only">GitHub</span></a>}</div></div></article>; }

export function Projects() { const featured = projects.filter(p => p.featured); return <section id="projects" className="section"><div className="shell"><Reveal><p className="eyebrow">03 — Selected work</p><h2 className="display mt-4 text-5xl sm:text-6xl">Proof, not promises.</h2><p className="muted mt-5 max-w-2xl text-lg">A selection of projects where I apply AI, data, and software engineering to real-world problems.</p></Reveal><div className="mt-14"><Reveal><p className="eyebrow">Featured</p></Reveal><div className="mt-5 grid gap-6 lg:grid-cols-2">{featured.map((project, i) => <Reveal key={project.slug} delay={i*.06}><ProjectCard project={project} featured/></Reveal>)}</div></div><div className="mt-16 space-y-14">{projectCategories.map(category => { const categoryProjects = projects.filter(p => p.category===category && !p.featured); if(!categoryProjects.length) return null; return <div key={category}><Reveal><p className="eyebrow">{category}</p></Reveal><div className="mt-5 grid gap-6 md:grid-cols-2">{categoryProjects.map((project,i) => <Reveal key={project.slug} delay={i*.06}><ProjectCard project={project}/></Reveal>)}</div></div>; })}</div></div></section>; }

export function Contact() { return <section id="contact" className="section"><div className="shell"><Reveal className="card relative overflow-hidden p-8 sm:p-14"><div className="grid-pattern absolute inset-0"/><div className="relative grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end"><div><p className="eyebrow">04 — Contact</p><h2 className="display mt-5 max-w-2xl text-5xl sm:text-7xl">Let's build something useful.</h2><p className="muted mt-6 max-w-2xl text-lg leading-relaxed">I'm open to internships, full-time opportunities, and interesting work in AI, data science, generative AI, analytics, and backend development.</p></div><div className="flex flex-wrap gap-3 lg:justify-end"><a className="btn btn-primary" href="mailto:tanmaypotnurwar8@gmail.com"><Mail size={17}/> Email me</a><a className="btn" href="https://www.linkedin.com/in/tanmay-potnurwar-a76745357/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a className="btn" href="https://github.com/Tanmay0108" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div></div></Reveal></div></section>; }
export function Footer() { return <footer className="border-t py-10" style={{borderColor:"var(--line)"}}><div className="shell flex flex-col justify-between gap-6 sm:flex-row"><div><p className="text-xl font-bold">Tanmay<span style={{color:"var(--accent)"}}>.</span></p><p className="muted mt-1 text-sm">Computer Engineering · AI · Data · Backend</p></div><div className="flex gap-4 text-sm sm:text-right"><a href="https://github.com/Tanmay0108" target="_blank" rel="noreferrer" className="muted hover:text-[var(--accent)] transition-colors">GitHub</a><a href="https://www.linkedin.com/in/tanmay-potnurwar-a76745357/" target="_blank" rel="noreferrer" className="muted hover:text-[var(--accent)] transition-colors">LinkedIn</a><a href="mailto:tanmaypotnurwar8@gmail.com" className="muted hover:text-[var(--accent)] transition-colors">Email</a></div><div className="text-sm sm:text-right"><p className="muted">© 2026 Tanmay</p><p className="muted mt-1">Built with Next.js</p></div></div></footer>; }
