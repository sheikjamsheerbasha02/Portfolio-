import { useState, useCallback } from 'react';
import { processUserQuery } from '../services/chatEngine';

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm Sheik Jamsheer Basha's AI Assistant. Ask me anything about his skills, projects, hackathon awards, or experience!",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Simulate artificial network thinking time
      setTimeout(async () => {
        const botReply = await processUserQuery(text);
        setMessages(prev => [...prev, { id: Date.now() + 1, ...botReply, isUser: false }]);
        setIsTyping(false);
      }, 750);
    } catch {
      setIsTyping(false);
    }
  }, []);

  return {
    messages,
    isTyping,
    sendMessage
  };
}
