"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SectionWrapper, AnimatedItem } from "@/components/section-wrapper"

const testimonials = [
  {
    nameTr: "Ayşe Kaya",
    nameEn: "Ayşe Kaya",
    roleTr: "Kurucu, Innovex Teknoloji",
    roleEn: "Founder, Innovex Technology",
    quoteTr:
      "Ateş ile çalışmak son derece profesyonel bir deneyimdi. Karmaşık ürünümüzü net ve ikna edici bir şekilde anlattı. Landing page dönüşümlerimiz beklentilerimizin üzerinde.",
    quoteEn:
      "Working with Ateş was an extremely professional experience. He explained our complex product clearly and persuasively. Our landing page conversions exceeded expectations.",
  },
  {
    nameTr: "Mehmet Demir",
    nameEn: "Mehmet Demir",
    roleTr: "CEO, Kolay Finans",
    roleEn: "CEO, Kolay Finans",
    quoteTr:
      "Süreç şeffaf ve hızlıydı. Ne yapılacağı, ne zaman teslim edileceği baştan belliydi. Sürpriz olmadı, sadece kaliteli iş.",
    quoteEn:
      "The process was transparent and fast. What would be done and when it would be delivered was clear from the start. No surprises, just quality work.",
  },
  {
    nameTr: "Deniz Yılmaz",
    nameEn: "Deniz Yılmaz",
    roleTr: "Serbest Fotoğrafçı",
    roleEn: "Freelance Photographer",
    quoteTr:
      "Portfolio sitem tam istediğim gibi oldu. Minimal ama etkileyici. Yeni müşteri talepleri gözle görülür şekilde arttı.",
    quoteEn:
      "My portfolio site turned out exactly how I wanted. Minimal but impactful. New client inquiries visibly increased.",
  },
]

export function TestimonialsSection() {
  const { locale, t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedItem>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t.testimonials.title}
          </h2>
        </AnimatedItem>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 transition-colors duration-500"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-muted-foreground leading-relaxed mb-6">
                {locale === "tr" ? testimonial.quoteTr : testimonial.quoteEn}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {testimonial.nameTr.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {locale === "tr" ? testimonial.nameTr : testimonial.nameEn}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {locale === "tr" ? testimonial.roleTr : testimonial.roleEn}
                  </p>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
