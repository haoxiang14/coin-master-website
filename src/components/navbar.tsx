"use client"

import { Bot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/coin-master.jpg" alt="CoinMaster" />
              <AvatarFallback className="bg-gray-600">
                <Bot className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold text-white"> CoinMaster </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex font-bold">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#features" className="text-gray-300 hover:text-white px-4 py-2">
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#stats" className="text-gray-300 hover:text-white px-4 py-2">
                  Stats
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/roadmap" className="text-gray-300 hover:text-white px-4 py-2">
                  Roadmap
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="bg-transparent border-gray-700">
                <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gray-900">
              <nav className="flex flex-col gap-4">
                <Link href="#features" className="text-gray-300 hover:text-white px-4 py-2 text-lg">
                  Features
                </Link>
                <Link href="#stats" className="text-gray-300 hover:text-white px-4 py-2 text-lg">
                  Stats
                </Link>
                <Link href="/roadmap" className="text-gray-300 hover:text-white px-4 py-2 text-lg">
                  Roadmap
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Button
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold"
            onClick={() => window.open("https://t.me/coin_master_chainbot", "_blank")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

