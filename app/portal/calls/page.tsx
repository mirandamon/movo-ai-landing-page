import { Clock, User, Search, Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const calls = [
  {
    id: 1,
    caller: "Sarah Johnson",
    phone: "(555) 123-4567",
    duration: "3:24",
    time: "2 hours ago",
    type: "Program Inquiry",
    outcome: "Booked",
    status: "completed",
  },
  {
    id: 2,
    caller: "Michael Chen",
    phone: "(555) 234-5678",
    duration: "1:47",
    time: "4 hours ago",
    type: "Schedule Question",
    outcome: "Rescheduled",
    status: "completed",
  },
  {
    id: 3,
    caller: "Emily Rodriguez",
    phone: "(555) 345-6789",
    duration: "5:12",
    time: "6 hours ago",
    type: "Payment",
    outcome: "Payment Link Sent",
    status: "completed",
  },
  {
    id: 4,
    caller: "David Park",
    phone: "(555) 456-7890",
    duration: "2:33",
    time: "8 hours ago",
    type: "Program Inquiry",
    outcome: "Booked",
    status: "completed",
  },
  {
    id: 5,
    caller: "Jessica Williams",
    phone: "(555) 567-8901",
    duration: "4:18",
    time: "10 hours ago",
    type: "General Question",
    outcome: "Info Provided",
    status: "completed",
  },
]

export default function CallsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Call History</h1>
          <p className="text-muted-foreground">View and manage all calls handled by Movo</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by caller name or phone number..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="inquiry">Program Inquiry</SelectItem>
              <SelectItem value="schedule">Schedule Question</SelectItem>
              <SelectItem value="payment">Payment</SelectItem>
              <SelectItem value="general">General Question</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="today">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-card rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Caller</th>
                  <th className="text-left p-4 font-medium">Phone</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Duration</th>
                  <th className="text-left p-4 font-medium">Time</th>
                  <th className="text-left p-4 font-medium">Outcome</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {calls.map((call) => (
                  <tr key={call.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{call.caller}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{call.phone}</td>
                    <td className="p-4">
                      <Badge variant="outline">{call.type}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {call.duration}
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{call.time}</td>
                    <td className="p-4">
                      <Badge
                        variant={
                          call.outcome.includes("Booked")
                            ? "default"
                            : call.outcome.includes("Rescheduled")
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {call.outcome}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
