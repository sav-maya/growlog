"use client"

import Image from "next/image"
import { Droplets, Sun } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PlantDatabaseItemProps {
  plant: {
    id: number
    name: string
    latinName: string
    category: string
    difficulty: string
    sunlight: string
    water: string
    imageUrl: string
  }
  onClick: () => void
}

export function PlantDatabaseItem({ plant, onClick }: PlantDatabaseItemProps) {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md cursor-pointer" onClick={onClick}>
      <div className="relative h-48 w-full">
        <Image src={plant.imageUrl || "/placeholder.svg"} alt={plant.name} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-200">
          {plant.category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">{plant.name}</h3>
        <p className="text-sm text-muted-foreground italic">{plant.latinName}</p>
      </CardHeader>
      <CardContent className="pb-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Sun className="mr-1 h-4 w-4 text-amber-500" />
            <span>{plant.sunlight}</span>
          </div>
          <div className="flex items-center">
            <Droplets className="mr-1 h-4 w-4 text-blue-500" />
            <span>{plant.water}</span>
          </div>
        </div>
        <Badge variant="outline">{plant.difficulty} to grow</Badge>
      </CardContent>
    </Card>
  )
}
