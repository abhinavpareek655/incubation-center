"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function ApplyPage() {
  const sendEmail = () => {
    console.log("submit")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail()
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container px-4 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4" id="form">
            <h2>To,</h2>
            <p>The Executive Director,</p>
            <p>CURAJ Incubation Foundation,</p>
            <p>Bandarsindari, Tehsil Kishangarh, Ajmer, Rajasthan</p>
            <p className="pt-4">
              Date:{" "}
              <Input type="date" name="date" id="date" className="inline-block w-auto ml-2" />
            </p>
            <p>Subject: Letter of Intent for incubation support</p>
            <p className="pt-4">Respected Sir/Madam,</p>
            <p>
              I,
              <Input type="text" name="namee" id="namee" className="inline-block w-auto mx-2" />
              am writing to express my intent to receive
              <span className="mx-2">Pre-incubation <Checkbox name="pre" id="pre" className="ml-1" /></span>
              <span className="mx-2">Virtual incubation <Checkbox name="virtual" id="virtual" className="ml-1" /></span>
              <span className="mx-2">Physical incubation <Checkbox name="physical" id="physical" className="ml-1" /></span>
              services from CURAJ Incubation Foundation (CURAJIF) in my current role as
              <Input type="text" name="role" id="role" placeholder="Designation" className="inline-block w-auto mx-2" />
              of
              <Input type="text" name="vari" id="vari" placeholder="Company name (if incorporated)" className="inline-block w-auto mx-2" />
              if incorporated in
              <Input type="text" name="var2" id="var2" placeholder="Year & Date" className="inline-block w-auto mx-2" />
              (Please state the year of incorporation).
            </p>
            <p>
              I’d like to opt for
              <Input type="text" name="service" id="service" className="inline-block w-auto mx-2" />
              (Please state the name of the incubation program) led by CURAJIF. This will help me improve my foundational
              knowledge and gain exposure to innovative methods of problem-solving.
            </p>
            <p>
              Kindly, accept my application and let me know when can we sign a formal agreement and begin the incubation process.
              <br />
              Thank you.
            </p>
            <p>
              Sincerely,
              <Input type="text" name="since" id="since" className="inline-block w-auto ml-2" />
            </p>
            <Button type="submit" className="mt-4 submit-button">
              Submit
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
