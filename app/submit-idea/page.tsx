"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  PaperForm,
  PaperFormField,
  PaperInput,
  PaperTextarea,
  PaperSelect,
  PaperCheckbox,
  PaperButton,
} from "@/components/paper-form"

export default function BusinessIdeaPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PaperForm title="Business Ideas Submission Form">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Step {currentStep} of {totalSteps}
            </h2>
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Basic Information</h3>

              <PaperFormField label="Select University" required>
                <PaperSelect name="university" required>
                  <option value="">Select University</option>
                  <option value="Central University of Rajasthan (CURAJ)">
                    Central University of Rajasthan (CURAJ)
                  </option>
                  <option value="Mahatma Gandhi Kashi Vidyapith University (MGKVU)">
                    Mahatma Gandhi Kashi Vidyapith University (MGKVU)
                  </option>
                  <option value="Veer Bahadur Singh Purvanchal University (VBSPU)">
                    Veer Bahadur Singh Purvanchal University (VBSPU)
                  </option>
                </PaperSelect>
              </PaperFormField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PaperFormField label="Your Name" required>
                  <PaperInput type="text" name="name" placeholder="Enter your name" required />
                </PaperFormField>

                <PaperFormField label="Phone Number" required>
                  <PaperInput type="tel" name="phone_number" placeholder="Enter your phone number" required />
                </PaperFormField>
              </div>

              <PaperFormField label="Your Email" required>
                <PaperInput type="email" name="email" placeholder="Enter your email" required />
              </PaperFormField>

              <PaperFormField label="My Idea Stage" required>
                <PaperSelect name="idea_stage" required>
                  <option value="">Select Stage</option>
                  <option value="A Concept (In my mind)">A Concept (In my mind)</option>
                  <option value="Early Stage (I have developed a prototype)">
                    Early Stage (I have developed a prototype)
                  </option>
                  <option value="Expansion (Growing user/customer base)">Expansion (Growing user/customer base)</option>
                  <option value="Mature (I want to expand)">Mature (I want to expand)</option>
                </PaperSelect>
              </PaperFormField>

              <div className="space-y-4">
                <PaperCheckbox label="My Business/Idea is technology based" name="tech_based" />
                <PaperCheckbox
                  label="My business/idea provides an innovative solution to a particular problem"
                  name="innovative_solution"
                />
                <PaperCheckbox
                  label="My business/idea provides value to a potential customer beyond its cost"
                  name="value_beyond_cost"
                />
              </div>

              <PaperFormField label="Industry" required>
                <PaperSelect name="industry" required>
                  <option value="">Select Industry</option>
                  <option value="Energy">Energy</option>
                  <option value="Clean Tech">Clean Tech</option>
                  <option value="Healthcare/Bio Tech">Healthcare/Bio Tech</option>
                  <option value="Software as Service">Software as Service</option>
                  <option value="Education">Education</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Others">Others</option>
                </PaperSelect>
              </PaperFormField>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Business Details</h3>

              <PaperFormField label="Name of Business/Idea" required>
                <PaperInput type="text" name="business_name" required />
              </PaperFormField>

              <PaperFormField label="What is your product or service?" required>
                <PaperTextarea name="product_service" rows={4} required />
              </PaperFormField>

              <PaperFormField label="Why it is Unique?" required>
                <PaperTextarea name="unique_text" rows={4} required />
              </PaperFormField>

              <PaperFormField label="Who are your customers/clients?" required>
                <PaperInput type="text" name="customers" required />
              </PaperFormField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PaperFormField label="Age Group (From - To)">
                  <div className="flex space-x-2">
                    <PaperInput type="number" name="age_from" placeholder="From" min="0" />
                    <PaperInput type="number" name="age_to" placeholder="To" min="0" />
                  </div>
                </PaperFormField>

                <PaperFormField label="Present Team Size" required>
                  <PaperInput type="number" name="team_size" min="1" required />
                </PaperFormField>
              </div>

              <PaperFormField label="Location" required>
                <PaperSelect name="location" required>
                  <option value="">Select Location</option>
                  <option value="Local (near me)">Local (near me)</option>
                  <option value="Few cities">Few cities</option>
                  <option value="States">States</option>
                  <option value="Whole country">Whole country</option>
                  <option value="Global">Global</option>
                </PaperSelect>
              </PaperFormField>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Requirements & Submission</h3>

              <PaperFormField label="I am looking for:">
                <div className="space-y-3">
                  <PaperCheckbox
                    label="Expert advice on My Idea/Concept product/Service"
                    name="requirement_expert_advice"
                  />
                  <PaperCheckbox
                    label="Space and infrastructure to develop the service/product"
                    name="requirement_space_infrastructure"
                  />
                  <PaperCheckbox
                    label="Funding to launch the already developed/product service"
                    name="requirement_funding"
                  />
                  <PaperCheckbox
                    label="Form a company and other legal formalities"
                    name="requirement_legal_formalities"
                  />
                  <PaperCheckbox label="Grow my team" name="requirement_grow_team" />
                </div>
              </PaperFormField>

              <PaperFormField label="Upload Supporting Files (Optional)">
                <input
                  type="file"
                  name="file_upload"
                  className="w-full border-2 border-gray-300 p-2 focus:border-blue-600 focus:outline-none"
                />
              </PaperFormField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PaperFormField label="Budget for Pre-launch">
                  <PaperInput type="number" name="budget_pre_launch" />
                </PaperFormField>

                <PaperFormField label="Budget for Prototype Development">
                  <PaperInput type="number" name="budget_prototype" />
                </PaperFormField>
              </div>

              <PaperFormField label="How are you going to fund your venture?">
                <div className="space-y-3">
                  <PaperCheckbox label="Self/Bootstrap" name="funding[]" value="Self/Bootstrap" />
                  <PaperCheckbox
                    label="Borrow from Family and Friends"
                    name="funding[]"
                    value="Borrow from Family and Friends"
                  />
                  <PaperCheckbox label="Find a seed Investor" name="funding[]" value="Find a seed Investor" />
                  <PaperCheckbox label="Find a Government Grant" name="funding[]" value="Find a Government Grant" />
                </div>
              </PaperFormField>
            </div>
          )}

          <div className="flex justify-between pt-8">
            {currentStep > 1 && (
              <PaperButton type="button" onClick={prevStep} className="bg-gray-500 hover:bg-gray-600">
                Previous
              </PaperButton>
            )}

            <div className="ml-auto">
              {currentStep < totalSteps ? (
                <PaperButton type="button" onClick={nextStep}>
                  Next Step
                </PaperButton>
              ) : (
                <PaperButton type="submit">Submit Business Idea</PaperButton>
              )}
            </div>
          </div>
        </form>
      </PaperForm>
      <Footer />
    </div>
  )
}
