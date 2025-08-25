import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function About() {
  const stats = [
    { icon: Users, label: "Startups Incubated", value: "52+" },
    { icon: Target, label: "Success Rate", value: "83%" },
    { icon: Award, label: "Awards Won", value: "10+" },
    { icon: Lightbulb, label: "Ideas Developed", value: "300+" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CURAJ Innovation Foundation</h2>
            <p className="text-lg text-gray-600 mb-6">
              CURAJ Innovation Foundation of Central University of Rajasthan (CIF@CURAJ) was setup under the guidance of Hon’ble Vice Chancellor with the aim of identifying, encouraging, and fostering entrepreneurial talents within the CURAJ as well as surrounding areas.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The primary aim of the CIF@CURAJ is to build a strong innovation ecosystem at CURAJ. To achieve this number of objectives have been decided by the CIF@CURAJ.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

            {/* YouTube Video */}
            <div className="relative aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/FCbu5Awgooo"
                title="Incubation Center Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
        </div>
      </div>
    </section>
  )
}
