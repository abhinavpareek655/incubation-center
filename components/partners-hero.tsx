import { Building, Users, Globe } from "lucide-react"

export default function PartnersHero() {
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Our Partners</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          We collaborate with leading government bodies, corporations, and organizations to foster innovation and
          entrepreneurship
        </p>

        {/* Partnership Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <Building className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">50+ Partners</div>
            <div className="text-sm text-gray-300">Active Collaborations</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Government</div>
            <div className="text-sm text-gray-300">& Private Sector</div>
          </div>
          <div className="text-center">
            <Globe className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Global Reach</div>
            <div className="text-sm text-gray-300">International Network</div>
          </div>
        </div>
      </div>
    </section>
  )
}
