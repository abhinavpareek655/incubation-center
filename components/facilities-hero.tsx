import { Building, Users, Clock } from "lucide-react"

export default function FacilitiesHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/image.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Our Facilities</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          State-of-the-art workspace designed to inspire innovation and foster collaboration among entrepreneurs
        </p>

        {/* Facility Highlights */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <Building className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">10,000 sq ft</div>
            <div className="text-sm text-gray-300">Modern Space</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">70+ Desks</div>
            <div className="text-sm text-gray-300">Co-working Space</div>
          </div>
          <div className="text-center">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">24/7 Access</div>
            <div className="text-sm text-gray-300">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
