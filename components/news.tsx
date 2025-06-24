"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function News() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)

  const events = [
    {
      title: "Startup Pitch Competition 2025",
      date: "2025-07-15",
      time: "2:00 PM - 6:00 PM",
      location: "Main Auditorium",
      image: "/startup-pitch.png",
      category: "Competition",
      description: "Annual pitch competition where startups compete for $100K in funding.",
    },
    {
      title: "AI & Machine Learning Workshop",
      date: "2024-02-20",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Lab",
      image: "/images/ai-workshop.png",
      category: "Workshop",
      description: "Hands-on workshop covering the latest AI technologies and applications.",
    },
    {
      title: "Investor Networking Night",
      date: "2024-02-25",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub",
      image: "/images/investor-networking.png",
      category: "Networking",
      description: "Connect with angel investors and VCs looking for promising startups.",
    },
  ]

  const news = [
    {
      title: "TechFlow Raises $2M Series A Round",
      date: "2024-01-28",
      category: "Success Story",
      excerpt: "Our incubated startup TechFlow successfully closes Series A funding round led by prominent VCs.",
      image: "/img7.jpg",
    },
    {
      title: "New Mentorship Program Launch",
      date: "2024-01-25",
      category: "Program Update",
      excerpt: "Introducing our enhanced mentorship program with 50+ industry experts.",
      image: "/img16.jpg",
    },
    {
      title: "Sustainability Focus Initiative",
      date: "2024-01-22",
      category: "Announcement",
      excerpt: "New initiative to support startups working on sustainable and green technologies.",
      image: "/img2.jpg",
    },
    {
      title: "Alumni Success: EcoGreen Goes Public",
      date: "2024-01-20",
      category: "Success Story",
      excerpt: "Former incubatee EcoGreen announces IPO plans after tremendous growth.",
      image: "/img5.jpg",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (slideInterval.current) clearInterval(slideInterval.current)
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 3000) // 2 seconds
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current)
    }
  }, [events.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, upcoming events, and success stories from our community
          </p>
        </div>

        {/* Events Slideshow - Enhanced */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          <div className="relative">
            <Card className="overflow-hidden flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg">
              {/* Poster-style image section */}
              <div className="relative w-full md:w-1/3 flex-shrink-0 flex items-center justify-center bg-white min-h-[300px] md:min-h-[380px]">
                <div className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center bg-white">
                  <Image
                    src={events[currentSlide].image || "/placeholder.svg"}
                    alt={events[currentSlide].title}
                    fill
                    className="object-contain object-center rounded-t-lg md:rounded-t-none md:rounded-l-lg shadow-md border border-gray-200 bg-white"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      aspectRatio: "3/4",
                      background: "white"
                    }}
                    priority
                  />
                  {/* Category badge overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-blue-600 text-white shadow">{events[currentSlide].category}</Badge>
                  </div>
                  {/* Attendee count overlay */}
                  <div className="absolute bottom-4 right-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    200+ attending
                  </div>
                </div>
              </div>
              {/* Event details section */}
              <CardContent className="flex-1 flex flex-col justify-center p-6 md:p-10">
                <div className="mb-3">
                  <Badge className="bg-gray-200 text-gray-700 font-medium px-3 py-1 rounded">{events[currentSlide].category}</Badge>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">{events[currentSlide].title}</h4>
                <p className="text-gray-600 mb-6 text-base md:text-lg">{events[currentSlide].description}</p>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(events[currentSlide].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{events[currentSlide].time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{events[currentSlide].location}</span>
                  </div>
                </div>
                <div>
                  <Button className="w-full md:w-auto flex items-center justify-center">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <Button variant="outline" size="icon" onClick={prevSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {events.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-40">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {article.category}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/news">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
