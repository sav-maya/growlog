"use client"

import { Droplets, Sun, Ruler, Calendar, X } from "lucide-react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface PlantDetailModalProps {
  plant: {
    id: number
    name: string
    latinName: string
    category: string
    difficulty: string
    sunlight: string
    water: string
    germination: string
    spacing: string
    description: string
    careInstructions: string
    imageUrl: string
  }
  onClose: () => void
}

export function PlantDetailModal({ plant, onClose }: PlantDetailModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-auto">
        <DialogHeader className="relative">
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-0 top-0">
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center">
            <DialogTitle className="text-xl">{plant.name}</DialogTitle>
            <Badge className="ml-2 bg-green-100 text-green-800">{plant.category}</Badge>
          </div>
          <p className="text-sm text-muted-foreground italic">{plant.latinName}</p>
        </DialogHeader>

        <div className="relative h-64 w-full mb-4">
          <Image src={plant.imageUrl || "/placeholder.svg"} alt={plant.name} fill className="object-cover rounded-md" />
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="care">Care Guide</TabsTrigger>
            <TabsTrigger value="growing">Growing Info</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 pt-4">
            <p>{plant.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 p-3 rounded-md flex items-center">
                <Sun className="h-5 w-5 text-amber-500 mr-2" />
                <div>
                  <div className="text-sm font-medium">Sunlight</div>
                  <div className="text-sm">{plant.sunlight}</div>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md flex items-center">
                <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <div className="text-sm font-medium">Water</div>
                  <div className="text-sm">{plant.water}</div>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md flex items-center">
                <Calendar className="h-5 w-5 text-green-600 mr-2" />
                <div>
                  <div className="text-sm font-medium">Germination</div>
                  <div className="text-sm">{plant.germination}</div>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md flex items-center">
                <Ruler className="h-5 w-5 text-green-600 mr-2" />
                <div>
                  <div className="text-sm font-medium">Spacing</div>
                  <div className="text-sm">{plant.spacing}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="outline">{plant.difficulty} to grow</Badge>
              <Button className="bg-green-600 hover:bg-green-700">Add to My Plants</Button>
            </div>
          </TabsContent>

          <TabsContent value="care" className="space-y-4 pt-4">
            <h3 className="font-medium text-lg">Care Instructions</h3>
            <p>{plant.careInstructions}</p>

            <div className="space-y-3">
              <h4 className="font-medium">Watering</h4>
              <p className="text-sm">
                {plant.water === "Low"
                  ? "Allow soil to dry completely between waterings. Overwatering can cause root rot."
                  : plant.water === "Moderate"
                    ? "Water when the top inch of soil feels dry to the touch."
                    : "Keep soil consistently moist but not waterlogged."}
              </p>

              <h4 className="font-medium">Sunlight</h4>
              <p className="text-sm">
                {plant.sunlight === "Full sun"
                  ? "Place in a location that receives at least 6 hours of direct sunlight daily."
                  : plant.sunlight === "Partial sun"
                    ? "Provide 3-6 hours of direct sunlight daily, preferably in morning or late afternoon."
                    : "Place in a bright location with filtered or indirect light."}
              </p>

              <h4 className="font-medium">Fertilizing</h4>
              <p className="text-sm">
                {plant.category === "Vegetables"
                  ? "Apply balanced fertilizer every 2-3 weeks during growing season."
                  : plant.category === "Herbs"
                    ? "Apply half-strength fertilizer monthly. Avoid over-fertilizing herbs."
                    : "Apply balanced fertilizer according to package instructions during growing season."}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="growing" className="space-y-4 pt-4">
            <h3 className="font-medium text-lg">Growing Information</h3>

            <div className="space-y-3">
              <h4 className="font-medium">Starting from Seed</h4>
              <p className="text-sm">
                Germination time: {plant.germination}
                <br />
                {plant.category === "Vegetables"
                  ? "Start seeds indoors 6-8 weeks before last frost date or direct sow according to plant requirements."
                  : plant.category === "Herbs"
                    ? "Most herbs can be started indoors or direct sown after danger of frost has passed."
                    : "Follow specific seed packet instructions for best results."}
              </p>

              <h4 className="font-medium">Spacing</h4>
              <p className="text-sm">
                Plant spacing: {plant.spacing}
                <br />
                Proper spacing ensures good air circulation and reduces disease pressure.
              </p>

              <h4 className="font-medium">Harvesting</h4>
              <p className="text-sm">
                {plant.category === "Vegetables"
                  ? "Harvest when fruits reach full size and color. Regular harvesting encourages continued production."
                  : plant.category === "Herbs"
                    ? "Harvest herbs in the morning after dew has dried. Regular harvesting promotes bushier growth."
                    : "Follow specific harvesting guidelines for this plant type."}
              </p>

              <h4 className="font-medium">Common Problems</h4>
              <p className="text-sm">
                Watch for pests like aphids, whiteflies, and spider mites. Common diseases include powdery mildew and
                various blights. Good air circulation and proper watering help prevent many issues.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
