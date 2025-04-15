"use client"

import { useState } from "react"
import { Search, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlantDatabaseItem } from "@/components/plant-database-item"
import { PlantDetailModal } from "@/components/plant-detail-modal"

export default function PlantDatabasePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlant, setSelectedPlant] = useState(null)

  // Mock plant database - in a real app this would come from a database
  const plants = [
    {
      id: 1,
      name: "Tomato",
      latinName: "Solanum lycopersicum",
      category: "Vegetables",
      difficulty: "Easy",
      sunlight: "Full sun",
      water: "Regular",
      germination: "7-14 days",
      spacing: "24-36 inches",
      description:
        "Tomatoes are the most popular garden vegetable crop. They are warm-season plants that grow best in full sun and rich, well-drained soil.",
      careInstructions:
        "Water regularly, keeping soil moist but not waterlogged. Fertilize every 2 weeks once plants begin to flower. Stake or cage plants for support.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Basil",
      latinName: "Ocimum basilicum",
      category: "Herbs",
      difficulty: "Easy",
      sunlight: "Full sun",
      water: "Moderate",
      germination: "5-10 days",
      spacing: "6-12 inches",
      description:
        "Basil is a tender herb with a sweet, aromatic flavor. It's a popular culinary herb used in many dishes, especially in Italian cuisine.",
      careInstructions:
        "Water when the soil surface feels dry. Pinch off flower buds to encourage leaf production. Harvest leaves regularly to promote bushier growth.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Cucumber",
      latinName: "Cucumis sativus",
      category: "Vegetables",
      difficulty: "Moderate",
      sunlight: "Full sun",
      water: "Regular",
      germination: "7-10 days",
      spacing: "36-60 inches",
      description:
        "Cucumbers are warm-season vegetables that grow on vines or in bush form. They produce crisp, refreshing fruits perfect for salads and pickling.",
      careInstructions:
        "Water deeply once a week, more in hot weather. Provide trellising for vine varieties. Harvest regularly to encourage production.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Lavender",
      latinName: "Lavandula",
      category: "Herbs",
      difficulty: "Moderate",
      sunlight: "Full sun",
      water: "Low",
      germination: "14-28 days",
      spacing: "18-24 inches",
      description:
        "Lavender is a fragrant perennial herb with purple flowers and grayish-green foliage. It's used in cooking, aromatherapy, and as an ornamental plant.",
      careInstructions:
        "Plant in well-draining soil. Water sparingly once established. Prune after flowering to maintain shape and promote new growth.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Strawberry",
      latinName: "Fragaria × ananassa",
      category: "Fruits",
      difficulty: "Moderate",
      sunlight: "Full sun",
      water: "Moderate",
      germination: "Seeds: 14-28 days",
      spacing: "12-18 inches",
      description:
        "Strawberries are sweet, red fruits that grow on small perennial plants. They're one of the easiest fruits to grow in home gardens.",
      careInstructions:
        "Plant in rich, well-draining soil. Water consistently, keeping soil moist but not soggy. Remove runners unless you want the plants to spread.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Pepper",
      latinName: "Capsicum annuum",
      category: "Vegetables",
      difficulty: "Moderate",
      sunlight: "Full sun",
      water: "Moderate",
      germination: "7-21 days",
      spacing: "18-24 inches",
      description:
        "Peppers range from sweet bell peppers to hot chili varieties. They're warm-season crops that thrive in sunny conditions.",
      careInstructions:
        "Water consistently. Fertilize after first fruit set. Support larger varieties with stakes. Harvest peppers when they reach full size and color.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredPlants = plants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.latinName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-green-800">Plant Database</h1>
        <p className="text-muted-foreground">Find information about plants and their care requirements</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search plants..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Plants</TabsTrigger>
          <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          <TabsTrigger value="herbs">Herbs</TabsTrigger>
          <TabsTrigger value="fruits">Fruits</TabsTrigger>
          <TabsTrigger value="flowers">Flowers</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <PlantDatabaseItem key={plant.id} plant={plant} onClick={() => setSelectedPlant(plant)} />
        ))}
        {filteredPlants.length === 0 && (
          <div className="col-span-full text-center py-12">
            <Leaf className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-1">No plants found</h3>
            <p className="text-muted-foreground">Try adjusting your search query</p>
          </div>
        )}
      </div>

      {selectedPlant && <PlantDetailModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
    </div>
  )
}
