"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Users } from "lucide-react"
import Image from "next/image"

export default function EventsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const events = [
    {
      title: "Startup Pitch Competition 2025",
      date: "2025-07-15",
      time: "2:00 PM - 6:00 PM",
      location: "Main Auditorium",
      image: "/startup-pitch.png",
      category: "Competition",
      attendees: 200,
      description: "Annual pitch competition where startups compete for $100K in funding.",
      highlights: ["$100K Prize Pool", "Expert Judges", "Networking Reception"],
    },
    {
      title: "AI & Machine Learning Workshop",
      date: "2024-02-20",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Lab",
      image: "/img23.jpg",
      category: "Workshop",
      attendees: 50,
      description: "Hands-on workshop covering the latest AI technologies and applications.",
      highlights: ["Hands-on Learning", "Industry Experts", "Certificate Provided"],
    },
    {
      title: "Investor Networking Night",
      date: "2024-02-25",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub",
      image: "/img25.jpg",
      category: "Networking",
      attendees: 150,
      description: "Connect with angel investors and VCs looking for promising startups.",
      highlights: ["20+ Investors", "1-on-1 Sessions", "Pitch Opportunities"],
    },
    {
      title: "Women in Tech Summit",
      date: "2025-10-15",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      image: "/placeholder.svg?height=400&width=600",
      category: "Summit",
      attendees: 300,
      description:
        "Celebrating and empowering women entrepreneurs in technology. Featuring keynote speakers, panel discussions, and networking opportunities.",
      highlights: ["Keynote Speakers", "Panel Discussions", "Mentorship Sessions"],
    },
    {
      title: "Blockchain & Web3 Bootcamp",
      date: "2025-11-05",
      time: "10:00 AM - 6:00 PM",
      location: "Innovation Lab",
      image: "/placeholder.svg?height=400&width=600",
      category: "Bootcamp",
      attendees: 75,
      description:
        "Intensive bootcamp on blockchain technology and Web3 applications. Learn to build decentralized applications and understand crypto economics.",
      highlights: ["Build DApps", "Smart Contracts", "Crypto Economics"],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss these exciting opportunities to learn, network, and grow your startup
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={events[currentSlide].image || "/placeholder.svg"}
                    alt={events[currentSlide].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600">{events[currentSlide].category}</Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {events[currentSlide].attendees} attending
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{events[currentSlide].title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{events[currentSlide].description}</p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    <span className="font-medium">
                      {new Date(events[currentSlide].date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    <span>{events[currentSlide].time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                    <span>{events[currentSlide].location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {events[currentSlide].highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1">
                    Register Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" size="icon" onClick={prevSlide} className="h-12 w-12">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextSlide} className="h-12 w-12">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Event Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentSlide + 1} of {events.length} events
          </div>
        </div>
      </div>
    </section>
  )
}
