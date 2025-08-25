"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Users, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import Link from "next/link"

export default function EventsSlideshow() {
  const [currentTab, setCurrentTab] = useState<'upcoming' | 'past'>('upcoming')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPastSlide, setCurrentPastSlide] = useState(0)
  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])

  const events = [
    {
      title: "Startup & Innovation 4.0 Competition",
      date: "2025-09-14",
      time: "10:00 AM - 6:00 PM",
      location: "4A2 Building",
      image: "/WhatsApp Image 2025-08-25 at 13.22.15_4388a6ed.jpg",
      category: "Competition",
      attendees: 200,
      description: "Annual pitch competition where startups compete for ₹50K in funding.",
      highlights: ["₹50K Prize Pool", "Expert Judges", "Networking Reception"],
      link: "https://startup-and-innovation-4-0.vercel.app/"
    },
    {
      title: "Smart India Hackathon 2025",
      date: "2025-08-25",
      time: "Full Day",
      location: "Online",
      image: "/WhatsApp Image 2025-08-25 at 14.54.17_7485ec6e.jpg",
      category: "Competition",
      attendees: 5000,
      description: "Participate in the Smart India Hackathon 2025 and showcase your innovative solutions.",
      highlights: ["Hands-on Learning", "Industry Experts", "Certificate Provided", "Chance to win great prizes"],
      link: "https://www.sih.gov.in/signin",
    },
    {
      title: "Tally Startup Challenge",
      date: "2025-09-03",
      time: "Full Day",
      location: "Online",
      image: "/image copy 6.png",
      category: "Competition",
      description: "This theme highlights flexibility and efficiency, emphasizing the solution's role in optimizing manufacturing processes and driving growth for MSME manufacturers.",
      link: "https://www.startupindia.gov.in/content/sih/en/ams-application/challenge.html?applicationId=68519e05e4b04240c52b3658",
      attendees: 150,
      highlights: ["Solution Showcase", "Mentorship Opportunities"],
    },
    {
      title: "Sustainable Solutions for Hilly Region Development & Livelihood Promotion",
      date: "2025-09-25",
      time: "Full Day",
      location: "Online",
      image: "/image copy 7.png",
      category: "Challenge",
      description: "This challenge seeks innovative and scalable solutions that address the unique socio-economic and environmental challenges faced by hilly regions.",
      link: "https://www.startupindia.gov.in/content/sih/en/ams-application/challenge.html?applicationId=68ab18b9e4b021e0fa5dbe93",
      attendees: 300,
      highlights: ["Solution Showcase", "Mentorship Opportunities"],
    },
  ]

  const pastEvents = [
    {
      title: "Startup Demo Day 2024",
      date: "2024-04-10",
      time: "3:00 PM - 7:00 PM",
      location: "Main Auditorium",
      image: "/img10.jpg",
      category: "Demo Day",
      attendees: 180,
      description: "Showcase of startups graduating from the incubation program.",
      highlights: ["Investor Panel", "Live Demos", "Award Ceremony"],
      gallery: ["/img10.jpg", "/img11.jpg", "/img12.jpeg"]
    },
    {
      title: "Innovation Hackathon 2023",
      date: "2023-11-20",
      time: "9:00 AM - 9:00 PM",
      location: "Tech Lab",
      image: "/img13.jpeg",
      category: "Hackathon",
      attendees: 120,
      description: "24-hour hackathon focused on solving real-world problems.",
      highlights: ["Mentor Support", "Cash Prizes", "Team Collaboration"],
      gallery: ["/img13.jpeg", "/img14.jpg", "/img15.jpeg"]
    },
    {
      title: "Women Founders Meetup 2023",
      date: "2023-08-05",
      time: "10:00 AM - 2:00 PM",
      location: "Conference Center",
      image: "/img16.jpg",
      category: "Meetup",
      attendees: 60,
      description: "Networking and mentorship for women entrepreneurs.",
      highlights: ["Panel Talks", "Mentorship Circles", "Networking Lunch"],
      gallery: ["/img16.jpg", "/img17.jpg", "/img18.jpeg"]
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }
  const nextPastSlide = () => {
    setCurrentPastSlide((prev) => (prev + 1) % pastEvents.length)
  }
  const prevPastSlide = () => {
    setCurrentPastSlide((prev) => (prev - 1 + pastEvents.length) % pastEvents.length)
  }

  // Auto-advance slides
  useEffect(() => {
    if (currentTab === 'upcoming') {
      const timer = setInterval(nextSlide, 5000)
      return () => clearInterval(timer)
    } else {
      const timer = setInterval(nextPastSlide, 5000)
      return () => clearInterval(timer)
    }
  }, [currentTab])

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our upcoming and past events to learn, network, and grow your startup
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${currentTab === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setCurrentTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${currentTab === 'past' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setCurrentTab('past')}
          >
            Past Events
          </button>
        </div>
        {/* Upcoming Events Slideshow */}
        {currentTab === 'upcoming' && (
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
                    <Link href={events[currentSlide].link} target="_blank" className="flex-1">
                      <Button size="lg" className="flex-1">
                        Register Now
                      </Button>
                    </Link>
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
        )}
        {/* Past Events Slideshow */}
        {currentTab === 'past' && (
          <div className="relative max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto cursor-pointer" onClick={() => {
                  setGalleryImages(pastEvents[currentPastSlide].gallery)
                  setGalleryDialogOpen(true)
                }}>
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={pastEvents[currentPastSlide].image || "/placeholder.svg"}
                      alt={pastEvents[currentPastSlide].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600">{pastEvents[currentPastSlide].category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {pastEvents[currentPastSlide].attendees} attended
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/30 text-white text-lg font-semibold">
                    View Gallery
                  </div>
                </div>
                {/* Content Section */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{pastEvents[currentPastSlide].title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{pastEvents[currentPastSlide].description}</p>
                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-medium">
                        {new Date(pastEvents[currentPastSlide].date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{pastEvents[currentPastSlide].time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{pastEvents[currentPastSlide].location}</span>
                    </div>
                  </div>
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pastEvents[currentPastSlide].highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" size="icon" onClick={prevPastSlide} className="h-12 w-12">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {pastEvents.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentPastSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentPastSlide(index)}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextPastSlide} className="h-12 w-12">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            {/* Event Counter */}
            <div className="text-center mt-4 text-sm text-gray-500">
              {currentPastSlide + 1} of {pastEvents.length} past events
            </div>
            {/* Gallery Dialog */}
            <Dialog open={galleryDialogOpen} onOpenChange={setGalleryDialogOpen}>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Event Gallery</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                      <Image src={img} alt={`Gallery image ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  )
}
