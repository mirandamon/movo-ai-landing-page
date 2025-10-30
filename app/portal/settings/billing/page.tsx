import { CreditCard, Download } from "lucide-react"

const invoices = [
  { date: "Jan 1, 2025", amount: "$99.00", status: "Paid", invoice: "INV-001" },
  { date: "Dec 1, 2024", amount: "$99.00", status: "Paid", invoice: "INV-002" },
  { date: "Nov 1, 2024", amount: "$99.00", status: "Paid", invoice: "INV-003" },
]

export default function BillingPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Billing</h1>
        <p className="text-gray-600">Manage your subscription and billing information</p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Current Plan */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Current Plan</h2>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">Pro Plan</span>
          </div>
          <div className="mb-4">
            <p className="text-3xl font-bold">
              $99<span className="text-lg font-normal text-gray-600">/month</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">Next billing date: February 1, 2025</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
              Upgrade Plan
            </button>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel Subscription
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <button className="text-sm font-medium text-purple-600 hover:text-purple-700">Update</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <CreditCard className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">Visa ending in 4242</p>
              <p className="text-sm text-gray-600">Expires 12/2025</p>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-semibold">Billing History</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <div key={invoice.invoice} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium">{invoice.date}</p>
                  <p className="text-sm text-gray-600">{invoice.invoice}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium">{invoice.amount}</p>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {invoice.status}
                  </span>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
