import { brand } from "../data/content"

export function MobileWhatsApp() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="btn-yellow fixed z-40 flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-lg shadow-black/30 transition-transform active:scale-95 md:hidden"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      🥥
    </a>
  )
}
