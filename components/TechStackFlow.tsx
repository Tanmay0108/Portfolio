"use client";

import { useEffect, useRef, useState, useMemo } from "react";
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

// Approximate rendered dimensions (width and height in px) for collision box calculations
const nodeDimensions: Record<string, { w: number; h: number }> = {
  Python: { w: 82, h: 32 },
  LangChain: { w: 104, h: 32 },
  FastAPI: { w: 88, h: 32 },
  "Scikit-learn": { w: 118, h: 32 },
  PostgreSQL: { w: 110, h: 32 },
  Docker: { w: 84, h: 32 },
  SQL: { w: 62, h: 32 },
  NumPy: { w: 84, h: 32 },
  Pandas: { w: 86, h: 32 },
  NLP: { w: 62, h: 32 },
  RAG: { w: 62, h: 32 },
  Ollama: { w: 80, h: 32 },
  CrewAI: { w: 86, h: 32 },
};

interface NodePoint {
  x: number;
  y: number;
}

// Organic collision-free distribution calculation accounting for exact node dimensions
function calculatePositions(width: number, height: number): NodePoint[] {
  const count = nodes.length;
  const cx = width / 2;
  const cy = height / 2;

  // Staggered organic base positions avoiding rigid polygon geometry
  // Angles distributed organically across quadrants with natural jitter
  const organicAngles = [
    // Top-Left / ML cluster
    -Math.PI * 0.78, // Python
    // Top-Right / GenAI cluster
    -Math.PI * 0.28, // LangChain
    // Bottom-Right / Backend cluster
    Math.PI * 0.22,  // FastAPI
    // Top-Left outer
    -Math.PI * 0.62, // Scikit-learn
    // Bottom-Right outer
    Math.PI * 0.38,  // PostgreSQL
    // Bottom-Right mid
    Math.PI * 0.58,  // Docker
    // Bottom-Left inner
    Math.PI * 0.72,  // SQL
    // Bottom-Left outer
    Math.PI * 0.88,  // NumPy
    // Bottom-Left mid
    Math.PI * 0.98,  // Pandas
    // Top-Left inner
    -Math.PI * 0.92, // NLP
    // Top-Right inner
    -Math.PI * 0.42, // RAG
    // Top-Right mid
    -Math.PI * 0.14, // Ollama
    // Top-Right outer
    -Math.PI * 0.04, // CrewAI
  ];

  const points: NodePoint[] = [];
  const isMobile = width < 440;

  for (let i = 0; i < count; i++) {
    const angle = organicAngles[i] || (i / count) * 2 * Math.PI - Math.PI / 2;
    const isOuter = i % 2 === 1;

    // Organic radii scaling with container dimensions
    const rx = isMobile
      ? (isOuter ? width * 0.34 : width * 0.25)
      : (isOuter ? width * 0.36 : width * 0.27);
    const ry = isMobile
      ? (isOuter ? height * 0.34 : height * 0.25)
      : (isOuter ? height * 0.36 : height * 0.27);

    let x = cx + rx * Math.cos(angle);
    let y = cy + ry * Math.sin(angle);
    points.push({ x, y });
  }

  // Iterative relaxation pass to guarantee zero collisions
  const iterations = 40;
  for (let iter = 0; iter < iterations; iter++) {
    // 1. Node to node repulsion considering individual box dimensions
    for (let i = 0; i < count; i++) {
      const dimI = nodeDimensions[nodes[i]] || { w: 85, h: 32 };
      for (let j = i + 1; j < count; j++) {
        const dimJ = nodeDimensions[nodes[j]] || { w: 85, h: 32 };
        const reqMinX = (dimI.w + dimJ.w) / 2 + (isMobile ? 8 : 12);
        const reqMinY = (dimI.h + dimJ.h) / 2 + (isMobile ? 6 : 10);

        const dx = points[j].x - points[i].x;
        const dy = points[j].y - points[i].y;
        const distSq = (dx * dx) / (reqMinX * reqMinX) + (dy * dy) / (reqMinY * reqMinY);

        if (distSq < 1.0 && distSq > 0.0001) {
          const dist = Math.sqrt(distSq);
          const pushFactor = (1.0 - dist) * 0.5;
          const shiftX = (dx / dist) * pushFactor * (isMobile ? 10 : 14);
          const shiftY = (dy / dist) * pushFactor * (isMobile ? 8 : 10);

          points[i].x -= shiftX;
          points[i].y -= shiftY;
          points[j].x += shiftX;
          points[j].y += shiftY;
        }
      }
    }

    // 2. Hub collision avoidance & boundary clamping
    for (let i = 0; i < count; i++) {
      const p = points[i];
      const dim = nodeDimensions[nodes[i]] || { w: 85, h: 32 };
      const halfW = dim.w / 2 + (isMobile ? 6 : 8);
      const halfH = dim.h / 2 + (isMobile ? 5 : 6);

      // Safe clearance from central 94px hub (radius 47px)
      const cdx = p.x - cx;
      const cdy = p.y - cy;
      const cDist = Math.sqrt(cdx * cdx + cdy * cdy);
      const hubClearance = 47 + Math.min(halfW, halfH) + (isMobile ? 10 : 14);

      if (cDist < hubClearance && cDist > 0.001) {
        const push = hubClearance - cDist + 2;
        p.x += (cdx / cDist) * push;
        p.y += (cdy / cDist) * push;
      }

      // Strict boundary clamping so nodes NEVER touch or clip container borders
      p.x = Math.max(halfW, Math.min(width - halfW, p.x));
      p.y = Math.max(halfH, Math.min(height - halfH, p.y));
    }
  }

  return points;
}

export function TechEcosystem() {
  const reduceMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 520,
    height: 420,
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ width: Math.round(rect.width), height: Math.round(rect.height) });
        }
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const nodePositions = useMemo(() => {
    return calculatePositions(dimensions.width, dimensions.height);
  }, [dimensions.width, dimensions.height]);

  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;

  return (
    <div
      ref={containerRef}
      className={`ecosystem ${reduceMotion ? "motion-reduce" : ""}`}
      aria-label="Interactive AI Systems technology ecosystem network"
    >
      <svg
        className="ecosystem-lines"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        aria-hidden="true"
      >
        {/* Dynamic connection lines linking center core to each technology node */}
        {nodePositions.map((pos, idx) => {
          const nodeName = nodes[idx];
          const isNodeHovered = hoveredNode === nodeName;
          const isAnyHovered = hoveredNode !== null;

          // Subtle organic bezier curve
          const curveOffset = (idx % 2 === 0 ? 1 : -1) * (14 + (idx % 3) * 5);
          const midX = (cx + pos.x) / 2 + (idx % 2 === 0 ? -curveOffset : curveOffset);
          const midY = (cy + pos.y) / 2 + (idx % 2 === 0 ? curveOffset : -curveOffset);
          const d = `M ${cx} ${cy} Q ${midX} ${midY} ${pos.x} ${pos.y}`;

          // Visual hierarchy: default lines are extremely subtle; active hovered line is prominent
          let opacity = 0.11;
          let strokeWidth = 1;
          let strokeDash = "3 6";

          if (isNodeHovered) {
            opacity = 0.9;
            strokeWidth = 2;
            strokeDash = "none";
          } else if (isAnyHovered) {
            opacity = 0.03;
          }

          return (
            <path
              key={`line-${nodeName}`}
              d={d}
              stroke="var(--accent)"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDash}
              style={{
                strokeOpacity: opacity,
                transition: "stroke-opacity 0.25s ease, stroke-width 0.25s ease",
              }}
            />
          );
        })}

        {/* Subtle traveling ambient pulse on primary path when idle */}
        {!reduceMotion && !hoveredNode && (
          <path
            d={`M ${cx} ${cy} Q ${cx + 25} ${cy - 35} ${nodePositions[0]?.x || 120} ${
              nodePositions[0]?.y || 80
            }`}
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeDasharray="14 160"
            className="pulse-path"
          />
        )}
      </svg>

      {/* Central Hub */}
      <div className="ecosystem-core" style={{ left: `${cx}px`, top: `${cy}px` }}>
        <span>AI</span>
        <small>systems</small>
      </div>

      {/* Collision-free Technology Nodes with decoupled positioning and animation */}
      {nodes.map((node, i) => {
        const isHovered = hoveredNode === node;
        const isAnyHovered = hoveredNode !== null;
        const pos = nodePositions[i] || { x: cx, y: cy };
        const floatClass = `node-float-${i % 4}`;

        return (
          <div
            key={node}
            style={{
              position: "absolute",
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: "translate(-50%, -50%)",
              zIndex: isHovered ? 12 : 2,
            }}
          >
            <button
              type="button"
              tabIndex={0}
              aria-label={`${node} technology node`}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              onFocus={() => setHoveredNode(node)}
              onBlur={() => setHoveredNode(null)}
              className={`ecosystem-node ${floatClass} ${
                isHovered ? "is-hovered" : isAnyHovered ? "is-dimmed" : ""
              }`}
            >
              {node}
            </button>
          </div>
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
