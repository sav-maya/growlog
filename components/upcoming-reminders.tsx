import Link from "next/link"
import { Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function UpcomingReminders() {
  // Mock reminders - in a real app this would come from a database
  const reminders = [
    { id: 1, title: "Water tomatoes", time: "Today, 09:00 AM" },
    { id: 2, title: "Fertilize basil", time: "Tomorrow, 10:00 AM" },
    { id: 3, title: "Check for pests", time: "Wednesday, 05:00 PM" },
    { id: 4, title: "Prune pepper plants", time: "Friday, 04:00 PM" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Bell className="mr-2 h-5 w-5 text-green-600" />
          Upcoming Reminders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex justify-between items-center">
              <div className="font-medium">{reminder.title}</div>
              <div className="text-sm text-muted-foreground">{reminder.time}</div>
            </div>
          ))}
          {reminders.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">No upcoming reminders</div>
          )}
          <Button asChild variant="outline" className="w-full mt-2">
            <Link href="/reminders">View All Reminders</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
