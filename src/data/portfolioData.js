export const PROFILE_DATA = {
  name: "Harsha Aradhyula",
  fullName: "Aradhyula Purna Naga Sri Harsha",
  role: "AI & ML Undergraduate",
  location: "Bapatla, Andhra Pradesh, India",
  college: "R.M.D Engineering College, Kavaraipettai, Chennai",
  email: "harshaaradhyula07@gmail.com",
  phone: "+91 9392842714",
  socials: {
    github: "https://github.com/A-harsha-a",
    linkedin: "https://linkedin.com/in/harsha-aradhyula",
  },
  bio: "AI & ML undergraduate building practical AI applications around Generative AI, RAG and agentic workflows.",
};

export const PROJECTS_DATA = [
  {
    id: "langchain-gemini-chatbot",
    number: "01",
    title: "Conversational AI Chatbot using Gemini & LangChain",
    subtitle: "Context-Aware Multi-Turn Conversational Assistant",
    category: "Generative AI",
    date: "06/2026 - 07/2026",
    description: "Developed a conversational AI chatbot using Python, LangChain, and Google's Gemini API, enabling context-aware multi-turn interactions through conversation memory.",
    techStack: ["Python", "LangChain", "Gemini API", "Streamlit", "Prompt Engineering"],
    githubUrl: "https://github.com/A-harsha-a/langchain-gemini-chatbot",
    visualType: "chatbot",
    highlights: [
      "Designed a modular architecture separating prompt management, model invocation, and response generation for reusability.",
      "Implemented prompt templates and reusable LangChain components to generate consistent AI responses.",
      "Streamlined conversational workflows with context memory and zero latency."
    ]
  },
  {
    id: "langgraph-fundamentals",
    number: "02",
    title: "State-Based AI Workflow Engine using LangGraph",
    subtitle: "Cyclic State Graph Agent Architecture",
    category: "Agentic AI",
    date: "07/2026 - 07/2026",
    description: "Designed and implemented state-based AI workflows using LangGraph to orchestrate multi-step LLM interactions with conditional routing.",
    techStack: ["Python", "LangGraph", "LangChain", "State Graph", "Gemini API"],
    githubUrl: "https://github.com/A-harsha-a/langgraph-fundamentals",
    visualType: "langgraph",
    highlights: [
      "Built graph-based execution pipelines defining nodes, edges, and workflow states for agent-driven task execution.",
      "Applied agentic AI principles to develop reusable workflow architectures for complex LLM applications.",
      "Structured graph execution flow: START -> NODE -> CONDITION -> NODE -> END."
    ]
  },
  {
    id: "llm-powered-eda",
    number: "03",
    title: "Natural Language Data Analysis using LLMs",
    subtitle: "Autonomous Exploratory Data Analysis & Chart Generation",
    category: "LLM / Data Analysis",
    date: "06/2026 - 06/2026",
    description: "Developed an LLM-powered data analysis application that enables users to explore datasets using natural language queries without writing SQL or Python code.",
    techStack: ["Python", "Pandas", "LangChain", "Gemini API", "Plotly", "Streamlit"],
    githubUrl: "https://github.com/A-harsha-a/llm-powered-EDA",
    visualType: "eda",
    highlights: [
      "Integrated Google's Gemini API to generate statistical summaries and explain visualizations from structured datasets.",
      "Automated data profiling, missing value detection, and descriptive statistical analysis using Python.",
      "Natural language pipeline: Dataset -> Natural Language Query -> Chart -> AI Insight."
    ]
  },
  {
    id: "pdf-rag-using-langchain",
    number: "04",
    title: "LLM-Powered PDF Question Answering System (RAG)",
    subtitle: "Retrieval-Augmented Generation Document QA",
    category: "RAG",
    date: "06/2026 - 06/2026",
    description: "Developed a Retrieval-Augmented Generation (RAG) system using LangChain to answer questions from PDF documents through semantic document retrieval.",
    techStack: ["Python", "LangChain", "ChromaDB", "HuggingFace Embeddings", "Gemini API", "PyPDF"],
    githubUrl: "https://github.com/A-harsha-a/pdf-rag-using-langchain",
    visualType: "rag",
    highlights: [
      "Implemented end-to-end RAG pipeline: PDF loading, text chunking, embedding generation, vector database indexing, and similarity retrieval.",
      "Integrated Gemini APIs with retrieval workflows to generate context-aware responses using document content.",
      "Pipeline architecture: PDF -> Chunks -> Embeddings -> Vector DB -> Retriever -> Gemini -> Answer."
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Gen AI with Agentic AI Intern",
    company: "Nacre Software Services Pvt. Ltd.",
    location: "Hyderabad, Telangana, India",
    period: "05/2026 - 07/2026",
    summary: "Built production-oriented Generative AI applications, RAG pipelines, and agentic workflows using Python, LangChain, LangGraph, and Gemini APIs.",
    highlights: [
      "Developed Generative AI applications using Python, LangChain, LangGraph, and Gemini APIs by implementing modular LLM workflows.",
      "Designed Retrieval-Augmented Generation (RAG) pipelines involving document ingestion, text chunking, embedding generation, vector database integration, and semantic retrieval.",
      "Built agentic workflows using prompt engineering, state-based execution, and reusable AI components.",
      "Collaborated with the development team to test, debug, and optimize AI applications for clean, maintainable code."
    ]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Oracle AI Database SQL Certified Associate",
    issuer: "Oracle University",
    badge: "AI SQL"
  },
  {
    title: "APEX Cloud Developer Certified Professional",
    issuer: "Oracle",
    badge: "Cloud"
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    badge: "Gen AI"
  },
  {
    title: "AI Essentials Certification",
    issuer: "Google",
    badge: "AI"
  },
  {
    title: "Innovating with Google Cloud AI Certification",
    issuer: "Google",
    badge: "Cloud AI"
  },
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    badge: "Agents"
  },
  {
    title: "Database Management System",
    issuer: "Indian Institute of Technology, Kharagpur (NPTEL)",
    badge: "DBMS"
  }
];

export const EDUCATION_DATA = [
  {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "R.M.D Engineering College",
    location: "Kavaraipettai, Chennai, Tamil Nadu",
    period: "01/2024 - 01/2028",
    status: "Undergraduate (Pursuing)"
  },
  {
    degree: "Senior Secondary (XII), Board Of Intermediate Education",
    institution: "Resonance Junior College",
    location: "Vijayawada, Andhra Pradesh",
    period: "2022 - 2024",
    score: "GPA: 94.90%"
  },
  {
    degree: "Secondary (X), CBSE",
    institution: "Sri Chaitanya High School",
    location: "Guntur, Andhra Pradesh",
    period: "2022",
    score: "GPA: 88.40%"
  }
];

export const SKILLS_CATEGORIES = [
  {
    name: "Programming",
    skills: ["Python", "Java", "C++"]
  },
  {
    name: "Generative AI",
    skills: ["LLMs", "Generative AI", "Prompt Engineering", "Agentic AI"]
  },
  {
    name: "RAG & Vector Search",
    skills: ["RAG", "Semantic Search", "Embeddings", "Vector Databases", "Document QA"]
  },
  {
    name: "Frameworks",
    skills: ["LangChain", "LangGraph", "LlamaIndex"]
  },
  {
    name: "AI / ML",
    skills: ["Machine Learning", "Data Analysis", "EDA", "Model Evaluation"]
  },
  {
    name: "Databases",
    skills: ["ChromaDB", "Qdrant", "MongoDB", "SQL", "Oracle AI Database"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "Streamlit", "Gradio"]
  }
];
