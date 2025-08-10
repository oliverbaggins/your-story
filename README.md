# Your Story — Compartilhamento de Histórias Anônimas

**Your Story** é uma aplicação web simples para compartilhar histórias de forma anônima.  
O foco é oferecer um CRUD funcional com suporte a Markdown e renderização segura de conteúdo.

---

## Funcionalidades

- Criar histórias com título, descrição (opcional) e conteúdo em **Markdown**.
- Listar histórias mais recentes na página inicial.
- Visualizar histórias individualmente com URLs amigáveis (*slug*).
- Editar e excluir histórias.
- Conversão automática de Markdown para HTML seguro (**sanitização contra XSS**).
- Renderização de páginas com **EJS templates**.
- Servir arquivos estáticos pela rota `/public`.

---

## Tecnologias Utilizadas

- **Backend**: Node.js, Express.
- **Banco de Dados**: MongoDB (instância única).
- **Frontend**: HTML, CSS, EJS Templates.
- **Markdown**: `marked` para conversão, `dompurify` para sanitização.
- **Configuração**: `dotenv` para variáveis de ambiente.
- **Desenvolvimento**: `nodemon` para recarregamento automático.

---

## Estrutura do Projeto

```
your-story/
│
├── server.js                # Servidor Express
├── models/article.js         # Modelo de dados do artigo
├── routes/articles.js        # Rotas de CRUD
├── views/                    # Templates EJS
├── public/                   # Arquivos estáticos (CSS, imagens)
├── docker-compose.yml        # Orquestração principal (App + Mongo)
├── conf.d/                   # Configuração do Nginx (opcional)
├── package.json              # Dependências e scripts
└── .env.example              # Exemplo de variáveis de ambiente
```

---

## Configuração e Execução

### Clonar o Repositório
```bash
git clone https://github.com/seuusuario/your-story.git
cd your-story
```

### Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
MONGODB_URI=mongodb://localhost:27017/yourstory
PORT=3000
```

### Instalar Dependências
```bash
npm install
```

### Iniciar a Aplicação
```bash
npm run devStart
```

### Acessar no Navegador
- **App**: [http://localhost:3000](http://localhost:3000)

---

## Licença
Distribuído sob licença MIT.
