"use client"

import { motion } from "framer-motion"
import { AlertCircle, ArrowRight, Bot, Copy, LineChart, Users } from "lucide-react"
import { Navbar } from "./navbar"

export default function Roadmap() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const phases = [
    {
      phase: "Phase 1",
      title: "User Onboarding",
      description: "Test product and onboard users to see the market demand.",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      phase: "Phase 2",
      title: "Product Development",
      description: "Get user feedbacks and understand what users really want (especially traders)",
      icon: Bot,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      phase: "Phase 3",
      title: "Enhance Product Offering",
      description: "Expand features to more than buy/sell. Include alerts and copy trades",
      icon: AlertCircle,
      color: "from-violet-500 to-violet-600",
    },
    {
      phase: "Phase 4",
      title: "Scale",
      description: "Onboard more users, expand through data driven iteration",
      icon: LineChart,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
              Our Roadmap
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow our journey as we build the future of automated trading
            </p>
          </motion.div>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block" />

          {/* Phases */}
          <div className="space-y-12 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Phase Content */}
                  <div className="flex-1">
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} mb-4`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">{phase.phase}</h3>
                      <h4 className="text-2xl font-bold mb-4">{phase.title}</h4>
                      <p className="text-gray-400">{phase.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node - Mobile */}
                  <div className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-blue-500">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Join Us On This Journey</h2>
            <p className="text-xl mb-6 text-gray-200">
              Be part of our growing community and help shape the future of trading
            </p>
            <button
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center mx-auto"
              onClick={() => window.open("https://t.me/your_bot_link", "_blank")}
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

