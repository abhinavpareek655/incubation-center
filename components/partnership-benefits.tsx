import { Card, CardContent } from "@/components/ui/card"
import { Handshake, TrendingUp, Users, Globe, Lightbulb, Award } from "lucide-react"

export default function PartnershipBenefits() {
  const benefits = [
    {
      icon: Handshake,
      title: "Strategic Collaboration",
      description: "Work together on innovative projects and share expertise to drive mutual growth and success.",
    },
    {
      icon: TrendingUp,
      title: "Market Access",
      description: "Gain access to new markets and customer segments through our extensive partner network.",
    },
    {
      icon: Users,
      title: "Talent Pipeline",
      description: "Connect with top entrepreneurial talent and innovative startups for potential partnerships.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your presence internationally through our global network of partners and alumni.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Access",
      description: "Get early access to cutting-edge technologies and innovative solutions from our startups.",
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Enhance your brand visibility and reputation as a supporter of innovation and entrepreneurship.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages of partnering with our incubation center and joining our innovation ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
