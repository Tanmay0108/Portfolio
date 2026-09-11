import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Github, Sparkles, Workflow } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ThemeToggle } from "@/components/ThemeToggle";

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

// Architecture highlights for key technical systems
const projectPipelines: Record<string, { label: string; desc: string }[]> = {
  "niyam-drishti": [
    { label: "1. Ingestion", desc: "Crawl4AI extracts product metadata & listing imagery across Amazon, Flipkart, Blinkit." },
    { label: "2. Text Extraction", desc: "docTR OCR processes fine-print packaging tokens, LMPC markings, and symbols." },
    { label: "3. LLM Audit", desc: "Gemini validates statutory declarations against Legal Metrology guidelines." },
    { label: "4. Report Output", desc: "Structured compliance findings are recorded and flagged in MongoDB." },
  ],
  coursequery: [
    { label: "1. Audio Demux", desc: "FFmpeg extracts high-fidelity audio streams from lecture recordings." },
    { label: "2. Transcription", desc: "Whisper large-v2 generates timestamped phonetic transcript chunks." },
    { label: "3. Vector Indexing", desc: "Ollama bge-m3 embeds chunked tokens with direct second-offset metadata." },
    { label: "4. Grounded Synthesis", desc: "Cosine search retrieves segments; Llama 3.2 generates timestamped answers." },
  ],
  iverix: [
    { label: "1. Knowledge Base A", desc: "Static repository of SOPs, FDA regulations, and manufacturing standards." },
    { label: "2. Knowledge Base B", desc: "Execution records extracted from multi-page batch manufacturing PDFs." },
    { label: "3. Dual ChromaDB", desc: "ChromaDB vector stores keep rules and evidence strictly isolated." },
    { label: "4. LangChain Audit", desc: "Structured verification prompts identify discrepancies without hallucination." },
  ],
  "reddinsight-ollama": [
    { label: "1. PRAW Ingestion", desc: "Automated collection of posts and comments stored into SQLite with deduplication." },
    { label: "2. Worker Pool", desc: "Four concurrent Python worker threads manage throughput without UI blocking." },
    { label: "3. Local Inference", desc: "On-device Ollama models execute sentiment and topic categorization." },
    { label: "4. Analytics UI", desc: "Plotly and Streamlit visualize urgency indices and conversation velocity." },
  ],
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.title} | Tanmay Potnurwar` : "Project | Tanmay",
    description: project?.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((x) => x.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];
  const github = projectGithub[project.slug];
  const pipeline = projectPipelines[project.slug];
  const imageSrc = projectAssets[project.slug] ?? project.image;

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)",
          borderColor: "var(--line)",
        }}
      >
        <div className="shell flex items-center justify-between py-3.5 sm:py-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            Tanmay<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/#projects" className="btn !py-2 !px-4 text-xs font-semibold">
              <ArrowLeft size={14} /> Back to projects
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <article className="shell py-14 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <p className="eyebrow">Technical case study / {String(index + 1).padStart(2, "0")}</p>
            {project.slug === "niyam-drishti" && (
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider border"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
              >
                <Sparkles size={11} /> Flagship Project
              </span>
            )}
          </div>

          <h1 className="display mt-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <p className="muted mt-5 text-lg sm:text-xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium"
                style={{ borderColor: "var(--line)", color: "var(--text)" }}
              >
                {tech}
              </span>
            ))}
          </div>

          {github && (
            <div className="mt-7">
              <a
                className="btn btn-primary !py-2.5 !px-5 text-sm"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={17} />
                <span>View source on GitHub</span>
              </a>
            </div>
          )}
        </div>

        {/* Project Preview Asset */}
        <div
          className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-xl"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
        >
          <Image
            src={imageSrc}
            alt={`${project.title} project preview`}
            fill
            priority
            sizes="(min-width: 1160px) 1160px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Architecture Pipeline Highlight (if available) */}
        {pipeline && (
          <div className="mt-14 card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <Workflow size={18} style={{ color: "var(--accent)" }} />
              <h2 className="text-lg font-bold tracking-tight">System Architecture & Pipeline Flow</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pipeline.map((step) => (
                <div
                  key={step.label}
                  className="rounded-xl border p-4 transition-colors"
                  style={{
                    borderColor: "var(--line)",
                    backgroundColor: "var(--surface-raised)",
                  }}
                >
                  <p className="eyebrow !text-[0.68rem]">{step.label}</p>
                  <p className="muted mt-2 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow">Case Study Map</p>
              <nav className="mt-5 grid gap-3 text-sm font-semibold" style={{ color: "var(--muted)" }}>
                {[
                  "Overview",
                  "Problem",
                  "Solution",
                  "Key Features",
                  "Implementation",
                  "Challenges",
                  "Results",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-12 sm:space-y-14">
            <CaseSection title="Overview">
              <p>{project.description}</p>
            </CaseSection>

            <CaseSection title="Problem">
              <p>{project.problem}</p>
            </CaseSection>

            <CaseSection title="Solution">
              <p>{project.solution}</p>
            </CaseSection>

            <CaseSection title="Key Features">
              <ul className="grid gap-3.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="card p-4 text-sm font-medium leading-relaxed border"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Implementation">
              <p>{project.implementation}</p>
            </CaseSection>

            <CaseSection title="Challenges">
              <p>{project.challenges}</p>
            </CaseSection>

            <CaseSection title="Results">
              <p>{project.learning}</p>
            </CaseSection>
          </div>
        </div>

        {/* Bottom Project Navigation */}
        <nav
          className="mt-20 sm:mt-24 flex items-center justify-between border-t pt-8"
          style={{ borderColor: "var(--line)" }}
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="btn !py-2 !px-4 text-xs sm:text-sm"
            >
              <ArrowLeft size={15} />
              <span>{previous.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="btn btn-primary !py-2 !px-4 text-xs sm:text-sm"
            >
              <span>{next.title}</span>
              <ArrowRight size={15} />
            </Link>
          ) : (
            <Link href="/#projects" className="btn !py-2 !px-4 text-xs sm:text-sm">
              All projects
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={title.toLowerCase().replaceAll(" ", "-")}>
      <p className="eyebrow">{title}</p>
      <div className="muted mt-3 text-base sm:text-lg leading-relaxed">{children}</div>
    </section>
  );
}
