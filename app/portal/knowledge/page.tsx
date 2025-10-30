import { BookOpen, Plus, Search, Edit, Trash2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = [
  {
    id: 1,
    name: "Programs & Pricing",
    count: 12,
    articles: [
      { id: 1, title: "Basketball Training Program Details", updated: "2 days ago" },
      { id: 2, title: "Soccer Academy Pricing Structure", updated: "1 week ago" },
      { id: 3, title: "Tennis Lessons Schedule", updated: "3 days ago" },
    ],
  },
  {
    id: 2,
    name: "Registration & Enrollment",
    count: 8,
    articles: [
      { id: 4, title: "How to Register for Classes", updated: "1 day ago" },
      { id: 5, title: "Trial Class Information", updated: "5 days ago" },
      { id: 6, title: "Enrollment Requirements", updated: "1 week ago" },
    ],
  },
  {
    id: 3,
    name: "Payment & Billing",
    count: 6,
    articles: [
      { id: 7, title: "Payment Methods Accepted", updated: "3 days ago" },
      { id: 8, title: "Refund Policy", updated: "2 weeks ago" },
      { id: 9, title: "Monthly Billing Information", updated: "4 days ago" },
    ],
  },
  {
    id: 4,
    name: "Facilities & Location",
    count: 5,
    articles: [
      { id: 10, title: "Facility Hours and Access", updated: "1 week ago" },
      { id: 11, title: "Parking Information", updated: "2 weeks ago" },
      { id: 12, title: "Equipment Provided", updated: "5 days ago" },
    ],
  },
]

export default function KnowledgePage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Knowledge Base</h1>
            <p className="text-muted-foreground">Manage FAQs and information that Movo uses to answer calls</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Article
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search knowledge base..." className="pl-10" />
          </div>
        </div>

        <div className="grid gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-card rounded-lg border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} articles</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Article
                  </Button>
                </div>
              </div>

              <div className="divide-y">
                {category.articles.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium mb-1">{article.title}</div>
                        <div className="text-sm text-muted-foreground">Updated {article.updated}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
