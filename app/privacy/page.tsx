import { Header } from "@/components/header"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Sports Field Image */}
      <div className="relative h-[400px] md:h-[500px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/chatgpt-20image-20nov-2010-202025.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6">Privacy Policy</h1>
          <p className="text-lg text-white/90">Last Updated: September of 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">1. Important information</h3>

          <h4 className="text-base font-bold text-gray-900 mb-4">1.1. General terms</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              At MOVO AI, INC. ("Movo," "we," "us" or "our"), putting our users ("you" or "your") first means exceeding
              global privacy and data protection standards in order to keep important contacts and sensitive data and
              communications private, safe and secure. We set up our infrastructure, applications, and tools in a way
              that enables you to strengthen and leverage your important relationships when they matter the most—without
              having to worry about data security or privacy concerns.
            </p>
            <p className="font-semibold">Our Privacy Promise:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No one will access, read, or delete your emails.</li>
              <li>
                When Movo connects to your email server, we pull only the minimum amount of information required for our
                service to function.
              </li>
              <li>
                Our servers only store emails you have sent via Movo and any responses you have received to those
                emails, so we can detect replies, classify them, and make them available inside your Movo account.
              </li>
            </ul>
            <p>
              If you have additional questions, contact us at{" "}
              <a href="mailto:info@Movoai.co" className="text-blue-600 hover:text-blue-800 underline">
                info@Movoai.co
              </a>
              .
            </p>
            <p>
              Movo is committed to maintaining the privacy and security of any of your personal information on the
              Website or in our applications or information received in any other manner. This Privacy Policy
              ("Agreement" or "Policy") defines how Movo uses and protects any personal information that it collects and
              stores.
            </p>
            <p>
              For the purpose of this Agreement, "Services" refers to the Company's website (
              <a href="https://www.Movoai.co" className="text-blue-600 hover:text-blue-800 underline">
                www.Movoai.co
              </a>
              ), our applications, or any other services referenced in our Terms of Service.
            </p>
            <p>
              By accepting this Policy and our Terms of Service, you expressly consent to our collection, storage,
              processing, use, and disclosure of your Personal Information as described in this Policy.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">1.2. Revision of the Privacy Policy</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              Movo reserves the right to revise, modify, or update this Policy at any time. Your continued use of the
              Services after such revisions constitutes acceptance of those changes.
            </p>
            <p>
              If we make any material changes, we will notify you by posting the revised Privacy Policy on our Website
              or conspicuously within the Services and, for subscription customers, via email.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">2. Use of our services</h3>

          <h4 className="text-base font-bold text-gray-900 mb-4">2.1. Our Customers' Use</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              You may use the Services to create communication campaigns to reach out to or nurture prospects for sales,
              marketing, or customer success purposes.
            </p>
            <p>
              Movo does not control the content of campaigns (text, email, communications templates) or the information
              our customers collect or manage through the Services. Such information belongs solely to you and is
              governed by your privacy policies—not this Policy.
            </p>
            <p>
              Movo processes customer data only as directed by our customers and in accordance with the agreements
              between us. We store such data on our providers' servers, but we do not control its collection or
              management.
            </p>
            <p>
              We have no direct relationship with individuals whose personal information our customers upload or process
              using the Services. Movo acknowledges that individuals have the right to access their Personal
              Information. Our customers are responsible for correcting, deleting, or updating any personal data they
              collect through the Services.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">2.2. Sensitive Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>Sensitive Information includes, without limitation:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit/debit card numbers</li>
              <li>Financial account information</li>
              <li>Social Security numbers</li>
              <li>Passport numbers</li>
              <li>Driver's license numbers</li>
              <li>Racial or ethnic origin</li>
              <li>Physical or mental health information</li>
              <li>Similar identifiers</li>
            </ul>
            <p>
              Sensitive information also includes credentials to Movo's services or connected email accounts (Google or
              others).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
            3. Information we collect and receive
          </h3>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.1. When You Visit Our Website</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              You may browse our Website without providing Personal Information. Movo collects Personal Information only
              when you voluntarily register and create an account or contact us.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.2. Account Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              When you provide us with Personal Information, you consent to our sharing such information with third
              parties as necessary to operate, support, and improve the Services.
            </p>
            <p>
              We may collect additional information when you place orders, such as your name, address, and email. This
              information is used solely for fulfilling orders or communicating with you about the Services.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.3. Navigational Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>We collect information about your computer and visits to the Website such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Geographic location</li>
              <li>Browser type</li>
              <li>Referral source</li>
              <li>Visit length</li>
              <li>Pages viewed</li>
            </ul>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.4. Payment Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              We collect and process payment information via PCI-compliant third-party service providers. Except for
              this information, we do not collect Sensitive Information.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.5. Information From Children</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              The Services are not intended for children under 13. We do not knowingly collect information from children
              under 13.
            </p>
            <p>
              If you believe we have collected such information, contact us at{" "}
              <a href="mailto:info@Movoai.co" className="text-blue-600 hover:text-blue-800 underline">
                info@Movoai.co
              </a>{" "}
              and we will delete it.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.6. Google User Data</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              If you connect a Gmail account, you may grant Movo permissions to access it. We require only the minimum
              permissions necessary to detect replies to emails sent via Movo.
            </p>
            <p className="font-semibold">We store:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Emails sent via Movo</li>
              <li>Responses to those emails</li>
              <li>Google authentication token</li>
              <li>Connected account email address</li>
            </ul>
            <p>We do not use Google-derived data for advertising or targeting.</p>
            <p>Usage complies with the Google API Services User Data Policy, including Limited Use requirements.</p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.7. Cookies and Web Beacons</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              We use cookies and web beacons to identify visitors, track usage, deliver functionality, analyze
              performance, and measure campaign effectiveness.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">3.8. Additional Information We Collect</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>To provide full transparency, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details: name, email, phone number</li>
              <li>Account data: login credentials, settings, preferences</li>
              <li>Usage and log data: feature usage, timestamps, analytics</li>
              <li>Lead/prospect data: uploaded by you or synced to Movo</li>
              <li>Technical & device data: IP, OS, browser, device type</li>
              <li>Communications: messages sent through Movo, replies, metadata</li>
            </ul>
            <p>We only collect what is necessary to operate, secure, and improve the Services.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">4. How we use information</h3>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.1. Use of Navigational Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>We use Navigational Information to operate and improve the Services.</p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.2. Use of Personal Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>We use Personal Information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Services</li>
              <li>Authenticate your identity and account access</li>
              <li>Send administrative messages and updates</li>
              <li>Support sales, marketing, and customer success workflows</li>
              <li>Perform analytics, testing, and product research</li>
              <li>Comply with applicable laws and prevent fraud</li>
            </ul>
            <p>We may occasionally contact you regarding offers from partners. You may opt out at any time.</p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.3. Service Providers</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              We may share information with companies that help provide Services (hosting, analytics, email delivery,
              customer support, etc.). These partners are contractually obligated to protect your information.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.4. Security of Personal Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              We use industry-standard physical, administrative, and technical safeguards to protect Personal
              Information, including encrypted SSL connections and secure servers.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.5. Retention of Personal Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>We retain Personal Information as long as your account is active or as reasonably necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide the Services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
            <p>
              After account closure, some data may be stored for a limited period before secure deletion or
              anonymization.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.6. International Transfer of Information</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              If you are outside the United States, your data may be transferred to, processed, and stored in the U.S.
              By providing information, you consent to such transfer.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.7. Compelled Disclosure</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              We may disclose Personal Information if required by law, court order, or legal process, or if necessary to
              protect rights, safety, or investigate fraud.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.8. Data Sharing Practices</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>We may share Personal Information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers / subprocessors</li>
              <li>Payment processors</li>
              <li>Affiliates and subsidiaries</li>
              <li>Third parties for mergers, acquisitions, or restructuring</li>
              <li>Regulators or authorities when legally required</li>
            </ul>
            <p className="font-semibold">We do not sell your personal information.</p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">4.9. Data Retention</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>We retain Personal Information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>For as long as your account is active</li>
              <li>For legal, tax, fraud-prevention, or business reasons</li>
              <li>After account closure, data is deleted or anonymized within a reasonable timeframe</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">5. Your rights</h3>

          <h4 className="text-base font-bold text-gray-900 mb-4">5.1. Access and Correction</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>You may access, update, and correct your Personal Information, subject to legal restrictions.</p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">5.2. Opt-Out, Deletion & Data Requests</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>You may request at any time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deletion of your personal data</li>
              <li>Access to the data we hold</li>
              <li>Correction of inaccurate data</li>
              <li>Restriction or objection to certain processing</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>
              Submit requests to{" "}
              <a href="mailto:privacy@movoai.co" className="text-blue-600 hover:text-blue-800 underline">
                privacy@movoai.co
              </a>
              . We respond within 30 days.
            </p>
          </div>

          <h4 className="text-base font-bold text-gray-900 mb-4">5.3. Unsubscribe From Communications</h4>
          <div className="space-y-4 text-base leading-relaxed text-gray-900 mb-6">
            <p>
              You may unsubscribe from marketing emails by clicking "unsubscribe" or emailing{" "}
              <a href="mailto:info@Movoai.co" className="text-blue-600 hover:text-blue-800 underline">
                info@Movoai.co
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-600 leading-relaxed">
            For questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@movoai.co" className="text-blue-600 hover:text-blue-800 underline">
              privacy@movoai.co
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
