"use client"

import { motion } from "framer-motion"
import { AlertCircle, ArrowRight, Bot, Copy, LineChart, Users } from "lucide-react"
import { Background } from "./background"

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "User Onboarding",
      description: "Test product and onboard users to see the market demand.",
      icon: Users,
      color: "from-amber-500 to-yellow-500",
    },
    {
      phase: "Phase 2",
      title: "Product Development",
      description: "Get user feedbacks and understand what users really want (especially traders)",
      icon: Bot,
      color: "from-amber-400 to-yellow-400",
    },
    {
      phase: "Phase 3",
      title: "Enhance Product Offering",
      description: "Expand features to more than buy/sell. Include alerts and copy trades",
      icon: AlertCircle,
      color: "from-yellow-500 to-amber-500",
    },
    {
      phase: "Phase 4",
      title: "Scale",
      description: "Onboard more users, expand through data driven iteration",
      icon: LineChart,
      color: "from-amber-600 to-yellow-600",
    },
  ]

  return (
    <div id="roadmap" className="min-h-screen bg-black/90 text-white relative">
      <Background />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 
                          bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 
                          text-transparent bg-clip-text animate-text-shimmer">
              Our Roadmap
            </h1>
            <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
              Follow our journey as we build the future of automated trading
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 
                         bg-gradient-to-b from-amber-500 to-yellow-500 
                         transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center 
                           ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90 
                              p-8 rounded-2xl border border-amber-500/20 
                              hover:border-amber-500/40 transition-all duration-300
                              backdrop-blur-sm relative overflow-hidden group">
                    <div className={`inline-flex items-center justify-center w-12 h-12 
                                   rounded-full bg-gradient-to-r ${phase.color} mb-4
                                   shadow-lg shadow-amber-500/25`}>
                      <phase.icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-2">{phase.phase}</h3>
                    <h4 className="text-2xl font-bold mb-4 text-amber-100">{phase.title}</h4>
                    <p className="text-amber-100/60 group-hover:text-amber-100/80 
                                transition-colors duration-300">{phase.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 h-8 
                               rounded-full bg-gradient-to-r from-amber-500 to-yellow-500
                               shadow-lg shadow-amber-500/25">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 
                      border border-amber-500/30 p-8 rounded-2xl 
                      backdrop-blur-sm relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-4 
                          bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 
                          text-transparent bg-clip-text">Join Us On This Journey</h2>
            <p className="text-xl mb-6 text-amber-100/90">
              Be part of our growing community and help shape the future of trading
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 
                        hover:from-amber-600 hover:to-yellow-600
                        text-black font-bold px-8 py-4 rounded-full 
                        transition-all duration-300
                        shadow-lg shadow-amber-500/25 
                        hover:shadow-amber-500/40
                        flex items-center justify-center mx-auto"
              onClick={() => window.open("https://t.me/coin_master_chainbot", "_blank")}>
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}