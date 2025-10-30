import { Calendar, DollarSign, Users, Clock, MoreVertical, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const programs = [
  {
    id: 1,
    name: "Basketball Training",
    description: "Comprehensive basketball skills development for ages 8-16",
    schedule: "Mon, Wed, Fri • 4:00 PM - 6:00 PM",
    price: "$299/month",
    enrolled: 24,
    capacity: 30,
    status: "active",
    coach: "Coach Mike Johnson",
  },
  {
    id: 2,
    name: "Soccer Academy",
    description: "Professional soccer training with focus on technique and teamwork",
    schedule: "Tue, Thu • 3:30 PM - 5:30 PM",
    price: "$249/month",
    enrolled: 18,
    capacity: 25,
    status: "active",
    coach: "Coach Sarah Martinez",
  },
  {
    id: 3,
    name: "Tennis Lessons",
    description: "Individual and group tennis instruction for all skill levels",
    schedule: "Sat, Sun • 9:00 AM - 11:00 AM",
    price: "$199/month",
    enrolled: 12,
    capacity: 15,
    status: "active",
    coach: "Coach David Chen",
  },
  {
    id: 4,
    name: "Swimming Classes",
    description: "Learn to swim and improve technique in our heated pool",
    schedule: "Mon, Wed • 5:00 PM - 6:00 PM",
    price: "$179/month",
    enrolled: 20,
    capacity: 20,
    status: "full",
    coach: "Coach Emily Rodriguez",
  },
  {
    id: 5,
    name: "Volleyball Training",
    description: "Develop volleyball skills and game strategy",
    schedule: "Tue, Thu, Sat • 2:00 PM - 4:00 PM",
    price: "$279/month",
    enrolled: 8,
    capacity: 20,
    status: "active",
    coach: "Coach Jessica Park",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Programs</h1>
            <p className="text-muted-foreground">Manage your sports programs and schedules</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Program
          </Button>
        </div>

        <div className="grid gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-card rounded-lg border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{program.name}</h3>
                    <Badge variant={program.status === "full" ? "secondary" : "default"}>{program.status}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="text-sm text-muted-foreground mb-2">Coach: {program.coach}</div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Program</DropdownMenuItem>
                    <DropdownMenuItem>View Enrollments</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Schedule</div>
                    <div className="text-sm font-medium">{program.schedule}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Price</div>
                    <div className="text-sm font-medium">{program.price}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Enrollment</div>
                    <div className="text-sm font-medium">
                      {program.enrolled} / {program.capacity}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Capacity</div>
                    <div className="text-sm font-medium">
                      {Math.round((program.enrolled / program.capacity) * 100)}% Full
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
