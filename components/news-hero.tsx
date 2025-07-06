"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Search, Calendar, TrendingUp, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import { useSwipeable } from "react-swipeable"

export default function NewsHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/img1.jpg",
      alt: "Latest startup success story",
    },
    {
      image: "/img17.jpg",
      alt: "Innovation workshop in progress",
    },
    {
      image: "/img14.jpg",
      alt: "Networking event with entrepreneurs",
    },
    {
      image: "/img2.jpg",
      alt: "Award ceremony and achievements",
    },
    {
      image: "/img16.jpg",
      alt: "Community gathering and announcements",
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
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                Latest Updates
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Stay informed about the latest developments, success stories, and upcoming events in our ecosystem
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search news and events..."
                className="pl-10 h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500 w-full"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-gray-200">
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-lg font-semibold text-gray-900">50+ Events</div>
                <div className="text-sm text-gray-600">This Year</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-lg font-semibold text-gray-900">Weekly Updates</div>
                <div className="text-sm text-gray-600">Fresh Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📰</div>
                <div className="text-lg font-semibold text-gray-900">100+ Articles</div>
                <div className="text-sm text-gray-600">Published</div>
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
