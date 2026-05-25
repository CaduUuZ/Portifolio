# 🚀 Portfolio — Carlos Eduardo

Portfólio profissional full-stack com suporte a PT/EN/ES.

## Tecnologias
- React + Vite
- Tailwind CSS
- react-type-animation
- lucide-react

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Como personalizar

### 1. Seus dados pessoais
Edite `src/data/translations.js`:
- Nome, descrição (About)
- Links de contato (email, LinkedIn, GitHub)

### 2. Projetos
Em `translations.js`, cada projeto tem:
```js
{
  title: "Nome do Projeto",
  description: "Descrição...",
  stack: ["React", "Node.js"],
  github: "https://github.com/seu-usuario/repo",
  demo: "https://deploy.vercel.app",
  image: "/images/screenshot.png",  // opcional
}
```

### 3. Screenshots
Coloque imagens em `public/images/` e referencie no campo `image` dos projetos.

### 4. Formulário de contato
Em `src/components/Contact.jsx`, descomente e configure o Formspree:
```js
await fetch("https://formspree.io/f/SEU_ID", { ... })
```

### 5. Skills
Edite `src/data/skills.js` para adicionar/remover tecnologias.

## Deploy (Vercel)

```bash
npm run build
# Arraste a pasta dist/ para vercel.com
# ou conecte seu GitHub repo
```

## Domínio sugerido
- cadupaiva.dev
- carlospaiva.dev
