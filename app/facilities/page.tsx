import Header from "@/components/header"
import Footer from "@/components/footer"
import FacilitiesHero from "@/components/facilities-hero"
import FacilitiesOverview from "@/components/facilities-overview"
import FacilitiesGrid from "@/components/facilities-grid"
import FacilitiesAmenities from "@/components/facilities-amenities"
import FacilitiesTour from "@/components/facilities-tour"

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FacilitiesHero />
        <FacilitiesOverview />
        <FacilitiesGrid />
        <FacilitiesAmenities />
        <FacilitiesTour />
      </main>
      <Footer />
    </div>
  )
}
