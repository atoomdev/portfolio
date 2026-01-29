"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { AnimatedBackgroundLayer } from "./animated-background-layer"

export function GlobalAtmosphericBackground() {
    const shouldReduceMotion = useReducedMotion()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const enableMotion = mounted && !shouldReduceMotion

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
            {/* Base Layer: grid + slow drifting glows (internal animation only) */}
            <AnimatedBackgroundLayer variant="minimal" disableAnimations={!enableMotion} />

            {/* Static deep green glow to preserve premium atmosphere without scroll-linking */}
            <div
                className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full mix-blend-screen"
                style={{
                    background:
                        "radial-gradient(circle, oklch(0.45 0.12 155 / 0.18) 0%, transparent 70%)",
                }}
            />

            {/* Vignette Overlay for \"emerging from darkness\" feel */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                style={{
                    background: "radial-gradient(circle at 50% 50%, transparent 40%, #000 120%)",
                }}
            />
        </div>
    )
}
