import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section className="w-full bg-blush relative overflow-hidden" style={{ padding: 'clamp(3rem, 8vw, 8rem) 0' }}>
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-roseGold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-[85%] mx-auto relative p-[2px] rounded-3xl overflow-hidden"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent animate-spin-slow opacity-50" />

                    {/* Card Content */}
                    <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-soft" style={{ padding: 'clamp(2rem, 5vw, 5rem)' }}>
                        <h2 className="text-center font-serif text-4xl md:text-5xl text-midnight mb-12">
                            The Art of <span className="italic text-gold">Luminescence</span>
                        </h2>

                        <div className="space-y-8 text-center md:text-left">
                            <p className="font-sans text-lg md:text-xl leading-relaxed text-midnight/80">
                                At Aurélia, we believe that true radiance comes from a harmonious balance of nature and scientific innovation. Our formulas are crafted with the rarest botanicals, enhanced by cutting-edge dermatological research to deliver results that are as visible as they are feeling.
                            </p>
                            <p className="font-sans text-lg md:text-xl leading-relaxed text-midnight/80 hidden md:block">
                                Every drop is a promise of purity, designed not just to treat the skin, but to elevate your daily ritual into a moment of pure luxury. We don't just create cosmetics; we engineer confidence through the science of beauty.
                            </p>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="text-gold font-serif italic text-xl border-b border-gold pb-1 hover:text-midnight transition-colors duration-300">
                                Discover Our Story
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
