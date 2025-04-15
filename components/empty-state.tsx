import { PlusCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function EmptyState() {
  return (
    <Card className="h-full border-dashed bg-muted/40 hover:bg-muted/60 transition-colors">
      <CardContent className="flex flex-col items-center justify-center h-full p-6">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <PlusCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="font-medium text-center mb-1">Add a new plant</h3>
        <p className="text-sm text-muted-foreground text-center">Track germination progress and growth</p>
      </CardContent>
    </Card>
  )
}
