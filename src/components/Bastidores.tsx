import { motion } from "framer-motion"
import { bastidoresClips } from "../data/content"
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations"
import { MutedVideo } from "./MutedVideo"

export function Bastidores() {
  return (
    <section className="relative overflow-hidden bg-coco-900">
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-8 text-center sm:mb-12"
          >
            <motion.p
              variants={fadeUp}
              className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-400 sm:text-sm"
            >
              Bastidores
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              Vê como é na prática
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-lg text-sm text-white/60">
              Da colheita na roça até a entrega — sem filtro, do jeito que a gente trabalha.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4"
          >
            {bastidoresClips.map((clip) => (
              <motion.div
                key={clip.id}
                variants={fadeUp}
                className="w-[78vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl glass-dark sm:w-auto sm:max-w-none sm:rounded-3xl"
              >
                <div className="relative aspect-[9/16] sm:aspect-[3/4]">
                  <MutedVideo
                    src={clip.src}
                    poster={clip.poster}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coco-950/80 via-transparent to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-4 font-display text-sm font-bold text-white sm:text-base">
                    {clip.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
