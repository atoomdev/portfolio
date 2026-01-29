"use client"

import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { FeaturedWorkSection } from "@/components/sections/featured-work"
import { CapabilitiesSection } from "@/components/sections/capabilities"
import { ProcessPreviewSection } from "@/components/sections/process-preview"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { FinalCTASection } from "@/components/sections/final-cta"
import { AtmosphericSection } from "@/components/motion/atmospheric-section"

export default function HomePage() {
  return (
    <>

      <main className="flex flex-col gap-0">
        <AtmosphericSection>
          <HeroSection />
        </AtmosphericSection>

        <AtmosphericSection>
          <AboutPreviewSection />
        </AtmosphericSection>

        <AtmosphericSection>
          <FeaturedWorkSection />
        </AtmosphericSection>

        <AtmosphericSection>
          <CapabilitiesSection />
        </AtmosphericSection>

        <AtmosphericSection>
          <ProcessPreviewSection />
        </AtmosphericSection>

        <AtmosphericSection>
          <TestimonialsSection />
        </AtmosphericSection>

        <AtmosphericSection>
          <FAQSection />
        </AtmosphericSection>

        <AtmosphericSection className="mb-20">
          <FinalCTASection />
        </AtmosphericSection>
      </main>
      <Footer />
    </>
  )
}
