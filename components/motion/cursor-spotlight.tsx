"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"
import { useReducedMotion } from "framer-motion"

interface CursorSpotlightProps {
    children: ReactNode
    intensity?: number
    className?: string
}

export function CursorSpotlight({
    children,
    intensity = 0.3,
    className,
}: CursorSpotlightProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isDesktop, setIsDesktop] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        // Check if desktop
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        checkDesktop()
        window.addEventListener("resize", checkDesktop)

        return () => window.removeEventListener("resize", checkDesktop)
    }, [])

    useEffect(() => {
        if (!isDesktop || shouldReduceMotion) return

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener("mousemove", handleMouseMove)
            return () => container.removeEventListener("mousemove", handleMouseMove)
        }
    }, [isDesktop, shouldReduceMotion])

    const showSpotlight = isDesktop && !shouldReduceMotion

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: "relative",
            }}
        >
            {showSpotlight && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.45 0.12 155 / ${intensity * 0.15}) 0%, transparent 40%)`,
                        opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
                    }}
                    aria-hidden="true"
                />
            )}
            {children}
        </div>
    )
}
