"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, LineChart, Lock, Zap, CircleCheckBig } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "./navbar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function TradingBot() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
              CoinMaster Bot
            </h1>
            {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text flex items-center justify-center">C <Avatar className="mx-1 w-6 h-6 lg:w-10 lg:h-10 "><AvatarImage src="/coin-master.jpg" alt="CoinMaster" /><AvatarFallback className="bg-gray-600"><Bot className="h-8 w-8" /></AvatarFallback></Avatar>inMaster Bot</h1> */}
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your DeFAI companion powered by agentic reasoning and real-time market analysis
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://t.me/coin_master_chainbot", "_blank")}
            >
              <Bot className="mr-2 h-5 w-5" />
              Start Trading with Our Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <LineChart className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-white text-xl font-bold mb-2"> AI Analysis & Insights </h3>
              <p className="text-gray-400">
                Real-time market analysis and predictive modeling for optimal trading decisions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-white text-xl font-bold mb-2"> Ease of Use </h3>
              <p className="text-gray-400">Execute any trades easily on BNB Chain </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <CircleCheckBig className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-white text-xl font-bold mb-2"> Easy Onboarding </h3>
              <p className="text-gray-400"> Use Telegram to perform any execution, no worries if you are newbie</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div id="stats" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h4 className="text-4xl font-bold text-blue-500 mb-2"> 1% </h4>
            <p className="text-gray-400">Trading Fees</p>
          </div>
         
          <div className="text-center">
            <h4 className="text-4xl font-bold text-blue-500 mb-2"> 10K+ </h4>
            <p className="text-gray-400"> Assets Supported on BNB Chain </p>
          </div>

          <div className="text-center">
            <h4 className="text-4xl font-bold text-blue-500 mb-2"> 10+ </h4>
            <p className="text-gray-400">Active Users</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading Smarter?</h2>
            <p className="text-xl mb-6 text-gray-200">Join thousands of successful traders using TradeMaster Pro Bot</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://t.me/coin_master_chainbot", "_blank")}
            >
              <Bot className="mr-2 h-5 w-5" />
              Connect with Our Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

