"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddEventModal } from "@/components/add-event-modal"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [showAddEvent, setShowAddEvent] = useState(false)

  // Mock calendar events - in a real app this would come from a database
  const events = [
    { date: "2025-04-16", title: "Water plants", type: "watering" },
    { date: "2025-04-16", title: "Fertilize tomatoes", type: "fertilizing" },
    { date: "2025-04-18", title: "Transplant seedlings", type: "planting" },
    { date: "2025-04-20", title: "Prune basil", type: "maintenance" },
    { date: "2025-04-22", title: "Water plants", type: "watering" },
    { date: "2025-04-25", title: "Harvest lettuce", type: "harvesting" },
  ]

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border bg-muted/20"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const dayEvents = events.filter((event) => event.date === date)

      days.push(
        <div key={day} className="min-h-24 border p-1 relative">
          <div
            className={`text-sm font-medium p-1 rounded-full w-7 h-7 flex items-center justify-center ${
              new Date().toISOString().split("T")[0] === date ? "bg-green-100 text-green-800" : ""
            }`}
          >
            {day}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.map((event, index) => (
              <div
                key={index}
                className={`text-xs p-1 rounded truncate ${
                  event.type === "watering"
                    ? "bg-blue-100 text-blue-800"
                    : event.type === "fertilizing"
                      ? "bg-green-100 text-green-800"
                      : event.type === "planting"
                        ? "bg-amber-100 text-amber-800"
                        : event.type === "harvesting"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                }`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>,
      )
    }

    return days
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-green-800">Garden Calendar</h1>
          <p className="text-muted-foreground">Schedule and track your gardening activities</p>
        </div>
        <Button onClick={() => setShowAddEvent(true)} className="bg-green-600 hover:bg-green-700 md:self-start">
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">
              {monthName} {year}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-px">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-medium py-2 bg-muted/20">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Watering</Badge>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Fertilizing</Badge>
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Planting</Badge>
        <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Harvesting</Badge>
        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Maintenance</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.slice(0, 5).map((event, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <Badge
                    className={`mr-2 ${
                      event.type === "watering"
                        ? "bg-blue-100 text-blue-800"
                        : event.type === "fertilizing"
                          ? "bg-green-100 text-green-800"
                          : event.type === "planting"
                            ? "bg-amber-100 text-amber-800"
                            : event.type === "harvesting"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {event.type}
                  </Badge>
                  <span>{event.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {showAddEvent && <AddEventModal onClose={() => setShowAddEvent(false)} />}
    </div>
  )
}
