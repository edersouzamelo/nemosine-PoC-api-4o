from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI

app = FastAPI()

# --- Liberar acesso ao frontend ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Inicializar cliente OpenAI (NUNCA deixe a chave aqui em produção) ---
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# --- Modelo recebido do frontend ---
class Message(BaseModel):
    text: str

# --- ENDPOINT ---
@app.post("/chat")
def chat(message: Message):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": message.text}
        ]
    )

    # AQUI estava o erro
    reply = completion.choices[0].message.content
    return {"reply": reply}