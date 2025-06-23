import Header from "@/components/header"
import Footer from "@/components/footer"

export default function StageStatusPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="container">
          <h1>CRUX</h1>
          <h6>Powered by</h6>
          <h1>Rafts &amp; Rivers</h1>

          <h3 style={{ color: "skyblue" }}>Startup Introduction</h3>
          <br />
          <br />
          <form method="POST" action="https://curajif.in/startup-details.php">
            <div className="form-group">
              <label htmlFor="promoter-name">Name of the Promoter/Founder</label>
              <input type="text" id="promoter-name" name="promoter_name" />
            </div>

            <div className="form-group">
              <label htmlFor="startup-name">Name of the Startup/Business</label>
              <input type="text" id="startup-name" name="startup_name" />
            </div>

            <div className="form-group">
              <label htmlFor="line-of-business">Line of Business/Industry/Segment</label>
              <input type="text" id="line-of-business" name="line_of_business" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="incorporation-date">Date of Incorporation</label>
                <input type="date" id="incorporation-date" name="incorporation_date" />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Experience of the Promoter (years/months)</label>
                <input type="text" id="experience" name="experience" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Phone/Mobile Number</label>
              <input type="tel" id="phone-number" name="phone_number" />
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Email</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="other-business">Does founder have any other business or income source? If yes, provide details</label>
              <input type="text" id="other-business" name="other_business" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>How Startup is funded till now</label>
                <br />
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <label htmlFor="self-funding">Self funding (bootstrap)</label>
                    <input type="checkbox" id="self-funding" name="funding_sources[]" value="Self funding (bootstrap)" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="loans">Loans</label>
                    <input type="checkbox" id="loans" name="funding_sources[]" value="Loans" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="gov-grants">Government grants</label>
                    <input type="checkbox" id="gov-grants" name="funding_sources[]" value="Government grants" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="seed-funding">Seed funding</label>
                    <input type="checkbox" id="seed-funding" name="funding_sources[]" value="Seed funding" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="equity-funding">Equity funding</label>
                    <input type="checkbox" id="equity-funding" name="funding_sources[]" value="Equity funding" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Expectation from Incubation Centre</label>
                <br />
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <label htmlFor="business-planning">Proper business planning</label>
                    <input type="checkbox" id="business-planning" name="expectations[]" value="Proper business planning" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="growth-sales">Growth in sales</label>
                    <input type="checkbox" id="growth-sales" name="expectations[]" value="Growth in sales" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="marketing-strategy">Marketing strategy</label>
                    <input type="checkbox" id="marketing-strategy" name="expectations[]" value="Marketing strategy" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="team-building">Team building and monitoring</label>
                    <input type="checkbox" id="team-building" name="expectations[]" value="Team building and monitoring" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="funding-grants">Funding (Government grants)</label>
                    <input type="checkbox" id="funding-grants" name="expectations[]" value="Funding (Government grants)" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="funding-loans">Funding (Loans)</label>
                    <input type="checkbox" id="funding-loans" name="expectations[]" value="Funding (Loans)" />
                  </div>

                  <div className="checkbox-item">
                    <label htmlFor="funding-equity">Funding (Equity)</label>
                    <input type="checkbox" id="funding-equity" name="expectations[]" value="Funding (Equity)" />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <h3 style={{ color: "skyblue" }}>Current Stage and Status</h3>
            <br />

            <div className="form-group">
              <label htmlFor="business-details" style={{ textDecoration: "none" }}>
                About the Business/Startups (product/service, customers, cost, technology, demand and supply, area of operation)
              </label>
              <textarea id="business-details" name="business_details" rows={4}></textarea>
            </div>

            <div className="form-row" style={{ display: "flex", flexDirection: "column" }}>
              <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <label htmlFor="employees" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}>
                  Number of employees
                </label>
                <input type="number" id="employees" name="employees" style={{ border: "1px solid #000", padding: 5, width: 100, boxSizing: "border-box", marginLeft: "auto" }} />
              </div>

              <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <label htmlFor="turnover" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}>
                  Current turnover (tentative annual)
                </label>
                <input type="number" id="turnover" name="turnover" style={{ border: "1px solid #000", padding: 5, width: 100, boxSizing: "border-box", marginLeft: "auto" }} />
              </div>

              <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <label htmlFor="expenditure" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}>
                  Expenditures (tentative monthly)
                </label>
                <input type="number" id="expenditure" name="expenditure" style={{ border: "1px solid #000", padding: 5, width: 100, boxSizing: "border-box", marginLeft: "auto" }} />
              </div>

              <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <label htmlFor="locations-number" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}>
                  Location served (Number)
                </label>
                <input type="number" id="locations-number" name="locations_number" style={{ border: "1px solid #000", padding: 5, width: 100, boxSizing: "border-box", marginLeft: "auto" }} />
              </div>

              <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <label htmlFor="locations-number" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}></label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="locations-names" style={{ textDecoration: "none" }}>
                  Location served (Names)
                </label>
                <input type="text" id="locations-names" name="locations_names" />
              </div>
            </div>

            <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <label style={{ textDecoration: "none", marginRight: 10 }}>Have an App</label>
              <input type="checkbox" id="have-app" name="have_app" style={{ marginRight: 20 }} />

              <label style={{ textDecoration: "none", marginRight: 10 }} htmlFor="have-website">
                Have a website
              </label>
              <input type="checkbox" id="have-website" name="have_website" />
            </div>
            <br />

            <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <label htmlFor="no_of_product" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}>
                Number of products/services offered
              </label>
              <input type="number" id="no_of_product" name="no_of_product" style={{ border: "1px solid #000", padding: 5, width: 100, boxSizing: "border-box", marginLeft: "auto" }} />
            </div>

            <div className="form-group" style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <label htmlFor="total_subscription" style={{ minWidth: 200, marginRight: 20, textAlign: "left", textDecoration: "none" }}>
                Total subscriptions/customers
              </label>
              <input type="number" id="total_subscription" name="total_subscription" style={{ border: "1px solid #000", padding: 5, width: 100, boxSizing: "border-box", marginLeft: "auto" }} />
            </div>

            <br />

            <div className="form-group">
              <label style={{ textDecoration: "none" }} htmlFor="customer-type">Customer Type</label>
              <div className="checkbox-group">
                <input type="checkbox" id="b2b" name="customer_type[]" value="B2B" />
                <label htmlFor="b2b" style={{ textDecoration: "none" }}>
                  B2B
                </label>

                <input type="checkbox" id="b2c" name="customer_type[]" value="B2C" />
                <label htmlFor="b2c" style={{ textDecoration: "none" }}>
                  B2C
                </label>

                <input type="checkbox" id="b2g" name="customer_type[]" value="B2G" />
                <label htmlFor="b2g" style={{ textDecoration: "none" }}>
                  B2G
                </label>

                <input type="checkbox" id="other" name="customer_type[]" value="Any Other" />
                <label htmlFor="other" style={{ textDecoration: "none" }}>
                  Any Other
                </label>
              </div>
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="monthly-growth" style={{ textDecoration: "none" }}>
                Monthly growth rate (%)
              </label>
              <input type="number" id="monthly-growth" name="monthly_growth" />
            </div>

            <div className="form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <label style={{ textDecoration: "none", marginRight: 10 }}>
                Do you have a proper marketing strategy in place?
              </label>
              <div className="radio-group" style={{ display: "flex", alignItems: "center" }}>
                <input type="radio" id="marketing-yes" name="marketing_strategy" value="Yes" style={{ marginRight: 5 }} />
                <label htmlFor="marketing-yes" style={{ textDecoration: "none", marginRight: 20 }}>
                  Yes
                </label>

                <input type="radio" id="marketing-no" name="marketing_strategy" value="No" style={{ marginRight: 5 }} />
                <label htmlFor="marketing-no" style={{ textDecoration: "none" }}>
                  No
                </label>
              </div>
            </div>

            <br />

            <div className="form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <label style={{ textDecoration: "none", marginRight: 10 }}>
                Do you have a structured team with monitoring mechanism?
              </label>
              <div className="radio-group" style={{ display: "flex", alignItems: "center" }}>
                <input type="radio" id="team-yes" name="team_structure" value="Yes" style={{ marginRight: 5 }} />
                <label htmlFor="team-yes" style={{ textDecoration: "none", marginRight: 20 }}>
                  Yes
                </label>

                <input type="radio" id="team-no" name="team_structure" value="No" style={{ marginRight: 5 }} />
                <label htmlFor="team-no" style={{ textDecoration: "none" }}>
                  No
                </label>
              </div>
            </div>
            <br />

            <div className="form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <label style={{ textDecoration: "none", marginRight: 10 }}>Do you have a timeline-targeted business plan?</label>
              <div className="radio-group" style={{ display: "flex", alignItems: "center" }}>
                <input type="radio" id="timeline-yes" name="timeline_plan" value="Yes" style={{ marginRight: 5 }} />
                <label htmlFor="timeline-yes" style={{ textDecoration: "none", marginRight: 20 }}>
                  Yes
                </label>

                <input type="radio" id="timeline-no" name="timeline_plan" value="No" style={{ marginRight: 5 }} />
                <label htmlFor="timeline-no" style={{ textDecoration: "none" }}>
                  No
                </label>
              </div>
            </div>
            <br />

            <div className="form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <label style={{ textDecoration: "none", marginRight: 10 }}>Does this business/startup mean everything to you?</label>
              <div className="radio-group" style={{ display: "flex", alignItems: "center" }}>
                <input type="radio" id="everything-yes" name="business_importance" value="Yes" style={{ marginRight: 5 }} />
                <label htmlFor="everything-yes" style={{ textDecoration: "none", marginRight: 20 }}>
                  Yes
                </label>

                <input type="radio" id="everything-no" name="business_importance" value="No" style={{ marginRight: 5 }} />
                <label htmlFor="everything-no" style={{ textDecoration: "none" }}>
                  No
                </label>
              </div>
            </div>
            <br />

            <div className="form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <label style={{ textDecoration: "none", marginRight: 10 }}>Do you have any alternative plan if this does not succeed?</label>
              <div className="radio-group" style={{ display: "flex", alignItems: "center" }}>
                <input type="radio" id="alternative-yes" name="alternative_plan" value="Yes" style={{ marginRight: 5 }} />
                <label htmlFor="alternative-yes" style={{ textDecoration: "none", marginRight: 20 }}>
                  Yes
                </label>

                <input type="radio" id="alternative-no" name="alternative_plan" value="No" style={{ marginRight: 5 }} />
                <label htmlFor="alternative-no" style={{ textDecoration: "none" }}>
                  No
                </label>
              </div>
            </div>
            <br />
            <br />

            <div className="form-group">
              <button type="submit" id="submit-button" style={{ padding: "10px 20px", backgroundColor: "teal", width: "-webkit-fill-available", color: "white", border: "none", cursor: "pointer" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
