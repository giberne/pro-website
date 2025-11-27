import HeaderV2 from '@/components/v2/layout/HeaderV2'
import FooterV2 from '@/components/v2/layout/FooterV2'
import HeroSection from '@/components/v2/sections/HeroSection'
import CompleteOfferSection from '@/components/v2/sections/CompleteOfferSection'
import ProcessSection from '@/components/v2/sections/ProcessSection'
import PortfolioSection from '@/components/v2/sections/PortfolioSection'
import ContactSection from '@/components/v2/sections/ContactSection'
import FAQSection from '@/components/v2/sections/FAQSection'
import { ServicesCarouselProvider } from '@/contexts/ServicesCarouselContext'

export default function Home() {
  return (
    <ServicesCarouselProvider>
      <div className="min-h-screen v2-wrapper">
        <HeaderV2 />

        <main>
          <HeroSection />
          {/* Sections cachées temporairement */}
          <CompleteOfferSection />
          <ProcessSection />
          <PortfolioSection />
          <ContactSection />
          <FAQSection />
        </main>

        <FooterV2 />
      </div>
    </ServicesCarouselProvider>
  )
}
