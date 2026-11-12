import { useEffect, useRef } from 'react'

/**
 * Spirala de puncte din broșura SXS, reconstruită ca animație:
 * punctele curg din gura pâlniei spre centru, ca datele care intră
 * într-un singur sistem. Pornește automat și se oprește
 * când nu e vizibilă.
 */
export default function DotVortex({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Puncte: inel (t), unghi de pornire, culoare
    const RINGS = 46
    const dots = []
    for (let i = 0; i < RINGS; i++) {
      const t0 = i / RINGS
      const count = Math.round(14 + 58 * t0)
      for (let j = 0; j < count; j++) {
        const r = Math.random()
        dots.push({
          t0,
          angle: (j / count) * Math.PI * 2 + i * 0.37,
          kind: r < 0.09 ? 'red' : r < 0.12 ? 'dark' : 'grey',
          jitter: Math.random() * 0.6,
        })
      }
    }

    let w = 0
    let h = 0
    let raf = 0
    let running = true
    let visible = true
    let time = 0
    let lastFrame = null

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const tilt = 1.12
    const yaw = -0.62
    const cT = Math.cos(tilt)
    const sT = Math.sin(tilt)
    const cY = Math.cos(yaw)
    const sY = Math.sin(yaw)

    const draw = (now) => {
      raf = 0
      if (!running || !visible || document.hidden) {
        lastFrame = null
        return
      }
      // Advance only by rendered time; discard long stalls instead of catching up.
      const delta = lastFrame === null ? 0 : Math.min(Math.max(now - lastFrame, 0), 50) / 1000
      lastFrame = now
      time += delta
      ctx.clearRect(0, 0, w, h)
      const scale = Math.min(w, h * 1.2) / 720
      const cx = w * 0.56
      const cy = h * 0.5

      for (const d of dots) {
        // curgere spre interior
        let t = (d.t0 - time * 0.018) % 1
        if (t < 0) t += 1
        const radius = (22 + 300 * Math.pow(t, 1.7)) * scale
        const z = (-260 + 470 * t) * scale
        // Integrate velocity so rotation never accelerates with total uptime.
        d.angle = (d.angle + delta * (0.32 - 0.22 * t)) % (Math.PI * 2)
        const ang = d.angle

        let x = Math.cos(ang) * radius
        let y = Math.sin(ang) * radius
        // rotire în jurul axei X
        let y2 = y * cT - z * sT
        let z2 = y * sT + z * cT
        // rotire în jurul axei Y
        let x3 = x * cY + z2 * sY
        let z3 = -x * sY + z2 * cY

        const depth = (z3 / (320 * scale) + 1) / 2 // 0 departe .. 1 aproape
        const px = cx + x3
        const py = cy + y2
        if (px < -10 || px > w + 10 || py < -10 || py > h + 10) continue

        const fadeEdge = Math.min(1, t * 6) * Math.min(1, (1 - t) * 5)
        const size = (0.6 + 2.8 * t + d.jitter) * (0.55 + 0.6 * depth) * scale * 1.15
        let alpha = fadeEdge * (0.25 + 0.75 * depth)

        if (d.kind === 'red') ctx.fillStyle = `rgba(229, 72, 93, ${alpha})`
        else if (d.kind === 'dark') ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`
        else ctx.fillStyle = `rgba(201, 196, 203, ${alpha * 0.42})`

        ctx.beginPath()
        // punctele devin ovale spre margine, ca în broșură
        ctx.ellipse(px, py, size * (1 + 0.5 * t), size, ang * 0.15, 0, Math.PI * 2)
        ctx.fill()
      }

      if (running && visible) raf = requestAnimationFrame(draw)
    }

    resize()
    draw(performance.now())

    const ro = new ResizeObserver(() => {
      resize()
      if (!raf) draw(performance.now())
    })
    ro.observe(canvas)

    const syncPlayback = () => {
      if (!visible || document.hidden) {
        cancelAnimationFrame(raf)
        raf = 0
        lastFrame = null
      } else if (!raf) {
        lastFrame = null
        raf = requestAnimationFrame(draw)
      }
    }
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      syncPlayback()
    })
    io.observe(canvas)
    document.addEventListener('visibilitychange', syncPlayback)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', syncPlayback)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
