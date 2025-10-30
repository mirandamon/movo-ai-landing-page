import { Plus } from "lucide-react"

const teamMembers = [
  {
    name: "Guillaume Roux-Romestaing",
    email: "guillaume@movoai.co",
    role: "Owner",
    avatar: "GR",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@movoai.co",
    role: "Admin",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    email: "michael@movoai.co",
    role: "Member",
    avatar: "MC",
  },
]

export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Team</h1>
          <p className="text-gray-600">Manage your team members and their permissions</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
          <Plus className="h-4 w-4" />
          Invite Member
        </button>
      </div>

      <div className="max-w-3xl">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-semibold">Team Members ({teamMembers.length})</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <div key={member.email} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-sm font-medium text-white">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    defaultValue={member.role}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    disabled={member.role === "Owner"}
                  >
                    <option value="Owner">Owner</option>
                    <option value="Admin">Admin</option>
                    <option value="Member">Member</option>
                  </select>
                  {member.role !== "Owner" && (
                    <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Invitations */}
        <div className="mt-6 rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-4">
            <h2 className="font-semibold">Pending Invitations</h2>
          </div>
          <div className="p-8 text-center text-sm text-gray-500">No pending invitations</div>
        </div>
      </div>
    </div>
  )
}
