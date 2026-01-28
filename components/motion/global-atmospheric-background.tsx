"use client"

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimatedBackgroundLayer } from "./animated-background-layer"
import { cn } from "@/lib/utils"

export function GlobalAtmosphericBackground() {
    const shouldReduceMotion = useReducedMotion()
    const { scrollY } = useScroll()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const enableMotion = mounted && !shouldReduceMotion

    // Smooth out scroll values for elegant feel
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
    })

    // Scroll-based transforms for "atmosphere"
    // 1. Overall darkness/lightness pulsing with scroll
    const globalOpacity = useTransform(smoothScrollY, [0, 500, 1500, 3000], [1, 0.8, 0.9, 0.7])

    // 2. Vertical shift of valid atmospheric glows (Parallax effect)
    const glowY1 = useTransform(smoothScrollY, [0, 2000], [0, -300])
    const glowY2 = useTransform(smoothScrollY, [0, 2000], [0, -150])

    // 3. Subtle rotation based on scroll for "churning" atmosphere
    const rotate1 = useTransform(smoothScrollY, [0, 3000], [0, 15])
    const rotate2 = useTransform(smoothScrollY, [0, 3000], [0, -10])

    return (
        <motion.div
            className="fixed inset-0 z-[-1] overflow-hidden bg-background"
            style={{ opacity: 1 }}
            initial={false}
            animate={enableMotion ? { opacity: 1 } : undefined}
            transition={enableMotion ? { duration: 1 } : undefined}
        >
            {/* Base Layer: Grid + Drift (Standard) - Grid enabled globally per user request */}
            <AnimatedBackgroundLayer variant="minimal" disableAnimations={!enableMotion} />

            {/* Atmospheric Layer: Scroll-Reactive Glows */}
            {/* These sit BEHIND the content but interact with scroll */}

            {/* Glow 1: Top Right - Moves fast up */}
            <motion.div
                className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full mix-blend-screen"
                style={{
                    background: "radial-gradient(circle, oklch(0.45 0.12 155 / 0.15) 0%, transparent 70%)",
                    filter: "blur(100px)",
                    y: enableMotion ? glowY1 : 0,
                    rotate: enableMotion ? rotate1 : 0,
                }}
            />

            {/* Glow 2: Bottom Left - Moves slower up */}
            <motion.div
                className="absolute bottom-[-10%] left-[-20%] w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] rounded-full mix-blend-screen"
                style={{
                    background: "radial-gradient(circle, oklch(0.48 0.14 150 / 0.12) 0%, transparent 70%)",
                    filter: "blur(120px)",
                    y: enableMotion ? glowY2 : 0,
                    rotate: enableMotion ? rotate2 : 0,
                }}
            />

            {/* Glow 3: Middle - Reacts to scroll opacity */}
            <motion.div
                className="absolute top-[40%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen"
                style={{
                    background: "radial-gradient(circle, oklch(0.45 0.12 155 / 0.1) 0%, transparent 70%)",
                    filter: "blur(80px)",
                    opacity: enableMotion ? globalOpacity : 1,
                }}
            />

            {/* Vignette Overlay for "Emerging from darkness" feel */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                style={{
                    background: `radial-gradient(circle at 50% 50%, transparent 40%, #000 120%)`
                }}
            />
        </motion.div>
    )
}
