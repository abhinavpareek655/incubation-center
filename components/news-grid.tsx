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
      title: "TechFlow Raises $2M Series A Round",
      date: "2024-01-28",
      readTime: "3 min read",
      author: "Sarah Johnson",
      category: "Success Stories",
      excerpt:
        "Our incubated startup TechFlow successfully closes Series A funding round led by prominent VCs, marking another milestone in our portfolio success.",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      title: "New Mentorship Program Launch",
      date: "2024-01-25",
      readTime: "2 min read",
      author: "Michael Chen",
      category: "Program Updates",
      excerpt:
        "Introducing our enhanced mentorship program with 50+ industry experts ready to guide the next generation of entrepreneurs.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Sustainability Focus Initiative",
      date: "2024-01-22",
      readTime: "4 min read",
      author: "Emily Rodriguez",
      category: "Announcements",
      excerpt:
        "New initiative to support startups working on sustainable and green technologies, with dedicated funding and resources.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Alumni Success: EcoGreen Goes Public",
      date: "2024-01-20",
      readTime: "5 min read",
      author: "David Kim",
      category: "Success Stories",
      excerpt:
        "Former incubatee EcoGreen announces IPO plans after tremendous growth in the sustainable packaging market.",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      title: "AI Workshop Series Begins Next Month",
      date: "2024-01-18",
      readTime: "2 min read",
      author: "Lisa Thompson",
      category: "Events",
      excerpt:
        "Join our comprehensive AI workshop series designed to help startups integrate artificial intelligence into their products.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Venture Capital Trends 2024",
      date: "2024-01-15",
      readTime: "6 min read",
      author: "James Wilson",
      category: "Industry News",
      excerpt:
        "Analysis of the latest venture capital trends and what they mean for early-stage startups seeking funding.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Demo Day 2024: Record Breaking Event",
      date: "2024-01-12",
      readTime: "4 min read",
      author: "Sarah Johnson",
      category: "Events",
      excerpt:
        "Our annual Demo Day attracted over 500 attendees and resulted in multiple funding commitments for our graduating startups.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "New Co-working Space Opens",
      date: "2024-01-10",
      readTime: "3 min read",
      author: "Michael Chen",
      category: "Announcements",
      excerpt:
        "Expanded facilities now include a state-of-the-art co-working space with 24/7 access for our incubated startups.",
      image: "/placeholder.svg?height=200&width=300",
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
