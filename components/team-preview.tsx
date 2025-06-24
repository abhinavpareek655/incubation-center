import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TeamPreview() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Former tech executive with 20+ years of experience in startup ecosystems.",
    },
    {
      name: "Michael Chen",
      role: "Program Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Serial entrepreneur and mentor with expertise in scaling technology companies.",
    },
    {
      name: "Emily Rodriguez",
      role: "Investment Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Former VC partner specializing in early-stage investments and funding strategies.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team brings together decades of entrepreneurial expertise and industry knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team">
            <Button size="lg">
              Meet Our Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
