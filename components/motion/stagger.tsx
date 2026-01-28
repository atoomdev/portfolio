"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useRef, Children, type ReactNode } from "react"

interface StaggerProps {
    children: ReactNode
    staggerDelay?: number
    blur?: boolean
    className?: string
}

export function Stagger({
    children,
    staggerDelay = 0.1,
    blur = true,
    className,
}: StaggerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const shouldReduceMotion = useReducedMotion()

    const childrenArray = Children.toArray(children)

    return (
        <div ref={ref} className={className}>
            {childrenArray.map((child, index) => (
                <motion.div
                    key={index}
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
                        delay: index * staggerDelay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    )
}
