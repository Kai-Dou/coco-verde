import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navLinks, logos, brand } from "../data/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-3 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass-dark rounded-xl py-2.5 shadow-2xl shadow-black/20 sm:rounded-2xl sm:py-3"
              : "bg-transparent py-1 sm:py-2"
          }`}
          style={{ width: "calc(100% - 1.5rem)", marginLeft: "auto", marginRight: "auto" }}
        >
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#inicio")
            }}
            className="flex min-w-0 items-center"
          >
            <img
              src={logos.wordmark}
              alt={brand.name}
              className="h-8 w-auto max-w-[160px] object-contain object-left sm:h-10 sm:max-w-none md:h-12"
            />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow hidden md:inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold"
          >
            Manda um Zap!
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-2 rounded-xl p-2.5 text-white/90 hover:bg-white/5 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-coco-950/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-3 top-[calc(env(safe-area-inset-top)+4.5rem)] z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl glass-dark p-3 md:hidden"
            >
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-white active:bg-white/10"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-white/10 pt-2">
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yellow block rounded-xl px-4 py-3.5 text-center text-base font-semibold"
                  >
                    Manda um Zap! 🥥
                  </a>
                </li>
                <li>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl px-4 py-3.5 text-center text-base font-medium text-white active:bg-white/10"
                  >
                    Chama no Direct
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
