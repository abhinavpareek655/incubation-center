"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Programs from "@/components/programs"
import Startups from "@/components/startups"
import Forms from "@/components/forms"
import News from "@/components/news"
import Footer from "@/components/footer"
import NewsTicker from "@/components/news-ticker-smooth"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsTicker />
      <main>
        <Hero />
        <About />
        <Programs />
        <Startups />
        <Forms />
        <News />
      </main>
      <Footer />
    </div>
  )
}
