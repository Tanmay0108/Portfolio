"use client";

import { useState } from "react";
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
  "CrewAI",
];

export function TechEcosystem() {
  const reduceMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div
      className={`ecosystem ${reduceMotion ? "motion-reduce" : ""}`}
      aria-label="Technology ecosystem: Python, data, AI, and backend tools"
    >
      <svg className="ecosystem-lines" viewBox="0 0 520 420" fill="none" aria-hidden="true">
        <path
          d="M75 210C130 95 205 85 260 190S385 330 445 155"
          style={{
            strokeOpacity: hoveredNode ? 0.45 : 0.22,
            transition: "stroke-opacity 0.25s ease",
          }}
        />
        <path
          d="M50 300C135 245 190 315 265 235S385 90 465 105"
          style={{
            strokeOpacity: hoveredNode ? 0.45 : 0.22,
            transition: "stroke-opacity 0.25s ease",
          }}
        />
        <path
          d="M70 105C135 160 190 125 250 185S375 240 450 280"
          style={{
            strokeOpacity: hoveredNode ? 0.45 : 0.22,
            transition: "stroke-opacity 0.25s ease",
          }}
        />
        {/* Subtle traveling pulse line */}
        {!reduceMotion && (
          <path
            d="M75 210C130 95 205 85 260 190S385 330 445 155"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="12 180"
            className="pulse-path"
          />
        )}
      </svg>

      <div className="ecosystem-core">
        <span>AI</span>
        <small>systems</small>
      </div>

      {nodes.map((node, i) => {
        const isHovered = hoveredNode === node;
        const isAnyHovered = hoveredNode !== null;

        return (
          <span
            key={node}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`ecosystem-node node-${i + 1} ${
              isHovered ? "is-hovered" : isAnyHovered ? "is-dimmed" : ""
            }`}
          >
            {node}
          </span>
        );
      })}
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
  "NLTK",
];

export function TechStackFlow() {
  const stream = [...ticker, ...ticker];
  return (
    <section
      aria-label="Core technologies"
      className="ticker-wrap border-y py-4 sm:py-5"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="tech-track">
        {stream.map((tech, index) => (
          <div className="tech-chip group" key={`${tech}-${index}`}>
            <TechIcon
              name={tech}
              size={18}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span className="tracking-tight text-xs sm:text-sm font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
