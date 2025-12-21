import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-cream">
            {/* Animated Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold/20 rounded-full blur-[120px] animate-float opacity-60" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-blush/40 rounded-full blur-[100px] animate-float opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-blueGlow/20 rounded-full blur-[80px] animate-pulse-slow opacity-40" />

            {/* Left Content */}
            <div className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center lg:items-start px-8 lg:pl-24 z-20 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="pointer-events-auto"
                >
                    <h2 className="text-gold font-sans tracking-[0.2em] text-sm mb-4 uppercase">
                        Ultra-Premium Skincare
                    </h2>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-6xl xl:text-8xl text-midnight leading-tight mb-6 relative">
                        AURÉLIA <br />
                        <span className="relative inline-block">
                            <span className="absolute inset-0 bg-gradient-to-r from-midnight via-purple-900 to-midnight blur-sm opacity-40 -z-10 px-4 py-1"></span>
                            <span className="text-midnight px-4 py-1">
                                COSMETICS
                            </span>
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-sans text-midnight/70 text-lg md:text-xl lg:text-base xl:text-xl max-w-md mb-10 leading-relaxed"
                    >
                        Where Science Meets Pure Skin Radiance. Experience the epitome of luxury and dermatological excellence.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-gold text-white rounded-full font-medium shadow-glow hover:shadow-lg transition-all duration-300"
                        >
                            Shop Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 border border-gold/50 text-midnight rounded-full font-medium hover:bg-white/50 backdrop-blur-sm transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Right 3D Scene - Desktop Only */}
            <div className="hidden lg:block lg:relative lg:w-[55%] h-full z-0 ipad-pro-3d perspective-1000">
                <ThreeScene />
            </div>

        </section>
    );
};

export default Hero;
