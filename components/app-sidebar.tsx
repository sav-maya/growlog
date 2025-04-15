"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Leaf, Calendar, Bell, Database, User, PlusCircle, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader className="pb-0">
        <div className="flex items-center px-2 py-3">
          <Leaf className="h-6 w-6 text-green-600 mr-2" />
          <span className="text-xl font-bold text-green-800">GrowLog</span>
          <SidebarTrigger className="ml-auto md:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/")}>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/plants")}>
              <Link href="/plants">
                <Leaf className="h-5 w-5" />
                <span>My Plants</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/calendar")}>
              <Link href="/calendar">
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/reminders")}>
              <Link href="/reminders">
                <Bell className="h-5 w-5" />
                <span>Reminders</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/plant-database")}>
              <Link href="/plant-database">
                <Database className="h-5 w-5" />
                <span>Plant Database</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button asChild variant="default" className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/add-plant">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Plant
              </Link>
            </Button>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/profile")}>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
