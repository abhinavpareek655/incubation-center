"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { PaperForm, PaperInput, PaperButton } from "@/components/paper-form"

export default function IncubationLetterPage() {
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
      <PaperForm title="Letter of Intent for Incubation Support">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <div className="text-right mb-8">
              <span className="font-medium">Date: </span>
              <PaperInput type="date" name="date" className="inline-block w-40 ml-2" />
            </div>

            <div className="mb-8">
              <p className="font-medium">To,</p>
              <p>The Executive Director,</p>
              <p>CURAJ Incubation Foundation,</p>
              <p>Bandarsindari, Tehsil Kishangarh, Ajmer, Rajasthan</p>
            </div>

            <div className="mb-6">
              <p className="font-medium">Subject: Letter of Intent for incubation support</p>
            </div>

            <div className="mb-6">
              <p>Respected Sir/Madam,</p>
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed">
                I, <PaperInput type="text" name="namee" className="inline-block w-48 mx-1" placeholder="Your Name" />
                am writing to express my intent to receive
              </p>

              <div className="flex flex-wrap gap-6 my-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="pre" className="w-4 h-4" />
                  <span>Pre-incubation</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="virtual" className="w-4 h-4" />
                  <span>Virtual incubation</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="physical" className="w-4 h-4" />
                  <span>Physical incubation</span>
                </label>
              </div>

              <p className="leading-relaxed">
                services from CURAJ Incubation Foundation (CURAJIF) in my current role as
                <PaperInput type="text" name="role" placeholder="Designation" className="inline-block w-32 mx-1" />
                of <PaperInput type="text" name="vari" placeholder="Company name" className="inline-block w-48 mx-1" />
                if incorporated in{" "}
                <PaperInput type="text" name="var2" placeholder="Year & Date" className="inline-block w-32 mx-1" />
                (Please state the year of incorporation).
              </p>

              <p className="leading-relaxed">
                I'd like to opt for{" "}
                <PaperInput
                  type="text"
                  name="service"
                  className="inline-block w-64 mx-1"
                  placeholder="Incubation program name"
                />
                (Please state the name of the incubation program) led by CURAJIF. This will help me improve my
                foundational knowledge and gain exposure to innovative methods of problem-solving.
              </p>

              <p className="leading-relaxed">
                Kindly, accept my application and let me know when can we sign a formal agreement and begin the
                incubation process.
              </p>

              <p>Thank you.</p>

              <div className="mt-8">
                <p>
                  Sincerely,{" "}
                  <PaperInput type="text" name="since" className="inline-block w-48 ml-2" placeholder="Your Name" />
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <PaperButton type="submit">Submit Letter</PaperButton>
          </div>
        </form>
      </PaperForm>
      <Footer />
    </div>
  )
}
