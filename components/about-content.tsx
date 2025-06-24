import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, GraduationCap, FileBadge2, Network, Handshake } from "lucide-react"
import Image from "next/image"

export default function AboutContent() {
  const values = [
    {
      icon: Sparkles,
      title: "Fostering an Innovative Ecosystem",
      description:
        "To develop a friendly innovation ecosystem among the faculties, staff and students where majority of stakeholders remain motivated for doing innovation in any area of their interest that is beyond the boundaries of departments.",
    },
    {
      icon: GraduationCap,
      title: "Innovation & Startup Training",
      description: "To train and educate the faculties and students about various aspects of innovation and startups.",
    },
    {
      icon: FileBadge2,
      title: "Implementing National Innovation & Startup Policy",
      description: "To establish and adopt functional “National Innovation and Startup Policy for students and faculties” in the CURAJ.",
    },
    {
      icon: Network,
      title: "Building a Vibrant Startup Ecosystem",
      description:
        "To create a vibrant local innovation ecosystem Start-up supporting Mechanism in HEIs Establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.",
    },
    {
        icon: Handshake,
        title: "Connecting Academia and Grassroot Innovators",
        description: "To facilitate interaction between the teaching / student communities and grass-root innovators Mentoring of grass-root innovators to facilitate the transfer of technology to the society.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-s text-gray-600 mb-3">
                <span className="font-semibold">CURAJ Innovation Foundation</span> of Central University of Rajasthan <span className="font-semibold">(CIF@CURAJ)</span> was setup under the guidance of <span className="italic">Hon’ble Vice Chancellor</span> with the aim of <span className="bg-yellow-200 px-1 rounded">identifying, encouraging, and fostering entrepreneurial talents</span> within the CURAJ as well as surrounding areas.
            </p>
            <p className="text-s text-gray-600">
                Since <span className="font-semibold">2022</span>, it was realized that <span className="font-semibold">CIF@CURAJ</span> must play a bigger role in developing <span className="italic">entrepreneurial mindset</span> in the faculties and students. Our nation targets to become <span className="font-semibold">5 trillion-dollar economy by 2024</span>. To reach this benchmark, <span className="font-semibold">HEIs</span> have to play a vital role by evolving ecosystem and mechanisms to convert the young minds into high quality technical human resource capable of doing cutting edge <span className="italic">research, innovation and entrepreneurship</span>. To develop this culture in CURAJ, <span className="font-semibold">CIF@CURAJ</span> started conducting sessions on <span className="bg-yellow-200 px-1 rounded">innovations, startups and entrepreneurship</span>. The primary mandate of <span className="font-semibold">CIF@CURAJ</span> is to <span className="italic">encourage, inspire and nurture young students</span> by supporting them to work with new ideas and transform them into prototypes while they are in campus. <span className="font-semibold">CIF@CURAJ</span> puts in concerted efforts to identify <span className="bg-yellow-200 px-1 rounded">grass-root innovators</span> from neighboring villages in varied domains such as <span className="italic">agriculture, engineering</span>, etc. In the academic year <span className="font-semibold">2023-24</span>, <span className="font-semibold">CIF@CURAJ</span> had setup <span className="font-semibold">CURAJ Incubation Foundation</span>, a <span className="italic">section 8 company</span>, for setting up full fledge Incubation Centre. For this <span className="font-semibold">ISC@CURAJ</span> actively applied for grants like <span className="bg-yellow-200 px-1 rounded">NIDHI iTBI centre from DST</span> and <span className="bg-yellow-200 px-1 rounded">eYUVA Centre from BIRAC</span>. With this funding <span className="font-semibold">CIF@CURAJ</span> will setup <span className="italic">Fabrication Lab, Biotechnology Lab, Incubation spaces for budding startups</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img20.png"
              alt="Our founding story"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Our Core Objectives</h3>
          <div className="text-s md:text-m text-gray-600 text-center mb-12">
            The primary aim of the CIF@CURAJ is to build a strong innovative ecosystem at CURAJ. To achieve this number of objectives have been decided by the CIF@CURAJ. These objectives are:
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
