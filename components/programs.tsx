import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, BookOpen, Rocket, Briefcase, Network, ArrowRight } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      icon: Rocket,
      title: "Accelerator Program",
      description:
        "Intensive 3-month program designed to fast-track your startup with mentorship, funding, and resources.",
      features: ["Weekly mentor sessions", "Seed funding up to $50K", "Demo day presentation"],
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with industry experts and successful entrepreneurs who provide guidance and support.",
      features: ["1-on-1 mentoring", "Industry expertise", "Network access"],
    },
    {
      icon: DollarSign,
      title: "Funding Support",
      description: "Access to various funding opportunities including grants, angel investors, and venture capital.",
      features: ["Grant applications", "Investor introductions", "Pitch preparation"],
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description: "Regular educational sessions covering essential business skills and industry knowledge.",
      features: ["Business development", "Marketing strategies", "Legal compliance"],
    },
    {
      icon: Briefcase,
      title: "Co-working Space",
      description: "Modern workspace with all amenities to help your team collaborate and grow.",
      features: ["24/7 access", "Meeting rooms", "High-speed internet"],
    },
    {
      icon: Network,
      title: "Alumni Network",
      description: "Join a thriving community of successful entrepreneurs and continue learning from peers.",
      features: ["Networking events", "Peer support", "Partnership opportunities"],
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programs & Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support system designed to help entrepreneurs at every stage of their journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <program.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
