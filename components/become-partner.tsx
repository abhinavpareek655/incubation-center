import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react"

export default function BecomePartner() {
  const partnershipTypes = [
    {
      title: "Corporate Partnership",
      description: "Strategic partnerships with corporations for technology, mentorship, and funding opportunities.",
      features: ["Technology Integration", "Mentorship Programs", "Funding Opportunities", "Market Access"],
    },
    {
      title: "Government Partnership",
      description: "Collaborate with government bodies to support policy development and public sector innovation.",
      features: ["Policy Development", "Public Sector Innovation", "Regulatory Support", "Grant Programs"],
    },
    {
      title: "Academic Partnership",
      description: "Partner with universities and research institutions for knowledge exchange and talent development.",
      features: ["Research Collaboration", "Student Exchange", "Faculty Programs", "Joint Publications"],
    },
    {
      title: "Investment Partnership",
      description:
        "Connect with our network as an investor to discover promising startups and investment opportunities.",
      features: ["Deal Flow Access", "Due Diligence Support", "Portfolio Management", "Exit Opportunities"],
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become a Partner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our ecosystem and help shape the future of innovation and entrepreneurship
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with our partnerships team to explore collaboration opportunities and discuss how we can work
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
              <p className="text-sm text-gray-600">partnerships@uniincubator.edu</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Schedule Meeting</h4>
              <p className="text-sm text-gray-600">Book a consultation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Partnership Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
