import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="font-serif text-2xl text-foreground">АДАСТРА.</span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">Об ансамбле</Link>
            <Link to="/repertoire" className="hover:text-foreground transition-colors">Репертуар</Link>
            <Link to="/achievements" className="hover:text-foreground transition-colors">Достижения</Link>
            <Link to="/contacts" className="hover:text-foreground transition-colors">Контакты</Link>
          </div>
        </motion.nav>

        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <PricingSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index
