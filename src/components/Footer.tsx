import { motion } from "framer-motion"
import { navLinks, brand, logos, contactInfo } from "../data/content"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      {/* Faixa amarela — CTA institucional */}
      <div className="bg-yellow-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:flex-row sm:gap-6 sm:px-5 sm:py-10 sm:text-left">
          <div>
            <p className="font-display text-2xl font-bold text-coco-900 sm:text-3xl">
              Garante teu estoque!
            </p>
            <p className="mt-1 text-sm font-medium text-coco-800/80">
              Chama no Zap ou no Direct. A gente leva rapidinho.
            </p>
          </div>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-coco-900 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-coco-800 hover:shadow-xl sm:w-auto sm:py-4"
          >
            Manda um Zap! 🥥
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 bg-coco-950">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <img
                src={logos.wordmark}
                alt={brand.name}
                className="h-12 w-auto object-contain"
              />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                {brand.slogan} Coco gelado direto do Nordeste, com entrega rapidinha em Campinas.
              </p>
              <p className="mt-3 text-sm text-white/40">{contactInfo.location.address}</p>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Navegação</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-yellow-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Redes</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-yellow-400"
                  >
                    {brand.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-yellow-400"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
          >
            <p className="text-xs text-white/30">
              © {year} {brand.name}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/30">Feito com 💚 em Campinas</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
