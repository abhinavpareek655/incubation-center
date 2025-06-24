import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamGrid() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      department: "Leadership",
      image: "/placeholder.svg?height=250&width=250",
      bio: "Former tech executive with 20+ years of experience in startup ecosystems. Led three successful exits and mentored over 100 entrepreneurs.",
      expertise: ["Strategy", "Leadership", "Tech Startups"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@uniincubator.edu",
      },
    },
    {
      name: "Michael Chen",
      role: "Program Manager",
      department: "Programs",
      image: "/placeholder.svg?height=250&width=250",
      bio: "Serial entrepreneur and mentor with expertise in scaling technology companies. Founded two successful SaaS companies.",
      expertise: ["Product Development", "Scaling", "SaaS"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@uniincubator.edu",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Investment Director",
      department: "Funding",
      image: "/placeholder.svg?height=250&width=250",
      bio: "Former VC partner specializing in early-stage investments. Managed a $100M fund and invested in 50+ startups.",
      expertise: ["Investment", "Due Diligence", "Fundraising"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@uniincubator.edu",
      },
    },
    {
      name: "David Kim",
      role: "Technical Advisor",
      department: "Technology",
      image: "/placeholder.svg?height=250&width=250",
      bio: "Former CTO at multiple unicorn startups. Expert in AI, blockchain, and emerging technologies.",
      expertise: ["AI/ML", "Blockchain", "Technical Architecture"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@uniincubator.edu",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      department: "Growth",
      image: "/placeholder.svg?height=250&width=250",
      bio: "Growth marketing expert who helped scale multiple startups from zero to millions in revenue.",
      expertise: ["Growth Marketing", "Brand Strategy", "Digital Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@uniincubator.edu",
      },
    },
    {
      name: "James Wilson",
      role: "Legal Advisor",
      department: "Legal",
      image: "/placeholder.svg?height=250&width=250",
      bio: "Corporate lawyer specializing in startup law, intellectual property, and venture capital transactions.",
      expertise: ["Corporate Law", "IP", "Venture Capital"],
      social: {
        linkedin: "#",
        email: "james@uniincubator.edu",
      },
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals who guide and support our entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <Badge variant="secondary" className="mb-2">
                    {member.department}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-2">
                  {member.social.linkedin && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
