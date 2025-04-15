import Link from "next/link"
import Image from "next/image"
import { Calendar, Droplets } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface PlantListItemProps {
  id: string
  name: string
  species: string
  dateStarted: string
  stage: string
  imageUrl: string
  lastWatered: string
}

export function PlantListItem({ id, name, species, dateStarted, stage, imageUrl, lastWatered }: PlantListItemProps) {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <Link href={`/plants/${id}`}>
      <div className="flex items-center p-4 hover:bg-muted/30 transition-colors">
        <div className="relative h-16 w-16 rounded-md overflow-hidden mr-4">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <h3 className="font-medium truncate">{name}</h3>
            <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200">{stage}</Badge>
          </div>
          <p className="text-sm text-muted-foreground italic truncate">{species}</p>
        </div>
        <div className="hidden md:flex flex-col items-end text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4 text-green-600" />
            <span>{formatDate(dateStarted)}</span>
          </div>
          <div className="flex items-center mt-1">
            <Droplets className="mr-1 h-4 w-4 text-blue-500" />
            <span>{formatDate(lastWatered)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
