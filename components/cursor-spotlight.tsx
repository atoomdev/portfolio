"use client"

import { motion, useReducedMotion } from "framer-motion"

interface CursorSpotlightProps {
  position: { x: number; y: number }
  isVisible: boolean
  size?: number
}

export function CursorSpotlight({ position, isVisible, size = 400 }: CursorSpotlightProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, oklch(0.45 0.12 155 / 0.08) 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          left: position.x,
          top: position.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </motion.div>
  )
}
