"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Leaf, Calendar, Bell, Database, User, PlusCircle, Menu, X, Search } from "lucide-react"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "My Plants", path: "/plants", icon: Leaf },
    { name: "Calendar", path: "/calendar", icon: Calendar },
    { name: "Reminders", path: "/reminders", icon: Bell },
    { name: "Plant Database", path: "/plant-database", icon: Database },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-16 items-center fixed top-0 left-0 right-0 z-30 bg-white border-b dark:bg-gray-900 dark:border-gray-800 px-4 lg:px-6">
        <div className="flex items-center flex-1 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center mr-6">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-xl font-bold text-green-800 dark:text-green-300">GrowLog</span>
          </Link>

          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(item.path) ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                )}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search plants..." className="pl-8" />
            </div>

            <SignedIn>
              <Button asChild variant="default" className="bg-green-600 hover:bg-green-700">
                <Link href="/add-plant">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Plant
                </Link>
              </Button>
              
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              
              <SignUpButton mode="modal">
                <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex h-16 items-center fixed top-0 left-0 right-0 z-30 bg-white border-b dark:bg-gray-900 dark:border-gray-800 px-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-xl font-bold text-green-800 dark:text-green-300">GrowLog</span>
          </Link>

          <div className="flex items-center space-x-2">
            <SignedIn>
              <Button asChild variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                <Link href="/add-plant">
                  <PlusCircle className="h-4 w-4" />
                </Link>
              </Button>
              
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </SignInButton>
            </SignedOut>

            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-white dark:bg-gray-900 pt-16 pb-20">
          <div className="px-4 py-6 space-y-6">
            <div className="relative mb-6">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search plants..." className="pl-8" />
            </div>

            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors",
                    isActive(item.path) ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              ))}

              <SignedOut>
                <SignUpButton mode="modal">
                  <Button variant="default" className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
            </nav>
          </div>
        </div>
      )}

      {/* Content Padding for Fixed Header */}
      <div className="h-16"></div>
    </>
  )
}
