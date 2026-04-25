# todus

> Plataforma de consultoria em Data & Analytics, Inteligência Artificial e Visão Computacional.

---

## 📋 Sobre o Projeto

O **todus** é uma landing page institucional desenvolvida em **React + Vite**, com design escuro integrado, animações suaves e navegação com scroll âncora. A página apresenta as soluções da empresa de forma visual e orgânica, com banners dinâmicos e um formulário de contato.

### Seções da página

| Seção | Descrição |
|---|---|
| **Hero** | Banner principal com headline, subtítulo e CTA |
| **Business Intelligence** | Seção de soluções de analytics com imagem cinematográfica |
| **Inteligência Artificial** | Machine Learning e automação de processos |
| **Visão Computacional** | Detecção de objetos e análise de imagens |
| **Fale Conosco** | Formulário de contato com campos e reCAPTCHA visual |
| **Footer** | Links institucionais, contato e marca |

---

## 🛠 Stack Técnica

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18+ | Framework de UI |
| Vite | 8+ | Bundler e dev server |
| styled-components | 6+ | CSS-in-JS |
| Nginx | alpine | Servidor de produção (Docker) |
| Node.js | 20 | Runtime de build |
| Docker / Compose | - | Containerização |

---

## 📁 Estrutura do Projeto

```
todus/
├── public/                    # Assets estáticos (imagens dos banners)
│   ├── dashboard.png
│   ├── ai-solutions.png
│   ├── data-analytics.png
│   └── computer-vision.png
├── src/
│   ├── components/
│   │   ├── Navbar/            # Navegação com dropdown Soluções
│   │   ├── Hero/              # Banner principal
│   │   ├── Solutions/         # Seção Business Intelligence
│   │   ├── AISolutions/       # Seção Inteligência Artificial
│   │   ├── ComputerVision/    # Seção Visão Computacional
│   │   ├── ContactForm/       # Formulário Fale Conosco
│   │   └── Footer/            # Rodapé
│   ├── containers/
│   │   └── home/              # Orquestração de todas as seções
│   ├── index.css              # Reset CSS global
│   └── main.jsx               # Entry point React
├── Dockerfile                 # Build multi-stage (Node → Nginx)
├── docker-compose.yml         # Produção (porta 80)
├── docker-compose.dev.yml     # Desenvolvimento com HMR (porta 5173)
├── nginx.conf                 # Config Nginx para SPA
└── index.html                 # HTML entry point
```

---

## 🚀 Como Rodar

### Pré-requisitos

- [Node.js 20+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional, para rodar via container)

---

### 1. Ambiente de Desenvolvimento Local (sem Docker)

```bash
# Clone o repositório
git clone https://github.com/Rhayron/todus.git
cd todus

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: **http://localhost:5173**

---

### 2. Ambiente de Desenvolvimento com Docker (Hot Reload)

> Alterações nos arquivos `.jsx` e `.js` são refletidas **automaticamente** no container via Vite HMR, sem necessidade de rebuild.

```bash
# Clone o repositório
git clone https://github.com/Rhayron/todus.git
cd todus

# Suba o container de desenvolvimento
docker compose -f docker-compose.dev.yml up -d

# Acompanhe os logs
docker compose -f docker-compose.dev.yml logs -f
```

Acesse em: **http://localhost:5173**

Para acesso de outros computadores na mesma rede:
```
http://<IP-DO-SEU-MAC>:5173
```

Para descobrir seu IP local:
```bash
ipconfig getifaddr en0
```

---

### 3. Ambiente de Produção com Docker (Nginx)

> Gera um build otimizado e serve via Nginx Alpine. Ideal para demonstrações e deploy.

```bash
# Sobe o container de produção em daemon
docker compose up -d --build

# Acesse via navegador
# local:
http://localhost
# rede local (porta 80 padrão):
http://<SEU-IP>
```

---

## 🐳 Comandos Docker Úteis

| Ação | Comando |
|---|---|
| Iniciar produção | `docker compose up -d --build` |
| Parar produção | `docker compose down` |
| Iniciar dev (HMR) | `docker compose -f docker-compose.dev.yml up -d` |
| Parar dev | `docker compose -f docker-compose.dev.yml down` |
| Ver logs em tempo real | `docker compose logs -f` |
| Status dos containers | `docker ps` |

---

## 🎨 Design System

| Token | Valor |
|---|---|
| Background principal | `rgb(38, 40, 42)` |
| Verde institucional | `#3aad60` |
| Verde hover | `#2e9450` |
| Texto secundário | `rgba(255,255,255,0.55)` |
| Borda sutil | `rgba(255,255,255,0.08)` |
| Fonte monospace (botões) | `Fira Code` |

---

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento com HMR
npm run build    # Build de produção (gera /dist)
npm run preview  # Preview do build de produção localmente
npm run lint     # Lint com ESLint
```

---

## 📄 Licença

Projeto privado — todus © 2026. Todos os direitos reservados.
