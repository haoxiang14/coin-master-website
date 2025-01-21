'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const CoinPile = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{
                scale: 1.05,
                filter: "brightness(1.2)",
                transition: { duration: 0.2 }
            }}
            className="fixed bottom-0 right-0 z-10 w-[200px] h-[200px] 
                                 md:w-[300px] md:h-[300px] 
                                 pointer-events-auto
                                 opacity-80 hover:opacity-100
                                 transition-all duration-300
                                 group"
        >
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "radial-gradient(circle, rgba(255,215,0,0) 0%, rgba(255,215,0,0) 100%)",
                        "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 50%)",
                        "radial-gradient(circle, rgba(255,215,0,0) 0%, rgba(255,215,0,0) 100%)"
                    ]
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <Image
                src="/coins.png"
                alt="Pile of gold coins"
                fill
                style={{ objectFit: 'contain' }}
                className="drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]
                                    group-hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]
                                    transition-all duration-300"
                priority
            />
        </motion.div>
    );
};