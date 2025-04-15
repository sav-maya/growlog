import Link from "next/link"
import Image from "next/image"
import { Leaf, Droplets, Calendar, Bell, CheckCircle2 } from "lucide-react"
import { SignInButton, SignUpButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-green-50 to-white dark:from-green-950/30 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-700 dark:text-green-300 mb-2">
                Your personal garden companion
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-green-800 dark:text-green-300">
                Track your plants' growth journey
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
                GrowLog helps you monitor your garden's progress, set reminders, and celebrate each milestone from seed to harvest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
                <SignUpButton mode="modal">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Get Started Free
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button size="lg" variant="outline">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[500px] mx-auto">
              <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden border shadow-xl bg-white dark:bg-gray-800">
                <Image 
                  src="/placeholder.svg?height=600&width=600" 
                  alt="GrowLog app dashboard" 
                  width={600} 
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">Everything you need to nurture your garden</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Track progress, set reminders, and record important milestones for each of your plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Plant Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Document every stage of growth with photos and notes. From seedling to harvest.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Care Reminders</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Never forget to water, fertilize, or prune with smart notifications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Garden Calendar</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Plan your gardening activities with a dedicated calendar for planting and maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials/Benefits Section */}
      <section className="py-16 md:py-24 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">Why gardeners love GrowLog</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">Track growth progress</h3>
                <p className="text-gray-600 dark:text-gray-300">Document each plant's journey with photos and notes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">Smart watering reminders</h3>
                <p className="text-gray-600 dark:text-gray-300">Get notified when it's time to water based on each plant's needs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">Weather integration</h3>
                <p className="text-gray-600 dark:text-gray-300">Local weather forecasts to help plan your gardening activities.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">Plant database</h3>
                <p className="text-gray-600 dark:text-gray-300">Access care instructions for hundreds of plants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">Start tracking your garden today</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of gardeners who use GrowLog to nurture their plants and gardens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton mode="modal">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Create Free Account
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-xl font-bold text-green-800 dark:text-green-300">GrowLog</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} GrowLog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 