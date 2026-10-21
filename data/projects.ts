export type ProjectCategory =
  | "AI / ML"
  | "Data Analytics"
  | "GenAI & RAG"
  | "GenAI & Automation"
  | "NLP / Recommendation";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  problem: string;
  solution: string;
  features: string[];
  implementation: string;
  challenges: string;
  learning: string;
};

const image = "/projects/project-template.svg";

export const projectCategories: ProjectCategory[] = [
  "GenAI & Automation",
  "GenAI & RAG",
  "AI / ML",
  "Data Analytics",
  "NLP / Recommendation",
];

export const projects: Project[] = [
  {
    slug: "niyam-drishti",
    title: "Niyam Drishti",
    category: "GenAI & Automation",
    featured: true,
    image,
    tagline: "Automated packaging compliance and e-commerce listing audit pipeline.",
    description:
      "Automates packaging compliance audits by extracting label text with docTR OCR and validating statutory Legal Metrology rules with Gemini—developed as a Smart India Hackathon solution.",
    technologies: ["Python", "FastAPI", "docTR", "Gemini", "Crawl4AI", "MongoDB"],
    problem:
      "Packaging compliance reviews are repetitive, time-consuming, and difficult to scale across thousands of product listings and physical packaging images.",
    solution:
      "Developed for the Smart India Hackathon problem statement: built an automated workflow that collects product metadata, extracts printed label text through OCR, and validates mandatory statutory attributes using structured Gemini prompting.",
    features: [
      "Multi-platform e-commerce collection (Amazon, Flipkart, Blinkit)",
      "OCR-based packaging text and symbol extraction with docTR",
      "Structured Legal Metrology compliance audit reports",
    ],
    implementation:
      "FastAPI orchestrates Crawl4AI web extraction. docTR processes packaging images to capture fine print, while Gemini evaluates mandatory fields (LMPC details, net quantity, country of origin) against current packaging laws.",
    challenges:
      "Unstructured product listings and diverse, curved packaging layouts required multi-stage parsing: combining scraped web metadata with OCR tokens before sending for LLM evaluation.",
    learning:
      "Reliable AI automation depends on grounding model checks in clean, structured evidence rather than asking for broad judgements.",
  },
  {
    slug: "coursequery",
    title: "CourseQuery",
    category: "GenAI & RAG",
    featured: true,
    image,
    tagline: "Local video semantic search with timestamped question-answering.",
    description:
      "Enables local semantic video search and timestamped question-answering across lecture audio using Whisper and Llama 3.2.",
    technologies: ["Python", "Whisper", "Ollama", "Llama 3.2", "FFmpeg"],
    problem:
      "Finding a specific conceptual explanation in multi-hour course recordings is tedious when video material cannot be semantically searched.",
    solution:
      "Built a local retrieval pipeline that transcribes video audio into timestamped segments, indexes semantic chunks, and generates grounded answers that link back to the exact video timestamp.",
    features: [
      "Automated timestamped audio transcription",
      "Semantic video segment search via vector similarity",
      "Completely local answer synthesis with zero cloud dependency",
    ],
    implementation:
      "FFmpeg extracts raw audio for Whisper large-v2 transcription. Ollama bge-m3 generates dense segment embeddings for cosine-similarity retrieval, and Llama 3.2 synthesizes grounded answers with direct timestamp citations.",
    challenges:
      "Retrieved passages had to preserve accurate timecode offsets throughout chunking so generated answers could guide users back to the exact video timestamp.",
    learning:
      "Metadata design and chunk alignment are just as critical as embedding model quality when retrieval must lead users back to precise source moments.",
  },
  {
    slug: "iverix",
    title: "Iverix",
    category: "GenAI & Automation",
    featured: true,
    image: "/projects/iverix.svg",
    tagline: "High-precision BMR auditing with a dual knowledge-base RAG workflow.",
    description:
      "Audits 100+ page pharmaceutical Batch Manufacturing Records against standards using a dual-collection ChromaDB RAG architecture.",
    technologies: ["Python", "ChromaDB", "LangChain", "Gemini", "Ollama"],
    problem:
      "Reviewing 100+ page pharmaceutical Batch Manufacturing Records (BMR) against evolving regulatory standards is labor-intensive and vulnerable to oversight.",
    solution:
      "Designed a dual knowledge-base RAG architecture that cleanly separates static regulatory rules from dynamic batch records, enabling traceable, hallucination-resistant compliance audits.",
    features: [
      "100+ page document indexing and semantic retrieval",
      "Dual knowledge-base context isolation (Standards vs. Records)",
      "Automated PDF compliance audit generation",
    ],
    implementation:
      "ChromaDB stores dual vector collections with Gemini embeddings. LangChain retrieval pipelines apply cosine similarity and structured verification prompts to check deviations and generate audit summaries.",
    challenges:
      "Keeping static compliance rules distinct from execution logs in vector space while enabling joint reasoning across both during audit evaluation.",
    learning:
      "Strict context isolation and schema-enforced prompt structures are essential for zero-hallucination document review in regulated industries.",
  },
  {
    slug: "reddinsight-ollama",
    title: "RedditInsight-Ollama",
    category: "GenAI & RAG",
    featured: false,
    image,
    tagline: "Private, local-AI Reddit brand intelligence and sentiment monitoring.",
    description:
      "Monitors brand sentiment and topic urgency locally by streaming Reddit discussions through PRAW into multi-threaded Ollama inference.",
    technologies: ["Python", "Ollama", "Streamlit", "PRAW", "SQLite"],
    problem:
      "Brand managers need real-time customer discussion monitoring but cannot send proprietary brand keywords or user feedback to third-party cloud APIs.",
    solution:
      "Engineered an on-device monitoring system that ingests Reddit community discussions and analyzes sentiment, emerging themes, and customer urgency purely on local hardware.",
    features: [
      "Automated multi-subreddit monitoring with PRAW",
      "On-device sentiment and topic classification with Ollama",
      "Interactive Streamlit and Plotly analytical dashboards",
    ],
    implementation:
      "PRAW collects posts and comments into SQLite with deduplication. Four worker threads coordinate parallel inference across local Ollama models, and Plotly visualizes temporal sentiment shifts.",
    challenges:
      "Batch NLP processing had to remain interactive on consumer hardware without stalling data ingestion or UI responsiveness.",
    learning:
      "Thoughtful multi-threading and local database caching make on-premise LLM workflows practical and responsive.",
  },
  {
    slug: "medvora",
    title: "Medvora",
    category: "AI / ML",
    featured: false,
    image,
    tagline: "Clinical-data interface for heart disease risk prediction.",
    description:
      "Predicts cardiovascular disease risk from patient diagnostic indicators using a trained Scikit-learn classifier served via FastAPI.",
    technologies: ["Python", "Scikit-learn", "FastAPI", "Streamlit", "Pandas"],
    problem:
      "Predictive cardiovascular models often remain confined to research notebooks rather than being accessible to healthcare operators in a clean, intuitive interface.",
    solution:
      "Delivered a production-ready application featuring exploratory data analysis, pipeline-trained classification models, a RESTful API backend, and an intuitive clinical frontend.",
    features: [
      "Cardiovascular disease risk assessment model",
      "FastAPI REST endpoints for programmatic inference",
      "Clinician-friendly Streamlit dashboard for parameter entry",
    ],
    implementation:
      "Trained an ensemble classifier using Scikit-learn with rigorous cross-validation and feature scaling. Deployed via FastAPI REST endpoints and consumed by an interactive Streamlit UI.",
    challenges:
      "Ensuring diagnostic input validation matched the preprocessing pipeline exactly so clinical edge cases did not cause silent model errors.",
    learning:
      "A machine learning model is only as dependable as the consistency between its training transformations and live inference pipeline.",
  },
  {
    slug: "movie-recommendation-system",
    title: "Movie Recommendation System",
    category: "NLP / Recommendation",
    featured: false,
    image,
    tagline: "Fast content-based recommendations built from movie metadata.",
    description:
      "Delivers instant content-based movie recommendations by vectorizing metadata features with TF-IDF and calculating cosine similarity.",
    technologies: ["Python", "NLP", "TF-IDF", "FastAPI", "Streamlit"],
    problem:
      "Users need accurate, immediate recommendations without requiring extensive personal watch history or rating records (the cold-start problem).",
    solution:
      "Leveraged content-based natural language processing to match movies based on storylines, cast attributes, keywords, and directorial metadata.",
    features: [
      "Metadata-driven content filtering (genres, keywords, overviews)",
      "Sub-second cosine similarity search",
      "Live TMDB API integration for posters and trailers",
    ],
    implementation:
      "Extracted and tokenized text features from 5,000+ films. TF-IDF vectorization converts summaries into sparse matrices, while precomputed cosine similarities enable rapid lookup served via FastAPI.",
    challenges:
      "Weighting diverse metadata fields (plot synopsis vs. director vs. genres) to produce recommendations that felt genuinely relevant rather than superficial.",
    learning:
      "Content-based similarity is an effective solution for cold-start discovery when collaborative filtering signals are unavailable.",
  },
  {
    slug: "real-time-global-development-dashboard",
    title: "Real-Time Global Development Dashboard",
    category: "Data Analytics",
    featured: false,
    image,
    tagline: "Interactive country-level global development indicator analytics.",
    description:
      "Ingests longitudinal World Bank indicator data with Python into a normalized star schema for interactive Power BI DAX analytics.",
    technologies: ["Python", "Power BI", "DAX", "REST API", "Data Modelling"],
    problem:
      "Disparate development datasets across countries are difficult to synthesize into cohesive, cross-regional strategic insights.",
    solution:
      "Automated API ingestion from the World Bank to assemble a normalized relational star schema, creating unified comparative dashboards with responsive DAX measures.",
    features: [
      "Automated REST extraction from World Bank API",
      "7-dataset relational star schema data model",
      "Dynamic multi-country comparison slicers and DAX KPIs",
    ],
    implementation:
      "Python scripts fetch and clean longitudinal indicator data across economic, health, and educational metrics. Power BI coordinates relationships around a central fact table with parameterized DAX measures.",
    challenges:
      "Harmonizing disparate reporting intervals and missing country metrics into consistent time-series aggregations without distorting trends.",
    learning:
      "Disciplined data modeling and clear schema relationships are the true foundation of interactive business intelligence dashboards.",
  },
  {
    slug: "stock-portfolio-management-system",
    title: "Inventory & Stock Management System",
    category: "Data Analytics",
    featured: false,
    image,
    tagline: "Inventory and financial reporting made accessible through a Python UI.",
    description:
      "Enforces transactional data integrity and automated inventory reorder alerts through a Python desktop application backed by MySQL.",
    technologies: ["Python", "MySQL", "SQL", "mysql-connector", "Data Analysis"],
    problem:
      "Small-scale inventory tracking often relies on fragile spreadsheets prone to sync discrepancies, untracked stock-outs, and manual errors.",
    solution:
      "Built a desktop application with relational MySQL persistence that enforces transaction integrity, low-stock thresholds, and multi-table financial summaries.",
    features: [
      "Relational product, supplier, and order management",
      "Automated reorder-level alerts for depleting inventory",
      "SQL-driven sales aggregation and margin reporting",
    ],
    implementation:
      "A Python desktop client communicates via mysql-connector to execute parameterized SQL transactions, preventing race conditions during checkout and updating stock balances in real time.",
    challenges:
      "Designing relational foreign key cascades and triggers to ensure inventory records remained mathematically consistent across returns and cancellations.",
    learning:
      "Relational data integrity rules at the schema level prevent entire categories of application-level bugs.",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
