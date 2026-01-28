"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundLayerProps {
    variant?: "hero" | "section" | "minimal"
    className?: string
    disableAnimations?: boolean
    showGrid?: boolean
}

export function AnimatedBackgroundLayer({
    variant = "section",
    className,
    disableAnimations = false,
    showGrid = true,
}: AnimatedBackgroundLayerProps) {
    const shouldReduceMotion = useReducedMotion()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const shouldAnimate = mounted && !shouldReduceMotion && !disableAnimations

    // Variant-specific settings - Tuned for "crafted" feel
    const settings = {
        hero: {
            gridOpacity: 0.2, // Increased from 0.12
            gridSize: 50,
            glowOpacity: 0.15, // Increased from 0.08
            noiseOpacity: 0.08, // Increased from 0.06
        },
        section: {
            gridOpacity: 0.1,
            gridSize: 60,
            glowOpacity: 0.08,
            noiseOpacity: 0.05,
        },
        minimal: {
            gridOpacity: 0.08,
            gridSize: 80,
            glowOpacity: 0.05,
            noiseOpacity: 0.04,
        },
    }

    const config = settings[variant]

    // SVG noise pattern (data URI for performance)
    const noiseDataUri = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E`

    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
            aria-hidden="true"
        >
            {/* Layer 1: Drifting Glows - Moved behind grid for depth */}
            {!shouldReduceMotion && shouldAnimate && (
                <>
                    {/* Glow 1 - Primary drift */}
                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: `radial-gradient(circle, oklch(0.45 0.12 155 / ${config.glowOpacity}) 0%, transparent 70%)`,
                            filter: "blur(120px)",
                        }}
                        animate={{
                            x: ["10%", "60%", "10%"],
                            y: ["20%", "70%", "20%"],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 45, // Faster than before for "alive" feel
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Glow 2 - Counter drift */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full"
                        style={{
                            background: `radial-gradient(circle, oklch(0.45 0.12 155 / ${config.glowOpacity}) 0%, transparent 70%)`,
                            filter: "blur(100px)",
                        }}
                        animate={{
                            x: ["70%", "20%", "70%"],
                            y: ["60%", "10%", "60%"],
                            scale: [1.2, 1, 1.2],
                        }}
                        transition={{
                            duration: 55,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 5,
                        }}
                    />

                    {/* Glow 3 - Central pulse (New source) */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                        style={{
                            background: `radial-gradient(circle, oklch(0.48 0.14 150 / ${config.glowOpacity * 0.8}) 0%, transparent 60%)`,
                            filter: "blur(140px)",
                        }}
                        animate={{
                            scale: [0.8, 1.1, 0.8],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </>
            )}

            {/* Layer 2: Animated Grid - Use mix-blend-mode to sit elegantly on top */}
            {showGrid && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
            linear-gradient(to right, oklch(0.92 0.01 90 / ${config.gridOpacity}) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.92 0.01 90 / ${config.gridOpacity}) 1px, transparent 1px)
          `,
                        backgroundSize: `${config.gridSize}px ${config.gridSize}px`,
                        animation: shouldAnimate
                            ? "grid-drift 120s linear infinite"
                            : "none",
                    }}
                />
            )}

            {/* Layer 3: Noise Texture - Enhanced */}
            <div
                className="absolute inset-0 mix-blend-overlay"
                style={{
                    backgroundImage: `url("${noiseDataUri}")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px 128px", // Smaller pattern
                    opacity: config.noiseOpacity,
                }}
            />

            {/* CSS Keyframes for grid drift */}
            <style jsx>{`
        @keyframes grid-drift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: ${config.gridSize}px ${config.gridSize}px;
          }
        }
      `}</style>
        </div>
    )
}
