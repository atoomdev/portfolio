"use client"

import { use } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

import { useLanguage } from "@/lib/language-context"
import { SectionWrapper } from "@/components/section-wrapper"

const projectsData = {
  innovex: {
    titleTr: "Sheraton Ankara Hotel & Convention Center",
    titleEn: "Sheraton Ankara Hotel & Convention Center",
    type: "website",
    goalTr: "Sheraton Ankara Hotel & Convention Center sitesi",
    goalEn: "Website for Sheraton Ankara Hotel & Convention Center",
    approachTr:
      "Müşteri araştırması ve rakip analizi ile başladık. Ürünün karmaşık özelliklerini anlaşılır bir dile çevirdik. Headline'dan CTA'ya kadar her element dönüşüm odaklı tasarlandı.",
    approachEn:
      "We started with customer research and competitor analysis. We translated complex product features into understandable language. Every element from headline to CTA was designed with conversion in mind.",
    deliverablesTr: ["Metin (tüm sayfa)", "UI/UX Tasarım", "Responsive Geliştirme"],
    deliverablesEn: ["Copy (full page)", "UI/UX Design", "Responsive Development"],
    outcomeTr:
      "Website, beklenen dönüşüm hedeflerinin üzerinde performans gösterdi. Müşteri, satış ekibinin kaliteli lead'lerle daha verimli çalışabildiğini belirtti.",
    outcomeEn:
      "The website performed above expected conversion targets. The client noted that their sales team could work more efficiently with quality leads.",
  },
  "deniz-yilmaz": {
    titleTr: "Barle Pub & Kitchen",
    titleEn: "Barle Pub & Kitchen",
    type: "website",
    goalTr: "Barle Pub & Kitchen sitesi",
    goalEn: "Website for Barle Pub & Kitchen",
    approachTr:
      "Barle Pub & Kitchen sitesi için minimal bir tasarım dili seçtik — metin sadece gerektiği kadar, görseller konuşsun dedik. Hızlı yükleme ve mobil deneyim öncelikli tutuldu.",
    approachEn:
      "Barle Pub & Kitchen site for minimal design language — only as much text as necessary, let the visuals speak. Fast loading and mobile experience were prioritized.",
    deliverablesTr: ["Metin (hakkımda, hizmetler)", "Portfolio Tasarımı", "Responsive Geliştirme"],
    deliverablesEn: ["Copy (about, services)", "Portfolio Design", "Responsive Development"],
    outcomeTr:
      "Site yayına alındıktan sonra müşteri taleplerinde gözle görülür artış yaşandı. Minimal yaklaşım, profesyonel imajı güçlendirdi.",
    outcomeEn:
      "After the site went live, there was a noticeable increase in client inquiries. The minimal approach strengthened the professional image.",
  },
  "kolay-finans": {
    titleTr: "Kadir ALkan Hair Artist",
    titleEn: "Kadir ALkan Hair Artist",
    type: "website",
    goalTr: "Kadir ALkan Hair Artist sitesi",
    goalEn: "Website for Kadir ALkan Hair Artist",
    approachTr:
      "Kadir ALkan Hair Artist sitesi için minimal bir tasarım dili seçtik — metin sadece gerektiği kadar, görseller konuşsun dedik. Hızlı yükleme ve mobil deneyim öncelikli tutuldu.",
    approachEn:
      "Kadir ALkan Hair Artist site for minimal design language — only as much text as necessary, let the visuals speak. Fast loading and mobile experience were prioritized.",
    deliverablesTr: ["Metin (tüm sayfalar)", "UI/UX Tasarım", "Multi-page Geliştirme"],
    deliverablesEn: ["Copy (all pages)", "UI/UX Design", "Multi-page Development"],
    outcomeTr:
      "Site, yatırımcı görüşmelerinde profesyonel bir referans noktası oldu. Şirketin güvenilirlik algısını güçlendirdi.",
    outcomeEn:
      "The site became a professional reference point in investor meetings. It strengthened the company's credibility perception.",
  },
  "green-earth": {
    titleTr: "Green Earth Campaign",
    titleEn: "Green Earth Campaign",
    type: "landing",
    goalTr: "Çevre kampanyası için duygusal ve etkileyici landing page",
    goalEn: "Emotional and impactful landing page for environmental campaign",
    approachTr:
      "Kampanyanın duygusal mesajını güçlendirdik. Görsellerle uyumlu, harekete geçirici metinler yazdık. Bağış ve katılım formları optimize edildi.",
    approachEn:
      "We strengthened the campaign's emotional message. We wrote action-driving copy that harmonized with visuals. Donation and participation forms were optimized.",
    deliverablesTr: ["Kampanya Metni", "Landing Page Tasarımı"],
    deliverablesEn: ["Campaign Copy", "Landing Page Design"],
    outcomeTr:
      "Kampanya hedeflenen katılım oranını aştı. Duygusal bağ kuran metin ve tasarım, dönüşümleri artırdı.",
    outcomeEn:
      "The campaign exceeded targeted participation rates. Emotionally connecting copy and design increased conversions.",
  },
  "mavera-consulting": {
    titleTr: "Mavera Danışmanlık",
    titleEn: "Mavera Consulting",
    type: "website",
    goalTr: "Yönetim danışmanlığı firması için prestijli kurumsal web sitesi",
    goalEn: "Prestigious corporate website for management consulting firm",
    approachTr:
      "Danışmanlık sektöründe uzmanlık ve deneyim vurgulanmalı. Temiz, profesyonel tasarımla birlikte güven veren metin tonu oluşturduk.",
    approachEn:
      "In the consulting sector, expertise and experience must be emphasized. We created a trustworthy copy tone along with clean, professional design.",
    deliverablesTr: ["Metin (tüm sayfalar)", "Kurumsal Tasarım", "Responsive Geliştirme"],
    deliverablesEn: ["Copy (all pages)", "Corporate Design", "Responsive Development"],
    outcomeTr:
      "Site, müşteri toplantılarında şirketin profesyonel imajını destekleyen güçlü bir araç oldu.",
    outcomeEn:
      "The site became a powerful tool supporting the company's professional image in client meetings.",
  },
  "startup-pitch": {
    titleTr: "Startup Pitch Deck",
    titleEn: "Startup Pitch Deck",
    type: "copywriting",
    goalTr: "Yatırımcı sunumu için ikna edici ve net pitch deck metni",
    goalEn: "Persuasive and clear pitch deck copy for investor presentation",
    approachTr:
      "Yatırımcıların dikkat süresi kısa. Her slide tek bir mesaj taşımalı. Rakamlar, hikaye ve vizyon dengeli şekilde sunuldu.",
    approachEn:
      "Investors have short attention spans. Each slide should carry one message. Numbers, story, and vision were presented in balance.",
    deliverablesTr: ["Pitch Deck Metni", "Mesaj Stratejisi"],
    deliverablesEn: ["Pitch Deck Copy", "Message Strategy"],
    outcomeTr:
      "Sunum, yatırımcı görüşmelerinde olumlu geri dönüşler aldı. Net ve ikna edici yaklaşım takdir edildi.",
    outcomeEn:
      "The presentation received positive feedback in investor meetings. The clear and persuasive approach was appreciated.",
  },
}

const projectOrder = [
  "innovex",
  "deniz-yilmaz",
  "kolay-finans",
  "green-earth",
  "mavera-consulting",
  "startup-pitch",
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

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { locale, t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    return (
      <>

        <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {locale === "tr" ? "Proje bulunamadı" : "Project not found"}
            </h1>
            <Link href="/work" className="text-primary hover:underline">
              {locale === "tr" ? "Tüm çalışmalara dön" : "Back to all work"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const currentIndex = projectOrder.indexOf(slug)
  const nextSlug = projectOrder[(currentIndex + 1) % projectOrder.length]
  const nextProject = projectsData[nextSlug as keyof typeof projectsData]

  return (
    <>


      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {locale === "tr" ? "Tüm Çalışmalar" : "All Work"}
          </Link>

          {/* Header */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              {typeLabels[locale][project.type as keyof typeof typeLabels.tr]}
            </span>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              {locale === "tr" ? project.titleTr : project.titleEn}
            </h1>
          </motion.div>

          {/* Hero image placeholder */}
          <motion.div
            className="aspect-video bg-card rounded-2xl border border-border/50 overflow-hidden mb-16"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-full h-full flex items-center justify-center bg-secondary/30">
              <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-5xl text-primary/60">
                  {project.titleTr.charAt(0)}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content sections */}
          <div className="space-y-16">
            {/* Goal */}
            <SectionWrapper className="py-0 md:py-0">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {t.work.goal}
              </h2>
              <p className="text-xl text-foreground leading-relaxed">
                {locale === "tr" ? project.goalTr : project.goalEn}
              </p>
            </SectionWrapper>

            {/* Approach */}
            <SectionWrapper className="py-0 md:py-0">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {locale === "tr" ? "Yaklaşım" : "Approach"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "tr" ? project.approachTr : project.approachEn}
              </p>
            </SectionWrapper>

            {/* Screenshots placeholder */}
            <SectionWrapper className="py-0 md:py-0">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-card rounded-xl border border-border/50 flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">Screenshot 1</span>
                </div>
                <div className="aspect-[4/3] bg-card rounded-xl border border-border/50 flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">Screenshot 2</span>
                </div>
              </div>
            </SectionWrapper>

            {/* Deliverables */}
            <SectionWrapper className="py-0 md:py-0">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {t.work.deliverables}
              </h2>
              <ul className="space-y-2">
                {(locale === "tr" ? project.deliverablesTr : project.deliverablesEn).map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </SectionWrapper>

            {/* Outcome */}
            <SectionWrapper className="py-0 md:py-0">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {t.work.outcome}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "tr" ? project.outcomeTr : project.outcomeEn}
              </p>
            </SectionWrapper>
          </div>

          {/* Next project with enhanced animation */}
          <motion.div
            className="mt-20 pt-12 border-t border-border/50"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-sm text-muted-foreground mb-4">{t.work.nextProject}</p>
            <Link href={`/work/${nextSlug}`} className="group block">
              <motion.div
                className="relative flex items-center justify-between p-6 rounded-xl border border-border/50 bg-card transition-colors duration-300 hover:border-primary/30"
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div>
                  <span className="inline-flex px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded mb-2">
                    {typeLabels[locale][nextProject.type as keyof typeof typeLabels.tr]}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {locale === "tr" ? nextProject.titleTr : nextProject.titleEn}
                  </h3>

                  {/* Animated underline */}
                  <span className="absolute bottom-6 left-6 h-[2px] bg-primary scale-x-0 group-hover:scale-x-[0.3] transition-transform duration-300 origin-left" />
                </div>

                {/* Animated arrow */}
                <motion.div
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={24} />
                </motion.div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-green-subtle" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
