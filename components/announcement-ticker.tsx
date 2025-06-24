"use client"

export default function AnnouncementTicker() {
  const messages = [
    "Applications for the 2025 cohort are now open!",
    "Join our AI & ML workshop on February 20th.",
    "Investor networking night on February 25th."
  ]

  return (
    <div className="w-full border-b bg-primary text-primary-foreground text-sm overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-2">
        {messages.map((msg, idx) => (
          <span key={idx} className="mx-8">{msg}</span>
        ))}
      </div>
    </div>
  )
}
