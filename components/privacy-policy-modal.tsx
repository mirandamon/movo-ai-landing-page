"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyModalProps {
  trigger?: React.ReactNode;
}

export function PrivacyPolicyModal({ trigger }: PrivacyPolicyModalProps) {
  const [open, setOpen] = useState(false);

  // Get current date for "Last Updated"
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <button className="text-sm text-[#333333] hover:text-[#FF7A29] transition-colors cursor-pointer">
            Privacy Policy
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Privacy Policy
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6 mt-4">
          {/* Introduction */}
          <section>
            <p className="text-xs text-gray-500 mb-4">
              Last Updated: {currentDate}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              1. Introduction
            </h2>
            <p>
              Movo AI ("we," "us," or "our") respects your privacy. This Privacy
              Policy describes how we collect, use, and protect information you
              provide when interacting with our website (
              <a
                href="https://www.movoai.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF7A29] hover:underline"
              >
                https://www.movoai.co
              </a>
              ), products, and services (including our SMS/text-messaging
              program).
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Contact Information:</strong> name, email address, phone
                number.
              </li>
              <li>
                <strong>Account Information:</strong> login credentials or
                profile details if you create an account.
              </li>
              <li>
                <strong>Transaction Information:</strong> orders, subscriptions,
                or service requests.
              </li>
              <li>
                <strong>Communications Data:</strong> messages exchanged with us
                by email, chat, or SMS.
              </li>
              <li>
                <strong>Technical Information:</strong> browser type, device ID,
                IP address, and usage analytics.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use collected data to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide and improve our products and services.</li>
              <li>
                Send service updates, order notifications, or customer support
                messages.
              </li>
              <li>
                Send marketing or promotional messages only if you have opted
                in.
              </li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          {/* SMS/Text Messaging Program */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              4. SMS/Text Messaging Program
            </h2>
            <p className="mb-3">
              By providing your phone number and opting in, you consent to
              receive SMS/text messages from Movo AI about order updates,
              customer support, and exclusive offers.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Message frequency:</strong> up to 3 messages per week.
              </li>
              <li>Message and data rates may apply.</li>
              <li>You can opt out anytime by replying STOP.</li>
              <li>
                For help, reply HELP or contact us at{" "}
                <a
                  href="mailto:support@movoai.co"
                  className="text-[#FF7A29] hover:underline"
                >
                  support@movoai.co
                </a>
                .
              </li>
              <li>
                We do not sell or share your phone number for third-party
                marketing.
              </li>
              <li>See Section 7 for your rights.</li>
            </ul>
            {/* <p className="text-sm text-gray-600 bg-[#FFF5ED] p-3 rounded-lg border border-[#FF7A29]/20">
              <strong>✓ Compliance note:</strong> carriers require STOP and HELP
              language here plus a valid contact method.
            </p> */}
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              5. Information Sharing
            </h2>
            <p className="mb-2">We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Vendors/service providers who perform services on our behalf
                (e.g., SMS delivery vendors, payment processors).
              </li>
              <li>Regulators or law enforcement when legally required.</li>
            </ul>
            <p className="font-medium">We do not sell personal information.</p>
          </section>

          {/* Data Retention & Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              6. Data Retention & Security
            </h2>
            <p>
              We retain data only as long as needed for business/legal purposes
              and protect it using appropriate administrative, technical, and
              physical safeguards.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              7. Your Rights and Choices
            </h2>
            <p className="mb-2">You may:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access, correction, or deletion of your data.</li>
              <li>Opt out of marketing messages at any time.</li>
              <li>
                Contact{" "}
                <a
                  href="mailto:support@movoai.co"
                  className="text-[#FF7A29] hover:underline"
                >
                  support@movoai.co
                </a>{" "}
                to exercise these rights.
              </li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not directed to children under 13 (and we do not
              knowingly collect their data).
            </p>
          </section>

          {/* Updates to This Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. The "Last Updated"
              date above indicates the latest version.
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Terms of Service (With SMS Consent Language)
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              Effective Date: {currentDate}
            </p>
          </div>

          {/* Terms Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              1. Acceptance of Terms
            </h3>
            <p>
              By using Movo AI's website and services, including our
              SMS/text-messaging program, you agree to these Terms of Service
              and our Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              2. Use of Services
            </h3>
            <p>
              You agree to use our services only for lawful purposes and in
              compliance with all applicable laws, including the Telephone
              Consumer Protection Act (TCPA) and CAN-SPAM Act.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              3. SMS/Text Messaging Terms
            </h3>
            <p className="mb-3">
              When you provide your mobile number and consent to receive text
              messages:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                You confirm you are the account holder or authorized user of
                that number.
              </li>
              <li>
                <strong>Message frequency:</strong> up to 3 messages per week.
              </li>
              <li>Message and data rates may apply.</li>
              <li>You may opt out at any time by replying STOP.</li>
              <li>Reply HELP for assistance.</li>
              <li>
                For further help, email{" "}
                <a
                  href="mailto:support@movoai.co"
                  className="text-[#FF7A29] hover:underline"
                >
                  support@movoai.co
                </a>
                .
              </li>
              <li>We will honor all opt-out requests immediately.</li>
            </ul>
            {/* <p className="text-sm text-gray-600 bg-[#FFF5ED] p-3 rounded-lg border border-[#FF7A29]/20">
              <strong>✓ Compliance note:</strong> this mirrors CTIA "HELP/STOP"
              and TCPA opt-in disclosure requirements.
            </p> */}
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              4. User Content and Conduct
            </h3>
            <p>
              You agree not to use our service to transmit spam, unlawful
              content, or to engage in any activity that violates applicable
              laws or regulations.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              5. Disclaimer of Warranties / Limitation of Liability
            </h3>
            <p>
              Our services are provided "as is" without warranties of any kind,
              either express or implied. To the maximum extent permitted by law,
              Movo AI shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our
              services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              6. Governing Law
            </h3>
            <p>
              These Terms are governed by the laws of the State of Delaware,
              United States.
            </p>
          </section>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button
            onClick={() => setOpen(false)}
            className="w-full bg-[#FF7A29] hover:bg-[#E8650F] text-white"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
