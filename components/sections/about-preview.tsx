"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SectionWrapper, AnimatedItem } from "@/components/section-wrapper"

export function AboutPreviewSection() {
  const { t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <AnimatedItem>
            <div className="relative">
              <motion.div
                className="max-w-md mx-auto md:mx-0 bg-card rounded-2xl border border-border/50 overflow-hidden"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/ates.jpeg"
                  alt="Portrait of Ateş Altınkaynak"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                  priority
                />
                {/* Signature-like detail */}
                <div className="absolute bottom-6 right-6 text-primary/60 font-serif italic text-lg">
                  Ateş
                </div>
              </motion.div>
              {/* Decorative accent */}
            </div>
          </AnimatedItem>

          {/* Content */}
          <div>
            <AnimatedItem>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t.about.title}
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {t.about.paragraph1}
              </p>
            </AnimatedItem>

            <AnimatedItem>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
              </p>
            </AnimatedItem>

            {/* What you get */}
            <AnimatedItem>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  {t.about.whatYouGet}
                </h3>
                <ul className="space-y-3">
                  {t.about.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check size={12} className="text-primary" />
                      </span>
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
