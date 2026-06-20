/** Codifica caminhos de assets com espaços ou caracteres especiais */
export function asset(path: string) {
  return encodeURI(path)
}

export const brand = {
  name: "Coco Verde Direto do Nordeste",
  shortName: "Coco Verde",
  tagline: "Direto do Nordeste",
  slogan: "Saúde que vem direto da Natureza!",
  instagram: "https://www.instagram.com/cocoverdecampinas/",
  instagramHandle: "@cocoverdecampinas",
  whatsapp: "https://wa.me/5519981357741?text=Quero+meu+coco+gelado",
  whatsappComerciante:
    "https://wa.me/5519981357741?text=Olá! Tenho um estabelecimento e quero comprar coco verde.",
  phone: "(19) 98135-7741",
  address: "R. Dr. Eduardo Edarge Badaró, 264 - Jardim Eulina, Campinas/SP",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Dr.+Eduardo+Edarge+Badaró,+264+Jardim+Eulina+Campinas+SP",
} as const

export const logos = {
  circular: asset("/logo/logo.png"),
  wordmark: asset("/logo/logo 2.png"),
} as const

export const farmImages = {
  hero: asset("/roça/WhatsApp Image 2021-04-07 at 10.09.42.jpeg"),
  plantacao: asset("/roça/Imagem 3.jpeg"),
  colheita: asset("/roça/WhatsApp Image 2021-04-07 at 09.56.48 (1).jpeg"),
  coqueiral: asset("/roça/WhatsApp Image 2021-04-07 at 12.54.50.jpeg"),
} as const

export const videos = {
  hero: asset("/videos/colheita-coco-verde.mp4"),
  colheita: asset("/videos/colheita-coco-verde.mp4"),
  caminhao: asset("/videos/coco-verde-no-caminhao.mp4"),
  entrega: asset("/videos/entrega-jundiai.mp4"),
  abastecimento: asset("/videos/abringo-coco-verde.mp4"),
} as const

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa História", href: "#historia" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#catalogo" },
  { label: "Contato", href: "#contato" },
] as const

export const scrollySteps = [
  {
    id: "origem",
    step: "01",
    title: "Lá no coqueiral do Nordeste",
    description:
      "Nosso coco nasce debaixo de sol forte e chuva de verão — cultivo natural, sem pressa, do jeito que a terra manda.",
    highlight: "Direto da roça",
    media: { type: "image" as const, src: farmImages.plantacao },
    fallbackGradient: "from-coco-800 to-coco-950",
  },
  {
    id: "colheita",
    step: "02",
    title: "Colheita no ponto",
    description:
      "Cada coco é escolhido na hora — olho no olho, batida na casca, água no auge. Só o melhor vai pro saco de rede amarela.",
    highlight: "Seleção na mão",
    media: { type: "video" as const, src: videos.colheita, poster: farmImages.colheita },
    fallbackGradient: "from-coco-700 to-coco-900",
  },
  {
    id: "estrada",
    step: "03",
    title: "Na estrada até Campinas",
    description:
      "Nossa frota sai carregada e chega rápido — coco gelado do jeito que você pediu, com cuidado de quem conhece o caminho.",
    highlight: "Entrega em 24h",
    media: { type: "video" as const, src: videos.caminhao, poster: farmImages.coqueiral },
    fallbackGradient: "from-coco-600 to-coco-800",
  },
  {
    id: "entrega",
    step: "04",
    title: "Na porta do seu negócio",
    description:
      "Abastecemos bar, restaurante, lanchonete e mercadinho — ou você passa aqui no depósito e leva geladinho pra casa.",
    highlight: "Pra revender ou saborear",
    media: { type: "video" as const, src: videos.entrega, poster: asset("/products/coco-verde.png") },
    fallbackGradient: "from-yellow-500/20 to-coco-900",
  },
] as const

export const bastidoresClips = [
  {
    id: "colheita",
    title: "Colheita na roça",
    src: videos.colheita,
    poster: farmImages.colheita,
  },
  {
    id: "caminhao",
    title: "Saindo carregado",
    src: videos.caminhao,
    poster: farmImages.coqueiral,
  },
  {
    id: "entrega",
    title: "Entrega na região",
    src: videos.entrega,
    poster: asset("/products/coco-verde.png"),
  },
  {
    id: "abastecimento",
    title: "Abastecendo parceiros",
    src: videos.abastecimento,
    poster: farmImages.plantacao,
  },
] as const

export const aboutStats = [
  { value: "24h", label: "Chega rápido" },
  { value: "100%", label: "Natural" },
  { value: "🌴", label: "Direto do NE" },
  { value: "5", label: "Produtos" },
] as const

export const products = [
  {
    id: "coco-verde",
    name: "Coco Verde",
    description:
      "O carro-chefe. Fresco, gelado e direto do Nordeste — no saco de rede amarela, pronto pro balcão ou pra geladeira de casa.",
    image: asset("/products/coco-verde.png"),
    tag: "O mais pedido",
    gradient: "from-coco-600/40 to-coco-900/80",
    featured: true,
  },
  {
    id: "agua-coco",
    name: "Água de Coco",
    description:
      "Na garrafa, geladinha e sem frescura. Hidratante natural — perfeita pro calor de Campinas.",
    image: asset("/products/garrafa-agua-de-coco.webp"),
    tag: "Natural",
    gradient: "from-coco-400/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "suco-laranja",
    name: "Suco de Laranja",
    description:
      "Espremido na hora, sem conservante. Sabor de laranja de verdade, do jeito nordestino.",
    image: asset("/products/suco-laranja.png"),
    tag: "Fresco",
    gradient: "from-yellow-500/30 to-coco-900/80",
    featured: false,
  },
  {
    id: "cocada",
    name: "Cocada Delícia do Vale",
    description:
      "Doce de coco artesanal, cremoso e tradicional. Um pedacinho do Nordeste no docinho.",
    image: asset("/products/cocada-delicia-do-vale.jpg"),
    imageFallback: asset("/products/cocada.jpg"),
    tag: "Artesanal",
    gradient: "from-cream-200/15 to-coco-900/80",
    featured: false,
  },
  {
    id: "oleo-coco",
    name: "Óleo de Coco Copra",
    description:
      "Prensado a frio, extraído da copra. Na cozinha, no corpo — puro e natural.",
    image: asset("/products/oleo-de-coco.webp"),
    tag: "Extra virgem",
    gradient: "from-coco-500/20 to-coco-900/80",
    featured: false,
  },
] as const

export const contactInfo = {
  location: {
    title: "Nosso depósito",
    description:
      "Passa aqui em Jardim Eulina — conhece a equipe, experimenta o coco e leva o seu geladinho.",
    address: brand.address,
    hours: "Seg a Sáb, 8h às 18h",
  },
  entrega: {
    title: "Entrega na região",
    description:
      "Levamos até bar, restaurante, lanchonete, academia e mercadinho em Campinas e redondezas. Chama no Zap ou no Direct.",
    address: "Campinas e região — em até 24 horas",
    hours: "Seg a Sex, 7h às 17h",
  },
  phone: brand.phone,
  whatsapp: brand.whatsapp,
  whatsappComerciante: brand.whatsappComerciante,
  instagram: brand.instagram,
  instagramHandle: brand.instagramHandle,
  mapsUrl: brand.mapsUrl,
} as const

export type Product = (typeof products)[number]
