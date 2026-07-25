import { useState, useRef, useEffect } from 'react';
import { aiService } from '../services/ai/aiService';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I am Sheik Jamsheer Basha's AI Assistant. Ask me about his Laravel projects, React skills, hackathon wins, or how to hire him!",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const response = await aiService.processQuery(text, messages);
      setMessages((prev) => [...prev, { id: Date.now() + 1, ...response, isUser: false }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "I'm experiencing a quick network hiccup! Please try asking again or check the projects section below.",
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickPrompts = [
    "Who are you?",
    "Show Laravel projects",
    "Show React projects",
    "Download Resume",
    "Hire Me"
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#38bdf8",
          color: "#020617",
          border: "none",
          boxShadow: "0 8px 25px rgba(56, 189, 248, 0.4)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen ? "scale(0.9) rotate(90deg)" : "scale(1)"
        }}
      >
        {isOpen ? (
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>✕</span>
        ) : (
          <span style={{ fontSize: "26px" }}>🤖</span>
        )}
      </button>

      {/* Chat Drawer Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="AI Portfolio Assistant Chat"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "clamp(300px, 90vw, 380px)",
            height: "520px",
            backgroundColor: "#0f172a",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "fadeIn 0.3s ease-out forwards"
          }}
        >
          {/* Header */}
          <div style={{
            padding: "16px 20px",
            backgroundColor: "#1e293b",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#38bdf8", boxShadow: "0 0 10px #38bdf8" }}></div>
              <div>
                <h3 style={{ margin: 0, color: "white", fontSize: "15px", fontWeight: "700" }}>
                  Jamsheer AI Assistant
                </h3>
                <span style={{ fontSize: "11px", color: "#a3e635", fontFamily: "var(--font-mono)" }}>
                  AI Provider Architecture Active
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer" }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: "16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: "flex", flexDirection: "column", alignItems: msg.isUser ? "flex-end" : "flex-start" }}>
                <div style={{
                  backgroundColor: msg.isUser ? "#38bdf8" : "#1e293b",
                  color: msg.isUser ? "#020617" : "#f8fafc",
                  padding: "12px 16px",
                  borderRadius: msg.isUser ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
                  maxWidth: "85%",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  fontWeight: msg.isUser ? "600" : "400",
                  border: msg.isUser ? "none" : "1px solid rgba(255, 255, 255, 0.05)"
                }}>
                  {msg.text}
                </div>

                {msg.action && (
                  <a
                    href={`#${msg.action}`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      marginTop: "6px",
                      fontSize: "12px",
                      color: "#a3e635",
                      fontWeight: "600",
                      textDecoration: "none"
                    }}
                  >
                    🚀 Jump to {msg.action} →
                  </a>
                )}
                <span style={{ fontSize: "10px", color: "#64748b", marginTop: "4px" }}>{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div style={{ alignSelf: "flex-start", backgroundColor: "#1e293b", padding: "10px 14px", borderRadius: "18px 18px 18px 2px", fontSize: "12px", color: "#94a3b8" }}>
                AI is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: "8px 16px", display: "flex", gap: "8px", overflowX: "auto", borderTop: "1px solid rgba(255, 255, 255, 0.05)", scrollbarWidth: "none" }}>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                style={{
                  whiteSpace: "nowrap",
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  color: "#38bdf8",
                  padding: "6px 12px",
                  borderRadius: "16px",
                  fontSize: "11px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            style={{ padding: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", gap: "10px", backgroundColor: "#020617" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Laravel, React, resume..."
              style={{ flex: 1, padding: "10px 16px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "#0f172a", color: "white", outline: "none", fontSize: "13px" }}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: input.trim() ? "#38bdf8" : "#1e293b", color: input.trim() ? "#020617" : "#64748b", border: "none", cursor: input.trim() ? "pointer" : "not-allowed" }}
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </>
  );
}
