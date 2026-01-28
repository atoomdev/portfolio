"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface RevealProps {
    children: ReactNode
    delay?: number
    blur?: boolean
    className?: string
}

export function Reveal({
    children,
    delay = 0,
    blur = true,
    className,
}: RevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        y: 20,
                        filter: blur ? "blur(4px)" : "blur(0px)",
                    }
            }
            animate={
                isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }
                    : {}
            }
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    )
}
