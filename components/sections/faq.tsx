"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SectionWrapper, AnimatedItem } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

function FAQItem({ 
  item, 
  index, 
  isOpen, 
  onToggle 
}: { 
  item: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "border border-border/50 rounded-xl overflow-hidden transition-colors duration-300",
        isOpen && "border-primary/30 bg-card"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground pr-4">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 0.3, 
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={cn(
              "w-5 h-5 transition-colors duration-300",
              isOpen ? "text-primary" : "text-muted-foreground"
            )}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.2, delay: 0.05 },
            }}
          >
            <motion.div 
              className="px-5 pb-5 text-muted-foreground leading-relaxed"
              initial={shouldReduceMotion ? {} : { y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? {} : { y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionWrapper className="bg-card/30">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedItem>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t.faq.title}
          </h2>
        </AnimatedItem>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
