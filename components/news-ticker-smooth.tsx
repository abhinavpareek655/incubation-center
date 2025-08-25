"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ExternalLink, Megaphone } from "lucide-react"

export default function NewsTickerSmooth() {
  const [isPaused, setIsPaused] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  const announcements = [
    {
      text: "Smart India Hackathon registration 2025 is now live",
      link: "https://www.sih.gov.in/signin",
      type: "external",
    },
    {
      text: "Startup and Innovation 4.0 Competition is now open for applications",
      link: "https://startup-and-innovation-4-0.vercel.app/",
      type: "external",
    }
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
        className="ticker-track flex items-center whitespace-nowrap"
        style={{
          animation: "scroll 50s linear infinite",
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
                  className="hover:text-yellow-200 hover:underline transition-colors duration-200 flex items-center space-x-1 group"
                >
                  <span className="text-base font-medium">{announcement.text}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-200 transition-colors duration-200 flex items-center space-x-1 group"
                >
                  <span className="text-base font-medium">{announcement.text}</span>
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
        .ticker-track {
          width: max-content;
          min-width: 100%;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}