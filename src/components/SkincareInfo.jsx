import React from 'react';
import { motion } from 'framer-motion';
import modelImage from '../assets/skincare-model.png';

const SkincareInfo = () => {
    const text = "Advanced dermatological science meets nature's purest essences.";
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row bg-nude overflow-hidden">
            {/* Left Text Content */}
            <div className="w-full md:w-[55%] flex flex-col justify-center px-8 md:pl-24 py-20">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-gold font-sans tracking-[0.2em] text-sm mb-6 uppercase">
                        The Science of Beauty
                    </h2>

                    <h3 className="font-serif text-4xl md:text-6xl text-midnight leading-tight mb-8">
                        {words.map((word, index) => (
                            <motion.span
                                variants={child}
                                style={{ marginRight: "0.25em", display: "inline-block" }}
                                key={index}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="font-sans text-lg text-midnight/70 max-w-xl leading-relaxed mb-10"
                    >
                        Our proprietary formula penetrates deep into the dermal layers, activating your skin's natural renewal process. Enriched with 24k gold particles and rare orchid extracts, it delivers hydration that lasts 72 hours.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="px-8 py-3 border-b border-midnight text-midnight hover:text-gold hover:border-gold transition-all duration-300 font-serif italic text-xl w-max"
                    >
                        Explore the Science
                    </motion.button>
                </motion.div>
            </div>

            {/* Right Image Content */}
            <div className="w-full md:w-[45%] h-[50vh] md:h-screen relative">
                <div className="absolute inset-0 bg-gradient-to-t from-nude via-transparent to-transparent z-10 md:hidden" />

                <motion.div
                    className="w-full h-full relative"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <img
                        src={modelImage}
                        alt="Glowing Skin Model"
                        className="w-full h-full object-cover"
                    />

                    {/* Glowing Edge Effect */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(252,231,239,0.5)] pointer-events-none" />

                    {/* Floating Animation Wrapper */}
                    <div className="absolute inset-0 animate-float pointer-events-none mix-blend-overlay bg-gradient-to-tr from-pink-200/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default SkincareInfo;
