import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import TeamPreview from "@/components/team-preview"
import Stats from "@/components/stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <AboutContent />
        <Stats />
        <TeamPreview />
      </main>
      <Footer />
    </div>
  )
}
