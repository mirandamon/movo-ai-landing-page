"use client"

import { IntegrationCard } from "./integration-card"
import { EmailAccountCard } from "./email-account-card"

const emailAccounts = [
  {
    name: "Guillaume Roux-Romestaing",
    email: "guillaume@movoai.co",
    sent: 3,
    total: 75,
    status: "Active" as const,
  },
  {
    name: "Guillaume Roux-Romestaing",
    email: "guillaume.romestaing@movoai.co",
    sent: 38,
    total: 75,
    status: "Active" as const,
  },
  {
    name: "Guillaume Roux-Romestaing",
    email: "g.romestaing@movoai.co",
    sent: 35,
    total: 75,
    status: "Active" as const,
  },
  {
    name: "Guillaume Roux-Romestaing",
    email: "guillaume@movoai.co",
    sent: 30,
    total: 75,
    status: "Active" as const,
  },
]

export function IntegrationsSection() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Integrations</h1>
        <p className="text-gray-600">Integrate Movo into your accounts to enhance your product experience</p>
      </div>

      <div className="space-y-6">
        {/* Email Integrations */}
        <IntegrationCard
          icon="outlook"
          title="Connect to Outlook"
          description="Use Microsoft OAuth to connect to your Outlook account"
          connected={false}
        />

        <div className="space-y-4">
          <IntegrationCard
            icon="gmail"
            title="Connect to Gmail"
            description="Use Google OAuth to connect to your Gmail account"
            connected={true}
          />

          {/* Email Accounts List */}
          <div className="ml-16 space-y-3">
            {emailAccounts.map((account, index) => (
              <EmailAccountCard key={index} {...account} />
            ))}
          </div>
        </div>

        <IntegrationCard
          icon="email"
          title="Connect to IMAP/SMTP"
          description="Connect your Slack and get notified"
          connected={false}
        />

        {/* CRM Integrations */}
        <IntegrationCard
          icon="slack"
          title="Connect to Slack"
          description="Connect your Slack and get notified"
          connected={false}
        />

        <IntegrationCard
          icon="hubspot"
          title="Connect to HubSpot"
          description="Let Movo add new leads to your CRM, and guide it away from existing customers"
          connected={true}
          hasCustomize={true}
        />

        <IntegrationCard
          icon="pipedrive"
          title="Connect to Pipedrive"
          description="Let Movo add new leads to your CRM, and guide it away from existing customers"
          connected={false}
        />

        <IntegrationCard
          icon="salesforce"
          title="Connect to Salesforce"
          description="Let Movo add new leads to your CRM, and guide it away from existing customers"
          connected={false}
        />

        <IntegrationCard
          icon="zoho"
          title="Connect to Zoho CRM"
          description="Let Movo add new leads to your CRM, and guide it away from existing customers"
          connected={false}
        />
      </div>
    </div>
  )
}
