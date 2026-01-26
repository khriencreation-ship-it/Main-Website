import HeroSection from "@/app/products/HeroSection"
import PainSection from "@/app/products/PainSection"
import FeaturesSection from "@/app/products/FeaturesSection"
import AudienceSection from "@/app/products/AudienceSection"
import AccessSection from "@/app/products/AccessSection"
import TechnologySection from "@/app/products/TechnologySection"
import ProductCta from "@/app/products/ProductCta"
import Footer from "@/components/Footer"

const page = () => {
    return (
        <main className="px-4 lg:px-9 min-h-screen">
            <HeroSection />
            <PainSection />
            <FeaturesSection />
            <AudienceSection />
            <AccessSection />
            <TechnologySection />
            <ProductCta />
            <Footer />
        </main>
    )
}
export default page
