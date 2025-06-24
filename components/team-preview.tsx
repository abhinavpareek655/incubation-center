import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TeamPreview() {
  const teamMembers = [
    {
      name: "Dr. Akhil Agrawal",
      role: "Director",
      image: "/img21.jpg",
      bio: "Associate Professor and Head of Microbiology at CURAJ, Ph.D. (TERI University), postdoc (University of Calgary). Expert in crop and agricultural microbiology, IPR, innovation, and startup ecosystems.",
    },
    {
      name: "Prof. Anand Bhalerao",
      role: "Chairman",
      image: "/anand-bhalerao.jpg",
      bio: "Visionary academic leader and current Vice Chancellor of Central University of Rajasthan, dedicated to solution-driven research, knowledge dissemination, and building a value-rich, community-embedded university.",
    },
    {
      name: "Dr. Hemlata Manglani",
      role: "Director",
      image: "/img22.jpg",
      bio: "Associate Professor and Head, Department of Economics, known for inspiring leadership, commitment to student success, and advancing economic research for societal impact.",
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
            <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="w-[150px] h-[200px] mx-auto mb-4 relative rounded-lg overflow-hidden">
                  <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm flex-1">{member.bio}</p>
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
