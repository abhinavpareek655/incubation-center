import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Rocket, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutContent() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We believe in the power of innovative thinking to solve real-world problems and create lasting impact.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our strength lies in our collaborative community of entrepreneurs, mentors, and industry experts.",
    },
    {
      icon: Rocket,
      title: "Growth Focused",
      description: "We provide the resources and support needed to accelerate startup growth and market success.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our startups are making a difference locally and globally, creating solutions for tomorrow's challenges.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010 by visionary educators and successful entrepreneurs, our incubation center emerged from a
              simple belief: that great ideas deserve great support. What started as a small initiative has grown into
              one of the region's most successful startup ecosystems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, we've refined our approach, expanded our network, and deepened our commitment to fostering
              innovation. Today, we're proud to be the launchpad for groundbreaking companies that are shaping the
              future across various industries.
            </p>
            <p className="text-lg text-gray-600">
              Our comprehensive support system, world-class facilities, and extensive mentor network create an
              environment where entrepreneurs can focus on what they do best: building exceptional companies.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Our founding story"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
