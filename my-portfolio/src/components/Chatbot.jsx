import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Shubham's AI Portfolio Assistant. Ask me about his skills, projects, certifications, achievements, or education.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          "Backend Error:",
          response.status,
          errorText
        );

        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.message ||
            "I couldn't generate a response. Please try again.",
          navigation: data.navigation || null,
        },
      ]);
    } catch (error) {
      console.error("CHATBOT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry! I couldn't connect to my AI server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (target) => {
    if (!target) return;

    const section = document.querySelector(target);

    if (section) {
      setIsOpen(false);

      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  };

  return (
    <>
      {/* =========================================
          FLOATING AI BUTTON
      ========================================= */}
      {!isOpen && (
        <button
          className="ai-chat-trigger"
          onClick={() => setIsOpen(true)}
        >
          <span className="ai-icon">✦</span>

          <span className="ai-trigger-text">
            Talk to Shubham AI
          </span>

          <span className="ai-pulse"></span>
        </button>
      )}

      {/* =========================================
          CHATBOT POPUP
      ========================================= */}
      {isOpen && (
        <div className="chatbot-popup">

          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-profile">
              <div className="ai-avatar">
                ✦
              </div>

              <div>
                <h3>Shubham AI</h3>

                <span className="ai-status">
                  <span className="online-dot"></span>
                  AI Portfolio Assistant
                </span>
              </div>
            </div>

            <button
              className="close-chat"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.role}`}
              >
                <div className="message-content">
                  {message.content}
                </div>

                {message.navigation && (
                  <button
                    className="navigation-button"
                    onClick={() =>
                      handleNavigation(
                        message.navigation.target
                      )
                    }
                  >
                    {message.navigation.label} →
                  </button>
                )}
              </div>
            ))}

            {/* Typing */}
            {loading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Input */}
          <div className="chat-input-area">

            <input
              type="text"
              value={input}
              placeholder="Ask about Shubham..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              disabled={loading}
            />

            <button
              className="send-button"
              onClick={sendMessage}
              disabled={
                loading || !input.trim()
              }
              aria-label="Send message"
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;