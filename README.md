Nemosine Nous © – PoC Oficial (API ChatGPT-4o)
Prova de Conceito Full-Stack (FastAPI + React)

Este repositório contém a Prova de Conceito oficial do Sistema Cognitivo Modular Nemosine Nous, demonstrando comunicação entre:

Backend FastAPI

Frontend React

Integração direta com a API do ChatGPT-4o

Isolamento seguro da API Key via .env

A PoC serve como demonstração técnica do fluxo cognitivo mínimo funcional do Nemosine Nous quando acoplado a uma API externa de linguagem.

🚀 Tecnologias Utilizadas
Backend

Python 3.11

FastAPI

Uvicorn

python-dotenv

OpenAI / ChatGPT-4o API

Frontend

React

Fetch API

CSS customizado (Tema: “Nemosine Noir”)

📂 Estrutura do Projeto
nemosine-PoC-api-4o/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env (não vai para o GitHub)
│   └── venv/ (ignorado)
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── .gitignore

🔐 Segurança

A OpenAI API Key está protegida via .env e não é incluída no repositório.

OPENAI_API_KEY=sk-xxxxx...


O backend carrega automaticamente:

from dotenv import load_dotenv
load_dotenv()

▶️ Como Rodar Localmente
1. Backend
cd backend
uvicorn main:app --reload

2. Frontend
cd frontend
npm install
npm start


Ambiente local:

http://localhost:3000

🧪 Funcionamento

O usuário envia uma mensagem via frontend →
o backend recebe → envia para o ChatGPT-4o → retorna a resposta → exibe via React.

📜 Status

Versão 1.0 — “Primeira versão da PoC”
✔ Comunicação funcional
✔ Estilo Nemosínico
✔ Chave protegida
✔ Repo público e documentado

📄 Licença

© 2025 — Nemosine Nous. Todos os direitos reservados.
Proibida a reprodução comercial sem autorização.
