"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  LineChart,
  Lock,
  Zap,
  CircleCheckBig,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "./navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Background } from "./background";

export default function TradingBot() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0">
        <Background />
      </div>

      <div className="relative z-10 min-h-screen bg-gradient-to-b from-black/50 to-black/80">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16 relative">
          {/* Hero Section */}
          <div className="text-center mt-20 mb-16 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="p-8 rounded-2xl flex flex-col items-center relative">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 
                      bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 
                      text-transparent bg-clip-text 
                      animate-text-shimmer relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}>
              CoinMaster Bot
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              Your DeFAI companion powered by agentic reasoning and real-time
              market analysis
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 
                        hover:from-amber-600 hover:to-yellow-600
                        text-black font-bold
                        px-6 py-4 md:px-8 md:py-6 
                        text-base md:text-lg 
                        rounded-full 
                        transition-all duration-300 
                        hover:scale-105
                        hover:shadow-lg hover:shadow-amber-500/25
                        flex items-center gap-2"
                onClick={() =>
                  window.open("https://t.me/coin_master_chainbot", "_blank")
                }>
                <Bot className="h-5 w-5" />
                Start Trading with Our Bot
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          </div>

          {/* Features Grid */}
          <div id="features" className="relative z-20 grid mt-10 grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: (
                <LineChart className="h-12 w-12 mb-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
              ),
              title: "AI Analysis & Insights",
              description:
                "Real-time market analysis and predictive modeling for optimal trading decisions",
            },
            {
              icon: (
                <Zap className="h-12 w-12 mb-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
              ),
              title: "Ease of Use",
              description: "Execute any trades easily on BNB Chain",
            },
            {
              icon: (
                <CircleCheckBig className="h-12 w-12 mb-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
              ),
              title: "Easy Onboarding",
              description:
                "Use Telegram to perform any execution, no worries if you are newbie",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}>
              <Card
                className="bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90 
                            border-amber-500/20 hover:border-amber-500/40 
                            transition-all duration-300
                            backdrop-blur-sm relative overflow-hidden group
                            hover:transform hover:scale-105
                            hover:shadow-lg hover:shadow-amber-500/10">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <CardContent className="p-6 relative z-10">
                  {feature.icon}
                  <h3
                    className="text-amber-100 text-xl font-bold mb-2 
                               group-hover:text-amber-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p
                    className="text-amber-100/60 group-hover:text-amber-100/80 
                              transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>

          {/* Stats Section */}
          <div id="stats" className="relative z-20 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["1%", "10K+", "10+"].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm
               border border-amber-500/20 hover:border-amber-500/40
               transform hover:scale-105 transition-all duration-300
               relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <h4
                className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 
                   text-transparent bg-clip-text animate-text-shimmer mb-2">
                {stat}
              </h4>
              <p className="text-amber-200/80">
                {index === 0
                  ? "Trading Fees"
                  : index === 1
                  ? "Assets Supported on BNB Chain"
                  : "Active Users"}
              </p>
            </motion.div>
          ))}
          </div>

          {/* CTA Section */}
          <motion.div className="relative z-20 flex justify-center items-center w-full mb-16">
          <div className="w-full max-w-4xl">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 
                border border-amber-500/30
                p-8 md:p-12 rounded-2xl 
                backdrop-blur-sm
                flex flex-col items-center
                relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 
                     animate-gradient-x"></div>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6
                    bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 
                    text-transparent bg-clip-text animate-text-shimmer">
                  Ready to Start Trading Smarter?
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-amber-100/90">
                  Make millions on BNB Chain using Coin Master
                </p>

                <Button
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://t.me/coin_master_chainbot",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 
                  hover:from-amber-600 hover:to-yellow-600
                  text-black font-bold
                  px-8 py-6 
                  text-lg 
                  rounded-full 
                  transition-all duration-300 
                  flex items-center gap-3
                  shadow-lg shadow-amber-500/25
                  hover:shadow-amber-500/40
                  hover:scale-105 hover:brightness-110
                  relative z-20">
                  <Bot className="h-6 w-6" />
                  Connect with Our Bot
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
