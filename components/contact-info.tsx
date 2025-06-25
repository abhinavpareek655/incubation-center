import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Calendar, Users, ExternalLink } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@curajif.in", "admissions@curajif.in"],
      description: "For general inquiries and program applications",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Monday - Friday, 9:00 AM - 6:00 PM",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["CURAJ Incubation Foundation", "NH-8, Bandarsindari, Tehsil Kishangarh", "Ajmer, Rajasthan 305817"],
      description: "Main campus location",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <div className="bg-white p-8 lg:p-12">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <method.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-2">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{schedule.day}</span>
                  <span className="font-medium text-gray-900">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Schedule a Visit</h3>
            </div>
            <p className="text-gray-600 mb-4">Want to see our facilities? Schedule a campus tour and meet our team.</p>
            <Button className="w-full">
              Book a Tour
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Connect With Us</h3>
            </div>
            <p className="text-gray-600 mb-4">Follow us on social media for the latest updates and news.</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
