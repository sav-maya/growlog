"use client"

import { useState } from "react"
import Link from "next/link"
import { PlusCircle, Search, Grid, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlantCard } from "@/components/plant-card"
import { PlantListItem } from "@/components/plant-list-item"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlantsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock data - in a real app this would come from a database
  const plants = [
    {
      id: "1",
      name: "Tomato - Roma",
      species: "Solanum lycopersicum",
      dateStarted: "2025-04-10",
      stage: "Germination",
      imageUrl: "/placeholder.svg?height=200&width=300",
      lastWatered: "2025-04-14",
      notes: "Seeds sprouted after 5 days",
    },
    {
      id: "2",
      name: "Basil - Sweet",
      species: "Ocimum basilicum",
      dateStarted: "2025-04-08",
      stage: "Seedling",
      imageUrl: "/placeholder.svg?height=200&width=300",
      lastWatered: "2025-04-15",
      notes: "Growing quickly, may need to thin soon",
    },
    {
      id: "3",
      name: "Pepper - Jalapeño",
      species: "Capsicum annuum",
      dateStarted: "2025-04-05",
      stage: "Seedling",
      imageUrl: "/placeholder.svg?height=200&width=300",
      lastWatered: "2025-04-15",
      notes: "Slow to germinate but looking healthy now",
    },
    {
      id: "4",
      name: "Lettuce - Butterhead",
      species: "Lactuca sativa",
      dateStarted: "2025-04-01",
      stage: "Vegetative",
      imageUrl: "/placeholder.svg?height=200&width=300",
      lastWatered: "2025-04-13",
      notes: "Growing well in partial shade",
    },
    {
      id: "5",
      name: "Cucumber",
      species: "Cucumis sativus",
      dateStarted: "2025-03-25",
      stage: "Vegetative",
      imageUrl: "/placeholder.svg?height=200&width=300",
      lastWatered: "2025-04-14",
      notes: "Vines starting to spread, will need trellis soon",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-green-800">My Plants</h1>
          <p className="text-muted-foreground">Manage and track all your plants</p>
        </div>
        <Button asChild className="bg-green-600 hover:bg-green-700 md:self-start">
          <Link href="/add-plant">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Plant
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search plants..." className="pl-8" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              <SelectItem value="germination">Germination</SelectItem>
              <SelectItem value="seedling">Seedling</SelectItem>
              <SelectItem value="vegetative">Vegetative</SelectItem>
              <SelectItem value="flowering">Flowering</SelectItem>
              <SelectItem value="fruiting">Fruiting</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-muted" : ""}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-muted" : ""}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Plants</TabsTrigger>
          <TabsTrigger value="indoor">Indoor</TabsTrigger>
          <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
          <TabsTrigger value="seedlings">Seedlings</TabsTrigger>
        </TabsList>
      </Tabs>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              id={plant.id}
              name={plant.name}
              species={plant.species}
              dateStarted={plant.dateStarted}
              stage={plant.stage}
              imageUrl={plant.imageUrl}
              lastWatered={plant.lastWatered}
              notes={plant.notes}
            />
          ))}
          <Link href="/add-plant" className="block h-full">
            <div className="border-2 border-dashed rounded-lg h-full flex flex-col items-center justify-center p-6 bg-muted/40 hover:bg-muted/60 transition-colors">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <PlusCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-center mb-1">Add a new plant</h3>
              <p className="text-sm text-muted-foreground text-center">Track germination progress and growth</p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="border rounded-lg divide-y">
          {plants.map((plant) => (
            <PlantListItem
              key={plant.id}
              id={plant.id}
              name={plant.name}
              species={plant.species}
              dateStarted={plant.dateStarted}
              stage={plant.stage}
              imageUrl={plant.imageUrl}
              lastWatered={plant.lastWatered}
            />
          ))}
        </div>
      )}
    </div>
  )
}
