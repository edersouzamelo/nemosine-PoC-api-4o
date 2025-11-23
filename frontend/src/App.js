import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "Você", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();
      const botMessage = { sender: "Nemosine Nous ©", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "Erro", text: "Backend não respondeu." },
      ]);
    }

    setInput("");
    setLoading(false);
  }

  return (
  <div className="container">
  <h1 className="title-main">Nemosine Nous ©</h1>
  <h3 className="title-sub">Demo PoC em API do ChatGPT-4o</h3>
  <h5 className="title-third">Certificado INPI | BR512025003335-4</h5>


      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}

        {loading && <p className="loading">Nemosine Nous © está refletindo sua mensagem…
</p>}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
