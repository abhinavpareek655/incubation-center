import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamHero from "@/components/team-hero"
import TeamGrid from "@/components/team-grid"
import TeamValues from "@/components/team-values"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TeamHero />
        <TeamGrid />
        <TeamValues />
      </main>
      <Footer />
    </div>
  )
}
