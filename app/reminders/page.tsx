"use client"

import { useState } from "react"
import { Bell, Plus, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { AddReminderModal } from "@/components/add-reminder-modal"

export default function RemindersPage() {
  const [showAddReminder, setShowAddReminder] = useState(false)

  // Mock reminders - in a real app this would come from a database
  const [reminders, setReminders] = useState([
    { id: 1, title: "Water tomatoes", frequency: "Every 2 days", time: "09:00 AM", active: true, type: "watering" },
    { id: 2, title: "Fertilize basil", frequency: "Weekly", time: "10:00 AM", active: true, type: "fertilizing" },
    { id: 3, title: "Check for pests", frequency: "Every 3 days", time: "05:00 PM", active: true, type: "maintenance" },
    { id: 4, title: "Prune pepper plants", frequency: "Weekly", time: "04:00 PM", active: false, type: "maintenance" },
    {
      id: 5,
      title: "Water indoor plants",
      frequency: "Every 3 days",
      time: "08:00 AM",
      active: true,
      type: "watering",
    },
  ])

  const toggleReminder = (id) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, active: !reminder.active } : reminder)),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-green-800">Reminders</h1>
          <p className="text-muted-foreground">Set up notifications for plant care</p>
        </div>
        <Button onClick={() => setShowAddReminder(true)} className="bg-green-600 hover:bg-green-700 md:self-start">
          <Plus className="mr-2 h-4 w-4" />
          Add Reminder
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-green-600" />
              Active Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reminders
                .filter((r) => r.active)
                .map((reminder) => (
                  <div key={reminder.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Badge
                          className={`mr-2 ${
                            reminder.type === "watering"
                              ? "bg-blue-100 text-blue-800"
                              : reminder.type === "fertilizing"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {reminder.type}
                        </Badge>
                        <h4 className="font-medium">{reminder.title}</h4>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {reminder.frequency} at {reminder.time}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Switch checked={reminder.active} onCheckedChange={() => toggleReminder(reminder.id)} />
                    </div>
                  </div>
                ))}
              {reminders.filter((r) => r.active).length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No active reminders. Add one to get started.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-muted-foreground" />
              Inactive Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reminders
                .filter((r) => !r.active)
                .map((reminder) => (
                  <div key={reminder.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          {reminder.type}
                        </Badge>
                        <h4 className="font-medium text-muted-foreground">{reminder.title}</h4>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {reminder.frequency} at {reminder.time}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Switch checked={reminder.active} onCheckedChange={() => toggleReminder(reminder.id)} />
                    </div>
                  </div>
                ))}
              {reminders.filter((r) => !r.active).length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No inactive reminders.</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reminder Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Push Notifications</h4>
                <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-muted-foreground">Receive reminders via email</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Quiet Hours</h4>
                <p className="text-sm text-muted-foreground">Don't send notifications during these hours</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {showAddReminder && <AddReminderModal onClose={() => setShowAddReminder(false)} />}
    </div>
  )
}
