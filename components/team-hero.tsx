import { Users, Award, Heart } from "lucide-react"

export default function TeamHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Meet Our Team</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Passionate professionals dedicated to nurturing the next generation of successful entrepreneurs
        </p>

        {/* Team Highlights */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">50+ Experts</div>
            <div className="text-sm text-gray-300">Mentors & Staff</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">200+ Years</div>
            <div className="text-sm text-gray-300">Combined Experience</div>
          </div>
          <div className="text-center">
            <Heart className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">24/7</div>
            <div className="text-sm text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
