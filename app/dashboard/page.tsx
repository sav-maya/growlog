import Link from "next/link"
import { PlusCircle, Calendar } from "lucide-react"
import { UserProfile } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlantCard } from "@/components/plant-card"
import { UpcomingReminders } from "@/components/upcoming-reminders"
import { WeatherWidget } from "@/components/weather-widget"
import { DashboardStats } from "@/components/dashboard-stats"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-800 dark:text-green-300">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your garden tracker</p>
      </header>

      <DashboardStats />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-green-600" />
              Calendar
            </CardTitle>
            <CardDescription>Upcoming garden events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-sm">Today</div>
                <div className="text-sm font-medium">Water 3 plants</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm">Tomorrow</div>
                <div className="text-sm font-medium">Fertilize tomatoes</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm">Apr 18</div>
                <div className="text-sm font-medium">Transplant seedlings</div>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link href="/calendar">View Calendar</Link>
            </Button>
          </CardContent>
        </Card>

        <WeatherWidget />

        <UpcomingReminders />
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-green-800 dark:text-green-300">Recently Updated Plants</h2>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/add-plant">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Plant
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <PlantCard
          id="1"
          name="Tomato - Roma"
          species="Solanum lycopersicum"
          dateStarted="2025-04-10"
          stage="Germination"
          imageUrl="/placeholder.svg?height=200&width=300"
          lastWatered="2025-04-14"
          notes="Seeds sprouted after 5 days"
        />
        <PlantCard
          id="2"
          name="Basil - Sweet"
          species="Ocimum basilicum"
          dateStarted="2025-04-08"
          stage="Seedling"
          imageUrl="/placeholder.svg?height=200&width=300"
          lastWatered="2025-04-15"
          notes="Growing quickly, may need to thin soon"
        />
        <PlantCard
          id="3"
          name="Pepper - Jalapeño"
          species="Capsicum annuum"
          dateStarted="2025-04-05"
          stage="Seedling"
          imageUrl="/placeholder.svg?height=200&width=300"
          lastWatered="2025-04-15"
          notes="Slow to germinate but looking healthy now"
        />
      </div>
    </div>
  )
} 