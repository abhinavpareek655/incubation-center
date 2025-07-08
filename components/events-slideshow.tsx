"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Users, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function EventsSlideshow() {
  const [currentTab, setCurrentTab] = useState<'upcoming' | 'past'>('upcoming')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPastSlide, setCurrentPastSlide] = useState(0)
  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])

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
      image: "/img27.jpg",
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
      image: "/img26.jpg",
      category: "Bootcamp",
      attendees: 75,
      description:
        "Intensive bootcamp on blockchain technology and Web3 applications. Learn to build decentralized applications and understand crypto economics.",
      highlights: ["Build DApps", "Smart Contracts", "Crypto Economics"],
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
