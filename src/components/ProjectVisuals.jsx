import React from 'react';
import { Bot, ArrowRight, FileText, Database, Layers, Sparkles } from 'lucide-react';

export default function ProjectVisuals({ visualType }) {
  if (visualType === 'chatbot') {
    return (
      <div
        style={{
          background: '#0d0f17',
          borderRadius: '16px',
          padding: '20px',
          color: '#ffffff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        {/* Chat Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '14px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bot size={16} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>AI Conversational Assistant</div>
            <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Gemini 1.5 & LangChain</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
          <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.08)', padding: '10px 14px', borderRadius: '12px 12px 12px 2px', maxWidth: '85%' }}>
            Hi! How can I assist with your AI workflow today?
          </div>

          <div style={{ alignSelf: 'flex-end', background: '#000000', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 14px', borderRadius: '12px 12px 2px 12px', color: '#ffffff', maxWidth: '85%' }}>
            Explain context memory retention in multi-turn chat.
          </div>

          <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.08)', padding: '10px 14px', borderRadius: '12px 12px 12px 2px', maxWidth: '88%', lineHeight: '1.4' }}>
            <div style={{ fontSize: '0.725rem', color: '#f97316', fontWeight: '700', marginBottom: '4px' }}>LangChain Memory</div>
            Preserves past turn dialogue history in ConversationBufferMemory for accurate follow-up responses!
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'langgraph') {
    return (
      <div
        style={{
          background: '#0d0f17',
          borderRadius: '16px',
          padding: '24px 18px',
          color: '#ffffff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f97316', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          LangGraph Workflow State Engine
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <div style={{ padding: '8px 12px', borderRadius: '8px', background: '#f97316', fontSize: '0.75rem', fontWeight: '900', color: '#000' }}>
            START
          </div>
          <ArrowRight size={14} color="#9ca3af" />

          <div style={{ padding: '8px 12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)' }}>
            NODE
          </div>
          <ArrowRight size={14} color="#9ca3af" />

          <div style={{ padding: '8px 12px', borderRadius: '8px', background: 'rgba(249, 115, 22, 0.2)', fontSize: '0.75rem', fontWeight: '700', border: '1px solid #f97316', color: '#f97316' }}>
            CONDITION
          </div>
          <ArrowRight size={14} color="#9ca3af" />

          <div style={{ padding: '8px 12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)' }}>
            NODE
          </div>
          <ArrowRight size={14} color="#9ca3af" />

          <div style={{ padding: '8px 12px', borderRadius: '8px', background: '#10b981', fontSize: '0.75rem', fontWeight: '900', color: '#000' }}>
            END
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'eda') {
    return (
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#000000', fontFamily: 'var(--font-mono)' }}>
            QUERY: "Plot top sales by category"
          </div>
          <div style={{ padding: '4px 8px', borderRadius: '4px', background: '#f3f4f6', fontSize: '0.675rem', fontWeight: '700', color: '#4b5563' }}>
            Plotly Chart
          </div>
        </div>

        {/* Mock Chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '75px', padding: '8px 0', borderBottom: '1px solid #e5e7eb', marginBottom: '10px' }}>
          <div style={{ flex: 1, background: '#000000', height: '100%', borderRadius: '4px 4px 0 0' }} />
          <div style={{ flex: 1, background: '#4b5563', height: '75%', borderRadius: '4px 4px 0 0' }} />
          <div style={{ flex: 1, background: '#9ca3af', height: '50%', borderRadius: '4px 4px 0 0' }} />
        </div>

        {/* AI Insight Box */}
        <div style={{ padding: '8px 12px', borderRadius: '8px', background: '#f9fafb', border: '1px solid #e5e7eb', fontSize: '0.75rem', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={14} color="#f97316" />
          <span>Category A accounts for 52% of total revenue.</span>
        </div>
      </div>
    );
  }

  // RAG Pipeline Diagram
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '18px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center', fontSize: '0.7rem', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
        <div style={{ padding: '8px 4px', background: '#f3f4f6', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <FileText size={16} color="#000000" style={{ margin: '0 auto 4px' }} />
          PDF Input
        </div>
        <div style={{ padding: '8px 4px', background: '#f3f4f6', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <Layers size={16} color="#000000" style={{ margin: '0 auto 4px' }} />
          Chunks & Embeds
        </div>
        <div style={{ padding: '8px 4px', background: '#f3f4f6', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <Database size={16} color="#000000" style={{ margin: '0 auto 4px' }} />
          ChromaDB
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', margin: '8px 0', color: '#9ca3af' }}>
        <ArrowRight size={14} />
      </div>

      <div style={{ padding: '8px 12px', background: '#000000', borderRadius: '8px', textAlign: 'center', fontSize: '0.75rem', fontWeight: '700', color: '#ffffff' }}>
        Retriever → Gemini 1.5 API → Precise Answer
      </div>
    </div>
  );
}
