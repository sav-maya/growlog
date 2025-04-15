"use client"

import { useState } from "react"
import { User, Mail, MapPin, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data - in a real app this would come from a database
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    location: "Portland, OR",
    bio: "Passionate gardener with a focus on organic vegetables and native plants. I've been gardening for 5 years and love experimenting with new varieties.",
    gardenType: "Urban Garden",
    growingZone: "8b",
    preferences: {
      emailNotifications: true,
      pushNotifications: true,
      weeklyReports: true,
      publicProfile: false,
    },
  })

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-green-800 mb-8">My Profile</h1>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                    <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute bottom-0 right-0 rounded-full bg-background"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-medium">{userData.name}</h3>
                <p className="text-muted-foreground">{userData.gardenType}</p>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {userData.location}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "outline" : "default"}
                    onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                  >
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        id="name"
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      />
                    ) : (
                      <span>{userData.name}</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      />
                    ) : (
                      <span>{userData.email}</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        id="location"
                        value={userData.location}
                        onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                      />
                    ) : (
                      <span>{userData.location}</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gardenType">Garden Type</Label>
                    {isEditing ? (
                      <Input
                        id="gardenType"
                        value={userData.gardenType}
                        onChange={(e) => setUserData({ ...userData, gardenType: e.target.value })}
                      />
                    ) : (
                      <div className="p-2 bg-muted/30 rounded">{userData.gardenType}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="growingZone">Growing Zone</Label>
                    {isEditing ? (
                      <Input
                        id="growingZone"
                        value={userData.growingZone}
                        onChange={(e) => setUserData({ ...userData, growingZone: e.target.value })}
                      />
                    ) : (
                      <div className="p-2 bg-muted/30 rounded">{userData.growingZone}</div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={userData.bio}
                      onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                      rows={4}
                    />
                  ) : (
                    <div className="p-3 bg-muted/30 rounded">{userData.bio}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive plant care reminders via email</p>
                </div>
                <Switch
                  checked={userData.preferences.emailNotifications}
                  onCheckedChange={(checked) =>
                    setUserData({
                      ...userData,
                      preferences: { ...userData.preferences, emailNotifications: checked },
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                </div>
                <Switch
                  checked={userData.preferences.pushNotifications}
                  onCheckedChange={(checked) =>
                    setUserData({
                      ...userData,
                      preferences: { ...userData.preferences, pushNotifications: checked },
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Weekly Garden Reports</h4>
                  <p className="text-sm text-muted-foreground">Receive a summary of your garden activity</p>
                </div>
                <Switch
                  checked={userData.preferences.weeklyReports}
                  onCheckedChange={(checked) =>
                    setUserData({
                      ...userData,
                      preferences: { ...userData.preferences, weeklyReports: checked },
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Public Profile</h4>
                  <p className="text-sm text-muted-foreground">Allow other gardeners to view your profile</p>
                </div>
                <Switch
                  checked={userData.preferences.publicProfile}
                  onCheckedChange={(checked) =>
                    setUserData({
                      ...userData,
                      preferences: { ...userData.preferences, publicProfile: checked },
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
