"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ExternalLink, Megaphone, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsTickerAdvanced() {
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const announcements = [
    {
      text: "🎉 Applications now open for Spring 2024 Accelerator Program - Apply by March 1st",
      link: "/programs/accelerator",
      type: "internal",
      priority: "high",
      category: "Application",
    },
    {
      text: "🚀 TechFlow raises $2M Series A - Another success story from our portfolio",
      link: "/news/techflow-series-a",
      type: "internal",
      priority: "medium",
      category: "Success Story",
    },
    {
      text: "📅 AI & Machine Learning Workshop - February 20th, Limited seats available",
      link: "/events/ai-workshop",
      type: "internal",
      priority: "high",
      category: "Event",
    },
    {
      text: "💡 New Mentorship Program launched with 50+ industry experts ready to guide you",
      link: "/programs/mentorship",
      type: "internal",
      priority: "medium",
      category: "Program",
    },
    {
      text: "🏆 Demo Day 2024: Record-breaking event with 500+ attendees and multiple funding commitments",
      link: "/news/demo-day-2024",
      type: "internal",
      priority: "low",
      category: "News",
    },
    {
      text: "🌱 Green Tech Initiative: $500K fund available for sustainable startups",
      link: "/programs/sustainability",
      type: "internal",
      priority: "high",
      category: "Funding",
    },
    {
      text: "📍 New state-of-the-art co-working space now open - 24/7 access for members",
      link: "/facilities",
      type: "internal",
      priority: "medium",
      category: "Facility",
    },
  ]

  // Auto-advance to next announcement every 8 seconds when not paused
  useEffect(() => {
    if (!isPaused && isVisible) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length)
      }, 8000)
      return () => clearInterval(timer)
    }
  }, [isPaused, isVisible, announcements.length])

  if (!isVisible) {
    return null
  }

  const currentAnnouncement = announcements[currentIndex]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-600 border-red-700"
      case "medium":
        return "bg-blue-600 border-blue-700"
      case "low":
        return "bg-green-600 border-green-700"
      default:
        return "bg-blue-600 border-blue-700"
    }
  }

  return (
    <div
      className={`${getPriorityColor(currentAnnouncement.priority)} text-white py-3 border-b relative overflow-hidden`}
    >
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)",
            animation: "slide 15s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        />
      </div>

      <div className="container px-4 relative">
        <div className="flex items-center justify-between">
          {/* Left side - Icon and category */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Megaphone className="h-4 w-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wide">{currentAnnouncement.category}</span>
            </div>
          </div>

          {/* Center - Scrolling announcement */}
          <div
            className="flex-1 mx-4 overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="transition-all duration-200">
              {currentAnnouncement.type === "internal" ? (
                <Link
                  href={currentAnnouncement.link}
                  className="hover:text-yellow-200 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm font-medium text-center">{currentAnnouncement.text}</span>
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <a
                  href={currentAnnouncement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-200 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm font-medium text-center">{currentAnnouncement.text}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Pagination dots */}
            <div className="hidden md:flex space-x-1">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
