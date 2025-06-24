import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Train } from "lucide-react"

export default function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the innovation district, easily accessible by public transport and car
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 University Avenue, Innovation District</p>
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
                  Free parking available in the university garage. Take Exit 15 from Highway 101.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Directions
                  <Navigation className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Train className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Public Transport</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Metro Line 2 to University Station (5-minute walk). Bus routes 15, 22, and 45 stop nearby.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Transit Info
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Nearby Landmarks</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Innovation Center (2 blocks)</li>
                  <li>• Tech Hub Building (3 blocks)</li>
                  <li>• University Library (1 block)</li>
                  <li>• Downtown Transit Center (0.5 miles)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
