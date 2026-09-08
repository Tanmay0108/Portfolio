"use client";
import { useReducedMotion } from "framer-motion";
import { TechIcon } from "./TechIcon";

const nodes = [
  "Python",
  "LangChain",
  "FastAPI",
  "Scikit-learn",
  "PostgreSQL",
  "Docker",
  "SQL",
  "NumPy",
  "Pandas",
  "NLP",
  "RAG",
  "Ollama",
  "CrewAI"
];
export function TechEcosystem() {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className={`ecosystem ${reduceMotion ? "motion-reduce" : ""}`}
      aria-label="Technology ecosystem: Python, data, AI, and backend tools"
    >
      <svg className="ecosystem-lines" viewBox="0 0 520 420" fill="none" aria-hidden="true">
        <path d="M75 210C130 95 205 85 260 190S385 330 445 155" />
        <path d="M50 300C135 245 190 315 265 235S385 90 465 105" />
        <path d="M70 105C135 160 190 125 250 185S375 240 450 280" />
      </svg>
      <div className="ecosystem-core">
        <span>AI</span>
        <small>systems</small>
      </div>
      {nodes.map((node, i) => (
        <span key={node} className={`ecosystem-node node-${i + 1}`}>
          {node}
        </span>
      ))}
    </div>
  );
}


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

