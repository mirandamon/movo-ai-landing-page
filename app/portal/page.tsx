"use client"

import type React from "react"
import { useState, useRef } from "react"
import {
  LayoutGrid,
  Phone,
  ClipboardList,
  Rocket,
  Settings,
  Search,
  Bell,
  CheckCircle2,
  Clock,
  ChevronRight,
  X,
  Edit2,
  Plus,
  Mail,
  MessageSquare,
  Plug,
  MapPin,
  Users,
  Play,
  ChevronLeft,
  Calendar,
  Pause,
  Download,
} from "lucide-react"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const ROLES = ["Owner", "Manager", "Staff"]
const LOCATIONS = ["Manhattan", "Brooklyn"]
const NAV = [
  { key: "Overview", icon: <LayoutGrid className="w-4 h-4" />, label: "Overview" },
  { key: "Agents", icon: <Rocket className="w-4 h-4" />, label: "Agents" },
  { key: "Tasks", icon: <ClipboardList className="w-4 h-4" />, label: "Tasks" },
  { key: "Integrations", icon: <Plug className="w-4 h-4" />, label: "Integrations" },
  { key: "Settings", icon: <Settings className="w-4 h-4" />, label: "Settings" },
]

const COUNTRIES = [
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
]

const VOICES = [
  {
    id: "jamal",
    name: "Young Jamal",
    description: "American English Male Voice",
    country: "United States",
    flag: "🇺🇸",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voice%20Preview%20Young%20Jamal-QZEYCEj57EjLCs1UlXBGHKTOFcA5I8.mp3",
  },
  {
    id: "cassidy",
    name: "Cassidy",
    description: "American English Female Voice",
    country: "United States",
    flag: "🇺🇸",
    isDefault: true,
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voice%20Preview%20Cassidy-ViEweF7COI8nB8mcl9VJ2wxzpNhTjw.mp3",
  },
  {
    id: "fiona",
    name: "Fiona",
    description: "American English Female Voice",
    country: "United States",
    flag: "🇺🇸",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voice%20Preview%20Fiona-C5rIHuUkpzIjStMX1oyDvXJInNnRCT.mp3",
  },
  {
    id: "amelia",
    name: "Amelia",
    description: "American English Female Voice",
    country: "United States",
    flag: "🇺🇸",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voice%20Preview%20Amelia-laEjjpZNllbkTg8z69uy3hDUOPmmEk.mp3",
  },
  {
    id: "jason",
    name: "Jason",
    description: "American English Male Voice",
    country: "United States",
    flag: "🇺🇸",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voice%20Preview%20from%20Jason-5cEbTRYD9IpjB1M4DUi34ltpst61qr.mp3",
  },
]

// Mock data for conversationData for Agents section
const conversationData = {
  analysis: {
    callSuccessful: "Yes",
    callStatus: "Connected",
    userSentiment: "Positive",
    disconnectionReason: "User hangup",
    latency: "1353ms",
  },
  summary:
    "The user was happy with the service and confirmed their booking. They asked about the next steps and were provided with the relevant information.",
  transcript: [
    { speaker: "Agent", time: "00:05", message: "Hello, how can I help you today?" },
    { speaker: "User", time: "00:10", message: "I'd like to book a trial session." },
    { speaker: "Agent", time: "00:15", message: "Great! What day and time works best for you?" },
    { speaker: "User", time: "00:20", message: "How about Thursday at 2 PM?" },
    { speaker: "Agent", time: "00:25", message: "Let me check... Yes, that's available. Shall I book it for you?" },
    { speaker: "User", time: "00:30", message: "Yes, please!" },
    {
      speaker: "Agent",
      time: "00:35",
      message: "Alright, you're all set for Thursday at 2 PM. You'll receive a confirmation email shortly.",
    },
  ],
  dynamicVariables: {
    customer_name: "Jane Doe",
    booking_time: "Thursday 2:00 PM",
    service_type: "Trial Session",
  },
  detailLogs: [
    "INFO: Call initiated.",
    "DEBUG: Connecting to customer...",
    "INFO: Call connected.",
    "DEBUG: Speech-to-text enabled.",
    "INFO: Customer requested booking.",
    "DEBUG: Checking availability...",
    "INFO: Availability confirmed.",
    "DEBUG: Booking confirmed.",
    "INFO: Sending confirmation email.",
    "INFO: Call ended.",
  ],
}

export default function PortalDashboard() {
  const [active, setActive] = useState("Overview")
  const [role, setRole] = useState("Manager")
  const [location, setLocation] = useState("Manhattan")
  const [q, setQ] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="border-r border-slate-200 bg-white/70 backdrop-blur-md">
          <div className="px-5 py-6 border-b border-slate-200 flex items-center gap-2">
            <span className="font-semibold text-xl tracking-tight">Movo</span>
          </div>
          <nav className="p-3 space-1">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => setActive(n.key)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all font-medium ${active === n.key ? "bg-slate-900 text-white shadow-md" : "hover:bg-slate-100 text-slate-700"}`}
              >
                {n.icon}
                <span>{n.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="flex flex-col">
          <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="px-4 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-3">
              <div className="relative grow w-full max-w-xl">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search parents, calls, templates (⌘K)"
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white/70 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                />
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="px-3 py-2 rounded-lg border bg-white text-sm flex-1 md:flex-none"
                >
                  {ROLES.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="px-3 py-2 rounded-lg border bg-white text-sm flex-1 md:flex-none"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
                <button className="p-2 rounded-lg border bg-white hover:bg-slate-50 transition">
                  <Bell className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>
          </header>

          <main className="p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
            {active === "Overview" && <Overview role={role} location={location} />}
            {active === "Tasks" && <Tasks />}
            {active === "Agents" && <Agents />}
            {active === "Integrations" && <IntegrationsPanel />}
            {active === "Settings" && <SettingsPanel />}
          </main>
        </div>
      </div>
    </div>
  )
}

/*********************************
 * Overview
 *********************************/
function Overview({ role, location }: { role: string; location: string }) {
  const [view, setView] = useState<"Owner" | "Front Desk">("Owner")
  const [dateRange, setDateRange] = useState("This Week")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [showLocationPicker, setShowLocationPicker] = useState(false)
  const [showRevenuePicker, setShowRevenuePicker] = useState(false)
  const [revenueBreakdown, setRevenueBreakdown] = useState({
    enrollments: { count: 24, price: 250 },
    trials: { count: 38, price: 25 },
    classes: { count: 0, price: 0 },
    other: 250,
  })

  const totalRevenue =
    revenueBreakdown.enrollments.count * revenueBreakdown.enrollments.price +
    revenueBreakdown.trials.count * revenueBreakdown.trials.price +
    revenueBreakdown.classes.count * revenueBreakdown.classes.price +
    revenueBreakdown.other

  const ownerKpis = [
    { label: "Calls Attempted", value: 287, change: "+12%", isPositive: true },
    { label: "Connected", value: 212, change: "+8%", isPositive: true },
    { label: "Trials Booked", value: 53, change: "+15%", isPositive: true },
    { label: "Enrollments This Week", value: 24, change: "+18%", isPositive: true },
    {
      label: "Revenue This Week",
      value: `$${totalRevenue.toLocaleString()}`,
      tooltip: "First-month fees + paid trial fees",
      hasConfig: true,
    },
  ]

  const frontDeskKpis = [
    { label: "Today's Tasks", value: 12 },
    { label: "Overdue Follow-ups", value: 3 },
    { label: "Reschedules", value: 5 },
    { label: "Payment Links", value: "8 / 5", sublabel: "sent / paid" },
    { label: "Next Trial Slot", value: "2:30 PM", sublabel: "Manhattan" },
  ]

  const kpis = view === "Owner" ? ownerKpis : frontDeskKpis

  const funnelSteps = [
    { label: "Connected", value: 212, percentage: 100 },
    { label: "Trial", value: 53, percentage: 25 },
    { label: "Showed", value: 38, percentage: 71.7 },
    { label: "Enrolled", value: 24, percentage: 63.2 },
  ]

  const byDay = [
    { day: "Mon", attempted: 45, connected: 34, lastWeek: 38 },
    { day: "Tue", attempted: 38, connected: 28, lastWeek: 42 },
    { day: "Wed", attempted: 56, connected: 43, lastWeek: 48 },
    { day: "Thu", attempted: 72, connected: 57, lastWeek: 55 },
    { day: "Fri", attempted: 76, connected: 50, lastWeek: 62 },
  ]

  const callOutcomes = [
    { type: "Connected", count: 212, percentage: 73.9, color: "#10B981" },
    { type: "Voicemail", count: 48, percentage: 16.7, color: "#F59E0B" },
    { type: "Missed", count: 27, percentage: 9.4, color: "#EF4444" },
  ]

  const insights = [
    "Peak conversion: 4–6pm calls convert 2.8× higher.",
    "Follow-ups within 2h lift enrollment odds by ~60%.",
    "Manhattan site running +18% vs last month.",
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">This Week at MPAC</h1>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Location Filter */}
          <div className="relative">
            <button
              onClick={() => setShowLocationPicker(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition text-sm"
            >
              <MapPin className="w-4 h-4 text-slate-600" />
              <span>{selectedLocation}</span>
            </button>
          </div>

          {/* Date Range Selector */}
          <button
            onClick={() => setShowDatePicker(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition text-sm"
          >
            <Calendar className="w-4 h-4 text-slate-600" />
            <span>{dateRange}</span>
          </button>

          {/* View Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200">
            <button
              onClick={() => setView("Owner")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                view === "Owner" ? "bg-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Owner
            </button>
            <button
              onClick={() => setView("Front Desk")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                view === "Front Desk" ? "bg-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Front Desk
            </button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((k, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-500">{k.label}</div>
              {k.hasConfig && (
                <button
                  onClick={() => setShowRevenuePicker(true)}
                  className="text-slate-400 hover:text-slate-600 transition"
                  title="Configure revenue breakdown"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold tracking-tight">{k.value}</div>
              {k.change && (
                <div
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    k.isPositive ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                  }`}
                >
                  {k.change}
                </div>
              )}
            </div>
            {k.sublabel && <div className="text-xs text-slate-500 mt-1">{k.sublabel}</div>}
            {k.tooltip && (
              <div className="text-xs text-slate-400 mt-2 italic" title={k.tooltip}>
                {k.tooltip}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
        <div className="text-sm font-semibold mb-4 text-slate-700">What needs attention</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100">
            <div>
              <div className="text-xs text-slate-600">Trial follow-ups</div>
              <div className="text-2xl font-bold mt-1">8</div>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">
              Open Tasks
            </button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100">
            <div>
              <div className="text-xs text-slate-600">Payment confirmations</div>
              <div className="text-2xl font-bold mt-1">5</div>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">
              View Calls
            </button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100">
            <div>
              <div className="text-xs text-slate-600">Missed calls to return</div>
              <div className="text-2xl font-bold mt-1">12</div>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">
              Open Calls
            </button>
          </div>
        </div>
      </section>

      {view === "Owner" && (
        <>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Funnel */}
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
              <div className="text-sm font-semibold mb-4 text-slate-700">Funnel</div>
              <div className="space-y-3">
                {funnelSteps.map((step, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-600">{step.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{step.value}</span>
                        {idx > 0 && <span className="text-xs text-slate-500">({step.percentage.toFixed(1)}%)</span>}
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all"
                        style={{ width: `${(step.value / 212) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t text-xs text-slate-500">11.3% from connect to enrolled</div>
            </div>

            {/* Follow-up SLA */}
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
              <div className="text-sm font-semibold mb-4 text-slate-700">Follow-up SLA</div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Median time to follow-up</div>
                  <div className="text-3xl font-bold">1h 42m</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-2">Within 2 hours</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "84%" }} />
                    </div>
                    <span className="text-sm font-semibold">84%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 mb-1">Trial Capacity</div>
                <div className="text-xl font-bold">53 / 60 slots (88%)</div>
                <div className="text-xs text-slate-400 mt-1">Auto-spread to free hours.</div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                <span className="text-sm font-bold text-green-600">88%</span>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Call Outcomes */}
        <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
          <div className="text-sm font-semibold mb-4 text-slate-700">Call Outcomes (This Week)</div>
          <div className="space-y-3">
            {callOutcomes.map((outcome) => (
              <div key={outcome.type}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-slate-600">{outcome.type}</span>
                  <span className="text-sm font-semibold">{outcome.count}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${outcome.percentage}%`,
                      backgroundColor: outcome.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="text-xs text-slate-500">Connection Rate</div>
            <div className="text-2xl font-bold text-green-600 mt-1">73.9%</div>
          </div>
        </div>

        {/* Call Activity */}
        {view === "Owner" && (
          <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
            <div className="text-sm font-semibold mb-4 text-slate-700">Call Activity (This Week)</div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={byDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="lastWeek"
                  stroke="#CBD5E1"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="Last week"
                />
                <Line
                  type="monotone"
                  dataKey="attempted"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: "#3B82F6", r: 4 }}
                  name="This week"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      {view === "Owner" && (
        <section className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
          <div className="text-sm font-semibold mb-3 text-slate-700">Insights</div>
          <ul className="space-y-2 text-sm">
            {insights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">{insight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Location Picker Modal */}
      {showLocationPicker && (
        <Modal title="Select Location" onClose={() => setShowLocationPicker(false)}>
          <div className="space-y-2">
            {["All", "Manhattan", "Brooklyn", "Queens"].map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setSelectedLocation(loc)
                  setShowLocationPicker(false)
                }}
                className="w-full px-4 py-3 text-left rounded-lg border hover:bg-slate-50 transition"
              >
                <div className="font-medium text-sm">{loc}</div>
              </button>
            ))}
          </div>
        </Modal>
      )}

      {/* Date Range Picker Modal */}
      {showDatePicker && (
        <Modal title="Select Date Range" onClose={() => setShowDatePicker(false)}>
          <div className="space-y-2">
            {["This Week", "Last 7 days", "Last 30 days", "This month", "Last month"].map((range) => (
              <button
                key={range}
                onClick={() => {
                  setDateRange(range)
                  setShowDatePicker(false)
                }}
                className="w-full px-4 py-3 text-left rounded-lg border hover:bg-slate-50 transition"
              >
                <div className="font-medium text-sm">{range}</div>
              </button>
            ))}
          </div>
        </Modal>
      )}

      {showRevenuePicker && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Revenue Breakdown</h3>
              <button
                onClick={() => setShowRevenuePicker(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Enrollments */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Enrollments</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Count</label>
                    <input
                      type="number"
                      value={revenueBreakdown.enrollments.count}
                      onChange={(e) =>
                        setRevenueBreakdown({
                          ...revenueBreakdown,
                          enrollments: { ...revenueBreakdown.enrollments, count: Number.parseInt(e.target.value) || 0 },
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Price ($)</label>
                    <input
                      type="number"
                      value={revenueBreakdown.enrollments.price}
                      onChange={(e) =>
                        setRevenueBreakdown({
                          ...revenueBreakdown,
                          enrollments: { ...revenueBreakdown.enrollments, price: Number.parseInt(e.target.value) || 0 },
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  = ${(revenueBreakdown.enrollments.count * revenueBreakdown.enrollments.price).toLocaleString()}
                </div>
              </div>

              {/* Trial Fees */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Trial Fees</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Count</label>
                    <input
                      type="number"
                      value={revenueBreakdown.trials.count}
                      onChange={(e) =>
                        setRevenueBreakdown({
                          ...revenueBreakdown,
                          trials: { ...revenueBreakdown.trials, count: Number.parseInt(e.target.value) || 0 },
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Price ($)</label>
                    <input
                      type="number"
                      value={revenueBreakdown.trials.price}
                      onChange={(e) =>
                        setRevenueBreakdown({
                          ...revenueBreakdown,
                          trials: { ...revenueBreakdown.trials, price: Number.parseInt(e.target.value) || 0 },
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  = ${(revenueBreakdown.trials.count * revenueBreakdown.trials.price).toLocaleString()}
                </div>
              </div>

              {/* Classes/Sessions */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Classes/Sessions</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Count</label>
                    <input
                      type="number"
                      value={revenueBreakdown.classes.count}
                      onChange={(e) =>
                        setRevenueBreakdown({
                          ...revenueBreakdown,
                          classes: { ...revenueBreakdown.classes, count: Number.parseInt(e.target.value) || 0 },
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Price ($)</label>
                    <input
                      type="number"
                      value={revenueBreakdown.classes.price}
                      onChange={(e) =>
                        setRevenueBreakdown({
                          ...revenueBreakdown,
                          classes: { ...revenueBreakdown.classes, price: Number.parseInt(e.target.value) || 0 },
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  = ${(revenueBreakdown.classes.count * revenueBreakdown.classes.price).toLocaleString()}
                </div>
              </div>

              {/* Other Revenue */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Other Revenue</label>
                <input
                  type="number"
                  value={revenueBreakdown.other}
                  onChange={(e) =>
                    setRevenueBreakdown({
                      ...revenueBreakdown,
                      other: Number.parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter amount"
                />
              </div>

              {/* Total */}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Total Revenue</span>
                  <span className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowRevenuePicker(false)}
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowRevenuePicker(false)}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function AttentionCard({ title, value, action }: { title: string; value: string; action: string }) {
  return (
    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/60">
      <div className="text-slate-600">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      <button className="mt-2 text-xs px-2 py-1 rounded-lg border hover:bg-white transition">{action}</button>
    </div>
  )
}

/*********************************
 * Tasks
 *********************************/
function Tasks() {
  const [tab, setTab] = useState("Today")
  const tasks = [
    { id: "t1", title: "Follow up renewal – Ethan", due: "Today 6:00 PM", status: "Due" },
    { id: "t2", title: "Confirm trial roster – Lily", due: "Tomorrow 9:00 AM", status: "Upcoming" },
    { id: "t3", title: "Message parents – Saturday full", due: "Today 3:00 PM", status: "In Progress" },
  ]
  const filtered = tasks.filter((t) =>
    tab === "All" ? true : tab === "Today" ? t.due.startsWith("Today") : !t.due.startsWith("Today"),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">Tasks</div>
          <div className="text-sm text-slate-600">Renewals, callbacks, and SLAs.</div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {["Today", "Upcoming", "All"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-sm px-3 py-1.5 rounded-lg border ${tab === t ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"}`}
            >
              {t}
            </button>
          ))}
          <button className="flex items-center gap-1 text-sm px-3 py-2 rounded-lg bg-slate-900 text-white whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <div key={t.id} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <div className="font-medium">{t.title}</div>
            <div className="text-xs text-slate-500 mt-1">{t.due}</div>
            <div className="mt-2 text-[11px] font-medium text-blue-600">{t.status}</div>
            <div className="mt-3 flex items-center gap-2">
              <button className="px-2 py-1 text-xs rounded-lg border hover:bg-slate-50">Mark Done</button>
              <button className="px-2 py-1 text-xs rounded-lg border hover:bg-slate-50">Snooze</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/*********************************
 * Agents (formerly Campaigns)
 *********************************/
function Agents() {
  const [showCreateAgent, setShowCreateAgent] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [selectedCall, setSelectedCall] = useState<any | null>(null)
  const [activeTab, setActiveTab] = useState<"transcription" | "data" | "logs">("transcription")

  const [agentForm, setAgentForm] = useState({
    name: "",
    type: "Inbound",
    channels: ["Calls"],
    description: "",
    voice: "Cassidy",
    status: "Active",
  })

  const agents = [
    {
      id: "a1",
      name: "Inbound Sales Agent",
      type: "Inbound",
      channels: ["Calls", "SMS"],
      status: "Active",
      callsHandled: 156,
      successRate: 68,
      description: "Handles incoming trial inquiries and bookings",
    },
    {
      id: "a2",
      name: "Renewal Outreach Agent",
      type: "Outbound",
      channels: ["Calls", "Email"],
      status: "Active",
      callsHandled: 89,
      successRate: 72,
      description: "Proactive renewal reminders and follow-ups",
    },
    {
      id: "a3",
      name: "Support Agent",
      type: "Support",
      channels: ["Calls", "SMS", "Email"],
      status: "Active",
      callsHandled: 234,
      successRate: 91,
      description: "Handles customer support and scheduling questions",
    },
    {
      id: "a4",
      name: "Win-Back Campaign Agent",
      type: "Outbound",
      channels: ["Calls"],
      status: "Inactive",
      callsHandled: 45,
      successRate: 34,
      description: "Re-engages lapsed customers",
    },
  ]

  const agentTypes = ["Inbound", "Outbound", "Support", "Sales", "Follow-up"]
  const channelOptions = ["Calls", "SMS", "Email"]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Inbound":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Outbound":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "Support":
        return "bg-green-100 text-green-700 border-green-200"
      case "Sales":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Calls":
        return <Phone className="w-3 h-3" />
      case "SMS":
        return <MessageSquare className="w-3 h-3" />
      case "Email":
        return <Mail className="w-3 h-3" />
      default:
        return null
    }
  }

  const callHistory = [
    {
      id: "call_1",
      time: "2025-10-15 22:18:26 EDT",
      duration: "2:54",
      channelType: "phone_call",
      cost: "$0.348",
      sessionId: "call_c4ea2a7497cc4730e7e9d4bc912",
      endReason: "user hangup",
      sessionStatus: "ended",
      userSentiment: "Positive",
      from: "+18137558954",
      to: "+15162800220",
      direction: "outbound",
      sessionOutcome: "Successful",
      latency: "1353ms",
      audioUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Retell%20AI%20Recording-QKbEHoiZp7J5WpbVSqq6olhlgVZtbj.wav", // Added actual audio recording URL
    },
    {
      id: "call_2",
      time: "2025-10-15 22:17:21 EDT",
      duration: "0:09",
      channelType: "phone_call",
      cost: "$0.018",
      sessionId: "call_31bc74ef526957e558c273fb8c4",
      endReason: "user hangup",
      sessionStatus: "ended",
      userSentiment: "Negative",
      from: "+18137558954",
      to: "+15162800220",
      direction: "outbound",
      sessionOutcome: "Unsuccessful",
      latency: "667ms",
    },
    {
      id: "call_3",
      time: "2025-10-15 22:16:00 EDT",
      duration: "0:17",
      channelType: "web_call",
      cost: "$0.034",
      sessionId: "call_34dea8a794526be8a651133fcb65",
      endReason: "user hangup",
      sessionStatus: "ended",
      userSentiment: "Positive",
      from: "",
      to: "",
      direction: "",
      sessionOutcome: "Successful",
      latency: "1113ms",
    },
  ]

  const [callAudioPlaying, setCallAudioPlaying] = useState(false)
  const [callAudioCurrentTime, setCallAudioCurrentTime] = useState(0)
  const [callAudioDuration, setCallAudioDuration] = useState(0)
  const callAudioRef = useRef<HTMLAudioElement | null>(null)

  const toggleCallAudio = () => {
    if (!callAudioRef.current) return

    if (callAudioPlaying) {
      callAudioRef.current.pause()
      setCallAudioPlaying(false)
    } else {
      callAudioRef.current.play()
      setCallAudioPlaying(true)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (selectedCall) {
    return (
      <div className="space-y-6">
        {/* Back button */}
        <button
          onClick={() => {
            if (callAudioRef.current) {
              callAudioRef.current.pause()
              callAudioRef.current = null
            }
            setCallAudioPlaying(false)
            setSelectedCall(null)
          }}
          className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Call History
        </button>

        {/* Call Header */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-lg font-semibold mb-2">
                {selectedCall.time} {selectedCall.channelType}
              </div>
              <div className="text-sm text-slate-600 space-y-1">
                <div>Agent: Outbound Agent (agent_4810d4c...6e2)</div>
                <div>Call ID: {selectedCall.sessionId}</div>
                <div>
                  Phone Call: {selectedCall.from} → {selectedCall.to} ({selectedCall.direction})
                </div>
                <div>Duration: {selectedCall.duration}</div>
                <div>Cost: {selectedCall.cost} • LLM Token: 1502.76</div>
              </div>
            </div>
          </div>

          {selectedCall.audioUrl && (
            <>
              <audio
                ref={callAudioRef}
                src={selectedCall.audioUrl}
                onLoadedMetadata={(e) => {
                  const audio = e.currentTarget
                  setCallAudioDuration(audio.duration)
                }}
                onTimeUpdate={(e) => {
                  const audio = e.currentTarget
                  setCallAudioCurrentTime(audio.currentTime)
                }}
                onEnded={() => {
                  setCallAudioPlaying(false)
                  setCallAudioCurrentTime(0)
                }}
              />
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <button
                  onClick={toggleCallAudio}
                  className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  {callAudioPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="text-xs text-slate-600 mb-1">
                    {formatTime(callAudioCurrentTime)} /{" "}
                    {callAudioDuration > 0 ? formatTime(callAudioDuration) : selectedCall.duration}
                  </div>
                  <div className="w-full h-1 bg-slate-200 rounded-full cursor-pointer">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all"
                      style={{
                        width: callAudioDuration > 0 ? `${(callAudioCurrentTime / callAudioDuration) * 100}%` : "0%",
                      }}
                    />
                  </div>
                </div>
                <button className="p-2 rounded-lg border hover:bg-white transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Conversation Analysis */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="font-medium mb-4">Conversation Analysis</div>
          <div className="text-sm text-slate-600 mb-3">Preset Analysis</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <div>
                <div className="text-xs text-slate-600">Call Successful</div>
                <div className="font-medium text-green-600">{conversationData.analysis.callSuccessful}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-600" />
              <div>
                <div className="text-xs text-slate-600">Call Status</div>
                <div className="font-medium">{conversationData.analysis.callStatus}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-600" />
              <div>
                <div className="text-xs text-slate-600">User Sentiment</div>
                <div className="font-medium text-green-600">{conversationData.analysis.userSentiment}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-600" />
              <div>
                <div className="text-xs text-slate-600">Disconnection Reason</div>
                <div className="font-medium">{conversationData.analysis.disconnectionReason}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-600" />
              <div>
                <div className="text-xs text-slate-600">End to End Latency</div>
                <div className="font-medium">{conversationData.analysis.latency}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="font-medium mb-3">Summary</div>
          <p className="text-sm text-slate-700 leading-relaxed">{conversationData.summary}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("transcription")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                activeTab === "transcription"
                  ? "border-b-2 border-slate-900 text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Transcription
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                activeTab === "data"
                  ? "border-b-2 border-slate-900 text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Data
            </button>
            <button
              onClick={() => setActiveTab("logs")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                activeTab === "logs"
                  ? "border-b-2 border-slate-900 text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Detail Logs
            </button>
          </div>

          <div className="p-6">
            {activeTab === "transcription" && (
              <div className="space-y-4">
                {conversationData.transcript.map((msg, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="text-xs text-slate-500 w-12 flex-shrink-0">{msg.time}</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{msg.speaker}:</div>
                      <div className="text-sm text-slate-700">{msg.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "data" && (
              <div className="space-y-6">
                <div>
                  <div className="font-medium mb-3">Dynamic Variables</div>
                  <div className="space-y-2">
                    {Object.entries(conversationData.dynamicVariables).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <div className="text-sm text-slate-600 w-32 flex-shrink-0">{key}:</div>
                        <div className="text-sm font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-3">Extracted Dynamic Variables</div>
                  <div className="text-sm text-slate-500">No Extracted Dynamic Variables</div>
                </div>
              </div>
            )}

            {activeTab === "logs" && (
              <div className="space-y-1 font-mono text-xs">
                {conversationData.detailLogs.map((log, idx) => (
                  <div key={idx} className="text-slate-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (selectedAgent) {
    const agent = agents.find((a) => a.id === selectedAgent)
    return (
      <div className="space-y-6">
        {/* Back button */}
        <button
          onClick={() => setSelectedAgent(null)}
          className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Agents
        </button>

        {/* Agent Header */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xl font-semibold mb-2">{agent?.name}</div>
              <p className="text-sm text-slate-600 mb-3">{agent?.description}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-xs px-2 py-1 rounded-full border font-medium ${getTypeColor(agent?.type || "")}`}
                >
                  {agent?.type}
                </span>
                {agent?.channels.map((channel) => (
                  <span
                    key={channel}
                    className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1"
                  >
                    {getChannelIcon(channel)}
                    {channel}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-600">Status</div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`w-2 h-2 rounded-full ${agent?.status === "Active" ? "bg-green-500" : "bg-slate-300"}`}
                />
                <span className="font-medium">{agent?.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call History Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="font-medium">Call History</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-slate-50">Date Range</button>
              <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-slate-50">Filter</button>
              <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-slate-50">Customize View</button>
              <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-slate-50">Export</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-slate-50 border-b">
                <tr className="text-left text-slate-600">
                  <th className="py-2.5 px-3 font-medium">Time</th>
                  <th className="py-2.5 px-3 font-medium">Duration</th>
                  <th className="py-2.5 px-3 font-medium">Channel Type</th>
                  <th className="py-2.5 px-3 font-medium">Cost</th>
                  <th className="py-2.5 px-3 font-medium">End Reason</th>
                  <th className="py-2.5 px-3 font-medium">Status</th>
                  <th className="py-2.5 px-3 font-medium">Sentiment</th>
                  <th className="py-2.5 px-3 font-medium">From</th>
                  <th className="py-2.5 px-3 font-medium">To</th>
                  <th className="py-2.5 px-3 font-medium">Direction</th>
                  <th className="py-2.5 px-3 font-medium">Outcome</th>
                  <th className="py-2.5 px-3 font-medium">Latency</th>
                </tr>
              </thead>
              <tbody>
                {callHistory.map((call) => (
                  <tr
                    key={call.id}
                    onClick={() => setSelectedCall(call)}
                    className="border-b hover:bg-slate-50 cursor-pointer transition"
                  >
                    <td className="py-2.5 px-3">{call.time}</td>
                    <td className="py-2.5 px-3">{call.duration}</td>
                    <td className="py-2.5 px-3">{call.channelType}</td>
                    <td className="py-2.5 px-3">{call.cost}</td>
                    <td className="py-2.5 px-3">{call.endReason}</td>
                    <td className="py-2.5 px-3">{call.sessionStatus}</td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`inline-flex items-center gap-1 ${
                          call.userSentiment === "Positive"
                            ? "text-green-600"
                            : call.userSentiment === "Negative"
                              ? "text-red-600"
                              : "text-slate-600"
                        }`}
                      >
                        • {call.userSentiment}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">{call.from}</td>
                    <td className="py-2.5 px-3">{call.to}</td>
                    <td className="py-2.5 px-3">{call.direction}</td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`inline-flex items-center gap-1 ${
                          call.sessionOutcome === "Successful" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        • {call.sessionOutcome}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">{call.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">Agents</div>
          <div className="text-sm text-slate-600 mt-1">
            Create and manage AI agents for inbound, outbound, support, and more
          </div>
        </div>
        <button
          className="flex items-center gap-1 text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 whitespace-nowrap"
          onClick={() => setShowCreateAgent(true)}
        >
          <Plus className="w-4 h-4" />
          Create Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-medium text-base">{agent.name}</div>
                  <span
                    className={`w-2 h-2 rounded-full ${agent.status === "Active" ? "bg-green-500" : "bg-slate-300"}`}
                  />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getTypeColor(agent.type)}`}>
                    {agent.type}
                  </span>
                  {agent.channels.map((channel) => (
                    <span
                      key={channel}
                      className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1"
                    >
                      {getChannelIcon(channel)}
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
              <button className="p-2 rounded-lg border hover:bg-slate-50">
                <Edit2 className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-4">{agent.description}</p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <div className="text-xs text-slate-500">Calls Handled</div>
                <div className="text-lg font-semibold mt-1">{agent.callsHandled}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Success Rate</div>
                <div className="text-lg font-semibold mt-1 text-green-600">{agent.successRate}%</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm rounded-lg border hover:bg-slate-50">
                {agent.status === "Active" ? "Pause" : "Activate"}
              </button>
              <button
                onClick={() => setSelectedAgent(agent.id)}
                className="flex-1 px-3 py-2 text-sm rounded-lg border hover:bg-slate-50"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCreateAgent && (
        <Modal title="Create Agent" onClose={() => setShowCreateAgent(false)}>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 block mb-2">Agent Name</label>
              <input
                type="text"
                value={agentForm.name}
                onChange={(e) => setAgentForm({ ...agentForm, name: e.target.value })}
                placeholder="e.g., Inbound Sales Agent"
                className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">Agent Type</label>
              <select
                value={agentForm.type}
                onChange={(e) => setAgentForm({ ...agentForm, type: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {agentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">
                Choose the primary purpose of this agent (inbound calls, outbound campaigns, support, etc.)
              </p>
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">Channels</label>
              <div className="space-y-2">
                {channelOptions.map((channel) => (
                  <label key={channel} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={agentForm.channels.includes(channel)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setAgentForm({ ...agentForm, channels: [...agentForm.channels, channel] })
                        } else {
                          setAgentForm({
                            ...agentForm,
                            channels: agentForm.channels.filter((c) => c !== channel),
                          })
                        }
                      }}
                      className="rounded"
                    />
                    <span className="text-sm flex items-center gap-1">
                      {getChannelIcon(channel)}
                      {channel}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1">Select all channels this agent should handle</p>
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">Description</label>
              <textarea
                value={agentForm.description}
                onChange={(e) => setAgentForm({ ...agentForm, description: e.target.value })}
                placeholder="Describe what this agent does..."
                rows={3}
                className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">Voice</label>
              <select
                value={agentForm.voice}
                onChange={(e) => setAgentForm({ ...agentForm, voice: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {VOICES.map((voice) => (
                  <option key={voice.id} value={voice.name}>
                    {voice.name} - {voice.description}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="text-sm font-medium text-blue-900 mb-1">What happens next?</div>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Your agent will be created and set to Active</li>
                <li>• Configure advanced settings in the agent details</li>
                <li>• Start receiving/making calls based on your schedule</li>
              </ul>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowCreateAgent(false)}
                className="flex-1 px-4 py-2 rounded-lg border hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("[v0] Creating agent:", agentForm)
                  setShowCreateAgent(false)
                  setAgentForm({
                    name: "",
                    type: "Inbound",
                    channels: ["Calls"],
                    description: "",
                    voice: "Cassidy",
                    status: "Active",
                  })
                }}
                disabled={!agentForm.name || agentForm.channels.length === 0}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Agent
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

/*********************************
 * Integrations Panel
 *********************************/
function IntegrationsPanel() {
  const [connectingIntegration, setConnectingIntegration] = useState<string | null>(null)
  const [customizingIntegration, setCustomizingIntegration] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState("")

  const integrations = [
    {
      id: "stripe",
      name: "Stripe",
      description: "Process payments and manage subscriptions for your academy",
      connected: true,
      icon: "💳",
    },
    {
      id: "twilio",
      name: "Twilio",
      description: "Send SMS messages and make voice calls to parents",
      connected: true,
      icon: "📱",
    },
    {
      id: "slack",
      name: "Slack",
      description: "Get notified about new calls, bookings, and urgent tasks",
      connected: false,
      icon: "💬",
    },
    {
      id: "hubspot",
      name: "HubSpot",
      description: "Sync leads to your CRM and track parent engagement",
      connected: true,
      icon: "🔶",
    },
    {
      id: "pipedrive",
      name: "Pipedrive",
      description: "Sync leads to your CRM and manage your sales pipeline",
      connected: false,
      icon: "🔵",
    },
    {
      id: "salesforce",
      name: "Salesforce",
      description: "Sync leads to your CRM and automate follow-ups",
      connected: false,
      icon: "☁️",
    },
    {
      id: "zoho",
      name: "Zoho CRM",
      description: "Sync leads to your CRM and track customer interactions",
      connected: false,
      icon: "🔴",
    },
    {
      id: "gcal",
      name: "Google Calendar",
      description: "Sync trial bookings and class schedules automatically",
      connected: false,
      icon: "📅",
    },
    {
      id: "calendly",
      name: "Calendly",
      description: "Let parents book trial sessions directly from calls",
      connected: false,
      icon: "🗓️",
    },
  ]

  const handleConnect = (integrationId: string) => {
    setConnectingIntegration(integrationId)
    setApiKey("")
  }

  const handleCustomize = (integrationId: string) => {
    setCustomizingIntegration(integrationId)
  }

  const handleSaveConnection = () => {
    // In a real app, this would make an API call to save the connection
    console.log(`[v0] Connecting ${connectingIntegration} with API key: ${apiKey}`)
    setConnectingIntegration(null)
    setApiKey("")
  }

  const currentIntegration = integrations.find((i) => i.id === connectingIntegration || i.id === customizingIntegration)

  return (
    <div className="space-y-6">
      <div>
        <div className="text-xl font-semibold">Integrations</div>
        <div className="text-sm text-slate-600 mt-1">Connect your tools and automate workflows</div>
      </div>

      <div className="space-y-3">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="text-3xl flex-shrink-0">{integration.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-base">Connect to {integration.name}</span>
                    {integration.connected && (
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" title="Connected" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{integration.description}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                {integration.connected ? (
                  <button
                    onClick={() => handleCustomize(integration.id)}
                    className="px-4 py-2 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                  >
                    Customize
                  </button>
                ) : (
                  <button
                    onClick={() => handleConnect(integration.id)}
                    className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-slate-600" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {connectingIntegration && currentIntegration && (
        <Modal title={`Connect ${currentIntegration.name}`} onClose={() => setConnectingIntegration(null)}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-3xl">{currentIntegration.icon}</span>
              <div>
                <div className="font-medium">{currentIntegration.name}</div>
                <div className="text-xs text-slate-600">{currentIntegration.description}</div>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">API Key</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={`Enter your ${currentIntegration.name} API key`}
                className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <p className="text-xs text-slate-500 mt-1">
                You can find your API key in your {currentIntegration.name} dashboard under Settings → API Keys
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="text-sm font-medium text-blue-900 mb-1">What happens next?</div>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• We'll verify your API key</li>
                <li>• Set up automatic data syncing</li>
                <li>• You can customize settings anytime</li>
              </ul>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setConnectingIntegration(null)}
                className="flex-1 px-4 py-2 rounded-lg border hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveConnection}
                disabled={!apiKey}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Connect
              </button>
            </div>
          </div>
        </Modal>
      )}

      {customizingIntegration && currentIntegration && (
        <Modal title={`Customize ${currentIntegration.name}`} onClose={() => setCustomizingIntegration(null)}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-3xl">{currentIntegration.icon}</span>
              <div className="flex-1">
                <div className="font-medium">{currentIntegration.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-600">Connected</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">Sync Frequency</label>
              <select className="w-full px-3 py-2 rounded-lg border">
                <option>Real-time</option>
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
                <option>Every hour</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-2">Data to Sync</label>
              <div className="space-y-2">
                {["New leads", "Call transcripts", "Booking confirmations", "Payment updates"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
              <div className="text-sm font-medium text-amber-900 mb-1">Connection Status</div>
              <div className="text-xs text-amber-800">Last synced: 2 minutes ago • Next sync: in 3 minutes</div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCustomizingIntegration(null)}
                className="flex-1 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
              >
                Disconnect
              </button>
              <button
                onClick={() => setCustomizingIntegration(null)}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

/*********************************
 * Settings Panel
 *********************************/
function SettingsPanel() {
  const [locations, setLocations] = useState([
    { id: "l1", name: "Manhattan", address: "123 West 57th St, New York, NY 10019", active: true },
    { id: "l2", name: "Brooklyn", address: "456 Atlantic Ave, Brooklyn, NY 11217", active: true },
  ])
  const [editingLocation, setEditingLocation] = useState<string | null>(null)
  const [locationForm, setLocationForm] = useState({ name: "", address: "" })

  const [team, setTeam] = useState([
    { id: "m1", name: "Ayah", email: "ayah@mpac.com", role: "Manager" },
    { id: "m2", name: "Beau", email: "beau@mpac.com", role: "Staff" },
  ])
  const [showInvite, setShowInvite] = useState(false)
  const [inviteForm, setInviteForm] = useState({ name: "", email: "", role: "Staff" })

  const [voiceSettings, setVoiceSettings] = useState({
    selectedVoice: "Cassidy", // Updated default voice to Cassidy
    timezone: "BST",
    startTime: "10:00",
    endTime: "19:00",
    activeDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    callbackEnabled: true,
    callbackAttempts: 1,
    callbackDays: 1,
    aiCallbackDetection: true,
    customVoicemail: false,
  })

  const [voiceModalStep, setVoiceModalStep] = useState<"closed" | "countries" | "voices">("closed")
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["United States"])
  const [countrySearch, setCountrySearch] = useState("")
  const [voiceSearch, setVoiceSearch] = useState("")
  const [voiceSpeeds, setVoiceSpeeds] = useState<Record<string, number>>({})

  const [playingVoice, setPlayingVoice] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playVoice = (voiceId: string, audioUrl: string) => {
    // Stop currently playing audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    // If clicking the same voice, just stop
    if (playingVoice === voiceId) {
      setPlayingVoice(null)
      return
    }

    // Create and play new audio
    const audio = new Audio(audioUrl)
    const speed = voiceSpeeds[voiceId] || 0

    // Calculate playback rate: -4 to +4 maps to 0.5x to 2.0x
    const playbackRate =
      speed >= 0
        ? 1.0 + (speed / 4) * 1.0 // 1.0 to 2.0
        : 1.0 + (speed / 4) * 0.5 // 0.5 to 1.0

    audio.playbackRate = playbackRate
    audio.play()

    audioRef.current = audio
    setPlayingVoice(voiceId)

    // Reset playing state when audio ends
    audio.onended = () => {
      setPlayingVoice(null)
      audioRef.current = null
    }
  }

  const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()),
  )

  const filteredVoices = VOICES.filter(
    (voice) =>
      selectedCountries.includes(voice.country) && voice.name.toLowerCase().includes(voiceSearch.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div className="text-xl font-semibold">Settings</div>

      {/* Locations */}
      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-lg">Locations</span>
          </div>
          <button
            onClick={() => {
              setEditingLocation("new")
              setLocationForm({ name: "", address: "" })
            }}
            className="flex items-center gap-1 text-sm px-3 py-2 rounded-lg border hover:bg-slate-50"
          >
            <Plus className="w-4 h-4" />
            Add Location
          </button>
        </div>
        <div className="space-y-3">
          {locations.map((loc) => (
            <div key={loc.id} className="p-4 border rounded-xl bg-slate-50/50 hover:bg-slate-50 transition">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-medium">{loc.name}</div>
                  <div className="text-sm text-slate-600 mt-1">{loc.address}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${loc.active ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"}`}
                    >
                      {loc.active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEditingLocation(loc.id)
                    setLocationForm({ name: loc.name, address: loc.address })
                  }}
                  className="p-2 rounded-lg border hover:bg-white transition"
                >
                  <Edit2 className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Access */}
      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-lg">Team Access</span>
          </div>
          <button
            onClick={() => setShowInvite(true)}
            className="flex items-center gap-1 text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
          >
            <Plus className="w-4 h-4" />
            Invite Member
          </button>
        </div>
        <div className="space-y-3">
          {team.map((member) => (
            <div key={member.id} className="p-4 border rounded-xl bg-slate-50/50 hover:bg-slate-50 transition">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-slate-600">{member.email}</div>
                </div>
                <select
                  value={member.role}
                  onChange={(e) => {
                    setTeam(team.map((m) => (m.id === member.id ? { ...m, role: e.target.value } : m)))
                  }}
                  className="px-3 py-1.5 text-sm rounded-lg border bg-white"
                >
                  {ROLES.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Voice Setup */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="font-medium text-lg mb-8">Agent Voice Set Up</div>

        {/* Voice Selection */}
        <div className="mb-10">
          <label className="text-sm text-slate-600 mb-3 block">Choose your agent voice(s)</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setVoiceModalStep("countries")}
              className="px-4 py-2 text-sm rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Choose Voices
            </button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-slate-50">
              <span className="text-sm">{voiceSettings.selectedVoice}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500 text-white">Default</span>
              <button className="p-1 rounded-full bg-purple-500 hover:bg-purple-600 transition">
                <Play className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-10">
          <div className="text-sm font-medium mb-3">Choose your schedule</div>
          <p className="text-xs text-slate-600 mb-5">
            Select your preferred days and times for scheduling calls. Calls are scheduled sequentially between the
            times you select in your chosen timezone(s), with a maximum of 300 calls per day.
          </p>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-slate-600 mb-3 block">Choose your Timezone(s)</label>
              <div className="flex items-center gap-3 mb-4">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white text-sm">
                  <Plus className="w-4 h-4" />
                  Select timezone(s)
                </button>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-slate-50">
                  <span className="text-sm">{voiceSettings.timezone}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500 text-white">Default</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div>
                  <label className="text-xs text-slate-600 block mb-2">Start Time:</label>
                  <select
                    value={voiceSettings.startTime}
                    onChange={(e) => setVoiceSettings({ ...voiceSettings, startTime: e.target.value })}
                    className="px-3 py-2 rounded-lg border bg-white text-sm"
                  >
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, "0")
                      return (
                        <option key={hour} value={`${hour}:00`}>
                          {hour}:00
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-600 block mb-2">End Time:</label>
                  <select
                    value={voiceSettings.endTime}
                    onChange={(e) => setVoiceSettings({ ...voiceSettings, endTime: e.target.value })}
                    className="px-3 py-2 rounded-lg border bg-white text-sm"
                  >
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, "0")
                      return (
                        <option key={hour} value={`${hour}:00`}>
                          {hour}:00
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {allDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => {
                      setVoiceSettings({
                        ...voiceSettings,
                        activeDays: voiceSettings.activeDays.includes(day)
                          ? voiceSettings.activeDays.filter((d) => d !== day)
                          : [...voiceSettings.activeDays, day],
                      })
                    }}
                    className={`w-12 h-12 rounded-full text-sm font-medium transition ${
                      voiceSettings.activeDays.includes(day)
                        ? "bg-purple-500 text-white"
                        : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Callback Settings */}
        <div className="space-y-6 border-t pt-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm font-medium mb-2">Configure your Callback Settings</div>
              <p className="text-xs text-slate-600 mb-3">
                Set the number of call attempts and timeframe for callback calls. If disabled, only the scheduled call
                will be made with no callback calls.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-600">Up to</span>
                <select
                  value={voiceSettings.callbackAttempts}
                  onChange={(e) =>
                    setVoiceSettings({ ...voiceSettings, callbackAttempts: Number.parseInt(e.target.value) })
                  }
                  className="px-2 py-1 rounded border bg-white text-sm"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
                <span className="text-slate-600">attempts across</span>
                <select
                  value={voiceSettings.callbackDays}
                  onChange={(e) =>
                    setVoiceSettings({ ...voiceSettings, callbackDays: Number.parseInt(e.target.value) })
                  }
                  className="px-2 py-1 rounded border bg-white text-sm"
                >
                  {[1, 2, 3, 5, 7].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
                <span className="text-slate-600">day(s)</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input
                type="checkbox"
                checked={voiceSettings.callbackEnabled}
                onChange={(e) => setVoiceSettings({ ...voiceSettings, callbackEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </label>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm font-medium mb-2">Connected Call AI Callback Detection</div>
              <p className="text-xs text-slate-600">
                Enable our AI to detect callback requests during calls and automatically schedule them.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input
                type="checkbox"
                checked={voiceSettings.aiCallbackDetection}
                onChange={(e) => setVoiceSettings({ ...voiceSettings, aiCallbackDetection: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </label>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm font-medium mb-2">Customize Voicemail Messages</div>
              <p className="text-xs text-slate-600">
                Customize your voicemail message for when the prospect doesn't pick up the phone call.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input
                type="checkbox"
                checked={voiceSettings.customVoicemail}
                onChange={(e) => setVoiceSettings({ ...voiceSettings, customVoicemail: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </label>
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInvite && (
        <Modal title="Invite Team Member" onClose={() => setShowInvite(false)}>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 block mb-1">Name</label>
              <input
                type="text"
                value={inviteForm.name}
                onChange={(e) => setInviteForm({ ...inviteForm, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-3 py-2 rounded-lg border"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 block mb-1">Email</label>
              <input
                type="email"
                value={inviteForm.email}
                onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })}
                placeholder="john@mpac.com"
                className="w-full px-3 py-2 rounded-lg border"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 block mb-1">Role</label>
              <select
                value={inviteForm.role}
                onChange={(e) => setInviteForm({ ...inviteForm, role: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border"
              >
                {ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => {
                setTeam([
                  ...team,
                  {
                    id: `m${team.length + 1}`,
                    name: inviteForm.name,
                    email: inviteForm.email,
                    role: inviteForm.role,
                  },
                ])
                setShowInvite(false)
                setInviteForm({ name: "", email: "", role: "Staff" })
              }}
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              Send Invite
            </button>
          </div>
        </Modal>
      )}

      {/* Location Edit Modal */}
      {editingLocation && (
        <Modal
          title={editingLocation === "new" ? "Add Location" : "Edit Location"}
          onClose={() => setEditingLocation(null)}
        >
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-600 block mb-1">Location Name</label>
              <input
                type="text"
                value={locationForm.name}
                onChange={(e) => setLocationForm({ ...locationForm, name: e.target.value })}
                placeholder="Manhattan"
                className="w-full px-3 py-2 rounded-lg border"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600 block mb-1">Address</label>
              <input
                type="text"
                value={locationForm.address}
                onChange={(e) => setLocationForm({ ...locationForm, address: e.target.value })}
                placeholder="123 West 57th St, New York, NY 10019"
                className="w-full px-3 py-2 rounded-lg border"
              />
            </div>
            <button
              onClick={() => {
                if (editingLocation === "new") {
                  setLocations([
                    ...locations,
                    {
                      id: `l${locations.length + 1}`,
                      name: locationForm.name,
                      address: locationForm.address,
                      active: true,
                    },
                  ])
                } else {
                  setLocations(
                    locations.map((loc) =>
                      loc.id === editingLocation
                        ? { ...loc, name: locationForm.name, address: locationForm.address }
                        : loc,
                    ),
                  )
                }
                setEditingLocation(null)
                setLocationForm({ name: "", address: "" })
              }}
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              {editingLocation === "new" ? "Add Location" : "Save Changes"}
            </button>
          </div>
        </Modal>
      )}

      {/* Country Selection Modal */}
      {voiceModalStep === "countries" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20" onClick={() => setVoiceModalStep("closed")} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-lg">Select Countries</div>
              <button onClick={() => setVoiceModalStep("closed")} className="p-1 rounded-lg border hover:bg-slate-50">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
                placeholder="Search country"
                className="w-full pl-9 pr-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
            </div>

            {/* Selected Countries */}
            {selectedCountries.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedCountries.map((country) => {
                  const countryData = COUNTRIES.find((c) => c.name === country)
                  return (
                    <div
                      key={country}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-100 border border-purple-200"
                    >
                      <span className="text-lg">{countryData?.flag}</span>
                      <span className="text-sm font-medium">
                        {country} ({countryData?.code})
                      </span>
                      <button
                        onClick={() => setSelectedCountries(selectedCountries.filter((c) => c !== country))}
                        className="p-0.5 rounded hover:bg-purple-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Country Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4 max-h-96 overflow-y-auto">
              {filteredCountries.map((country) => {
                const isSelected = selectedCountries.includes(country.name)
                return (
                  <button
                    key={country.name}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedCountries(selectedCountries.filter((c) => c !== country.name))
                      } else {
                        setSelectedCountries([...selectedCountries, country.name])
                      }
                    }}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition ${
                      isSelected ? "bg-purple-50 border-purple-300" : "bg-white hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{country.name}</div>
                      <div className="text-xs text-slate-600">{country.code}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setVoiceModalStep("closed")}
                className="px-4 py-2 rounded-lg border hover:bg-slate-50"
              >
                Prev
              </button>
              <button
                onClick={() => setVoiceModalStep("voices")}
                disabled={selectedCountries.length === 0}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Voice Selection Modal */}
      {voiceModalStep === "voices" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20" onClick={() => setVoiceModalStep("closed")} />
          <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
            <div className="flex h-[600px]">
              {/* Left Sidebar - Countries */}
              <div className="w-64 border-r bg-slate-50 p-4">
                <div className="font-medium text-sm mb-3">Countries</div>
                <div className="space-y-2">
                  {selectedCountries.map((country) => {
                    const countryData = COUNTRIES.find((c) => c.name === country)
                    return (
                      <div key={country} className="flex items-center gap-2 text-sm">
                        <span className="text-lg">{countryData?.flag}</span>
                        <span>
                          {country} ({countryData?.code})
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Main Content - Voices */}
              <div className="flex-1 flex flex-col">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold text-lg">Select Voices</div>
                    <button
                      onClick={() => setVoiceModalStep("closed")}
                      className="p-1 rounded-lg border hover:bg-slate-50"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Search */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={voiceSearch}
                      onChange={(e) => setVoiceSearch(e.target.value)}
                      placeholder="Search voice"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Voice List */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="text-sm font-medium text-slate-600 mb-3">US English</div>
                  <div className="space-y-3">
                    {filteredVoices.map((voice) => {
                      const speed = voiceSpeeds[voice.id] || 0
                      const isPlaying = playingVoice === voice.id
                      return (
                        <div
                          key={voice.id}
                          className={`flex items-center gap-4 p-4 rounded-lg border transition ${
                            voice.isDefault ? "bg-slate-50 border-slate-300" : "bg-white border-slate-200"
                          }`}
                        >
                          <span className="text-2xl">{voice.flag}</span>
                          <div className="flex-1">
                            <div className="font-medium">{voice.name}</div>
                            <div className="text-xs text-slate-600">{voice.description}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-xs text-slate-600">Modify Speed</div>
                            <button
                              onClick={() => setVoiceSpeeds({ ...voiceSpeeds, [voice.id]: Math.max(-4, speed - 1) })}
                              className="w-6 h-6 rounded border hover:bg-slate-50 flex items-center justify-center"
                            >
                              <ChevronLeft className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm">{speed}</span>
                            <button
                              onClick={() => setVoiceSpeeds({ ...voiceSpeeds, [voice.id]: Math.min(4, speed + 1) })}
                              className="w-6 h-6 rounded border hover:bg-slate-50 flex items-center justify-center"
                            >
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => playVoice(voice.id, voice.audioUrl)}
                            className={`p-2 rounded-full transition ${
                              isPlaying ? "bg-purple-600" : "bg-purple-500 hover:bg-purple-600"
                            }`}
                          >
                            <Play className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 border-t flex justify-end gap-2">
                  <button
                    onClick={() => setVoiceModalStep("countries")}
                    className="px-4 py-2 rounded-lg border hover:bg-slate-50"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => {
                      setVoiceModalStep("closed")
                      // Stop any playing audio when closing
                      if (audioRef.current) {
                        audioRef.current.pause()
                        audioRef.current = null
                      }
                      setPlayingVoice(null)
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/*********************************
 * Shared: Modal
 *********************************/
function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">{title}</div>
          <button onClick={onClose} className="p-1 rounded-lg border hover:bg-slate-50">
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
