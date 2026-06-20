import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Scrollytelling } from "./components/Scrollytelling"
import { Bastidores } from "./components/Bastidores"
import { About } from "./components/About"
import { Catalog } from "./components/Catalog"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { MobileWhatsApp } from "./components/MobileWhatsApp"
import { useLenis } from "./hooks/useLenis"

export default function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Scrollytelling />
        <Bastidores />
        <About />
        <Catalog />
        <Contact />
      </main>
      <Footer />
      <MobileWhatsApp />
    </>
  )
}
