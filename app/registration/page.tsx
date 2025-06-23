import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Registration() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
        <form>
          <div className="inner">
            <p>
              Date: <input type="date" className="input-date" maxLength={256} id="effective_date" name="effective_date" style={{border: 'none'}} required />
            </p>
            <br />

            <p>To,</p>
            <br />
            <p>
              Dr. Akhil Agrawal<br />Director<br />CURAJ Incubation Foundation<br />Bandarsindari, Tehsil Kishangarh,
              Ajmer, Rajasthan
            </p>
            <br />
            <br />

            <p>Dear Sir,</p>

            <p>
              I,
              <input type="text" className="input-text" maxLength={256} name="name" placeholder="Name" id="name" required />,
              <input type="text" className="input-text" maxLength={256} name="desig" placeholder="Designation" id="desig" required />, of
              <input type="text" className="input-text" maxLength={256} name="company" placeholder="Company name" id="company" required />, have
              gone through the Incubation Agreement and agree with the terms and conditions of the agreement.
            </p>

            <p>
              I,
              <input type="text" className="input-text" maxLength={256} name="contact_name" placeholder="Name" required />, am opting for
              <select id="incubation" name="incubation" className="input-text">
                <option value="">Select an option</option>
                <option value="pre-incubation-virtual">Pre incubation virtual</option>
                <option value="pre-incubation-physical">Pre incubation Physical</option>
                <option value="incubation-virtual">Incubation virtual</option>
                <option value="incubation-physical">Incubation Physical</option>
              </select>
              effective from
              <input type="date" className="input-date" maxLength={256} name="incubation_date" style={{border: 'none'}} required />.
            </p>

            <div>
              <p>
                The stage of my venture is
                <span className="dropdown">
                  <button type="button" className="dropbtn input-text" style={{paddingLeft: '5px', color: 'black', backgroundColor: 'transparent', width: '50%'}}>
                    Select stages
                  </button>
                </span>
              </p>
              <div className="dropdown-content">
                <label>
                  <input type="checkbox" name="stages[]" value="Ideation" /> Ideation
                </label>
                <label>
                  <input type="checkbox" name="stages[]" value="Preparing Prototype" /> Preparing Prototype
                </label>
                <label>
                  <input type="checkbox" name="stages[]" value="Prototype Ready" /> Prototype Ready
                </label>
                <label>
                  <input type="checkbox" name="stages[]" value="Launched" /> Launched
                </label>
                <label>
                  <input type="checkbox" name="stages[]" value="Early Traction" /> Early Traction
                </label>
                <label>
                  <input type="checkbox" name="stages[]" value="Acceleration" /> Acceleration
                </label>
              </div>
            </div>
            <br />

            <p>I believe apart from the offering of the opted Incubation Program I would also be assisted on:</p>
            <ul>
              <li>Developing a robust “Business Plan”</li>
              <li>Developing a robust “Business Framework”</li>
              <li>Prototype/MVP Development</li>
              <li>Pre Launch</li>
              <li>Developing Sales and Marketing Strategies</li>
              <li>Financial Management</li>
              <li>Information about funding schemes (existing and upcoming)</li>
              <li>Team Building</li>
              <li>Performance Management</li>
              <li>Growth Strategies</li>
            </ul>

            <p>I understand that it is my responsibility to approach the Incubator for any assistance from CURAJ-IF.</p>

            <p>We will mutually decide upon the timelines for various milestones after the acceptance of this agreement.</p>

            <p>Looking forward to a journey of transformation with a serious approach.</p>

            <p>Thanking you,</p>

            <p>
              <input type="text" className="input-text" maxLength={256} placeholder="Name" required />
              <br />
              <input type="email" className="input-text" maxLength={256} placeholder="Email" id="email" name="email" required />
              <br />
              <input type="text" className="input-text" maxLength={256} placeholder="Address" id="address" name="address" required />
              <br />
              <input type="text" className="input-text" maxLength={256} placeholder="Company name" required />
              <br />
              <input type="text" className="input-text" maxLength={256} placeholder="Designation" required />
              <br />
              <input type="text" className="input-text" maxLength={256} name="cin" placeholder="CIN/LLPIN number" id="cin" required />
            </p>
          </div>

          <br />
          <label htmlFor="letter" className="field-label">Upload Letter Head Image:</label>
          <div className="input-wrapper">
            <input type="file" className="input-text" name="letter" id="letter" required />
          </div>

          <div className="form-field-wrapper" style={{maxWidth: '100%', marginLeft: '0%'}}>
            <label htmlFor="agreement" className="field-label">
              <input type="checkbox" id="agreement" name="agreement" required /> I agree to the terms and conditions. &nbsp;&nbsp;&nbsp;
              <a href="https://curajif.in/Agreement.pdf" target="_blank" rel="noopener noreferrer">View Agreement</a>
            </label>
          </div>

          <div className="inputBx" id="btnn">
            <input type="submit" name="submit" value="Submit" id="submitBtn" className="submit-button large w-button" />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
