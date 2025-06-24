import { Input } from "@/components/ui/input"
import { Search, Calendar, TrendingUp } from "lucide-react"

export default function NewsHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">News & Updates</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Stay informed about the latest developments, success stories, and upcoming events in our ecosystem
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search news and events..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">50+ Events</div>
            <div className="text-sm text-gray-300">This Year</div>
          </div>
          <div className="text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Weekly Updates</div>
            <div className="text-sm text-gray-300">Fresh Content</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">📰</div>
            <div className="text-lg font-semibold">100+ Articles</div>
            <div className="text-sm text-gray-300">Published</div>
          </div>
        </div>
      </div>
    </section>
  )
}
