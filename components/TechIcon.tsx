import React from "react";
import {
  BrainCircuit,
  Binary,
  Sparkles,
  LineChart,
  FileSpreadsheet,
  Boxes,
  Layers,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

// Map tech names to official PNG files in /logos/
const LOGO_MAP: Record<string, string> = {
  python: "/logos/pyton.png",
  numpy: "/logos/numpy.png",
  pandas: "/logos/pandas.png",
  "scikit-learn": "/logos/scikit learn.png",
  "hugging face": "/logos/hugging face.png",
  langchain: "/logos/langchain.png",
  langgraph: "/logos/langGraph.png",
  crewai: "/logos/crewai.png",
  ollama: "/logos/Ollama.png",
  "power bi": "/logos/powerBi.png",
  sql: "/logos/sql.png",
  fastapi: "/logos/fastAPI.png",
  docker: "/logos/docker.png",
  linux: "/logos/linux.png",
  github: "/logos/github.png",
  n8n: "/logos/n8n.png",
};

export function TechIcon({ name, className = "", size = 20 }: TechIconProps) {
  const normalized = name.trim().toLowerCase();
  const logoSrc = LOGO_MAP[normalized];

  if (logoSrc) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src={logoSrc}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="max-h-full max-w-full object-contain select-none transition-transform duration-200"
          loading="lazy"
        />
      </span>
    );
  }

  // Official vector icons for specific technologies without PNGs in logos/
  if (normalized === "gemini") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: "#8B87FF" }} aria-hidden="true">
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
        </svg>
      </span>
    );
  }

  if (normalized === "groq") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: "#F55036" }} aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 7v5l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (normalized === "mistral") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: "#FF7000" }} aria-hidden="true">
          <path d="M3 4h3.5v5H3V4zm14.5 0H21v5h-3.5V4zM3 10.5h10.5v3H3v-3zm7 0H21v3h-3.5v-3zM3 15h3.5v5H3v-5zm14.5 0H21v5h-3.5v-5z" />
        </svg>
      </span>
    );
  }

  if (normalized === "chromadb" || normalized === "chroma") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: "#F59E0B" }} aria-hidden="true">
          <circle cx="6" cy="6" r="3.5" fill="#EF4444" />
          <circle cx="18" cy="6" r="3.5" fill="#3B82F6" />
          <circle cx="6" cy="18" r="3.5" fill="#10B981" />
          <circle cx="18" cy="18" r="3.5" fill="#8B87FF" />
          <path d="M6 9.5v5M18 9.5v5M9.5 6h5M9.5 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (normalized === "git") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="max-h-full max-w-full object-contain"
          fill="currentColor"
          style={{ color: "#F05032" }}
          aria-hidden="true"
        >
          <path d="M23.634 10.373l-10-10a2.304 2.304 0 00-3.268 0l-2.188 2.188 3.513 3.513a2.732 2.732 0 013.435 3.447l3.38 3.38a2.72 2.72 0 11-1.637 1.637l-3.153-3.153v5.626a2.73 2.73 0 11-2.308 0V11.23a2.732 2.732 0 01-1.467-3.585L6.61 4.208.366 10.452a2.31 2.31 0 000 3.268l10 10a2.31 2.31 0 003.268 0l10-10a2.31 2.31 0 000-3.347z" />
        </svg>
      </span>
    );
  }

  if (normalized === "postgresql") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="max-h-full max-w-full object-contain"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#336791" }}
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      </span>
    );
  }

  if (normalized === "redis") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="max-h-full max-w-full object-contain"
          fill="currentColor"
          style={{ color: "#DC382D" }}
          aria-hidden="true"
        >
          <path d="M21.94 13.11l-9.14 5.3a1.59 1.59 0 01-1.6 0l-9.14-5.3a1.59 1.59 0 010-2.76l9.14-5.3a1.59 1.59 0 011.6 0l9.14 5.3a1.59 1.59 0 010 2.76z" opacity=".7"/>
          <path d="M12 2.2a1.6 1.6 0 00-.8.22L2.06 7.72a1.59 1.59 0 000 2.76l9.14 5.3a1.59 1.59 0 001.6 0l9.14-5.3a1.59 1.59 0 000-2.76L12.8 2.42a1.6 1.6 0 00-.8-.22z" />
          <path d="M2.06 13.52l9.14 5.3a1.59 1.59 0 001.6 0l9.14-5.3a1.59 1.59 0 010 2.76l-9.14 5.3a1.59 1.59 0 01-1.6 0l-9.14-5.3a1.59 1.59 0 010-2.76z" />
        </svg>
      </span>
    );
  }

  if (normalized === "microsoft excel") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, color: "#107C41" }}
      >
        <FileSpreadsheet size={size} strokeWidth={2} />
      </span>
    );
  }

  if (normalized === "matplotlib") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, color: "#11557c" }}
      >
        <LineChart size={size} strokeWidth={2} />
      </span>
    );
  }

  if (normalized === "rag") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, color: "var(--accent)" }}
      >
        <Sparkles size={size} strokeWidth={2} />
      </span>
    );
  }

  if (normalized === "nlp") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, color: "var(--accent)" }}
      >
        <BrainCircuit size={size} strokeWidth={2} />
      </span>
    );
  }

  if (normalized === "nltk") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, color: "var(--accent)" }}
      >
        <Binary size={size} strokeWidth={2} />
      </span>
    );
  }

  if (normalized === "sqlalchemy") {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, color: "#D71F00" }}
      >
        <Boxes size={size} strokeWidth={2} />
      </span>
    );
  }

  // Generic fallback technical icon
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size, color: "var(--accent)" }}
    >
      <Layers size={size} strokeWidth={2} />
    </span>
  );
}
