import { useEffect, useRef, useState } from "react"

type MutedVideoProps = {
  src: string
  poster?: string
  className?: string
  eager?: boolean
  active?: boolean
}

export function MutedVideo({
  src,
  poster,
  className = "",
  eager = false,
  active = true,
}: MutedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(eager)
  const [srcAttached, setSrcAttached] = useState(false)

  useEffect(() => {
    if (eager) {
      setInView(true)
      return
    }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "60px", threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [eager])

  const shouldLoad = eager || inView
  const shouldPlay = active && shouldLoad && inView

  useEffect(() => {
    setSrcAttached(false)
  }, [src])

  useEffect(() => {
    const video = ref.current
    if (!video || !shouldLoad) return

    if (!srcAttached) {
      video.src = src
      video.load()
      setSrcAttached(true)
    }
  }, [shouldLoad, src, srcAttached])

  useEffect(() => {
    const video = ref.current
    if (!video || !srcAttached) return

    if (shouldPlay) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [shouldPlay, srcAttached])

  if (!shouldLoad && poster) {
    return (
      <img
        src={poster}
        alt=""
        aria-hidden
        className={className}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      className={className}
    />
  )
}
