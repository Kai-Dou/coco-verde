import { useState } from "react"
import { motion } from "framer-motion"
import { products, brand, type Product } from "../data/content"
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations"

function ProductImage({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    setFailed(true)
  }

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${product.gradient}`}
      >
        <span className="text-5xl opacity-30 sm:text-6xl">🥥</span>
      </div>
    )
  }

  return (
    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110"
      onError={handleError}
    />
  )
}

function ProductCard({
  product,
  index,
  variant = "default",
}: {
  product: Product
  index: number
  variant?: "default" | "featured" | "compact"
}) {
  const isFeatured = variant === "featured"

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${
        isFeatured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isFeatured ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]" : "aspect-[4/5] sm:aspect-[3/4]"
        }`}
      >
        <ProductImage product={product} />

        <div className="absolute inset-0 bg-gradient-to-t from-coco-950 via-coco-950/30 to-transparent opacity-90 md:opacity-80 md:transition-opacity md:group-hover:opacity-90" />

        {/* Desktop hover reveal */}
        <div className="absolute inset-x-0 bottom-0 hidden translate-y-2 p-6 opacity-0 transition-all duration-500 md:block md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-white/80">{product.description}</p>
        </div>
      </div>

      <div className={`absolute inset-x-0 bottom-0 ${isFeatured ? "p-5 sm:p-8" : "p-4 sm:p-6"}`}>
        <span className="mb-2 inline-block rounded-full glass px-3 py-1 text-[11px] font-medium text-coco-200 sm:text-xs">
          {product.tag}
        </span>
        <h3
          className={`font-display font-bold text-white ${
            isFeatured ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {product.name}
        </h3>
        {/* Mobile — descrição sempre visível */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70 md:hidden">
          {product.description}
        </p>
      </div>

      <span className="absolute right-3 top-3 font-display text-3xl font-bold text-white/10 sm:right-4 sm:top-4 sm:text-4xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.article>
  )
}

export function Catalog() {
  const featured = products.find((p) => p.featured)!
  const others = products.filter((p) => !p.featured)

  return (
    <section id="catalogo" className="relative bg-coco-950">
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-10 text-center sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-400 sm:mb-3 sm:text-sm"
            >
              Catálogo
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              Nossos produtos
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-xl px-2 text-sm text-white/65 sm:mt-4 sm:text-base"
            >
              Do coco gelado à bebida e docinho — linha completa pra revender ou saborear. Chama no Zap ou no Direct.
            </motion.p>
          </motion.div>

          {/* Mobile: carrossel horizontal para produtos secundários */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <ProductCard product={featured} index={0} variant="featured" />
            </motion.div>

            <p className="mb-3 px-1 text-xs font-medium uppercase tracking-wider text-white/40">
              Mais produtos
            </p>
            <div className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
              {others.map((product, i) => (
                <div
                  key={product.id}
                  className="w-[72vw] max-w-[280px] shrink-0 snap-center"
                >
                  <ProductCard product={product} index={i + 1} variant="compact" />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: grid com destaque */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="hidden gap-5 md:grid md:grid-cols-3 md:gap-6"
          >
            <ProductCard product={featured} index={0} variant="featured" />
            {others.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center sm:mt-16"
          >
            <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl glass-dark px-5 py-5 sm:max-w-none sm:flex-row sm:justify-center sm:gap-8 sm:rounded-3xl sm:px-8 sm:py-6">
              <p className="text-sm text-white/70 sm:text-base">
                Tem comércio? Garante seu estoque pelo Zap ou Direct.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href={brand.whatsappComerciante}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold sm:w-auto"
                >
                  Manda um Zap!
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl glass px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
                >
                  Direct
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
