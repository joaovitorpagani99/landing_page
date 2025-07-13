# 🚗 Landing Page de Veículo semi-novo

Bem-vindo ao repositório da **Landing Page**!  
Este projeto é uma vitrine interativa para exibir um veículo específico, integrando-se a uma API para dados dinâmicos e um formulário de contato robusto.

---

## 🚀 Visão Geral do Projeto

Esta landing page foi desenvolvida com foco em **responsividade** e **experiência do usuário**, garantindo uma navegação fluida em diversos dispositivos.  
O projeto se destaca pela **modularidade** de seus componentes e pela integração eficiente com uma **API RESTful**.

---

## 💻 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **React** – Biblioteca JavaScript para construção de interfaces
- **CSS Modules** – Estilização modular com escopo local
- **React Hook Form** – Gerenciamento de formulários com validação
- **React Icons** – Biblioteca de ícones para React
- **Vite** – Build tool e servidor de desenvolvimento rápido
- **Fetch API** – Para requisições HTTP
- **JavaScript** – Recursos modernos do JavaScript

## 📁 Estrutura de Pastas

- **src/**
  - **assets/**: imagens e ícones do projeto
  - **components/**: componentes reutilizáveis do React
    - **ContactForm/**: formulário de contato
    - **details/**: detalhes do veículo
    - **Footer/**: rodapé
    - **Gallery/**: galeria de imagens
    - **header/**: cabeçalho/menu
    - **highlight/**: destaque principal
  - **pages/**: páginas principais do site
  - **service/**: funções para acessar a API
  - **App.jsx**: componente principal da aplicação
  - **main.jsx**: ponto de entrada do React
- **.env.development**: variáveis de ambiente para desenvolvimento
- **.env.production**: variáveis de ambiente para produção
- **package.json**: dependências e scripts do projeto

## 🧩 Componentes Principais

O front-end é construído com os seguintes componentes, cada um com sua responsabilidade bem definida:

### `Header`

- Menu de navegação responsivo.
- Toggle para menu mobile (hambúrguer).
- Destaque visual para o item de menu ativo.

### `Highlight`

- Seção principal com título e imagem destacada do veículo.
- Layout adaptativo para diferentes tamanhos de tela.

### `Gallery`

- Exibição das imagens do veículo em um layout de grid.
- Utiliza CSS Grid para organização automática das imagens.
- Imagens com efeito de sombra e bordas arredondadas.

### `VehicleDetails`

- Apresenta as especificações técnicas detalhadas do veículo.
- Ícones intuitivos para cada especificação.
- Layout responsivo que se adapta a diferentes dimensões de tela.

### `ContactForm`

- Formulário de contato completo com validação de campos.
- Integração com React Hook Form para gerenciamento de formulários.
- Exibição clara de mensagens de erro e sucesso.
- Checkbox para aceite de políticas de privacidade.

### `Footer`

- Contém o logotipo do projeto e links para redes sociais.
- Layout responsivo e centralizado.

---

## 🔌 Integração com API

O projeto se conecta a uma API para buscar dados do veículo e enviar informações do formulário de contato.

### `JavaScript` - `src/service/vehicleService.js`

```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getVehicle() {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicle/`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar veículo:", error);
    throw error;
  }
}

export async function saveContact(data) {
  // Implementação para envio de formulário de contato
  // Ex:
  // const response = await fetch(`${API_BASE_URL}/contact`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) {
  //   throw new Error(`Erro ${response.status}: ${response.statusText}`);
  // }
  // return await response.json();
}
```

## 📱 Responsividade

Todos os componentes foram desenvolvidos com foco em design responsivo:

- **Layout Fluido:** Adaptação dinâmica a diferentes tamanhos de tela.
- **Flexbox e Grid:** Utilização estratégica para layouts flexíveis.
- **Media Queries:** Estilos específicos para tablets e celulares.
- **Menu Mobile:** Menu hambúrguer para dispositivos móveis.
- **Imagens Responsivas:** Ajuste automático de tamanho.

### Exemplo de media query:

```css
@media screen and (max-width: 768px) {
  .detailsContainer {
    flex-direction: column-reverse;
    padding: 1.5rem 1rem;
  }

  .title {
    font-size: 1.6rem;
    text-align: center;
  }
}
```

## ⚙️ Configuração do Ambiente

Crie os seguintes arquivos de variáveis de ambiente:

### `.env.development`

```bash
VITE_API_BASE_URL=http://localhost:3000/api/v1/landing

```

### `.env.production`

- Está sendo utilizado essa url na hospedagem.

```bash
VITE_API_BASE_URL=https://des-auto.onrender.com/api/v1/landing
```

## 🏃‍♂️ Executando o Projeto

### Clone o repositório:

```bash
git clone https://github.com/seu-usuario/landing_page_front.git
cd landing_page_front
```

### Instale as dependências:

```bash
npm install
```

### Execute em modo de desenvolvimento:

```bash
npm run dev
```

### Para gerar build de produção:

```bash
npm run build
```
