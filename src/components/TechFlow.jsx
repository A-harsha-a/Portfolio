import React, { useState } from 'react';
import { ArrowRight, Bot, Database, FileText, Layers, Cpu, Sparkles, CheckCircle2, Info } from 'lucide-react';

export default function TechFlow() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [selectedNode, setSelectedNode] = useState(0);

  const flows = [
    {
      id: 'rag-flow',
      title: 'Agentic RAG Document QA Pipeline',
      category: 'RAG Architecture',
      description: 'End-to-end document ingestion, embedding generation, vector indexing, and similarity retrieval for question answering.',
      nodes: [
        { label: 'PDF Document Ingestion', icon: FileText, desc: 'PyPDF Document Loader', detail: 'Extracts raw text stream and metadata from uploaded multi-page PDFs.' },
        { label: 'Recursive Text Chunking', icon: Layers, desc: 'Chunk size: 1000, Overlap: 200', detail: 'Splits text into semantically overlapping 1000-char blocks preserving context bounds.' },
        { label: 'Vector Embeddings', icon: Cpu, desc: 'HuggingFace / Gemini Embeddings', detail: 'Converts text blocks into high-dimensional vector representations.' },
        { label: 'Vector Store Indexing', icon: Database, desc: 'ChromaDB / Qdrant Storage', detail: 'Indexes vector embeddings in local ChromaDB for fast similarity retrieval.' },
        { label: 'Similarity Semantic Search', icon: Sparkles, desc: 'Top-K Retrieval (k=4)', detail: 'Executes cosine similarity query matching top 4 relevant chunks to the prompt.' },
        { label: 'Gemini 1.5 Response', icon: Bot, desc: 'Context-Aware Answer Generation', detail: 'Injects retrieved document context into prompt template for zero-hallucination answers.' },
      ],
    },
    {
      id: 'langgraph-flow',
      title: 'LangGraph Cyclic State Agent Workflow',
      category: 'Agentic AI Architecture',
      description: 'Multi-step state graph execution with conditional routing and dynamic tool calling for complex LLM tasks.',
      nodes: [
        { label: 'START State Node', icon: Cpu, desc: 'Initial User Goal & State', detail: 'Initializes AgentState dictionary with user query and empty execution trace.' },
        { label: 'Agent Planning Node', icon: Bot, desc: 'LLM Reasoning Step', detail: 'Evaluates next required action or tool invocation based on current state.' },
        { label: 'Conditional Router Edge', icon: Layers, desc: 'State evaluation & branch decision', detail: 'Inspects state payload to decide whether to call tools or terminate graph.' },
        { label: 'Tool Execution Node', icon: Database, desc: 'API / Database Call', detail: 'Executes external Python code or database query safely.' },
        { label: 'State Memory Update', icon: Sparkles, desc: 'Update Agent State Graph', detail: 'Appends tool results back into central state memory.' },
        { label: 'END State Handshake', icon: CheckCircle2, desc: 'Final Structured Output', detail: 'Returns validated output to the user application.' },
      ],
    },
    {
      id: 'eda-flow',
      title: 'Natural Language Data Analysis Pipeline',
      category: 'LLM / Data Science Flow',
      description: 'Automated data profiling, natural language query translation, code execution, and Plotly visualization generation.',
      nodes: [
        { label: 'Tabular Dataset Input', icon: FileText, desc: 'CSV / Pandas Dataframe', detail: 'Loads CSV dataset into Pandas DataFrame and inspects data types.' },
        { label: 'Automated Data Profiling', icon: Layers, desc: 'Missing values & stats detection', detail: 'Calculates summary statistics, missing values ratio, and column distributions.' },
        { label: 'Natural Language Query', icon: Bot, desc: 'User query in plain English', detail: 'Receives user natural language prompt like "Plot sales by month".' },
        { label: 'LLM Python Code Gen', icon: Cpu, desc: 'Gemini API code generation', detail: 'Generates executable Plotly / Pandas Python code via Gemini 1.5.' },
        { label: 'Chart & Plot Execution', icon: Sparkles, desc: 'Plotly / Seaborn Visualization', detail: 'Executes generated Python code safely to produce interactive HTML charts.' },
        { label: 'AI Insight Summary', icon: CheckCircle2, desc: 'Actionable Business Insights', detail: 'Translates visual patterns into executive summary key takeaways.' },
      ],
    },
  ];

  const currentFlow = flows[activeFlow];
  const currentNode = currentFlow.nodes[selectedNode] || currentFlow.nodes[0];

  return (
    <section id="flow" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-badge">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="section-title">
              Interactive Tech Flow
            </h2>
          </div>

          <div style={{ maxWidth: '440px' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
              Visual step-by-step architecture diagrams showing how I design RAG pipelines, agentic workflows, and LLM applications. Click any step to inspect technical details!
            </p>
          </div>
        </div>

        {/* Flow Selector Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {flows.map((flow, idx) => {
            const isActive = activeFlow === idx;
            return (
              <button
                key={flow.id}
                onClick={() => { setActiveFlow(idx); setSelectedNode(0); }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: isActive ? '2px solid #000000' : '1px solid #d1d5db',
                  background: isActive ? '#000000' : '#ffffff',
                  color: isActive ? '#ffffff' : '#000000',
                  fontWeight: isActive ? '800' : '600',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {flow.category}
              </button>
            );
          })}
        </div>

        {/* Active Flow Visualizer Card */}
        <div
          className="glass-card"
          style={{
            padding: '36px',
            borderRadius: '24px',
            background: '#f8fafc',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', background: '#000000', color: '#ffffff', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
              {currentFlow.category}
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', fontFamily: 'var(--font-display)', marginTop: '8px', color: '#000000' }}>
              {currentFlow.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', marginTop: '4px' }}>
              {currentFlow.description}
            </p>
          </div>

          {/* Interactive Step-by-Step Flow Nodes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              alignItems: 'stretch',
              marginBottom: '28px',
            }}
          >
            {currentFlow.nodes.map((node, nIdx) => {
              const IconComponent = node.icon;
              const isNodeSelected = selectedNode === nIdx;
              return (
                <div key={nIdx} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div
                    onClick={() => setSelectedNode(nIdx)}
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
                      background: isNodeSelected ? '#000000' : '#ffffff',
                      color: isNodeSelected ? '#ffffff' : '#000000',
                      border: isNodeSelected ? '2px solid #000000' : '1px solid rgba(0,0,0,0.1)',
                      boxShadow: isNodeSelected ? '0 8px 20px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.03)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: isNodeSelected ? '#ffffff' : '#000000', color: isNodeSelected ? '#000000' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconComponent size={16} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800', color: isNodeSelected ? '#9ca3af' : '#9ca3af', fontFamily: 'var(--font-mono)' }}>
                          0{nIdx + 1}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.85rem', fontWeight: '800', color: isNodeSelected ? '#ffffff' : '#000000', marginBottom: '4px', lineHeight: '1.3' }}>
                        {node.label}
                      </div>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: isNodeSelected ? '#9ca3af' : 'var(--text-dark-muted)', marginTop: '8px', paddingTop: '8px', borderTop: isNodeSelected ? '1px solid rgba(255,255,255,0.1)' : '1px solid #f1f5f9' }}>
                      {node.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Node Technical Callout Detail Card */}
          {currentNode && (
            <div
              style={{
                padding: '20px 24px',
                borderRadius: '14px',
                background: '#ffffff',
                border: '1.5px solid #000000',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              <Info size={20} color="#f97316" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#f97316', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  STEP 0{selectedNode + 1}: TECHNICAL IMPLEMENTATION DETAIL
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#000000', marginBottom: '4px' }}>
                  {currentNode.label} — {currentNode.desc}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5' }}>
                  {currentNode.detail}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
