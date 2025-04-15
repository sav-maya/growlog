import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface ProgressLogProps {
  log: {
    id: string
    date: string
    stage: string
    notes: string
    imageUrl: string
  }
}

export function ProgressLog({ log }: ProgressLogProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-green-100 p-2">
          <CalendarDays className="h-5 w-5 text-green-600" />
        </div>
        <div className="w-px grow bg-green-200 my-2"></div>
      </div>
      <div className="space-y-2 pb-6 flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{log.date}</p>
          <Badge variant="outline">{log.stage}</Badge>
        </div>
        <div className="bg-muted/50 rounded-lg overflow-hidden">
          {log.imageUrl && (
            <div className="relative h-48 w-full">
              <Image
                src={log.imageUrl || "/placeholder.svg"}
                alt={`Progress on ${log.date}`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-3">
            <p className="text-sm">{log.notes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
