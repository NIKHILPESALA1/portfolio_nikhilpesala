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

  // 🔥 Chatbot Script
  useEffect(() => {
    const WEBHOOK_URL = "https://nikhilp1234.app.n8n.cloud/webhook/chatbot";

    const container = document.getElementById("chatbot-container");
    if (!container) return;

    container.innerHTML = `
      <style>
        #chat-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 350px;
          height: 480px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          font-family: system-ui;
          z-index: 9999;
        }
        #chat-header {
          background: #0084ff;
          color: white;
          padding: 15px;
          border-radius: 10px 10px 0 0;
          font-weight: 600;
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
          font-weight: 600;
        }
        #chat-send:hover { background: #006fd6; }
      </style>

      <div id="chat-widget">
        <div id="chat-header">AI Assistant</div>
        <div id="chat-messages"></div>
        <div id="chat-input-container">
          <input id="chat-input" type="text" placeholder="Type something..." />
          <button id="chat-send">Send</button>
        </div>
      </div>
    `;

    const messagesDiv = document.getElementById("chat-messages") as HTMLDivElement | null;
    const input = document.getElementById("chat-input") as HTMLInputElement | null;
    const sendBtn = document.getElementById("chat-send") as HTMLButtonElement | null;

    if (!messagesDiv || !input || !sendBtn) return;

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

      try {
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        });

        const data = await response.text();
        addMessage(data, false);
      } catch (error) {
        addMessage("Oops! Something went wrong.", false);
      }
    }

    sendBtn.onclick = sendMessage;
    input.onkeypress = (e) => {
      if (e.key === "Enter") sendMessage();
    };
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* 🔥 This is where the chatbot appears */}
          <div id="chatbot-container"></div>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
