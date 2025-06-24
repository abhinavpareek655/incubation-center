import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Target, Award, Globe } from "lucide-react"

export default function TeamValues() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "We're driven by a genuine passion for helping entrepreneurs turn their ideas into reality.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and collective wisdom to achieve extraordinary results.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "We stay at the forefront of industry trends and continuously expand our knowledge and skills.",
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "We focus on measurable outcomes and tangible success for every startup we support.",
    },
    {
      icon: Award,
      title: "Excellence in Everything",
      description: "We maintain the highest standards in all our programs, services, and interactions.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We think globally while acting locally, preparing startups for international success.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The core values that guide our team in supporting entrepreneurs and building successful startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
