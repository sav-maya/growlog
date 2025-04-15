"use client"

import { useState } from "react"
import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface AddReminderModalProps {
  onClose: () => void
}

export function AddReminderModal({ onClose }: AddReminderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, this would save the reminder data
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
    }, 1000)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Bell className="mr-2 h-5 w-5" />
            Add Reminder
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Reminder Title</Label>
            <Input id="title" placeholder="E.g., Water tomatoes" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger id="frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="every2days">Every 2 days</SelectItem>
                  <SelectItem value="every3days">Every 3 days</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" defaultValue="09:00" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Reminder Type</Label>
            <Select defaultValue="watering">
              <SelectTrigger id="type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="watering">Watering</SelectItem>
                <SelectItem value="fertilizing">Fertilizing</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="harvesting">Harvesting</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="plants">Related Plants (optional)</Label>
            <Select>
              <SelectTrigger id="plants">
                <SelectValue placeholder="Select plants" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plants</SelectItem>
                <SelectItem value="tomato">Tomato</SelectItem>
                <SelectItem value="basil">Basil</SelectItem>
                <SelectItem value="pepper">Pepper</SelectItem>
                <SelectItem value="lettuce">Lettuce</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Active</h4>
              <p className="text-sm text-muted-foreground">Enable this reminder</p>
            </div>
            <Switch defaultChecked />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Reminder"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
