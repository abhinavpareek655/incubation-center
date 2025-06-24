"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ExternalLink, Megaphone } from "lucide-react"

export default function NewsTickerSmooth() {
  const [isPaused, setIsPaused] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  const announcements = [
    {
      text: "🎉 Applications now open for Spring 2024 Accelerator Program",
      link: "/programs/accelerator",
      type: "internal",
    },
    {
      text: "🚀 TechFlow raises $2M Series A - Congratulations to our alumni!",
      link: "/news/techflow-series-a",
      type: "internal",
    },
    {
      text: "📅 AI & Machine Learning Workshop - February 20th, Register Now",
      link: "/events/ai-workshop",
      type: "internal",
    },
    {
      text: "💡 New Mentorship Program launched with 50+ industry experts",
      link: "/programs/mentorship",
      type: "internal",
    },
    {
      text: "🏆 Demo Day 2024 attracted 500+ attendees and multiple funding commitments",
      link: "/news/demo-day-2024",
      type: "internal",
    },
    {
      text: "🌱 Sustainability Initiative: Supporting green tech startups with dedicated funding",
      link: "/programs/sustainability",
      type: "internal",
    },
    {
      text: "📍 New co-working space now open with 24/7 access for incubated startups",
      link: "/facilities",
      type: "internal",
    },
  ]

  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden relative border-b border-blue-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-center justify-center h-full">
          <Megaphone className="h-4 w-4 mr-2" />
          <span className="text-xs font-medium">ANNOUNCEMENTS</span>
        </div>
      </div>

      {/* Ticker content */}
      <div
        ref={tickerRef}
        className="flex items-center whitespace-nowrap"
        style={{
          animation: "scroll 25s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate announcements for seamless loop */}
        {[...announcements, ...announcements].map((announcement, index) => (
          <div key={index} className="flex items-center mx-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              {announcement.type === "internal" ? (
                <Link
                  href={announcement.link}
                  className="hover:text-yellow-200 transition-colors duration-200 flex items-center space-x-1 group"
                >
                  <span className="text-sm font-medium">{announcement.text}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-200 transition-colors duration-200 flex items-center space-x-1 group"
                >
                  <span className="text-sm font-medium">{announcement.text}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-blue-600 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
