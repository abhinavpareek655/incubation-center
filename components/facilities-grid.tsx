import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Users, Monitor, Coffee, Presentation, Cog } from "lucide-react"

export default function FacilitiesGrid() {
  const facilities = [
    {
      name: "Co-working Space",
      description: "Open collaborative workspace with hot desks and dedicated areas for focused work.",
      image: "/image copy 4.png",
      icon: Users,
      capacity: "200+ desks",
      features: ["Hot desks", "Dedicated desks", "Team areas", "Quiet zones"],
      category: "Workspace",
    },
    // {
    //   name: "Private Offices",
    //   description: "Fully furnished private offices for growing teams that need dedicated space.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   icon: Monitor,
    //   capacity: "2-20 people",
    //   features: ["Furnished offices", "Phone booths", "Storage space", "Custom branding"],
    //   category: "Private",
    // },
    {
      name: "Meeting Rooms",
      description: "Professional meeting rooms equipped with latest AV technology for presentations.",
      image: "/image copy 3.png",
      icon: Presentation,
      capacity: "4-50 people",
      features: ["AV equipment", "Video conferencing", "Whiteboards", "Catering options"],
      category: "Meeting",
    },
    // {
    //   name: "Tech Labs",
    //   description: "Specialized laboratories with advanced equipment for hardware and software development.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   icon: Cog,
    //   capacity: "20+ workstations",
    //   features: ["3D printers", "Electronics lab", "Testing equipment", "Prototyping tools"],
    //   category: "Technology",
    // },
    {
      name: "Event Space",
      description: "Flexible event space for workshops, seminars, and networking events.",
      image: "/image copy 2.png",
      icon: Users,
      capacity: "300+ people",
      features: ["Stage & lighting", "Sound system", "Flexible seating", "Live streaming"],
      category: "Events",
    },
    // {
    //   name: "Relaxation Areas",
    //   description: "Comfortable spaces for informal meetings, breaks, and casual networking.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   icon: Coffee,
    //   capacity: "Unlimited",
    //   features: ["Lounge seating", "Game area", "Kitchen facilities", "Outdoor terrace"],
    //   category: "Social",
    // },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Workspace: "bg-blue-100 text-blue-800",
      Private: "bg-green-100 text-green-800",
      Meeting: "bg-purple-100 text-purple-800",
      Technology: "bg-orange-100 text-orange-800",
      Events: "bg-red-100 text-red-800",
      Social: "bg-yellow-100 text-yellow-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Spaces</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From collaborative workspaces to specialized labs, discover the facilities that will help your startup
            thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(facility.category)}>{facility.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <facility.icon className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Capacity: {facility.capacity}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {facility.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
