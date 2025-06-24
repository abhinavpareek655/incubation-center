import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Award, Building, Globe } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Building,
      label: "Startups Launched",
      value: "20+",
      description: "Successfully incubated companies",
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "85%",
      description: "Startups still operating after 3 years",
    },
    {
      icon: DollarSign,
      label: "Total Funding",
      value: "₹5.3Cr+",
      description: "Raised by our portfolio companies",
    },
    {
      icon: Users,
      label: "Jobs Created",
      value: "500+",
      description: "Employment opportunities generated",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: "10+",
      description: "Recognition and industry awards",
    },
    {
      icon: Globe,
      label: "Global Reach",
      value: "10+",
      description: "Countries with our alumni",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact by Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over a decade of fostering innovation and entrepreneurship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
