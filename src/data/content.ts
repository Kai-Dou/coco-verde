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

export const historiaIntro =
  "Do coqueiral lá do Nordeste até a porta do seu estabelecimento, com jeito de quem conhece cada coqueiral."

export const scrollySteps = [
  {
    id: "origem",
    step: "01",
    title: "Lá no coqueiral do Nordeste",
    description:
      "Nosso coco nasce debaixo de sol forte e chuva de verão, cultivo natural, sem pressa, do jeito que a terra manda.",
    highlight: "Direto da roça",
    media: { type: "image" as const, src: farmImages.plantacao },
    fallbackGradient: "from-coco-800 to-coco-950",
  },
  {
    id: "colheita",
    step: "02",
    title: "Colheita no ponto",
    description:
      "Cada coco é escolhido na hora, olho no olho, batida na casca, água no auge. Só o melhor vai pro saco.",
    highlight: "Seleção na mão",
    media: { type: "video" as const, src: videos.colheita, poster: farmImages.colheita },
    fallbackGradient: "from-coco-700 to-coco-900",
  },
  {
    id: "estrada",
    step: "03",
    title: "Na estrada até Campinas",
    description:
      "Nossa frota sai carregada e chega rápido, com coco natural do jeito que você pediu e cuidado de quem conhece o caminho.",
    highlight: "Entrega em 24h",
    media: { type: "video" as const, src: videos.caminhao, poster: farmImages.coqueiral },
    fallbackGradient: "from-coco-600 to-coco-800",
  },
  {
    id: "entrega",
    step: "04",
    title: "Na porta do seu negócio",
    description:
      "Abastecemos bar, restaurante, lanchonete e mercadinho, ou você passa aqui no depósito e leva natural.",
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
  { value: "17+", label: "Produtos" },
] as const

export const products = [
  {
    id: "coco-verde",
    name: "Coco Verde",
    description:
      "O carro-chefe. Fresco, gelado e direto do Nordeste, no saco, pronto pro balcão ou pra geladeira de casa.",
    image: asset("/products/coco-verde.png"),
    tag: "O mais pedido",
    gradient: "from-coco-600/40 to-coco-900/80",
    featured: true,
  },
  {
    id: "agua-coco",
    name: "Água de Coco",
    description:
      "Na garrafa, geladinha e sem frescura. Hidratante natural, perfeita pro calor de Campinas.",
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
    image: asset("/products/cocada.jpg"),
    tag: "Artesanal",
    gradient: "from-cream-200/15 to-coco-900/80",
    featured: false,
  },
  {
    id: "cocada-artesanal",
    name: "Cocada Artesanal",
    description:
      "Cocada feita na mão, com coco ralado fresco. Textura cremosa e sabor de verdade.",
    image: asset("/products/cocada-artesanal.jpeg"),
    tag: "Artesanal",
    gradient: "from-cream-200/15 to-coco-900/80",
    featured: false,
  },
  {
    id: "cocada-maracuja",
    name: "Cocada de Maracujá",
    description:
      "Cocada com maracujá, equilíbrio perfeito entre doce e azedinho. Irresistível.",
    image: asset("/products/cocada-de-maracuja.jpeg"),
    tag: "Artesanal",
    gradient: "from-yellow-500/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "oleo-coco",
    name: "Óleo de Coco Copra",
    description:
      "Prensado a frio, extraído da copra. Na cozinha, no corpo, puro e natural.",
    image: asset("/products/oleo-de-coco.webp"),
    tag: "Extra virgem",
    gradient: "from-coco-500/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "bananinha-caipira",
    name: "Bananinha Caipira",
    description: "Doce de banana artesanal, sabor de roça. Perfeita pra acompanhar o café.",
    image: asset("/products/bananinha-caipira.jpeg"),
    tag: "Docinho",
    gradient: "from-yellow-500/25 to-coco-900/80",
    featured: false,
  },
  {
    id: "pacoca-vital",
    name: "Paçoca Vital",
    description: "Paçoca tradicional, crocante e saborosa. Um clássico nordestino.",
    image: asset("/products/pacoca-vital.jpeg"),
    tag: "Tradicional",
    gradient: "from-amber-600/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "rapadura",
    name: "Rapadura do Ceará",
    description: "Doce de rapadura autêntico, direto do Ceará. Energia natural e sabor intenso.",
    image: asset("/products/rapadura-ceara.jpeg"),
    tag: "Nordestino",
    gradient: "from-amber-700/25 to-coco-900/80",
    featured: false,
  },
  {
    id: "refrigerantes",
    name: "Refrigerantes",
    description: "Linha de refrigerantes pra abastecer seu comércio. Variedade e praticidade.",
    image: asset("/products/Refrigerantes.jpeg"),
    tag: "Bebidas",
    gradient: "from-coco-400/15 to-coco-900/80",
    featured: false,
  },
  {
    id: "pitu",
    name: "Pitú",
    description: "Cachaça Pitú, marca nordestina de peso. Pra quem revende com qualidade.",
    image: asset("/products/Pitu.jpeg"),
    tag: "Cachaça",
    gradient: "from-yellow-600/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "cachaca-canastra",
    name: "Cachaça Canastra",
    description: "Cachaça artesanal da região da Canastra. Sabor marcante e origem garantida.",
    image: asset("/products/cachaça-canastra.jpeg"),
    tag: "Artesanal",
    gradient: "from-amber-500/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "pinga-alambique",
    name: "Pinga de Alambique",
    description: "Destilada no alambique, autêntica e encorpada. Tradição em cada gole.",
    image: asset("/products/pinga-de-alambique.jpeg"),
    tag: "Artesanal",
    gradient: "from-amber-600/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "pingo-de-ouro",
    name: "Pingo de Ouro",
    description: "Cachaça selecionada, qualidade que o comerciante confia.",
    image: asset("/products/pingo-de-ouro.jpeg"),
    tag: "Cachaça",
    gradient: "from-yellow-500/20 to-coco-900/80",
    featured: false,
  },
  {
    id: "vinho-campino",
    name: "Vinho Campino",
    description: "Vinho Campino, opção versátil pro seu estabelecimento.",
    image: asset("/products/vinho-campino.jpeg"),
    tag: "Vinho",
    gradient: "from-red-900/30 to-coco-900/80",
    featured: false,
  },
  {
    id: "vinho-tomasi",
    name: "Vinho Tomasi",
    description: "Vinho Tomasi, qualidade e bom custo-benefício pra revenda.",
    image: asset("/products/vinho-tomasi.jpeg"),
    tag: "Vinho",
    gradient: "from-red-900/25 to-coco-900/80",
    featured: false,
  },
] as const

export const contactInfo = {
  location: {
    title: "Nosso depósito",
    description:
      "Passa aqui em Jardim Eulina, conhece a equipe, experimenta o coco e leva o seu natural.",
    address: brand.address,
    hours: "Seg a Sáb, 8h às 18h",
  },
  entrega: {
    title: "Entrega na região",
    description:
      "Levamos até bar, restaurante, lanchonete, academia e mercadinho em Campinas e redondezas. Chama no Zap ou no Direct.",
    address: "Campinas e região, em até 24 horas",
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
