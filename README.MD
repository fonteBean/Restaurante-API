🍽️ Restaurante API










API RESTful para gerenciar pratos de restaurante, construída com Node.js, Express, Knex e PostgreSQL. Ideal para estudos ou projetos de portfólio.

✨ Funcionalidades

📋 Listar todos os pratos

🔍 Buscar prato por ID

➕ Criar novo prato

⚡ Estrutura modular para fácil expansão (update, delete, autenticação)

🌱 Seed de exemplo para popular o banco

🛠️ Logging HTTP com Morgan

🗂 Estrutura do Projeto
.
├─ controllers/       # Lógica das rotas
├─ db/                # Migrações e seeds do banco
├─ node_modules/      # Dependências
├─ public/            # Arquivos estáticos (opcional)
├─ repositories/      # Acesso ao banco e queries
├─ routes/            # Definição das rotas
├─ utils/             # Funções utilitárias (ex: errorResponse)
├─ .env.example       # Modelo de variáveis de ambiente(Alterar para .env)
├─ .gitignore
├─ docker-compose.yml # Banco via Docker
├─ knexfile.js        # Configuração do Knex
├─ package.json
├─ package-lock.json
├─ README.md
└─ server.js          # Inicialização da API

🚀 Como rodar a API

1️⃣ Subir o banco de dados via Docker

docker-compose up -d


2️⃣ Configurar variáveis de ambiente

cp .env.example .env


Edite o arquivo .env com suas próprias credenciais (host, usuário, senha e database).

3️⃣ Instalar dependências

npm install


Dependências principais:

"dependencies": {
  "dotenv": "^17.2.1",
  "express": "^5.1.0",
  "knex": "^3.1.0",
  "morgan": "^1.10.1",
  "path": "^0.12.7",
  "pg": "^8.16.3"
}


4️⃣ Rodar a API em modo de desenvolvimento

npm run dev


5️⃣ Popular o banco (opcional)

npm run db:seed

📍 Rotas principais
Método	Rota	Descrição
GET	/pratos	Lista todos os pratos
GET	/pratos/:id	Retorna um prato específico
POST	/pratos	Cria um novo prato
DELETE /pratos/:id Deleta um prato

⚠️ Para POST, enviar Content-Type: application/json e preco como número.

💡 Dicas

Garanta que o banco esteja rodando antes de iniciar a API.

Use express.json() para processar requisições com JSON.

Estrutura modular facilita manutenção e expansão futura.
