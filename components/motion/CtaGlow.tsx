"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

// Green accent matching palette (oklch 0.45 0.12 155 ≈ primary)
const GLOW_GRADIENT =
  "radial-gradient(circle at 20% 30%, oklch(0.45 0.12 155 / 0.35), transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.45 0.12 155 / 0.18), transparent 60%)"

// Static SVG noise (no animation) – opacity controlled by class
const NOISE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E`

const DRIFT_DURATION = 35
const DRIFT_EASE = "easeInOut" as const

interface CtaGlowProps {
  className?: string
  /** Optional noise overlay opacity (0.06–0.12). Set to 0 to hide. */
  noiseOpacity?: number
}

/**
 * Clqu.dev-style animated glow behind CTA cards.
 * One motion element: translate + opacity only. Respects prefers-reduced-motion.
 * Enable animation after mount to avoid hydration mismatch.
 */
export function CtaGlow({ className, noiseOpacity = 0.08 }: CtaGlowProps) {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shouldAnimate = mounted && !shouldReduceMotion

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Single motion element: drifting glow (translate + opacity only) */}
      <motion.div
        className="absolute -left-[20%] -top-[20%] w-[140%] h-[140%]"
        style={{
          background: GLOW_GRADIENT,
          willChange: shouldAnimate ? "transform, opacity" : "auto",
        }}
        initial={false}
        animate={
          shouldAnimate
            ? {
                x: ["0%", "10%", "0%"],
                y: ["0%", "6%", "0%"],
                opacity: [0.9, 1, 0.9],
              }
            : { x: "0%", y: "0%", opacity: 1 }
        }
        transition={
          shouldAnimate
            ? {
                duration: DRIFT_DURATION,
                ease: DRIFT_EASE,
                repeat: Infinity,
                repeatType: "mirror",
              }
            : { duration: 0 }
        }
      />

      {/* Optional static noise overlay – no animation */}
      {noiseOpacity > 0 && (
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("${NOISE_DATA_URI}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
            opacity: noiseOpacity,
          }}
        />
      )}
    </div>
  )
}
