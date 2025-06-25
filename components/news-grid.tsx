"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function NewsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Success Stories", "Program Updates", "Events", "Announcements", "Industry News"]

  const newsArticles = [
    {
      title: "BharatAI Secures ₹16 Crore Series A Funding",
      date: "2025-07-15",
      readTime: "3 min read",
      author: "Priya Sharma",
      category: "Success Stories",
      excerpt:
        "Our incubated startup BharatAI successfully closes Series A funding round led by top Indian investors, marking a major milestone for the Indian AI ecosystem.",
      image: "/img1.jpg",
      featured: true,
    },
    {
      title: "Launch of Atal Mentorship Program",
      date: "2025-07-18",
      readTime: "2 min read",
      author: "Rohan Mehta",
      category: "Program Updates",
      excerpt:
        "Announcing the Atal Mentorship Program with 75+ Indian industry leaders ready to guide the next generation of entrepreneurs.",
      image: "/img2.jpg",
      featured: false,
    },
    {
      title: "Green India Initiative Announced",
      date: "2025-07-20",
      readTime: "4 min read",
      author: "Ananya Iyer",
      category: "Announcements",
      excerpt:
        "A new initiative to support Indian startups working on sustainable and eco-friendly technologies, with dedicated funding and resources.",
      image: "/img5.jpg",
      featured: false,
    },
    {
      title: "Alumni Success: SwachhPack Goes Public",
      date: "2025-07-22",
      readTime: "5 min read",
      author: "Amitabh Singh",
      category: "Success Stories",
      excerpt:
        "Former incubatee SwachhPack announces IPO plans after remarkable growth in the Indian sustainable packaging sector.",
      image: "/img6.jpg",
      featured: true,
    },
    {
      title: "AI Workshop Series Kicks Off in Jaipur",
      date: "2025-07-25",
      readTime: "2 min read",
      author: "Neha Verma",
      category: "Events",
      excerpt:
        "Join our AI workshop series in Jaipur, designed to help Indian startups integrate artificial intelligence into their products.",
      image: "/img7.jpg",
      featured: false,
    },
    {
      title: "Venture Capital Trends in India 2025",
      date: "2025-07-28",
      readTime: "6 min read",
      author: "Karan Patel",
      category: "Industry News",
      excerpt:
        "A deep dive into the latest venture capital trends in India and what they mean for early-stage Indian startups seeking funding.",
      image: "/img13.jpeg",
      featured: false,
    },
    {
      title: "Demo Day 2025: Record-Breaking Event in Rajasthan",
      date: "2025-08-01",
      readTime: "4 min read",
      author: "Priya Sharma",
      category: "Events",
      excerpt:
        "Our annual Demo Day in Rajasthan attracted over 800 attendees and resulted in multiple funding commitments for our graduating Indian startups.",
      image: "/img16.jpg",
      featured: false,
    },
    {
      title: "New Co-working Space Inaugurated at CURAJ",
      date: "2025-08-05",
      readTime: "3 min read",
      author: "Rohan Mehta",
      category: "Announcements",
      excerpt:
        "CURAJ Innovation Foundation opens a state-of-the-art co-working space with 24/7 access for Indian startups and entrepreneurs.",
      image: "/img8.jpg",
      featured: false,
    },
  ]

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, success stories, and insights from our ecosystem
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
