import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { scrollySteps, historiaIntro } from "../data/content"
import { useIsMobile } from "../hooks/useMediaQuery"
import { MutedVideo } from "./MutedVideo"

function StepMedia({
  media,
  gradient,
  alt,
  videoActive = true,
}: {
  media: (typeof scrollySteps)[number]["media"]
  gradient: string
  alt: string
  videoActive?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br sm:rounded-3xl ${gradient}`}
    >
      {media.type === "video" && !error ? (
        <MutedVideo
          src={media.src}
          poster={"poster" in media ? media.poster : undefined}
          active={videoActive}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : !error ? (
        <img
          src={media.src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-coco-950/60 via-transparent to-transparent" />
      {media.type === "image" && !loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 animate-pulse rounded-full border-2 border-coco-400/30 border-t-coco-400" />
        </div>
      )}
    </div>
  )
}

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -40])

  useEffect(() => {
    if (isMobile) return
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const step = Math.min(
        Math.floor(v * scrollySteps.length),
        scrollySteps.length - 1
      )
      setActiveStep(step)
    })
    return unsubscribe
  }, [scrollYProgress, isMobile])

  return (
    <section id="historia" className="relative bg-coco-950">
      <div className="section-padding pb-8 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-coco-400 sm:mb-3 sm:text-sm">
            Nossa Jornada
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-5xl md:text-6xl">
            Da roça ao seu copo
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-white/60 sm:mt-4 sm:text-base">
            {historiaIntro}
          </p>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto hidden max-w-7xl lg:block"
        style={{ height: `${scrollySteps.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="grid w-full grid-cols-2 items-center gap-16 px-8">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-8 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-coco-500 to-yellow-400"
                  style={{ width: progressWidth }}
                />
              </div>

              <div className="mb-6 flex gap-3">
                {scrollySteps.map((step, i) => (
                  <button
                    key={step.id}
                    type="button"
                    aria-label={`Etapa ${step.step}`}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i <= activeStep ? "bg-coco-500" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-6xl font-bold text-white/10">
                    {scrollySteps[activeStep].step}
                  </span>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
                    {scrollySteps[activeStep].highlight}
                  </p>
                  <h3 className="font-display text-4xl font-bold text-white md:text-5xl">
                    {scrollySteps[activeStep].title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
                    {scrollySteps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02, x: -30 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <StepMedia
                    media={scrollySteps[activeStep].media}
                    gradient={scrollySteps[activeStep].fallbackGradient}
                    alt={scrollySteps[activeStep].title}
                    videoActive
                  />
                </motion.div>
              </AnimatePresence>

              <motion.div
                style={{ y: cardY }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-2xl"
              >
                <p className="text-xs text-white/60">Etapa</p>
                <p className="font-display text-2xl font-bold text-white">
                  {scrollySteps[activeStep].step}{" "}
                  <span className="text-coco-400/50">/ 04</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-4 pb-16 sm:space-y-6 sm:px-5 sm:pb-20 lg:hidden">
        {scrollySteps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl glass-dark sm:rounded-3xl"
          >
            <div className="aspect-[16/10] sm:aspect-video">
              <StepMedia
                media={step.media}
                gradient={step.fallbackGradient}
                alt={step.title}
                videoActive
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-white/15">{step.step}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-yellow-400 sm:text-xs">
                  {step.highlight}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
