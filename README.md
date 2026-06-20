# Coco Verde do Nordeste — Landing Page

Site institucional moderno para a **Coco Verde do Nordeste**, empresa de Campinas especializada em cocos verdes e derivados.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** — design system com paleta verde/cream/âmbar
- **Framer Motion** — scroll animations, parallax, scrollytelling
- **Lenis** — smooth scroll premium

## Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Full-screen com parallax e CTAs |
| **Nossa História** | Scrollytelling — jornada do Nordeste a Campinas |
| **Sobre Nós** | Empresa, point, matriz, pilares |
| **Catálogo** | Showcase de produtos (sem e-commerce) |
| **Contato** | Formulário + informações de atendimento |

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173)

## Imagens

Deposite os assets nas pastas em `public/`:

```
public/
├── logo/logo.png          ← Logo da marca
├── hero/hero-bg.jpg       ← Fundo do hero
├── about/about.jpg        ← Foto sobre nós
└── products/              ← Fotos dos produtos
    ├── coco-verde.jpg
    ├── suco-laranja.jpg
    ├── cocada.jpg
    ├── castanha.jpg
    ├── oleo-coco.jpg
    └── agua-coco.jpg
```

O site funciona sem imagens — exibe gradientes como fallback.

## Personalização

- **Textos e produtos:** `src/data/content.ts`
- **Cores e tipografia:** `src/index.css` (`@theme`)
- **Contato (telefone, e-mail, endereços):** `src/data/content.ts` → `contactInfo`

## Build

```bash
npm run build
npm run preview
```
