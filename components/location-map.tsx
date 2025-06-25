import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Train, Bus } from "lucide-react"

export default function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CURAJ Incubation Foundation is easily accessible by road, rail, and air. See below for detailed connectivity and distances from major locations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <Card className="overflow-hidden h-full">
              <div className="relative bg-gray-200 flex items-center justify-center" style={{ minHeight: "32rem", height: "100%" }}>
                <iframe
                  title="CURAJ Incubation Foundation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.3552663221376!2d75.02471341100852!3d26.623552276723988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c0911c1902441%3A0xf83d23926ad5c5d5!2sCentral%20University%20of%20Rajasthan!5e1!3m2!1sen!2sin!4v1750842029545!5m2!1sen!2sin" 
                  style={{ border: 0, minHeight: "32rem", width: "100%", height: "100%" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 rounded shadow px-4 py-2 flex items-center gap-2 z-10">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">CURAJ Incubation Foundation</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Directions */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">By Car</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  The University is about 1.5 Km from National Highway-8 (NH-8). Free parking is available in the university parking lot.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://goo.gl/maps/6Qw6vQn1vQn1vQn1A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <Navigation className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Train className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Train Connectivity</h3>
                </div>
                <ul className="text-gray-600 text-sm mb-4 space-y-1">
                  <li>
                    <span className="font-medium">Kishangarh Railway Station:</span> 24 Km to campus (nearest, ~30 min drive)
                  </li>
                  <li>
                    <span className="font-medium">Ajmer Railway Station:</span> 48 Km to campus
                  </li>
                  <li>
                    <span className="font-medium">Jaipur Railway Station:</span> 87 Km to campus
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://goo.gl/maps/6Qw6vQn1vQn1vQn1A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Route Map
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Bus className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Bus Connectivity</h3>
                </div>
                <ul className="text-gray-600 text-sm mb-4 space-y-1">
                  <li>
                    <span className="font-medium">Kishangarh Bus Stand:</span> 20 Km to campus
                  </li>
                  <li>
                    <span className="font-medium">Ajmer Bus Stand:</span> 47 Km to campus
                  </li>
                  <li>
                    <span className="font-medium">Jaipur Bus Stand:</span> 93 Km to campus
                  </li>
                  <li>
                    24 Hrs bus facilities are available from Jaipur and Ajmer to reach university campus.
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://goo.gl/maps/6Qw6vQn1vQn1vQn1A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bus Route Info
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
