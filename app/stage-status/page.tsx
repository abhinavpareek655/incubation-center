import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  PaperForm,
  PaperFormField,
  PaperInput,
  PaperTextarea,
  PaperCheckbox,
  PaperRadio,
  PaperButton,
} from "@/components/paper-form"

export default function StartupFormPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PaperForm title="CRUX - Startup Introduction Form">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-600">Powered by Rafts & Rivers</h2>
        </div>

        <form method="POST" action="https://curajif.in/startup-details.php" className="space-y-6">
          <div className="border-b-2 border-blue-200 pb-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Startup Introduction</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaperFormField label="Name of the Promoter/Founder" required>
                <PaperInput type="text" name="promoter_name" required />
              </PaperFormField>

              <PaperFormField label="Name of the Startup/Business" required>
                <PaperInput type="text" name="startup_name" required />
              </PaperFormField>
            </div>

            <PaperFormField label="Line of Business/Industry/Segment" required>
              <PaperInput type="text" name="line_of_business" required />
            </PaperFormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaperFormField label="Date of Incorporation" required>
                <PaperInput type="date" name="incorporation_date" required />
              </PaperFormField>

              <PaperFormField label="Experience of the Promoter (years/months)" required>
                <PaperInput type="text" name="experience" required />
              </PaperFormField>
            </div>

            <PaperFormField label="Address" required>
              <PaperInput type="text" name="address" required />
            </PaperFormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PaperFormField label="Phone/Mobile Number" required>
                <PaperInput type="tel" name="phone_number" required />
              </PaperFormField>

              <PaperFormField label="Email" required>
                <PaperInput type="email" name="email" required />
              </PaperFormField>
            </div>

            <PaperFormField label="Does founder have any other business or income source? If yes, provide details">
              <PaperInput type="text" name="other_business" />
            </PaperFormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PaperFormField label="How Startup is funded till now">
                <div className="space-y-3">
                  <PaperCheckbox
                    label="Self funding (bootstrap)"
                    name="funding_sources[]"
                    value="Self funding (bootstrap)"
                  />
                  <PaperCheckbox label="Loans" name="funding_sources[]" value="Loans" />
                  <PaperCheckbox label="Government grants" name="funding_sources[]" value="Government grants" />
                  <PaperCheckbox label="Seed funding" name="funding_sources[]" value="Seed funding" />
                  <PaperCheckbox label="Equity funding" name="funding_sources[]" value="Equity funding" />
                </div>
              </PaperFormField>

              <PaperFormField label="Expectation from Incubation Centre">
                <div className="space-y-3">
                  <PaperCheckbox
                    label="Proper business planning"
                    name="expectations[]"
                    value="Proper business planning"
                  />
                  <PaperCheckbox label="Growth in sales" name="expectations[]" value="Growth in sales" />
                  <PaperCheckbox label="Marketing strategy" name="expectations[]" value="Marketing strategy" />
                  <PaperCheckbox
                    label="Team building and monitoring"
                    name="expectations[]"
                    value="Team building and monitoring"
                  />
                  <PaperCheckbox
                    label="Funding (Government grants)"
                    name="expectations[]"
                    value="Funding (Government grants)"
                  />
                  <PaperCheckbox label="Funding (Loans)" name="expectations[]" value="Funding (Loans)" />
                  <PaperCheckbox label="Funding (Equity)" name="expectations[]" value="Funding (Equity)" />
                </div>
              </PaperFormField>
            </div>
          </div>

          <div className="border-b-2 border-blue-200 pb-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Current Stage and Status</h3>

            <PaperFormField label="About the Business/Startups (product/service, customers, cost, technology, demand and supply, area of operation)">
              <PaperTextarea name="business_details" rows={4} />
            </PaperFormField>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <PaperFormField label="Number of employees">
                <PaperInput type="number" name="employees" />
              </PaperFormField>

              <PaperFormField label="Current turnover (tentative annual)">
                <PaperInput type="number" name="turnover" />
              </PaperFormField>

              <PaperFormField label="Expenditures (tentative monthly)">
                <PaperInput type="number" name="expenditure" />
              </PaperFormField>

              <PaperFormField label="Location served (Number)">
                <PaperInput type="number" name="locations_number" />
              </PaperFormField>
            </div>

            <PaperFormField label="Location served (Names)">
              <PaperInput type="text" name="locations_names" />
            </PaperFormField>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <PaperCheckbox label="Have an App" name="have_app" />
                <PaperCheckbox label="Have a website" name="have_website" />
              </div>

              <PaperFormField label="Number of products/services offered">
                <PaperInput type="number" name="no_of_product" />
              </PaperFormField>

              <PaperFormField label="Total subscriptions/customers">
                <PaperInput type="number" name="total_subscription" />
              </PaperFormField>
            </div>

            <PaperFormField label="Customer Type">
              <div className="flex flex-wrap gap-4">
                <PaperCheckbox label="B2B" name="customer_type[]" value="B2B" />
                <PaperCheckbox label="B2C" name="customer_type[]" value="B2C" />
                <PaperCheckbox label="B2G" name="customer_type[]" value="B2G" />
                <PaperCheckbox label="Any Other" name="customer_type[]" value="Any Other" />
              </div>
            </PaperFormField>

            <PaperFormField label="Monthly growth rate (%)">
              <PaperInput type="number" name="monthly_growth" />
            </PaperFormField>

            <div className="space-y-4">
              <PaperFormField label="Do you have a proper marketing strategy in place?">
                <div className="flex space-x-6">
                  <PaperRadio label="Yes" name="marketing_strategy" value="Yes" />
                  <PaperRadio label="No" name="marketing_strategy" value="No" />
                </div>
              </PaperFormField>

              <PaperFormField label="Do you have a structured team with monitoring mechanism?">
                <div className="flex space-x-6">
                  <PaperRadio label="Yes" name="team_structure" value="Yes" />
                  <PaperRadio label="No" name="team_structure" value="No" />
                </div>
              </PaperFormField>

              <PaperFormField label="Do you have a timeline-targeted business plan?">
                <div className="flex space-x-6">
                  <PaperRadio label="Yes" name="timeline_plan" value="Yes" />
                  <PaperRadio label="No" name="timeline_plan" value="No" />
                </div>
              </PaperFormField>

              <PaperFormField label="Does this business/startup mean everything to you?">
                <div className="flex space-x-6">
                  <PaperRadio label="Yes" name="business_importance" value="Yes" />
                  <PaperRadio label="No" name="business_importance" value="No" />
                </div>
              </PaperFormField>

              <PaperFormField label="Do you have any alternative plan if this does not succeed?">
                <div className="flex space-x-6">
                  <PaperRadio label="Yes" name="alternative_plan" value="Yes" />
                  <PaperRadio label="No" name="alternative_plan" value="No" />
                </div>
              </PaperFormField>
            </div>
          </div>

          <div className="text-center pt-6">
            <PaperButton type="submit">Submit Application</PaperButton>
          </div>
        </form>
      </PaperForm>
      <Footer />
    </div>
  )
}
