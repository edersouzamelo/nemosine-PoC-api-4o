# 🧠 Nemosine Nous ©  
## PoC Oficial – API ChatGPT-4o (FastAPI + React)

Este repositório contém a **Prova de Conceito Oficial** do Sistema Cognitivo Modular **Nemosine Nous**, demonstrando comunicação direta entre:

- **Backend FastAPI (Python)**
- **Frontend React**
- **API externa de linguagem (OpenAI ChatGPT-4o)**
- **Isolamento seguro da API Key via `.env`**

A PoC representa o **fluxo cognitivo mínimo funcional** do Nemosine Nous quando acoplado a um motor externo de linguagem.

---

## 🚀 Tecnologias Utilizadas – Backend

- Python 3.11  
- FastAPI  
- Uvicorn  
- python-dotenv  
- OpenAI / ChatGPT-4o API  

---

## 🎨 Tecnologias Utilizadas – Frontend

- React  
- Vite  
- Axios  
- CSS (Dark Theme customizado)

---

## 📁 Estrutura Geral do Projeto

nemosine-PoC-api-4o/
│
├── backend/
│ ├── main.py
│ ├── requirements.txt
│ ├── .env (não incluído no repositório)
│ └── ...
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── ...
│
└── README.md



## ▶️ Como Rodar Localmente

### 1. Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Crie o arquivo .env:

OPENAI_API_KEY=your_key_here

```

📄 Licença

Nemosine Nous © – Todos os direitos reservados.
Uso permitido apenas para fins de demonstração, estudo ou colaboração autorizada.

👤 Autor

Edervaldo José de Souza Melo
Criador do Sistema Cognitivo Modular Nemosine Nous
🔗 INPI – Registro oficial: BR512025003335-4
🔗 GitHub: @edersouzamelo

🤝 Contribuições

Sinta-se à vontade para abrir Issues ou Pull Requests.
Colaborações sérias são bem-vindas.

📌 Status do Projeto

✔️ Prova de Conceito oficialmente funcional
⚙️ Back-end FastAPI
🎨 Front-end React
🔐 API Key protegida via .env
🧠 Integração direta com o ChatGPT-4o

📩 Contato

Para parcerias, pesquisa, validação técnica ou uso governamental:

📧 edersouzademelo@gmail.com
