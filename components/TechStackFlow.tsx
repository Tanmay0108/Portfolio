"use client";
import { useReducedMotion } from "framer-motion";
import { TechIcon } from "./TechIcon";

const nodes = ["Python", "NumPy", "Pandas", "Scikit-learn", "NLP", "NLTK", "Hugging Face", "LangChain", "LangGraph", "CrewAI", "RAG", "Ollama", "Power BI", "SQL", "FastAPI", "PostgreSQL", "Redis", "Git", "GitHub", "Docker", "Linux"];
export function TechEcosystem() { const reduceMotion = useReducedMotion(); return <div className={`ecosystem ${reduceMotion ? "motion-reduce" : ""}`} aria-label="Technology ecosystem: Python, data, AI, and backend tools"><svg className="ecosystem-lines" viewBox="0 0 520 420" fill="none" aria-hidden="true"><path d="M64 210C126 82 208 74 266 190S395 340 468 149" /><path d="M33 312C128 252 188 331 269 239S395 78 481 93" /><path d="M61 95C131 159 187 121 250 186S381 244 463 292" /></svg><div className="ecosystem-core"><span>AI</span><small>systems</small></div>{nodes.map((node, i) => <span key={node} className={`ecosystem-node node-${i + 1}`}>{node}</span>)}</div>; }

const ticker = [
  "Python",
  "FastAPI",
  "RAG",
  "Redis",
  "SQL",
  "Power BI",
  "Microsoft Excel",
  "PostgreSQL",
  "SQLAlchemy",
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "Ollama",
  "Hugging Face",
  "NLTK"
];

export function TechStackFlow() {
  const stream = [...ticker, ...ticker];
  return (
    <section aria-label="Core technologies" className="ticker-wrap border-y py-5" style={{ borderColor: "var(--line)" }}>
      <div className="tech-track">
        {stream.map((tech, index) => (
          <div className="tech-chip group" key={`${tech}-${index}`}>
            <TechIcon name={tech} size={19} className="transition-transform duration-200 group-hover:scale-110" />
            <span className="tracking-tight">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

