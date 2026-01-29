"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SectionWrapper, AnimatedItem } from "@/components/section-wrapper"
import { useCursorSpotlight } from "@/hooks/use-cursor-spotlight"
import { CursorSpotlight } from "@/components/cursor-spotlight"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "innovex",
    type: "website",
    titleTr: "Sheraton Ankara Hotel & Convention Center ",
    titleEn: "Sheraton Ankara Hotel & Convention Center",
    goalTr: "Sheraton Ankara Hotel & Convention Center sitesi",
    goalEn: "Website for Sheraton Ankara Hotel & Convention Center",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
    featured: false,
  },
  {
    id: "deniz-yilmaz",
    type: "website",
    titleTr: "Barle Pub & Kitchen",
    titleEn: "Barle Pub & Kitchen",
    goalTr: "Bar & Kitchen için çok sayfalı kurumsal site",
    goalEn: "Multi-page corporate site for bar & kitchen",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
    featured: true,
    outcomeTr: "Minimal, görsel odaklı tasarım ile müşteri taleplerinde artış",
    outcomeEn: "Increased client inquiries with minimal, visual-focused design",
  },
  {
    id: "kolay-finans",
    type: "website",
    titleTr: "Kadir ALkan Hair Artist",
    titleEn: "Kadir ALkan Hair Artist",
    goalTr: "Kadir ALkan Hair Artist sitesi",
    goalEn: "Website for Kadir ALkan Hair Artist",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
    featured: false,
  },
  {
    id: "green-earth",
    type: "landing",
    titleTr: "Green Earth Campaign",
    titleEn: "Green Earth Campaign",
    goalTr: "Çevre kampanyası için etkileyici landing page",
    goalEn: "Impactful landing page for environmental campaign",
    deliverablesTr: "Metin + Tasarım",
    deliverablesEn: "Copy + Design",
    featured: false,
  },
]

const typeLabels = {
  tr: {
    landing: "Landing Page",
    website: "Website",
    copywriting: "Copywriting",
    personalBrand: "Kişisel Marka",
  },
  en: {
    landing: "Landing Page",
    website: "Website",
    copywriting: "Copywriting",
    personalBrand: "Personal Brand",
  },
}

// Featured project card with shine sweep effect
function FeaturedProjectCard({ project, locale, t }: {
  project: typeof projects[0];
  locale: "tr" | "en";
  t: ReturnType<typeof useLanguage>["t"];
}) {
  const shouldReduceMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)
  const { position, isVisible } = useCursorSpotlight(cardRef)

  return (
    <Link href={`/work/${project.id}`} className="block mb-8">
      <motion.div
        ref={cardRef}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border/50 bg-card",
          "transition-colors duration-500"
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={shouldReduceMotion ? {} : { y: -6 }}
      >
        {/* Cursor spotlight inside card */}
        <CursorSpotlight position={position} isVisible={isVisible} size={350} />

        <div className="grid md:grid-cols-2 gap-0 relative z-10">
          {/* Project image */}
          <div className="md:min-h-[400px] bg-secondary/30 relative overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/barle.png"
                alt={locale === "tr" ? project.titleTr : project.titleEn}
                width={960}
                height={640}
                className="w-full h-full object-cover"
                priority
              />

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine sweep effect on hover */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.05) 50%, transparent 100%)",
                  }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </div>

          {/* Content with slide animation on hover */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="inline-flex w-fit px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              {typeLabels[locale][project.type as keyof typeof typeLabels.tr]}
            </span>

            <motion.h3
              className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
              whileHover={shouldReduceMotion ? {} : { x: 4 }}
              transition={{ duration: 0.3 }}
            >
              {locale === "tr" ? project.titleTr : project.titleEn}
            </motion.h3>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground/70">{t.work.goal}:</span>{" "}
                {locale === "tr" ? project.goalTr : project.goalEn}
              </p>
              <p>
                <span className="text-foreground/70">{t.work.deliverables}:</span>{" "}
                {locale === "tr" ? project.deliverablesTr : project.deliverablesEn}
              </p>
              {project.outcomeTr && (
                <p>
                  <span className="text-foreground/70">{t.work.outcome}:</span>{" "}
                  {locale === "tr" ? project.outcomeTr : project.outcomeEn}
                </p>
              )}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group/link">
              {t.work.viewCase}
              <motion.span
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </div>
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />

        {/* Subtle outer glow */}
        <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-green-subtle" />
      </motion.div>
    </Link>
  )
}

// Regular project card
function ProjectCard({ project, locale, t, index }: {
  project: typeof projects[0];
  locale: "tr" | "en";
  t: ReturnType<typeof useLanguage>["t"];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border/50 bg-card h-full",
          "transition-colors duration-500"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={shouldReduceMotion ? {} : { y: -6 }}
      >
        {/* Image placeholder with parallax */}
        <div className="aspect-[16/10] bg-secondary/30 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="font-serif text-2xl text-primary/60">
                {project.titleTr.charAt(0)}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="inline-flex px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded mb-3">
            {typeLabels[locale][project.type as keyof typeof typeLabels.tr]}
          </span>

          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {locale === "tr" ? project.titleTr : project.titleEn}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {locale === "tr" ? project.goalTr : project.goalEn}
          </p>

          <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
            {t.work.viewCase}
            <motion.span
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </Link>
  )
}

export function FeaturedWorkSection() {
  const { locale, t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured).slice(0, 3)

  return (
    <SectionWrapper className="bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <AnimatedItem className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t.work.title}
          </h2>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            {t.hero.secondaryCta}
            <motion.span
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </Link>
        </AnimatedItem>

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProjectCard project={featuredProject} locale={locale} t={t} />
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              t={t}
              index={index}
            />
          ))}
        </div>

        {/* Mobile link */}
        <Link
          href="/work"
          className="mt-8 sm:hidden inline-flex items-center gap-1 text-sm text-primary"
        >
          {t.hero.secondaryCta}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  )
}
