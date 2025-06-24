import Header from "@/components/header"
import Footer from "@/components/footer"
import { PaperForm, PaperFormField, PaperInput, PaperSelect, PaperCheckbox, PaperButton } from "@/components/paper-form"

export default function RegistrationPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <PaperForm title="Registration Form">
        <form className="space-y-6">
          <div className="text-right mb-8">
            <span className="font-medium">Date: </span>
            <PaperInput type="date" name="effective_date" className="inline-block w-40 ml-2" required />
          </div>

          <div className="mb-8 space-y-2">
            <p className="font-medium">To,</p>
            <p>Dr. Akhil Agrawal</p>
            <p>Director</p>
            <p>CURAJ Incubation Foundation</p>
            <p>Bandarsindari, Tehsil Kishangarh, Ajmer, Rajasthan</p>
          </div>

          <div className="mb-6">
            <p className="font-medium">Dear Sir,</p>
          </div>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              I, <PaperInput type="text" name="name" placeholder="Name" className="inline-block w-48 mx-1" required />,
              <PaperInput
                type="text"
                name="desig"
                placeholder="Designation"
                className="inline-block w-32 mx-1"
                required
              />
              , of
              <PaperInput
                type="text"
                name="company"
                placeholder="Company name"
                className="inline-block w-48 mx-1"
                required
              />
              , have gone through the Incubation Agreement and agree with the terms and conditions of the agreement.
            </p>

            <p>
              I,{" "}
              <PaperInput
                type="text"
                name="contact_name"
                placeholder="Name"
                className="inline-block w-48 mx-1"
                required
              />
              , am opting for
              <PaperSelect name="incubation" className="inline-block w-64 mx-1" required>
                <option value="">Select an option</option>
                <option value="pre-incubation-virtual">Pre incubation virtual</option>
                <option value="pre-incubation-physical">Pre incubation Physical</option>
                <option value="incubation-virtual">Incubation virtual</option>
                <option value="incubation-physical">Incubation Physical</option>
              </PaperSelect>
              effective from{" "}
              <PaperInput type="date" name="incubation_date" className="inline-block w-40 mx-1" required />.
            </p>

            <div className="my-6">
              <p className="mb-4">The stage of my venture is:</p>
              <div className="space-y-2 ml-4">
                <PaperCheckbox label="Ideation" name="stages[]" value="Ideation" />
                <PaperCheckbox label="Preparing Prototype" name="stages[]" value="Preparing Prototype" />
                <PaperCheckbox label="Prototype Ready" name="stages[]" value="Prototype Ready" />
                <PaperCheckbox label="Launched" name="stages[]" value="Launched" />
                <PaperCheckbox label="Early Traction" name="stages[]" value="Early Traction" />
                <PaperCheckbox label="Acceleration" name="stages[]" value="Acceleration" />
              </div>
            </div>

            <div className="my-6">
              <p className="mb-4">
                I believe apart from the offering of the opted Incubation Program I would also be assisted on:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Developing a robust "Business Plan"</li>
                <li>Developing a robust "Business Framework"</li>
                <li>Prototype/MVP Development</li>
                <li>Pre Launch</li>
                <li>Developing Sales and Marketing Strategies</li>
                <li>Financial Management</li>
                <li>Information about funding schemes (existing and upcoming)</li>
                <li>Team Building</li>
                <li>Performance Management</li>
                <li>Growth Strategies</li>
              </ul>
            </div>

            <p>I understand that it is my responsibility to approach the Incubator for any assistance from CURAJ-IF.</p>

            <p>
              We will mutually decide upon the timelines for various milestones after the acceptance of this agreement.
            </p>

            <p>Looking forward to a journey of transformation with a serious approach.</p>

            <p className="font-medium">Thanking you,</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <PaperFormField label="Name" required>
                <PaperInput type="text" placeholder="Full Name" required />
              </PaperFormField>

              <PaperFormField label="Email" required>
                <PaperInput type="email" name="email" placeholder="Email Address" required />
              </PaperFormField>

              <PaperFormField label="Address" required>
                <PaperInput type="text" name="address" placeholder="Complete Address" required />
              </PaperFormField>

              <PaperFormField label="Company Name" required>
                <PaperInput type="text" placeholder="Company Name" required />
              </PaperFormField>

              <PaperFormField label="Designation" required>
                <PaperInput type="text" placeholder="Your Designation" required />
              </PaperFormField>

              <PaperFormField label="CIN/LLPIN Number" required>
                <PaperInput type="text" name="cin" placeholder="CIN/LLPIN number" required />
              </PaperFormField>
            </div>

            <PaperFormField label="Upload Letter Head Image" required>
              <input
                type="file"
                name="letter"
                className="w-full border-2 border-gray-300 p-2 focus:border-blue-600 focus:outline-none"
                required
              />
            </PaperFormField>

            <div className="flex items-start space-x-3">
              <input type="checkbox" id="agreement" name="agreement" className="w-4 h-4 mt-1" required />
              <label htmlFor="agreement" className="text-sm">
                I agree to the terms and conditions.
                <a
                  href="https://curajif.in/Agreement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline ml-2"
                >
                  View Agreement
                </a>
              </label>
            </div>
          </div>

          <div className="text-center pt-8">
            <PaperButton type="submit">Submit Registration</PaperButton>
          </div>
        </form>
      </PaperForm>
      <Footer />
    </div>
  )
}
