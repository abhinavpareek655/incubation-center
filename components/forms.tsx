import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, UserPlus, BarChart3, Lightbulb, ArrowRight, Clock, CheckCircle } from "lucide-react"

export default function Forms() {
  const forms = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Apply to join our incubation program and start your entrepreneurial journey with us.",
      status: "Open",
      deadline: "Rolling Admissions",
      color: "bg-green-100 text-green-800",
      href: "#",
    },
    {
      icon: UserPlus,
      title: "Registration Form",
      description: "Register for upcoming workshops, events, and networking sessions.",
      status: "Open",
      deadline: "Event-based",
      color: "bg-blue-100 text-blue-800",
      href: "#",
    },
    {
      icon: BarChart3,
      title: "Stage & Status Form",
      description: "Current incubatees can update their startup progress and milestone achievements.",
      status: "Members Only",
      deadline: "Monthly",
      color: "bg-purple-100 text-purple-800",
      href: "/stage-status",
    },
    {
      icon: Lightbulb,
      title: "Submit Your Idea",
      description: "Have a brilliant idea? Share it with us and get initial feedback from our experts.",
      status: "Open",
      deadline: "Anytime",
      color: "bg-yellow-100 text-yellow-800",
      href: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources & Forms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access essential forms and resources to engage with our incubation center
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {forms.map((form, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <form.icon className="h-6 w-6 text-gray-600 group-hover:text-white" />
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${form.color}`}
                  >
                    {form.status}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold">{form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{form.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Deadline: {form.deadline}</span>
                </div>

                <Button asChild className="w-full group-hover:bg-blue-600 group-hover:border-blue-600">
                  <Link href={form.href} className="flex items-center justify-center w-full">
                    Access Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to assist you with any questions about the application process, program requirements, or
              general inquiries about our incubation center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button size="lg" variant="outline" className="bg-white">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
