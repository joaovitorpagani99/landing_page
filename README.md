# 🚗 Landing Page de Veículo Semi-novo

Este repositório contém uma aplicação completa composta por uma API em Ruby on Rails e um front-end em React, para exibição de um veículo, informações da loja e envio de mensagens de contato.

---

## 📦 Estrutura do Projeto

- `landing_page_api/` — API RESTful em Ruby on Rails
- `landing_page_front/` — Front-end em React + Vite

---

## 💻 Tecnologias Utilizadas

### Backend (API)
- Ruby on Rails 8
- PostgreSQL
- Active Storage
- Minitest

### Frontend
- React
- Vite
- CSS Modules
- React Hook Form
- Fetch API

---

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone https://github.com/joaovitorpagani99/des_auto.git
```

### 2. Configuração e execução da API

```bash
cd landing_page_api
bundle install
bin/rails db:migrate
bin/rails db:fixtures:load
bin/rails db:seed
bin/dev
```

### 3. Configuração do Front-end

```bash
cd landing_page_front
cp .env.development.exemple .env.development
npm i
npm run dev
```
O front estará disponível em [http://localhost:5173](http://localhost:5173).

---

## 🧪 Executando Testes

Na API:
```bash
cd landing_page_api
bin/rails test
```
---

## 🚀 Funcionalidades

- Exibição de veículo em destaque com galeria de imagens
- Informações da loja (nome, WhatsApp)
- Formulário de contato com validação e integração com a API
- Layout responsivo e moderno

---

## 📁 Estrutura de Pastas

### API
- `app/` — código principal Rails
- `db/` — migrações e seeds
- `config/` — configurações do Rails

### Front-end
- `src/components/` — componentes React
- `src/service/` — integração com API
- `src/pages/` — páginas principais

---

---

## 🌐 Demonstração Online

- **Front-end:** [https://desafiofront-zeta.vercel.app/](https://desafiofront-zeta.vercel.app/)
- **API:** [https://des-auto.onrender.com](https://des-auto.onrender.com)

> ⚠️ **Observação:** Tanto a API quanto o banco de dados estão hospedados na Render utilizando o plano gratuito. Por isso, ao acessar o front-end, pode ser necessário aguardar alguns segundos para que a API "acorde" e responda, especialmente no primeiro acesso.

---

## 📚 Aprendizados

- Integração completa entre front-end e back-end
- Boas práticas de API e teste
- Validação de formulários com React Hook Form
- Uso de variáveis de ambiente para múltiplos ambientes
- Deploy com Vercel e Render 
- Testes automatizados no Rails
