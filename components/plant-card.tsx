import Link from "next/link"
import Image from "next/image"
import { Calendar, Droplets } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PlantCardProps {
  id: string
  name: string
  species: string
  dateStarted: string
  stage: string
  imageUrl: string
  lastWatered: string
  notes?: string
}

export function PlantCard({ id, name, species, dateStarted, stage, imageUrl, lastWatered, notes }: PlantCardProps) {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <Link href={`/plants/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-200">{stage}</Badge>
        </div>
        <CardHeader className="pb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground italic">{species}</p>
        </CardHeader>
        <CardContent className="pb-2 space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-green-600" />
            <span>Started: {formatDate(dateStarted)}</span>
          </div>
          <div className="flex items-center text-sm">
            <Droplets className="mr-2 h-4 w-4 text-blue-500" />
            <span>Last watered: {formatDate(lastWatered)}</span>
          </div>
        </CardContent>
        {notes && (
          <CardFooter className="text-sm border-t pt-3 text-muted-foreground">
            {notes.length > 60 ? `${notes.substring(0, 60)}...` : notes}
          </CardFooter>
        )}
      </Card>
    </Link>
  )
}
