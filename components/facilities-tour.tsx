"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function FacilitiesTour() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const tourOptions = [
    {
      title: "Virtual Tour",
      description: "Explore our facilities from anywhere with our interactive 360° virtual tour",
      duration: "15 minutes",
      availability: "Available 24/7",
      features: ["360° views", "Interactive hotspots", "Detailed information", "Self-paced"],
    },
    {
      title: "Guided Tour",
      description: "Personal tour with our team to see facilities and ask questions",
      duration: "45 minutes",
      availability: "Mon-Fri, 9AM-5PM",
      features: ["Personal guide", "Q&A session", "Meet the team", "Refreshments"],
    },
    {
      title: "Group Tour",
      description: "Perfect for organizations, universities, or investor groups",
      duration: "60 minutes",
      availability: "By appointment",
      features: ["Customized presentation", "Group discussion", "Networking opportunity", "Catering available"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our world-class facilities firsthand. Schedule a tour or explore virtually at your convenience
          </p>
        </div>

        {/* Tour Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tourOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{option.availability}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">
                  {option.title === "Virtual Tour" ? "Start Virtual Tour" : "Schedule Tour"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tour Booking Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Visit</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Tour Scheduled!</h4>
                  <p className="text-gray-600">We'll contact you within 24 hours to confirm your tour details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tourType">Tour Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tour type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guided">Guided Tour</SelectItem>
                        <SelectItem value="group">Group Tour</SelectItem>
                        <SelectItem value="custom">Custom Tour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input id="preferredDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Just me</SelectItem>
                          <SelectItem value="2-5">2-5 people</SelectItem>
                          <SelectItem value="6-10">6-10 people</SelectItem>
                          <SelectItem value="11-20">11-20 people</SelectItem>
                          <SelectItem value="20+">20+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requirements or Questions</Label>
                    <Textarea
                      id="message"
                      placeholder="Let us know if you have any specific interests or requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Schedule Tour
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Visit Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">
                        CURAJ Incubation Foundation
                        <br />
                        NH-8, Bandarsindari, Tehsil Kishangarh
                        <br />
                        Ajmer, Rajasthan 305817
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Tour Hours</p>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Contact</p>
                      <p className="text-sm text-gray-600">
                        info@curajif.in
                        <br />
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facility Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/image copy 5.png"
                alt="Facility exterior"
                height={800}
                width={800}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Innovation Center</p>
                <p className="text-sm">Main Building Entrance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
