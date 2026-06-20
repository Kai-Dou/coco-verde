import { motion } from "framer-motion"
import { Phone, MapPin, Clock, MessageCircle, AtSign } from "lucide-react"
import { contactInfo, brand } from "../data/content"
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations"

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-coco-900 noise-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(244,208,63,0.06),transparent_50%)]" />

      <div className="section-padding relative z-10 pb-28 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-10 text-center sm:mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400"
            >
              Contato
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold text-white sm:text-5xl"
            >
              Bora conversar?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-lg text-white/65">
              Pedido é pelo WhatsApp ou Direct do Instagram — a gente responde rápido, sem
              burocracia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-8 grid gap-4 sm:grid-cols-2"
          >
            <motion.a
              variants={fadeUp}
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow flex flex-col items-center rounded-2xl px-6 py-8 text-center transition-transform active:scale-[0.98] sm:rounded-3xl sm:py-10"
            >
              <MessageCircle size={32} className="mb-3" />
              <span className="font-display text-xl font-bold sm:text-2xl">Manda um Zap!</span>
              <span className="mt-2 text-sm font-medium text-coco-900/75">
                Quero meu coco gelado 🥥
              </span>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={brand.whatsappComerciante}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl border-2 border-coco-500 bg-coco-800/50 px-6 py-8 text-center text-white transition-all hover:border-coco-400 hover:bg-coco-800/70 active:scale-[0.98] sm:rounded-3xl sm:py-10"
            >
              <span className="mb-3 text-3xl">🏪</span>
              <span className="font-display text-xl font-bold sm:text-2xl">Tenho um comércio</span>
              <span className="mt-2 text-sm text-white/70">
                Bar, restaurante, mercadinho — fala com a gente
              </span>
            </motion.a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex items-center justify-center gap-3 rounded-2xl glass-dark px-6 py-4 text-white transition-colors hover:bg-white/8 sm:rounded-3xl"
          >
            <AtSign size={22} className="text-yellow-400" />
            <span className="font-semibold">{contactInfo.instagramHandle}</span>
            <span className="text-sm text-white/50">— Direct aberto</span>
          </motion.a>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[contactInfo.location, contactInfo.entrega].map((loc) => (
              <motion.div
                key={loc.title}
                variants={fadeUp}
                className="glass-dark rounded-2xl p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">{loc.title}</h3>
                <p className="mt-1 text-sm text-white/60">{loc.description}</p>
                <div className="mt-4 space-y-2">
                  {loc.title === contactInfo.location.title ? (
                    <a
                      href={contactInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-sm text-white/80 transition-colors hover:text-yellow-400"
                    >
                      <MapPin size={16} className="mt-0.5 shrink-0 text-coco-400" />
                      {loc.address}
                    </a>
                  ) : (
                    <p className="flex items-start gap-2 text-sm text-white/80">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-coco-400" />
                      {loc.address}
                    </p>
                  )}
                  <p className="flex items-center gap-2 text-sm text-white/80">
                    <Clock size={16} className="shrink-0 text-coco-400" />
                    {loc.hours}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.a
              variants={fadeUp}
              href="tel:+5519981357741"
              className="flex items-center justify-center gap-2 rounded-xl glass px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} className="text-coco-400" />
              {contactInfo.phone}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
