import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { link } from "fs"

export default function Startups() {
  const startups = [
    {
      name: "MaheTri Private Limited",
      logo: "/images/mahetri-logo.png",
      description: "MaheTri specializes in handcrafted leather goods and accessories, blending traditional family craftsmanship with modern design and durable stitching.",
      category: "Leather Goods & accessories",
      founded: "2022",
      status: "Series A",
      link: "https://mahetri.com",
    },
    {
      name: "Piro Space Metaverse",
      logo: "/images/piro-space-logo.png",
      description: "Piro Space is a Metaverse as a Service platform that helps businesses and individuals create, manage, and monetize their own metaverses.",
      category: "Technology, Information and Internet",
      founded: "2022",
      status: "Seed",
      link: "https://pirospace.com",
    },
    {
      name: "Techtaru Digital LLP",
      logo: "/images/techtaru-logo.png",
      description: "Zoop AI is an all-in-one content creation platform that blends AI and human creativity to help individuals and businesses design, scale, and publish high-quality content quickly and efficiently.",
      category: "AI",
      founded: "2022",
      status: "Pre-Seed",
      link: "https://www.linkedin.com/company/zoop-ai/about/",
    },
    {
      name: "IPOSIS WORLDWIDE SECURITY SERVICES PRIVATE LIMITED",
      logo: "/images/iposis-logo.png",
      description: "IPOSIS WORLDWIDE offers comprehensive security solutions including guards, surveillance, personal protection, consultancy, event security, and patrolling services for individuals and organizations.",
      category: "Security Solutions",
      founded: "2022",
      status: "Series A",
      link: "https://iposis.com",
    },
    {
      name: "MARKANDEYA BIOTECHNOLOGIES PRIVATE LIMITED",
      logo: "/images/markandeya-logo.png",
      description: "Markandeya Biotechnologies is a pharmaceutical company blending Ayurveda with modern biotechnology to advance healthcare and support young researchers in innovative scientific pursuits.",
      category: "Bio-Tech",
      founded: "2022",
      status: "Series A",
      link: "https://mkdbiotech.com"
    },
    {
      name: "Mindery Technologies Private Limited",
      logo: "/images/mindery-logo.png",
      description: "Mindery is India’s first live, lifestyle-based wellness platform offering an all-in-one app and MIND Labs concept to transform any space into a wellness zone for holistic well-being.",
      category: "Healthcare & Wellness",
      founded: "2020",
      status: "Series A",
      link: "https://minderytech.com"
    },
    {
      name: "The Scout Tales",
      logo: "/images/scout-tales-logo.png",
      description: "Scout Tales is a one-stop tour operator offering curated travel experiences that blend natural wonders with modern escapes, ensuring safety, fun, and personalized service by a professional team.",
      category: "Travel & Tourism",
      founded: "2018",
      status: "Series A",
      link: "https://thescouttales.com"
    },
    {
      name: "Sirus Infotech Private Limited",
      logo: "/images/sirus-infotech-logo.png",
      description: "Sirus Infotech delivers innovative, customer-focused IT solutions that align with your business goals, empowering growth through tailored software development and strategic digital support.",
      category: "IT solutions And Education",
      founded: "2021",
      status: "Seed",
      link: "https://sirusinfotech.com"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the innovative startups that have grown and thrived through our incubation program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={startup.logo || "/placeholder.svg"}
                    alt={`${startup.name} logo`}
                    width={60}
                    height={60}
                    className="rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{startup.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{startup.category}</span>
                      <span>•</span>
                      <span>Founded {startup.founded}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{startup.description}</p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {startup.status}
                  </span>
                    <a href={startup.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Startups
          </Button>
        </div>
      </div>
    </section>
  )
}
