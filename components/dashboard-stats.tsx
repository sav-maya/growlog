import { Leaf, Sprout, Droplets, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="border-l-4 border-l-green-600">
        <CardContent className="flex items-center p-4">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Plants</p>
            <h3 className="text-2xl font-bold">5</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-blue-600">
        <CardContent className="flex items-center p-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Droplets className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Germinating</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-amber-600">
        <CardContent className="flex items-center p-4">
          <div className="bg-amber-100 p-3 rounded-full mr-4">
            <Sprout className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Sprouted</p>
            <h3 className="text-2xl font-bold">3</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-red-600">
        <CardContent className="flex items-center p-4">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Needs Care</p>
            <h3 className="text-2xl font-bold">1</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
