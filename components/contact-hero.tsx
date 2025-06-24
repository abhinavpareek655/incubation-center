import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Get in Touch</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Ready to start your entrepreneurial journey? We're here to help you every step of the way
        </p>

        {/* Quick Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Email Us</div>
            <div className="text-sm text-gray-300">info@uniincubator.edu</div>
          </div>
          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Call Us</div>
            <div className="text-sm text-gray-300">+1 (555) 123-4567</div>
          </div>
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Visit Us</div>
            <div className="text-sm text-gray-300">123 University Ave</div>
          </div>
        </div>
      </div>
    </section>
  )
}
