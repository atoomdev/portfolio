"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useReducedMotion, AnimatePresence, LayoutGroup } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Stagger } from "@/components/motion/stagger"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "innovex",
    type: "landing",
    titleTr: "Innovex Teknoloji",
    titleEn: "Innovex Technology",
    goalTr: "B2B SaaS ürünü için dönüşüm odaklı landing page",
    goalEn: "Conversion-focused landing page for B2B SaaS product",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
  },
  {
    id: "deniz-yilmaz",
    type: "personalBrand",
    titleTr: "Deniz Yılmaz Portfolio",
    titleEn: "Deniz Yılmaz Portfolio",
    goalTr: "Serbest fotoğrafçı için kişisel marka sitesi",
    goalEn: "Personal brand site for freelance photographer",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
  },
  {
    id: "kolay-finans",
    type: "website",
    titleTr: "Kolay Finans",
    titleEn: "Kolay Finans",
    goalTr: "Fintech girişimi için çok sayfalı kurumsal site",
    goalEn: "Multi-page corporate site for fintech startup",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
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
  },
  {
    id: "mavera-consulting",
    type: "website",
    titleTr: "Mavera Danışmanlık",
    titleEn: "Mavera Consulting",
    goalTr: "Yönetim danışmanlığı firması için kurumsal web sitesi",
    goalEn: "Corporate website for management consulting firm",
    deliverablesTr: "Metin + Tasarım + Geliştirme",
    deliverablesEn: "Copy + Design + Development",
  },
  {
    id: "startup-pitch",
    type: "copywriting",
    titleTr: "Startup Pitch Deck",
    titleEn: "Startup Pitch Deck",
    goalTr: "Yatırımcı sunumu için ikna edici metin",
    goalEn: "Persuasive copy for investor presentation",
    deliverablesTr: "Copywriting",
    deliverablesEn: "Copywriting",
  },
]

const typeLabels = {
  tr: {
    all: "Tümü",
    landing: "Landing Page",
    website: "Website",
    copywriting: "Copywriting",
    personalBrand: "Kişisel Marka",
  },
  en: {
    all: "All",
    landing: "Landing Page",
    website: "Website",
    copywriting: "Copywriting",
    personalBrand: "Personal Brand",
  },
}

// Filter chip component with animated selection
function FilterChip({
  label,
  isActive,
  onClick
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive
          ? "text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
    >
      {/* Background pill that animates */}
      {isActive && (
        <motion.div
          layoutId="filter-pill"
          className="absolute inset-0 bg-primary rounded-lg"
          transition={{
            type: "spring",
            bounce: 0.15,
            duration: 0.5,
          }}
        />
      )}
      {!isActive && (
        <div className="absolute inset-0 bg-secondary/50 rounded-lg" />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  )
}

// Project card with enhanced animations
function ProjectCard({
  project,
  locale,
  t,
  index
}: {
  project: typeof projects[0]
  locale: "tr" | "en"
  t: ReturnType<typeof useLanguage>["t"]
  index: number
}) {
  const shouldReduceMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        ref={cardRef}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border/50 bg-card h-full",
          "transition-colors duration-500"
        )}
        layout
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
          ease: [0.25, 0.46, 0.45, 0.94],
          layout: { duration: 0.3 },
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
            <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="font-serif text-3xl text-primary/60">
                {project.titleTr.charAt(0)}
              </span>
            </div>
          </motion.div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <span className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            {typeLabels[locale][project.type as keyof typeof typeLabels.tr]}
          </span>

          <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {locale === "tr" ? project.titleTr : project.titleEn}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {locale === "tr" ? project.goalTr : project.goalEn}
          </p>

          <p className="mt-2 text-xs text-muted-foreground/70">
            {locale === "tr" ? project.deliverablesTr : project.deliverablesEn}
          </p>

          <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group/link">
            {t.work.viewCase}
            <motion.span
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={14} />
            </motion.span>

            {/* Animated underline */}
            <span className="absolute bottom-6 left-6 right-6 h-[1px] bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </Link>
  )
}

export default function WorkPage() {
  const { locale, t } = useLanguage()
  const [filter, setFilter] = useState<string>("all")
  const shouldReduceMotion = useReducedMotion()
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter)

  const filters = ["all", "landing", "website", "copywriting", "personalBrand"]

  return (
    <>
      <Header />
      <main className="relative pt-32 pb-20">


        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Header */}
          <motion.h1
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t.work.title}
          </motion.h1>

          {/* Filters with layout animation */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <LayoutGroup>
              {filters.map((f) => (
                <FilterChip
                  key={f}
                  label={typeLabels[locale][f as keyof typeof typeLabels.tr]}
                  isActive={filter === f}
                  onClick={() => setFilter(f)}
                />
              ))}
            </LayoutGroup>
          </motion.div>

          {/* Projects Grid with AnimatePresence */}
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  locale={locale}
                  t={t}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
