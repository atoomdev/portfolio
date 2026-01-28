"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedBackgroundLayer } from "@/components/motion/animated-background-layer"
import { CursorSpotlight } from "@/components/motion/cursor-spotlight"
import { cn } from "@/lib/utils"

// Split text into words for staggered animation
function SplitText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={false}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const { t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const enableMotion = mounted && !shouldReduceMotion

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <CursorSpotlight className="relative">
      <motion.section
        ref={containerRef}
        className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
        variants={containerVariants}
        initial={enableMotion ? "hidden" : false}
        animate={enableMotion ? "visible" : undefined}
      >
        {/* Animated background layer */}
        <AnimatedBackgroundLayer
          variant="hero"
          showGrid={false}
          disableAnimations={!mounted || shouldReduceMotion}
        />

        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <div className="max-w-3xl">
            {/* Animated headline with word split */}
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground"
              variants={itemVariants}
              initial={false}
            >
              <SplitText text={t.hero.headline} />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              variants={itemVariants}
              initial={false}
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTAs with magnetic effect */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
              initial={false}
            >
              <motion.div
                whileHover={enableMotion ? { scale: 1.05 } : {}}
                whileTap={enableMotion ? { scale: 0.98 } : {}}
                initial={false}
              >
                <Link
                  href="/start-project"
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-2 px-6 py-3",
                    "bg-primary text-primary-foreground font-medium rounded-lg",
                    "transition-all duration-300",
                    "hover:shadow-[0_0_30px_oklch(0.45_0.12_155_/_0.4)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  <span className="relative z-10">{t.hero.primaryCta}</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {/* Animated underline on hover */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-primary-foreground/30"
                    initial={{ scaleX: 0 }}
                    whileHover={enableMotion ? { scaleX: 1 } : {}}
                    style={{ originX: 0, width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              <Link
                href="/work"
                className={cn(
                  "group relative inline-flex items-center justify-center gap-2 px-6 py-3",
                  "bg-transparent border border-border text-foreground font-medium rounded-lg",
                  "transition-all duration-300 hover:bg-secondary/50 hover:border-primary/30",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                {t.hero.secondaryCta}

                {/* Sliding underline */}
                <span className="absolute bottom-2 left-6 right-6 h-[1px] bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>

            {/* Status badge */}
            <motion.div
              className="mt-10 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              variants={itemVariants}
              initial={false}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">{t.hero.statusLine}</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </CursorSpotlight>
  )
}
