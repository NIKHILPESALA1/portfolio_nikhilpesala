import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    // Delay ensures DOM is mounted before injecting widget
    setTimeout(() => {
      const WEBHOOK_URL = "https://kundu.app.n8n.cloud/webhook/chatbot";

      const container = document.getElementById("chatbot-container");
      if (!container) return;

      container.innerHTML = `
      <style>
        /* FIX: allow typing, focusing, clicking */
        #chat-widget, 
        #chat-widget * {
          pointer-events: auto !important;
          user-select: text !important;
          position: relative;
          z-index: 999999 !important;
        }

        body > *:not(#chatbot-container) {
          z-index: auto !important;
        }

        #chat-bubble {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #0084ff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          cursor: pointer;
          z-index: 999999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        #chat-widget {
          position: fixed;
          bottom: 100px;
          right: 20px;
          width: 350px;
          height: 480px;
          border: 1px solid #ddd;
          border-radius: 12px;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: none;
          flex-direction: column;
          font-family: system-ui;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.25s ease-out;
        }

        #chat-widget.open {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }

        #chat-header {
          background: #0084ff;
          color: white;
          padding: 15px;
          border-radius: 12px 12px 0 0;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        #close-chat {
          cursor: pointer;
          font-size: 20px;
        }

        #chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .message {
          padding: 10px 14px;
          border-radius: 18px;
          max-width: 80%;
          word-wrap: break-word;
        }

        .user { background: #0084ff; color: white; align-self: flex-end; }
        .bot { background: #f0f0f0; color: #333; align-self: flex-start; }

        #typing {
          padding: 8px 14px;
          background: #ececec;
          border-radius: 18px;
          width: 60px;
          display: none;
        }

        #typing span {
          height: 8px;
          width: 8px;
          margin: 0 2px;
          background: #aaa;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.4s infinite both;
        }

        #typing span:nth-child(2) { animation-delay: 0.2s; }
        #typing span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
          0% { opacity: .2; }
          20% { opacity: 1; }
          100% { opacity: .2; }
        }

        #chat-input-container {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ddd;
        }

        #chat-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 20px;
        }

        #chat-send {
          background: #0084ff;
          color: white;
          border: none;
          padding: 10px 20px;
          margin-left: 8px;
          border-radius: 20px;
          cursor: pointer;
        }
      </style>

      <div id="chat-bubble">💬</div>

      <div id="chat-widget">
        <div id="chat-header">
          AI Assistant
          <div id="close-chat">✖</div>
        </div>

        <div id="chat-messages"></div>

        <div id="typing">
          <span></span><span></span><span></span>
        </div>

        <div id="chat-input-container">
          <input id="chat-input" type="text" placeholder="Type here..." />
          <button id="chat-send">Send</button>
        </div>
      </div>
      `;

      // DOM references
      const bubble = document.getElementById("chat-bubble")!;
      const widget = document.getElementById("chat-widget")!;
      const closeChat = document.getElementById("close-chat")!;
      const typing = document.getElementById("typing")!;
      const messagesDiv = document.getElementById("chat-messages") as HTMLDivElement;
      const input = document.getElementById("chat-input") as HTMLInputElement;
      const sendBtn = document.getElementById("chat-send") as HTMLButtonElement;

      // Open/close logic
      bubble.onclick = () => widget.classList.add("open");
      closeChat.onclick = () => widget.classList.remove("open");

      function addMessage(text: string, isUser: boolean) {
        const msg = document.createElement("div");
        msg.className = `message ${isUser ? "user" : "bot"}`;
        msg.textContent = text;
        messagesDiv.appendChild(msg);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
      }

      async function sendMessage() {
        const message = input.value.trim();
        if (!message) return;

        addMessage(message, true);
        input.value = "";

        typing.style.display = "inline-block";

        try {
          const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
          });

          const text = await response.text();
          typing.style.display = "none";
          addMessage(text, false);
        } catch {
          typing.style.display = "none";
          addMessage("Something went wrong. Try again.", false);
        }
      }

      sendBtn.onclick = sendMessage;
      input.onkeypress = (e) => e.key === "Enter" && sendMessage();

    }, 200); // delay
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* IMPORTANT: Chatbot must be outside Router to avoid React unmounting it */}
        <div id="chatbot-container"></div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
