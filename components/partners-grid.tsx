import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersGrid() {
  const governmentPartners = [
    {
      name: "Department of Science and Technology",
      description: "Ministry of Science and Technology, Government of India",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Government",
    },
    {
      name: "Ministry of Electronics & Information Technology",
      description: "Government of India",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Government",
    },
    {
      name: "BIRAC",
      description: "Ignite Innovate Incubate",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Government",
    },
    {
      name: "IIT",
      description: "Indian Institute of Technology",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Academic",
    },
    {
      name: "Ministry of Defence",
      description: "Government of India",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Government",
    },
  ]

  const corporatePartners = [
    {
      name: "Microsoft",
      description: "Technology Partner & Cloud Services",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Technology",
    },
    {
      name: "Google",
      description: "AI & Cloud Computing Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Technology",
    },
    {
      name: "Amazon Web Services",
      description: "Cloud Infrastructure Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Technology",
    },
    {
      name: "IBM",
      description: "Enterprise Solutions Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Technology",
    },
    {
      name: "Intel",
      description: "Hardware & Innovation Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Technology",
    },
    {
      name: "Cisco",
      description: "Networking & Security Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Technology",
    },
  ]

  const financialPartners = [
    {
      name: "Sequoia Capital",
      description: "Venture Capital Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Investment",
    },
    {
      name: "Accel Partners",
      description: "Early Stage Investment",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Investment",
    },
    {
      name: "Matrix Partners",
      description: "Growth Capital Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Investment",
    },
    {
      name: "HDFC Bank",
      description: "Banking & Financial Services",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Financial",
    },
    {
      name: "ICICI Bank",
      description: "Startup Banking Solutions",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Financial",
    },
  ]

  const academicPartners = [
    {
      name: "Stanford University",
      description: "Research & Exchange Programs",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Academic",
    },
    {
      name: "MIT",
      description: "Technology Transfer Partner",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Academic",
    },
    {
      name: "Harvard Business School",
      description: "Entrepreneurship Programs",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Academic",
    },
    {
      name: "University of Cambridge",
      description: "Innovation Exchange",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Academic",
    },
  ]

  const PartnerSection = ({
    title,
    partners,
    bgColor = "bg-white",
  }: { title: string; partners: any[]; bgColor?: string }) => (
    <section className={`py-12 md:py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{partner.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <>
      <PartnerSection title="Government Partners" partners={governmentPartners} bgColor="bg-gray-50" />
      <PartnerSection title="Corporate Partners" partners={corporatePartners} />
      <PartnerSection title="Investment Partners" partners={financialPartners} bgColor="bg-gray-50" />
      <PartnerSection title="Academic Partners" partners={academicPartners} />
    </>
  )
}
