import { useState } from "react";

function ChatAssistant() {

  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "assistant",
      text:
        "Hey 👋 I'm Shubham's AI assistant. Ask me anything about Shubham."
    }
  ]);


  const sendMessage = () => {

    if (!input.trim()) {
      return;
    }


    setMessages((previous) => [

      ...previous,

      {
        type: "user",
        text: input
      },

      {
        type: "assistant",
        text:
          "I'm connecting to Shubham's AI backend 🤖"
      }

    ]);


    setInput("");
  };


  const handleKeyDown = (event) => {

    if (event.key === "Enter") {

      sendMessage();

    }

  };


  /* =========================================
     CLOSED
  ========================================= */

  if (!isOpen) {

    return (

      <div className="floating-chat">

        <button
          className="chat-popup-tab"
          onClick={() => setIsOpen(true)}
        >

          <span className="chat-tab-icon">
            ✦
          </span>

          <span>
            Ask Shubham AI
          </span>

          <span className="chat-tab-arrow">
            ↑
          </span>

        </button>

      </div>

    );

  }


  /* =========================================
     OPEN
  ========================================= */

  return (

    <div className="floating-chat">

      <div className="chat-box">

        <div className="chat-top">

          <div className="assistant-info">

            <div className="assistant-icon">
              ✦
            </div>

            <div>

              <h3>
                Shubham AI
              </h3>

              <p>
                <span></span>
                Online
              </p>

            </div>

          </div>


          <button
            className="chat-close"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

        </div>


        <div className="messages">

          {messages.map(
            (message, index) => (

              <div
                key={index}
                className={`message ${message.type}`}
              >
                {message.text}
              </div>

            )
          )}

        </div>


        <div className="quick-actions">

          <button
            onClick={() =>
              setInput(
                "Tell me about Shubham's projects"
              )
            }
          >
            Projects
          </button>

          <button
            onClick={() =>
              setInput(
                "What AI technologies does Shubham know?"
              )
            }
          >
            AI Skills
          </button>

          <button
            onClick={() =>
              setInput(
                "Tell me about Shubham"
              )
            }
          >
            About
          </button>

        </div>


        <div className="input-area">

          <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={handleKeyDown}
          />


          <button
            className="send-button"
            onClick={sendMessage}
          >
            ↑
          </button>

        </div>

      </div>

    </div>

  );
}

export default ChatAssistant;