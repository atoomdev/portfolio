"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AtmosphericSectionProps {
    children: React.ReactNode
    className?: string
    intensity?: "subtle" | "medium" | "strong"
}

export function AtmosphericSection({
    children,
    className,
    intensity = "medium",
}: AtmosphericSectionProps) {
    const shouldReduceMotion = useReducedMotion()

    // Use simple viewport triggering instead of scroll measurement to avoid hydration issues
    // This satisfies the "emerge from darkness" feel through time-based transitions on entry/exit

    if (shouldReduceMotion) {
        return (
            <div className={cn("relative", className)}>
                {children}
            </div>
        )
    }

    return (
        <motion.div
            className={cn("relative", className)}
            initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
                filter: "blur(12px)"
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)"
            }}
            viewport={{
                once: false,
                amount: 0.2, // Trigger when 20% in view
                margin: "0px 0px -10% 0px" // Wait until slightly inside from bottom
            }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] // Smooth exponential ease
            }}
        >
            {children}
        </motion.div>
    )
}
