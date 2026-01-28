"use client"

import React from "react"

import { useState, useEffect, useCallback } from "react"
import { useReducedMotion } from "framer-motion"

interface CursorPosition {
  x: number
  y: number
}

export function useCursorSpotlight(containerRef: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || shouldReduceMotion) return
    
    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [containerRef, shouldReduceMotion])

  const handleMouseEnter = useCallback(() => {
    if (!shouldReduceMotion) {
      setIsVisible(true)
    }
  }, [shouldReduceMotion])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || shouldReduceMotion) return

    // Check if we're on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     window.matchMedia("(hover: none)").matches
    if (isMobile) return

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [containerRef, handleMouseMove, handleMouseEnter, handleMouseLeave, shouldReduceMotion])

  return { position, isVisible }
}
