import { Card, CardContent } from "@/components/ui/card"
import {
  Wifi,
  Car,
  Coffee,
  Shield,
  Printer,
  Phone,
  Utensils,
  Dumbbell,
  Mail,
  Headphones,
  Zap,
  TreePine,
} from "lucide-react"

export default function FacilitiesAmenities() {
  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fiber optic internet with 1GB+ speeds and redundant connections",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Complimentary parking spaces for members and visitors",
    },
    {
      icon: Coffee,
      title: "Coffee & Refreshments",
      description: "Premium coffee, tea, and healthy snacks available 24/7",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with keycard access and CCTV monitoring",
    },
    {
      icon: Printer,
      title: "Printing & Scanning",
      description: "High-quality printing, scanning, and copying services",
    },
    {
      icon: Phone,
      title: "Phone Booths",
      description: "Private phone booths for confidential calls and video conferences",
    },
    {
      icon: Utensils,
      title: "Kitchen Facilities",
      description: "Fully equipped kitchens with refrigerators, microwaves, and dining areas",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "On-site gym with modern equipment and wellness programs",
    },
    {
      icon: Mail,
      title: "Mail Services",
      description: "Professional mailing address and package handling services",
    },
    {
      icon: Headphones,
      title: "Quiet Zones",
      description: "Designated quiet areas for focused work and concentration",
    },
    {
      icon: Zap,
      title: "Power Backup",
      description: "Uninterrupted power supply with backup generators",
    },
    {
      icon: TreePine,
      title: "Outdoor Spaces",
      description: "Rooftop terrace and garden areas for relaxation and outdoor meetings",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Amenities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to focus on building your business, from high-speed internet to wellness facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
