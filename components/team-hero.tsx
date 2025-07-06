"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Users, Award, Heart, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/img1.jpg",
      alt: "Modern co-working space with entrepreneurs collaborating",
    },
    {
      image: "/img17.jpg",
      alt: "Innovation lab with cutting-edge technology",
    },
    {
      image: "/img14.jpg",
      alt: "Startup pitch presentation in progress",
    },
    {
      image: "/img2.jpg",
      alt: "Mentorship session between expert and entrepreneur",
    },
    {
      image: "/img16.jpg",
      alt: "Team meeting in modern conference room",
    },
  ]
// Auto-advance slides
useEffect(() => {
  if (!isAutoPlaying) return
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 4000)
  return () => clearInterval(timer)
}, [slides.length, isAutoPlaying])

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length)
}

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
}

// Touch handlers for mobile swipe
const handleTouchStart = (e: React.TouchEvent) => {
  setTouchStart(e.targetTouches[0].clientX)
}

const handleTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX)
}

const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > 50
  const isRightSwipe = distance < -50

  if (isLeftSwipe) {
    nextSlide()
  }
  if (isRightSwipe) {
    prevSlide()
  }
}

const toggleAutoPlay = () => {
  setIsAutoPlaying(!isAutoPlaying)
}
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs md:text-sm font-medium mb-3 md:mb-4">
                Expert Team
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Meet Our Team
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Passionate professionals dedicated to nurturing the next generation of successful entrepreneurs
              </p>
            </div>

            {/* Team Highlights */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 py-4 md:py-6 border-y border-gray-200">
              <div className="text-center">
                <Users className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-blue-600" />
                <div className="text-base md:text-lg font-semibold text-gray-900">50+ Experts</div>
                <div className="text-xs md:text-sm text-gray-600">Mentors & Staff</div>
              </div>
              <div className="text-center">
                <Award className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-blue-600" />
                <div className="text-base md:text-lg font-semibold text-gray-900">200+ Years</div>
                <div className="text-xs md:text-sm text-gray-600">Combined Experience</div>
              </div>
              <div className="text-center">
                <Heart className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-blue-600" />
                <div className="text-base md:text-lg font-semibold text-gray-900">24/7</div>
                <div className="text-xs md:text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Slideshow Side */}
          <div className="relative">
          <div
            ref={slideRef}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Image */}
            <div className="relative h-full">
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Mobile-friendly Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>

            {/* Auto-play toggle for mobile */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 md:hidden"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? (
                <Pause className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700" />
              ) : (
                <Play className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700" />
              )}
            </button>

            {/* Mobile-optimized Slide Indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-white w-6 sm:w-8" : "bg-white/60 w-1.5 sm:w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe indicator for mobile */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-xs sm:text-sm md:hidden">
              Swipe to navigate
            </div>
          </div>

          {/* Mobile-optimized Thumbnail Strip - Hidden on very small screens */}
          <div className="hidden sm:flex space-x-2 p-2 mt-3 md:mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-md lg:rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentSlide ? "ring-2 ring-blue-600 scale-105" : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`View slide ${index + 1}`}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
