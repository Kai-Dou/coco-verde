import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { brand, logos, farmImages, videos } from "../data/content"
import { useIsMobile } from "../hooks/useMediaQuery"
import { MutedVideo } from "./MutedVideo"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "15%" : "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.05 : 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "25%" : "50%"])

  const scrollToHistoria = () => {
    document.querySelector("#historia")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100dvh] min-h-[100svh] items-center justify-center overflow-hidden pt-[env(safe-area-inset-top)]"
    >
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0">
        {isMobile ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${farmImages.hero})` }}
          />
        ) : (
          <MutedVideo
            src={videos.hero}
            poster={farmImages.hero}
            className="absolute inset-0 h-full w-full object-cover"
            eager
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-coco-950/88 via-coco-900/75 to-coco-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,134,89,0.12),transparent_60%)]" />
      </motion.div>

      {!isMobile && (
        <>
          <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-coco-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-yellow-400/8 blur-3xl" />
        </>
      )}

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-24 pt-20 text-center sm:px-5 sm:pb-0 sm:pt-0"
      >
        <motion.img
          src={logos.circular}
          alt={brand.name}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-5 h-24 w-24 object-contain sm:mb-8 sm:h-32 sm:w-32 md:h-40 md:w-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 inline-flex max-w-[90vw] items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-coco-200 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400 animate-pulse" />
          🌴 Campinas, SP — {brand.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[1.65rem] font-bold leading-[1.2] tracking-tight text-white min-[400px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {brand.slogan.split(" da ").map((part, i) =>
            i === 0 ? (
              <span key={part}>
                {part} da <span className="text-gradient">Natureza!</span>
              </span>
            ) : null
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl"
        >
          Coco gelado direto do Nordeste, com cheiro de roça e entrega rapidinha em Campinas.
          Pediu no Zap, chegou fresquinho.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
        >
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 text-base font-semibold sm:w-auto sm:px-8 sm:py-4"
          >
            Manda um Zap! 🥥
          </a>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl glass px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
          >
            Chama no Direct
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        style={{ opacity }}
        onClick={scrollToHistoria}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white sm:bottom-8 sm:flex"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Descubra</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
