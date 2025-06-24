import Header from "@/components/header"
import Footer from "@/components/footer"
import PartnersHero from "@/components/partners-hero"
import PartnersGrid from "@/components/partners-grid"
import PartnershipBenefits from "@/components/partnership-benefits"
import BecomePartner from "@/components/become-partner"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PartnersHero />
        <PartnersGrid />
        <PartnershipBenefits />
        <BecomePartner />
      </main>
      <Footer />
    </div>
  )
}
