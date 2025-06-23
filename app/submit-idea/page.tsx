import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Submit Your Idea",
}

export default function SubmitIdeaPage() {
  const html = `
<div class="contact-layout-one-inner">
            <h3 style="text-align:center">Business Ideas</h3><br><br>

            <style>
                .submit-button {
                    float: right;
                    padding: var(--spacing--xs) var(--spacing--s) var(--spacing--xs) var(--spacing--s);
                    border-radius: var(--spacing--xxxl);
                    box-shadow: inset 0 0 0 0 var(--color--shadow-light), inset 0 0 0 0 var(--color--shadow-dark), -5px -5px 12px 0 var(--color--shadow-light), 5px 5px 12px 0 var(--color--shadow-dark);
                    color: var(--color--text-color);
                    background-color: rgba(56, 152, 236, 0);
                    background-image: none;
                    background-position: 80%;
                    background-repeat: no-repeat;
                    background-size: auto;
                    transition: padding .35s ease-in-out, box-shadow .35s ease-in-out, background-position .35s ease-in-out;
                }

                .headd {
                    display: flex;
                    justify-content: space-between;
                    /* Aligns children elements to the left and right edges */
                    align-items: center;
                    /* Vertically center the elements */
                    margin-bottom: 20px;
                    /* Optional: Space below the header */
                }

                .headd h5 {
                    margin: 0;
                    /* Remove default margin to align with the toggle container */
                    flex: 1;
                    /* Allows the heading to take up available space */
                }

                .toggle-container {
                    display: flex;
                    align-items: center;
                    /* Vertically center the toggle switch with the text */
                }

                .toggle-container span {
                    padding: 0 10px;
                    /* Space between text and toggle switch */
                }

                .age-group-wrapper {
                    display: flex;
                    gap: 10px;
                    /* Adjust the spacing between the fields as needed */
                }

                .age-group-wrapper .form-text-input {
                    flex: 1;
                    /* Makes both inputs the same width, adjust as needed */
                }

                /* Style for the form */
                .idea-form-field-wrapper {
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                /* Align the form field inner content (text area, select) as before */
                .idea-form-field-inner {
                    width: 100%;
                }

                /* Style for the toggle switch */
                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 30px;
                    margin-left: auto;
                    /* This pushes the toggle to the right */
                }

                .toggle-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #d4d1d1fa;
                    /* Orange background when not toggled */
                    transition: 0.4s;
                    border-radius: 30px;
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 24px;
                    width: 24px;
                    left: 3px;
                    bottom: 3px;
                    background-color: #848b84;
                    /* Green circle */
                    transition: 0.4s;
                    border-radius: 50%;
                }

                input:checked+.slider {
                    background-color: #494848;
                    /* Background remains orange when toggled */
                }

                input:checked+.slider:before {
                    transform: translateX(30px);
                    /* Move the green circle to the right */
                }

                .form-step {
                    display: none;
                }

                .form-step.active {
                    display: block;
                }

                /* Add additional styling as needed */
                .submit-button {
                    margin: 10px;
                }
            </style>



            <div class="form-container">

                <!-- Step 1: Name Form -->
                <form id="step1" class="form-step active" method="post" action="https://curajif.in/ideation_form.php"> <!-- My Idea Field -->

                    <div class="headd">
                        <h5>Give wings to your ideas, turn them into a success story, came along we will nurture your
                            Idea/Concept and help you building your own Start-Up</h5>

                        <div class="toggle-container" style="text-align: right;">
                            <span>English</span>
                            <label class="toggle-switch">
                                <input type="checkbox" id="language-toggle" onclick="toggleLanguage()">
                                <span class="slider"></span>
                            </label>
                            <span>Hindi</span>
                        </div>
                        <input type="hidden" id="language" name="language" value="english">

                    </div>
                    <br>
                    <input type="hidden" name="identifier" id="identifier">
                    <input type="hidden" name="step" value="step1">


                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="university" class="form-main-label">Select University</label>
                            <select class="form-select-input w-select" name="university" id="university" required="">
                                <option value="Mahatma Gandhi Kashi Vidyapith University (MGKVU)">Mahatma Gandhi Kashi
                                    Vidyapith University (MGKVU)</option>
                                <option value="Veer Bahadur Singh Purvanchal University (VBSPU)">Veer Bahadur Singh
                                    Purvanchal University (VBSPU)</option>
                                <option value="Prof. Rajendra Singh (Rajju Bhaiya) University (PRSU)">Prof. Rajendra
                                    Singh (Rajju Bhaiya) University (PRSU)</option>
                                <option value="Siddharth University (SU)">Siddharth University (SU)</option>
                                <option value="Central University of Rajasthan (CURAJ)">Central University of Rajasthan
                                    (CURAJ)</option>
                                <option value="Bundelkhand University (BU)">Bundelkhand University (BU)</option>
                                <option value="Maharaja Chhatrasal Bundelkhand University (MCBU)">Maharaja Chhatrasal
                                    Bundelkhand University (MCBU)</option>
                                <option value="Madhya Pradesh Bhoj (Open) University (MPBOU)">Madhya Pradesh Bhoj (Open)
                                    University (MPBOU)</option>
                                <option value="APS University (APSU)">APS University (APSU)</option>
                                <option value="Jananayak Chandrashekhar University (JNCU)">Jananayak Chandrashekhar
                                    University (JNCU)</option>
                                <option value="Vikram University (VU)">Vikram University (VU)</option>
                                <option value="Maharaja Ganga Singh University (MGSU)">Maharaja Ganga Singh University
                                    (MGSU)</option>
                                <option value="Pandit Deendayal Upadhyaya Shekhawati University (PDUSU)">Pandit
                                    Deendayal Upadhyaya Shekhawati University (PDUSU)</option>
                                <option value="Atal Bihari Vajpayee Vishwavidyalaya (ABVV)">Atal Bihari Vajpayee
                                    Vishwavidyalaya (ABVV)</option>
                                <option value="Maa Shakumbhari University (MSU)">Maa Shakumbhari University (MSU)
                                </option>
                                <option value="Rani Durgavati University (RDU)">Rani Durgavati University (RDU)</option>
                                <option value="Janardan Rai Nagar Rajasthan Vidyapeeth (JRNU)">Janardan Rai Nagar
                                    Rajasthan Vidyapeeth (JRNU)</option>
                                <option value="Shaheed Nandkumar Patel Vishwavidyalaya (SNPV)">Shaheed Nandkumar Patel
                                    Vishwavidyalaya (SNPV)</option>
                                <option value="Barkatullah University (BU)">Barkatullah University (BU)</option>
                            </select>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="name" class="form-main-label">Your Name</label>
                            <input type="text" class="form-text-input w-input" name="name" id="name" placeholder="Enter your name" required="">
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="phone-number" class="form-main-label">Phone Number</label>
                            <input type="tel" class="form-text-input w-input" name="phone_number" id="phone-number" placeholder="Enter your phone number" required="">
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="email" class="form-main-label">Your Email</label>
                            <input type="email" class="form-text-input w-input" name="email" id="email" placeholder="Enter your email" required="">
                        </div>
                    </div>


                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="idea-stage" class="form-main-label">My Idea</label>
                            <select class="form-select-input w-select" name="idea_stage" id="idea-stage" required="">
                                <option value="A Concept (In my mind)">A Concept (In my mind)</option>
                                <option value="Early Stage (I have developed a prototype)">Early Stage (I have developed
                                    a prototype)</option>
                                <option value="Expansion (Growing user/customer base)">Expansion (Growing user/customer
                                    base)</option>
                                <option value="Mature (I want to expand)">Mature (I want to expand)</option>
                            </select>
                        </div>
                    </div>

                    <!-- Technology Based Field with Toggle -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">My Business/Idea is technology based</label>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="tech-based-toggle" name="tech_based">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <!-- Conditional Dropdowns for Technology Based -->
                    <div id="tech-options" style="display:none;">
                        <div class="idea-form-field-wrapper">
                            <div class="idea-form-field-inner">
                                <select class="form-dropdown w-select styled-select" name="tech_category_1">
                                    <option value="" disabled="" selected="">Technology is used</option>
                                    <option value="At the time of procurement of information/dat/raw material etc.">At
                                        the time of procurement of information/dat/raw material etc.</option>
                                    <option value="At the time of delivery-product/service is delivered with the help of technology">
                                        At the time of delivery-product/service is delivered with the help of technology
                                    </option>
                                    <option value="To showcase the product/services in detail with usage details">To
                                        showcase the product/services in detail with usage details</option>
                                    <option value="Technology is involved right from the beginning till delivery and customer satisfaction">
                                        Technology is involved right from the beginning till delivery and customer
                                        satisfaction</option>
                                </select>



                            </div>
                        </div>
                        <div class="idea-form-field-wrapper">
                            <div class="idea-form-field-inner">
                                <select class="form-dropdown w-select styled-select" name="tech_category_2">
                                    <option value="" disabled="" selected="">The form of technology used is</option>
                                    <option value="An app/website for procurement">An app/website for procurement
                                    </option>
                                    <option value="An app/website for display and ordering">An app/website for display
                                        and ordering</option>
                                    <option value="An app/website for usage">An app/website for usage</option>
                                    <option value="An app/website for delivery">An app/website for delivery</option>
                                    <option value="An app/website for monitoring">An app/website for monitoring</option>
                                    <option value="An app/website for all the processes">An app/website for all the
                                        processes</option>
                                    <option value="A device based on IoT">A device based on IoT</option>
                                    <option value="IoT">IoT</option>
                                    <option value="Something related to VR/AR/MR/XR">Something related to VR/AR/MR/XR
                                    </option>
                                    <option value="Something related to Machine Learning ML">Something related to
                                        Machine Learning ML</option>
                                    <option value="Something related to Artificial Intelligence AI">Something related to
                                        Artificial Intelligence AI</option>
                                    <option value="Something else">Something else</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <!-- Innovative Solution Field with Toggle -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">My business/idea provides an innovative solution to a
                                particular
                                problem</label>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="innovative-solution-toggle" name="innovative_solution">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <!-- Value Beyond Cost Field with Toggle -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">My business/idea provides value to a potential customer
                                beyond
                                its cost</label>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="value-beyond-cost-toggle" name="value_beyond_cost">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <!-- Industry Dropdown -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="industry" class="form-main-label">Industry</label>
                            <select class="form-dropdown w-select styled-select" name="industry" id="industry" required="">
                                <option value="" disabled="" selected="">Select Industry</option>
                                <option value="Focus Industry">Focus Industry</option>
                                <option value="Energy">Energy</option>
                                <option value="Clean Tech">Clean Tech</option>
                                <option value="Healthcare/Bio Tech">Healthcare/Bio Tech</option>
                                <option value="Software as Service">Software as Service</option>
                                <option value="Education">Education</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Customer Goods and Services">Customer Goods and Services</option>
                                <option value="Fintech">Fintech</option>
                                <option value="Others">Others</option>
                            </select>

                        </div>
                    </div>

                    <!-- Revenue Generated Field with Toggle -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Has your business/idea generated any revenue?</label>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="revenue-generated-toggle" name="revenue_generated">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <!-- Legal Status Dropdown -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="legal-status" class="form-main-label">Legal Status</label>
                            <select class="form-dropdown w-select styled-select" name="legal_status" id="legal-status" required="">
                                <option value="" disabled="" selected="">Select Legal Status</option>
                                <option value="incorporated">Incorporated</option>
                                <option value="not-incorporated">Not Incorporated</option>
                            </select>
                        </div>
                    </div>

                    <button type="button" id="next1" class="submit-button w-button">Next</button>
                </form>

                <!-- Step 2: Business Idea Form -->
                <form id="step2" class="form-step">
                    <input type="hidden" name="identifier" id="identifier-step2">
                    <input type="hidden" name="step" value="step2">

                    <h5>Lets Understand your idea in detail, CRUX ensures you of 100% security of your idea, your idea
                        will never be share with any one, other than the authorized assessors who are going to assess
                        your idea for further actions.</h5><br><br>
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="business-name" class="form-main-label">Name of Business/Idea</label>
                            <input type="text" class="form-text-input w-input" maxlength="256" name="business_name" id="business-name" required="">
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="product-service" class="form-main-label">What is your product or
                                service?</label>
                            <textarea class="form-text-input w-input" maxlength="500" name="product_service" id="product-service" required=""></textarea>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="unique" class="form-main-label">Why it is Unique?</label>
                            <textarea class="form-text-input w-input" maxlength="500" name="unique_text" id="unique_text" required=""></textarea>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="difference" class="form-main-label">Why is your product/service different from
                                other available product/service? (Use plus '+' button to add every 'new'
                                difference/feature)</label>
                            <div id="differences-container">
                                <textarea class="form-text-input w-input" maxlength="500" name="difference[]" id="difference" required=""></textarea>
                            </div>
                            <button type="button" id="add-difference" class="submit-button w-button">+</button>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="milestones" class="form-main-label">What are the major product/services
                                milestones that have been met to date?</label>
                            <textarea class="form-text-input w-input" maxlength="500" name="milestones" id="milestones" required=""></textarea>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Have you discussed your idea?</label>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="idea-discussed" name="idea_discussed">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <!-- Reaction field (initially hidden) -->
                    <div class="idea-form-field-wrapper" id="reaction-wrapper" style="display: none;">
                        <div class="idea-form-field-inner">
                            <label for="reaction" class="form-main-label">What was their reaction?</label>
                            <select class="form-dropdown w-select styled-select" name="reaction" id="reaction">
                                <option value="" disabled="" selected="">Select Reaction</option>
                                <option value="They liked the idea">They liked the idea</option>
                                <option value="They encouraged to develop a prototype">They encouraged to develop a
                                    prototype</option>
                                <option value="They liked after using the product/service">They liked after using the
                                    product/service</option>
                                <option value="They could not understand properly">They could not understand properly
                                </option>
                            </select>

                        </div>
                    </div>



                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="customers" class="form-main-label">Who are your customers/clients?</label>
                            <input type="text" class="form-text-input w-input" name="customers" id="customers" required="">
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Age Group</label>
                            <div class="age-group-wrapper">
                                <input type="number" class="form-text-input w-input" name="age_from" placeholder="From" min="0" required="">
                                <input type="number" class="form-text-input w-input" name="age_to" placeholder="To" min="0" required="">
                            </div>
                        </div>
                    </div>


                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Monthly Income</label>
                            <div class="age-group-wrapper">

                                <input type="number" class="form-text-input w-input" name="income_from" placeholder="From" min="0" required="">
                                <input type="number" class="form-text-input w-input" name="income_to" placeholder="To" min="0" required="">
                            </div>

                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="location" class="form-main-label">Location</label>
                            <select class="form-dropdown w-select styled-select" name="location" id="location" required="">
                                <option value="" disabled="" selected="">Select Location</option>
                                <option value="Local (near me)">Local (near me)</option>
                                <option value="Few cities">Few cities</option>
                                <option value="States">States</option>
                                <option value="Few States">Few States</option>
                                <option value="Whole country">Whole country</option>
                                <option value="Few countries">Few countries</option>
                                <option value="Global">Global</option>
                            </select>

                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="gender" class="form-main-label">Gender</label>
                            <select class="form-dropdown w-select styled-select" name="gender" id="gender" required="">
                                <option value="" disabled="" selected="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="education" class="form-main-label">Education</label>
                            <select class="form-dropdown w-select styled-select" name="education" id="education" required="">
                                <option value="" disabled="" selected="">Select Education Level</option>
                                <option value="No education required">No education required</option>
                                <option value="Minimum up to class 5th">Minimum up to class 5th</option>
                                <option value="Minimum up to class 10th">Minimum up to class 10th</option>
                                <option value="Minimum up to class 12th">Minimum up to class 12th</option>
                                <option value="Minimum Graduate">Minimum Graduate</option>
                                <option value="Minimum Post Graduate">Minimum Post Graduate</option>
                                <option value="Minimum PHD">Minimum PHD</option>
                            </select>

                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="team-size" class="form-main-label">Present Team Size</label>
                            <input type="number" class="form-text-input w-input" name="team_size" id="team-size" min="1" required="">
                        </div>
                    </div>


                    <button type="button" id="next2" class="submit-button w-button">Next</button>

                    <button type="button" id="prev1" class="submit-button w-button">Previous</button>
                </form>

                <!-- Form Step 3 -->
                <form id="step3" class="form-step">
                    <input type="hidden" name="identifier" id="identifier-step3">
                    <input type="hidden" name="step" value="step3">

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Let's sum-up! <br>
                                By clicking your requirements from the incubation centre, you will be responded soon
                                about your idea. Thank you for your submission.</label>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">I am looking for:</label>
                            <div class="checkbox-group">
                                <div class="checkbox-item">
                                    <label>Expert advice on My Idea/Concept product/Service</label>

                                    <input type="checkbox" name="requirement_expert_advice" value="Expert advice on My Idea/Concept product/Service">
                                </div>
                                <div class="checkbox-item">
                                    <label>Space and infrastructure to develop the service/product</label>

                                    <input type="checkbox" name="requirement_space_infrastructure" value="Space and infrastructure to develop the service/product">
                                </div>
                                <div class="checkbox-item">
                                    <label>Funding to launch the already developed/product service</label>

                                    <input type="checkbox" name="requirement_funding" value="Funding to launch the already developed/product service">
                                </div>
                                <div class="checkbox-item">
                                    <label>Form a company and other legal formalities</label>

                                    <input type="checkbox" name="requirement_legal_formalities" value="Form a company and other legal formalities">
                                </div>
                                <div class="checkbox-item">
                                    <label>Grow my team</label>

                                    <input type="checkbox" name="requirement_grow_team" value="Grow my team">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Upload Files</label>
                            <input type="file" class="form-file-input w-input" name="file_upload" id="file-upload">
                        </div>
                    </div>
                    <!-- Add additional fields for Step 3 here -->
                    <button type="button" id="next3" class="submit-button w-button">Next</button>

                    <button type="button" id="prev2" class="submit-button w-button">Previous</button>
                </form>

                <!-- Form Step 4 -->
                <form id="step4" class="form-step">
                    <input type="hidden" name="identifier" id="identifier-step4">
                    <input type="hidden" name="step" value="step4">

                    <!-- Survey Toggle Section -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label class="form-main-label">Have you conducted a survey (benefits/requirements) about the
                                problem/your idea/venture?</label>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="survey-toggle" name="survey_toggle">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <!-- Conditional Fields for Survey Details -->
                    <div id="survey-fields" style="display:none;">
                        <label for="num_males" class="form-main-label">If yes how many people you contacted to discuss
                            the problem/your idea/venture?</label>
                        <div class="idea-form-field-wrapper">
                            <div class="idea-form-field-inner">
                                <label for="num_males" class="form-main-label">Number of males</label>
                                <input type="number" class="form-text-input w-input" name="num_males" id="num_males" placeholder="Enter number of males">
                            </div>
                        </div>
                        <div class="idea-form-field-wrapper">
                            <div class="idea-form-field-inner">
                                <label for="num_females" class="form-main-label">Number of females</label>
                                <input type="number" class="form-text-input w-input" name="num_females" id="num_females" placeholder="Enter number of females">
                            </div>
                        </div>
                        <div class="idea-form-field-wrapper">
                            <div class="idea-form-field-inner">
                                <label for="num_kids_teens" class="form-main-label">Number of kids/teens</label>
                                <input type="number" class="form-text-input w-input" name="num_kids_teens" id="num_kids_teens" placeholder="Enter number of kids/teens">
                            </div>
                        </div>
                        <div class="idea-form-field-wrapper">
                            <div class="idea-form-field-inner">
                                <label for="num_others" class="form-main-label">Number of others</label>
                                <input type="number" class="form-text-input w-input" name="num_others" id="num_others" placeholder="Enter number of others">
                            </div>
                        </div>
                    </div>

                    <!-- Input for idea_desk_what_is_percentage1 -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="idea_desk_percentage1" class="form-main-label">What is the percentage of people
                                who also acknowledge the problem/your idea/venture and think there should be a solution
                                for the same</label>
                            <input type="number" class="form-text-input w-input" name="idea_desk_percentage1" id="idea_desk_percentage1" placeholder="Enter percentage" min="0" max="100" required="">
                        </div>
                    </div>

                    <!-- Input for idea_desk_what_is_percentage2 -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="idea_desk_percentage2" class="form-main-label">What is the percentage of people
                                who desperately/immediately want some solution</label>
                            <input type="number" class="form-text-input w-input" name="idea_desk_percentage2" id="idea_desk_percentage2" placeholder="Enter percentage" min="0" max="100" required="">
                        </div>
                    </div>



                    <button type="button" id="next4" class="submit-button w-button">Next</button>

                    <button type="button" id="prev3" class="submit-button w-button">Previous</button>
                </form>

                <!-- Form Step 5 -->
                <form id="step5" class="form-step">
                    <input type="hidden" name="identifier" id="identifier-step5">
                    <input type="hidden" name="step" value="step5">

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="solutions" class="form-main-label">How are you going to offer the
                                solution?</label>
                        </div>
                    </div>
                    <!-- Checkboxes for Solution Offering -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <div class="checkbox-group">
                                <div class="checkbox-item">
                                    <label>Is it a Mobile application</label>
                                    <input type="checkbox" name="solutions[]" value="Is it a Mobile application">
                                </div>
                                <div class="checkbox-item">
                                    <label>Is it a Website</label>
                                    <input type="checkbox" name="solutions[]" value="Is it a Website">
                                </div>
                                <div class="checkbox-item">
                                    <label>Is it a Device</label>
                                    <input type="checkbox" name="solutions[]" value="Is it a Device">
                                </div>
                                <div class="checkbox-item">
                                    <label>Offering Offline</label>
                                    <input type="checkbox" name="solutions[]" value="Offering Offline">
                                </div>
                            </div>
                        </div>
                    </div>

                    <br><br>


                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="milestones" class="form-main-label">How are you going to develop the prototype
                                or minimum viable product?</label>
                        </div>
                    </div>

                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <div class="checkbox-group">
                                <div class="checkbox-item">
                                    <label>Outsource the project to an agency</label>
                                    <input type="checkbox" name="development_method" value="Outsource the project to an agency">
                                </div>
                                <div class="checkbox-item">
                                    <label>Hire a team of experts</label>
                                    <input type="checkbox" name="development_method[]" value="Hire a team of experts">
                                </div>
                                <div class="checkbox-item">
                                    <label>Develop myself with the help of mentors/experts</label>
                                    <input type="checkbox" name="development_method[]" value="Develop myself with the help of mentors/experts">
                                </div>
                                <div class="checkbox-item">
                                    <label>Develop a team of co-creators (group of experts as part of the
                                        startup)</label>
                                    <input type="checkbox" name="development_method[]" value="Develop a team of co-creators (group of experts as part of the startup)">
                                </div>
                            </div>
                        </div>
                    </div>


                    <br><br>
                    <!-- How are you going to develop the prototype or MVP -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="milestones" class="form-main-label">How are you going to develop the
                                prototype or MVP</label>
                        </div>
                    </div>

                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <label>Diagrams and designs or UI of the prototype or MVP</label>
                            <input type="checkbox" name="prototype" value="Diagrams and designs or UI of the prototype or MVP">
                        </div>
                        <div class="checkbox-item">
                            <label>User manual</label>
                            <input type="checkbox" name="prototype[]" value="User manual">
                        </div>
                        <div class="checkbox-item">
                            <label>User experience feedback mechanism</label>
                            <input type="checkbox" name="prototype[]" value="User experience feedback mechanism">
                        </div>
                        <div class="checkbox-item">
                            <label>Have you written down the complete process</label>
                            <input type="checkbox" name="prototype[]" value="Have you written down the complete process">
                        </div>
                    </div>

                    <!-- Add additional fields for Step 5 here -->
                    <button type="button" id="next5" class="submit-button w-button">Next</button>

                    <button type="button" id="prev4" class="submit-button w-button">Previous</button>
                </form>

                <!-- Form Step 6 -->
                <form id="step6" class="form-step">
                    <input type="hidden" name="identifier" id="identifier-step6">
                    <input type="hidden" name="step" value="step6">

                    <!-- Budget for Pre-launch -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="budget_pre_launch" class="form-main-label">What is your budget for:
                                Pre-launch</label>
                            <input type="number" class="form-text-input w-input" name="budget_pre_launch" id="budget_pre_launch" required="">
                        </div>
                    </div>

                    <!-- Budget for Developing prototype or minimum viable product -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="budget_prototype" class="form-main-label">What is your budget for: Developing
                                prototype or minimum viable product</label>
                            <input type="number" class="form-text-input w-input" name="budget_prototype" id="budget_prototype" required="">
                        </div>
                    </div>

                    <!-- Budget for After sales support -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="budget_after_sales" class="form-main-label">What is your budget for: After sales
                                support</label>
                            <input type="number" class="form-text-input w-input" name="budget_after_sales" id="budget_after_sales" required="">
                        </div>
                    </div>

                    <!-- Budget for Further marketing of your service/product -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="budget_marketing" class="form-main-label">What is your budget for: Further
                                marketing
                                of your service/product</label>
                            <input type="number" class="form-text-input w-input" name="budget_marketing" id="budget_marketing" required="">
                        </div>
                    </div>




                    <!-- How are you going to fund your venture/Idea/solution -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="funding" class="form-main-label">How are you going to fund your
                                venture/Idea/solution?</label>
                        </div>
                    </div>

                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <label>Self/Bootstrap</label>
                            <input type="checkbox" name="funding[]" value="Self/Bootstrap">
                        </div>
                        <div class="checkbox-item">
                            <label>Borrow from Family and Friends</label>
                            <input type="checkbox" name="funding[]" value="Borrow from Family and Friends">
                        </div>
                        <div class="checkbox-item">
                            <label>Find a seed Investor</label>
                            <input type="checkbox" name="funding[]" value="Find a seed Investor">
                        </div>
                        <div class="checkbox-item">
                            <label>Find a Government Grant</label>
                            <input type="checkbox" name="funding[]" value="Find a Government Grant">
                        </div>
                    </div>

                    <!-- Add additional fields for Step 6 here -->
                    <button type="submit" id="next6" class="submit-button w-button">Next</button>

                    <button type="button" id="prev5" class="submit-button w-button">Previous</button>
                </form>

                <!-- Form Step 6 -->
                <form id="step7" class="form-step">
                    <input type="hidden" name="identifier" id="identifier-step7">
                    <input type="hidden" name="step" value="step7">

                    <!-- Which model suits best to your idea/venture -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="funding_model" class="form-main-label">Which model suits best to your
                                idea/venture</label>
                        </div>
                    </div>

                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <label>
                                <ul>
                                    <li>Put in my money (self/borrowed) to develop and market the prototype/MVP</li>
                                    <li>Earn by selling the product and sustain the venture with growth</li>
                                    <li>Then find an Investor for scaling the Startup</li>
                                </ul>
                            </label>

                            <input type="checkbox" name="funding_model" value="Put in my money (self/borrowed) to develop and market the prototype/MVP, Earn by selling the product and sustain the venture with growth, Then find an Investor for scaling the Startup">
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <ul>
                                    <li>First, I would look for an Investor to fund my Idea/venture</li>
                                    <li>Then I would develop the product and sell the product</li>
                                    <li>Then look for more external funding for scaling</li>
                                </ul>
                            </label>
                            <input type="checkbox" name="funding_model" value="First, I would look for an Investor to fund my Idea/venture, Then I would develop the product and sell the product, Then look for more external funding for scaling">
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <ul>
                                    <li>I will arrange some funds of my own (self/borrowed) and bring in the rest of the
                                        amount from a seed investor</li>
                                    <li>Then I would develop the product and sell the product</li>
                                    <li>Then look for more external funding for scaling</li>
                                </ul>
                            </label>

                            <input type="checkbox" name="funding_model" value="I will arrange some funds of my own (self/borrowed) and bring in the rest of the amount from a seed investor, Then I would develop the product and sell the product, Then look for more external funding for scaling">
                        </div>
                    </div>



                    <br><br>

                    <!-- When will you start your venture? -->
                    <div class="idea-form-field-wrapper">
                        <div class="idea-form-field-inner">
                            <label for="start_venture" class="form-main-label">When will you start your venture?</label>
                        </div>
                    </div>

                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <label>

                                Will start only when I have full amount to start the first phase
                            </label>
                            <input type="checkbox" name="start_venture" value="Will start only when I have full amount to start the first phase">
                        </div>
                        <div class="checkbox-item">
                            <label>

                                Will start even when I have partial amount to start the first phase and keep on looking
                                for the investors
                            </label>
                            <input type="checkbox" name="start_venture" value="Will start even when I have partial amount to start the first phase and keep on looking for the investors">
                        </div>
                        <div class="checkbox-item">
                            <label>

                                Will start even when I have partial amount to start the first phase and start selling
                                the product to fund the rest of the phase
                            </label>
                            <input type="checkbox" name="start_venture" value="Will start even when I have partial amount to start the first phase and start selling the product to fund the rest of the phase">
                        </div>
                        <div class="checkbox-item">
                            <label>

                                Will start even when I have partial amount to start the first phase and start selling
                                the product to fund the rest of the phase, and also look for the investor simultaneously
                            </label>
                            <input type="checkbox" name="start_venture" value="Will start even when I have partial amount to start the first phase and start selling the product to fund the rest of the phase, and also look for the investor simultaneously">
                        </div>
                    </div>



                    <!-- Add additional fields for Step 6 here -->
                    <button type="submit" id="submit" class="submit-button w-button">Submit</button>

                    <button type="button" id="prev6" class="submit-button w-button">Previous</button>
                </form>
                <!-- Success message (hidden by default) -->
                <div id="success-message" style="display: none;">
                    <h3>Success! Your form has been submitted.</h3>
                </div>

            </div>
`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <Footer />
    </div>
  );
}
