"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Droplets, Edit, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ProgressLog } from "@/components/progress-log"
import { AddProgressModal } from "@/components/add-progress-modal"

export default function PlantDetail({ params }) {
  const [showAddProgress, setShowAddProgress] = useState(false)

  // In a real app, this would fetch plant data based on the ID
  const plant = {
    id: params.id,
    name: "Tomato - Roma",
    species: "Solanum lycopersicum",
    dateStarted: "April 10, 2025",
    stage: "Germination",
    imageUrl: "/placeholder.svg?height=300&width=500",
    lastWatered: "April 14, 2025",
    notes: "Seeds sprouted after 5 days. Keeping soil consistently moist.",
    progressLogs: [
      {
        id: "1",
        date: "April 10, 2025",
        stage: "Germination",
        notes: "Planted seeds in seed starting mix, 1/4 inch deep",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "2",
        date: "April 15, 2025",
        stage: "Germination",
        notes: "First sprouts visible! Two seedlings have emerged.",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="flex items-center text-green-700 mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="bg-green-50 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">{plant.stage}</Badge>
                  <CardTitle>{plant.name}</CardTitle>
                  <CardDescription className="italic">{plant.species}</CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image src={plant.imageUrl || "/placeholder.svg"} alt={plant.name} fill className="object-cover" />
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-green-600" />
                  <span>Started: {plant.dateStarted}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Droplets className="mr-2 h-4 w-4 text-blue-500" />
                  <span>Last watered: {plant.lastWatered}</span>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="font-medium mb-1">Notes</h4>
                  <p className="text-sm text-muted-foreground">{plant.notes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="bg-green-50 border-b">
              <div className="flex justify-between items-center">
                <CardTitle>Growth Journey</CardTitle>
                <Button onClick={() => setShowAddProgress(true)} className="bg-green-600 hover:bg-green-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Progress
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="timeline" className="w-full">
                <div className="border-b px-4">
                  <TabsList className="w-full justify-start h-12">
                    <TabsTrigger value="timeline" className="data-[state=active]:bg-green-50">
                      Timeline
                    </TabsTrigger>
                    <TabsTrigger value="gallery" className="data-[state=active]:bg-green-50">
                      Gallery
                    </TabsTrigger>
                    <TabsTrigger value="care" className="data-[state=active]:bg-green-50">
                      Care Log
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="timeline" className="p-4 space-y-6">
                  {plant.progressLogs.map((log) => (
                    <ProgressLog key={log.id} log={log} />
                  ))}
                </TabsContent>
                <TabsContent value="gallery" className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {plant.progressLogs.map((log) => (
                      <div key={log.id} className="relative aspect-square rounded-md overflow-hidden border">
                        <Image
                          src={log.imageUrl || "/placeholder.svg"}
                          alt={`Progress on ${log.date}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="care" className="p-4">
                  <p className="text-muted-foreground text-center py-8">
                    No care logs yet. Add your first watering or fertilizing entry.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {showAddProgress && <AddProgressModal onClose={() => setShowAddProgress(false)} />}
    </div>
  )
}
