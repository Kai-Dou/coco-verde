import { useEffect, useRef } from "react"

type MutedVideoProps = {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  lazy?: boolean
}

export function MutedVideo({
  src,
  poster,
  className = "",
  autoPlay = true,
  lazy = false,
}: MutedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    if (!lazy || autoPlay) {
      video.play().catch(() => {})
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [lazy, autoPlay, src])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={autoPlay && !lazy}
      preload={lazy ? "none" : "metadata"}
      aria-hidden
      className={className}
    />
  )
}
