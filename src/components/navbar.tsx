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
    <header className="fixed w-full top-0 z-50 border-b border-amber-500/20 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Avatar className="border-2 border-amber-500/50 group-hover:border-amber-400 transition-colors duration-300">
              <AvatarImage src="/coin-master.jpg" alt="CoinMaster" />
              <AvatarFallback className="bg-gradient-to-br from-amber-400 to-yellow-500">
                <Bot className="h-8 w-8 text-black" />
              </AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 text-transparent bg-clip-text animate-text-shimmer">
              CoinMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex font-bold">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="#features" className="text-amber-200/80 hover:text-amber-300 px-4 py-2 transition-colors duration-300">
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#stats" className="text-amber-200/80 hover:text-amber-300 px-4 py-2 transition-colors duration-300">
                  Stats
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#roadmap" className="text-amber-200/80 hover:text-amber-300 px-4 py-2 transition-colors duration-300">
                  Roadmap
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10">
                <svg className="h-6 w-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-gradient-to-b from-gray-900 to-black border-l border-amber-500/20">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#features" 
                  className="text-amber-200/80 hover:text-amber-300 px-4 py-2 text-lg hover:bg-amber-500/10 rounded-lg transition-all duration-300">
                  Features
                </Link>
                <Link href="#stats" 
                  className="text-amber-200/80 hover:text-amber-300 px-4 py-2 text-lg hover:bg-amber-500/10 rounded-lg transition-all duration-300">
                  Stats
                </Link>
                <Link href="#roadmap" 
                  className="text-amber-200/80 hover:text-amber-300 px-4 py-2 text-lg hover:bg-amber-500/10 rounded-lg transition-all duration-300">
                  Roadmap
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Button
            className="hidden md:inline-flex bg-gradient-to-r from-amber-500 to-yellow-500 
                      hover:from-amber-600 hover:to-yellow-600 text-black font-bold
                      transition-all duration-300 hover:scale-105
                      shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
            onClick={() => window.open("https://t.me/coin_master_chainbot", "_blank")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}