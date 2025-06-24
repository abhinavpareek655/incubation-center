import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img17.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">About Our Mission</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Empowering entrepreneurs since 2022, we've built a thriving ecosystem where innovation meets opportunity
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
            <div className="text-sm md:text-base text-gray-300">Startups Incubated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
            <div className="text-sm md:text-base text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">₹5.3Cr+</div>
            <div className="text-sm md:text-base text-gray-300">Funding Raised</div>
          </div>
        </div>

        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          Our Story
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
