import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/CIF Logo Final.png" 
                alt="CURAJIF Logo" 
                className="h-12 w-auto object-contain" 
              />
              <img 
                src="/curaj-banner.png" 
                alt="CURAJ Logo" 
                className="h-12 w-auto object-contain" 
              />
              <img 
                src="/ISC logo .png" 
                alt="ISC Logo" 
                className="h-12 w-auto object-contain rounded-full" 
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of entrepreneurs through innovation, mentorship, and comprehensive support.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/curaj-incubation-foundation-39b74a34b" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.facebook.com/curajofficial" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://x.com/curajasthan" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.youtube.com/channel/UCP5Wuxa3sde1gZIMwNuhEsQ" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <Youtube className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/startups" className="text-gray-400 hover:text-white transition-colors">
                  Our Startups
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-gray-400 hover:text-white transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/forms" className="text-gray-400 hover:text-white transition-colors">
                  Forms
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-gray-400 hover:text-white transition-colors">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-gray-400 hover:text-white transition-colors">
                  Alumni Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contact@curajif.in</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+91 8890632934</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">
                  CURAJ Incubation Foundation, SP4 Building
                  <br />
                  NH-8, Bandarsindari, Tehsil Kishangarh
                  <br />
                  Ajmer, Rajasthan 305817
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">Get updates on events, programs, and success stories.</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} CURAJ Incubation Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
