"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Leaf, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddPlant() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, this would save the plant data
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/")
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link href="/" className="flex items-center text-green-700 mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to dashboard
      </Link>

      <Card>
        <CardHeader className="bg-green-50 border-b">
          <CardTitle className="text-green-800 flex items-center">
            <Leaf className="mr-2 h-5 w-5" />
            Add New Plant
          </CardTitle>
          <CardDescription>Track a new plant in your garden</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Plant Name</Label>
                <Input id="name" placeholder="E.g., Tomato - Cherry" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="species">Species (optional)</Label>
                <Input id="species" placeholder="E.g., Solanum lycopersicum" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dateStarted">Date Started</Label>
                <Input id="dateStarted" type="date" required defaultValue={new Date().toISOString().split("T")[0]} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage">Current Stage</Label>
                <Select defaultValue="germination">
                  <SelectTrigger id="stage">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="germination">Germination</SelectItem>
                    <SelectItem value="seedling">Seedling</SelectItem>
                    <SelectItem value="vegetative">Vegetative Growth</SelectItem>
                    <SelectItem value="flowering">Flowering</SelectItem>
                    <SelectItem value="fruiting">Fruiting</SelectItem>
                    <SelectItem value="harvesting">Harvesting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Plant Image (optional)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/30">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Drag and drop an image here or click to browse</p>
                <Input id="image" type="file" accept="image/*" className="hidden" />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("image").click()}
                >
                  Select Image
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Add any details about your plant (e.g., seed source, growing conditions, etc.)"
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => router.push("/")}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Plant"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
