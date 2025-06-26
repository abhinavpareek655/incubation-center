import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { MapPin, Calendar, Users, Wifi } from "lucide-react"

export default function FacilitiesOverview() {
  const highlights = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Connected to major cities like Jaipur, Ajmer and Kishangarh",
    },
    {
      icon: Calendar,
      title: "Flexible Access",
      description: "24/7 access for members with secure keycard entry and modern security systems",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Designed to encourage networking and collaboration between startups and entrepreneurs",
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Enterprise-grade internet with redundant connections and dedicated bandwidth",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <Badge className="mb-4">World-Class Infrastructure</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Designed for Innovation and Growth</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our facilities are thoughtfully designed to provide everything entrepreneurs need to build successful
              companies. From flexible workspaces to cutting-edge technology labs, we've created an environment that
              fosters creativity and collaboration.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a solo founder or a growing team, our spaces adapt to your needs with flexible layouts,
              private offices, and shared common areas that encourage serendipitous encounters and knowledge sharing.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/image copy 2.png"
              alt="Modern co-working space"
              width={800}
              height={800}
              className="rounded-lg shadow-lg"
            />
            {/* Overlay stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/50 backdrop-blur rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                    <div className="text-xs text-gray-600">Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-xs text-gray-600">Occupancy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.8★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
