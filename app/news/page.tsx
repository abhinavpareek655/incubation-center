import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsHero from "@/components/news-hero"
import NewsGrid from "@/components/news-grid"
import EventsSlideshow from "@/components/events-slideshow"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <NewsHero />
        <EventsSlideshow />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}
