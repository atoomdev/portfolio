"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { useReducedMotion } from "framer-motion"

interface MagneticState {
  x: number
  y: number
}

export function useMagnetic(strength: number = 0.3) {
  const [magnetic, setMagnetic] = useState<MagneticState>({ x: 0, y: 0 })
  const ref = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || shouldReduceMotion) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setMagnetic({ x: deltaX, y: deltaY })
  }, [strength, shouldReduceMotion])

  const handleMouseLeave = useCallback(() => {
    setMagnetic({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element || shouldReduceMotion) return

    // Check if we're on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     window.matchMedia("(hover: none)").matches
    if (isMobile) return

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave, shouldReduceMotion])

  return { ref, magnetic }
}
