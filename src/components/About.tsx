import { motion } from "framer-motion"
import { MapPin, Truck, Store, Leaf } from "lucide-react"
import { aboutStats, brand, logos } from "../data/content"
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations"

const pillars = [
  {
    icon: Leaf,
    title: "Raiz nordestina",
    description:
      "Trabalhamos direto com quem planta e colhe no Nordeste. Coco natural, sem atalho, sem aditivo.",
  },
  {
    icon: Truck,
    title: "Entrega rapidinha",
    description:
      "Frota nossa, com logo na porta. Chega em Campinas e redondezas em menos de 24 horas.",
  },
  {
    icon: Store,
    title: "Pra quem revende",
    description:
      "Abastece bar, lanchonete, restaurante, academia e mercadinho com regularidade e preço justo.",
  },
  {
    icon: MapPin,
    title: "Porta aberta em Jardim Eulina",
    description:
      "Passa no depósito, toma uma água de coco gelada e leva o seu. Simples assim.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-coco-900 noise-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(45,134,89,0.1),transparent_60%)]" />

      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400"
              >
                Sobre Nós
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-3xl font-bold text-white sm:text-5xl"
              >
                Compromisso é
                <br />
                <span className="text-gradient">a nossa marca</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-white/70">
                A <strong className="text-white">{brand.name}</strong> traz o sabor da roça
                nordestina até Campinas. Coco gelado, água de coco, suco e doces, tudo com
                frescor de quem colheu ontem.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-white/70">
                Enquanto uns ficam só na promessa, a gente entrega. Chama no Zap, manda no
                Direct. A gente resolve.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-4 text-center transition-transform hover:scale-105"
                  >
                    <p className="font-display text-2xl font-bold text-yellow-400 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <img
                  src={logos.circular}
                  alt={brand.name}
                  className="mx-auto w-full max-w-xs object-contain drop-shadow-2xl sm:max-w-sm"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-6 py-4 shadow-2xl"
              >
                <p className="text-2xl">🥥</p>
                <p className="text-sm font-semibold text-white">Geladinho garantido</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 top-8 rounded-2xl bg-yellow-400 px-5 py-3 shadow-2xl"
              >
                <p className="text-xs font-medium text-coco-900">Chega em</p>
                <p className="font-display text-xl font-bold text-coco-900">{"< 24h"}</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-16 grid gap-4 sm:mt-24 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="group glass-dark rounded-2xl p-6 transition-all hover:bg-white/8 hover:shadow-xl hover:shadow-coco-600/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-coco-600/25 p-3 text-yellow-400 transition-colors group-hover:bg-coco-600/35">
                  <pillar.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
