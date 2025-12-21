import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import modelImg from '../assets/skincare-model.png';
import modelImgBefore from '../assets/skincare-model-before.png';

const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <img
                    src={modelImg}
                    alt="After"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                    <span className="font-serif text-white tracking-widest">AFTER</span>
                </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={modelImgBefore}
                    alt="Before"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="font-serif text-white tracking-widest">BEFORE</span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-gold/50 flex items-center justify-center">
                        <div className="w-1 h-4 bg-gold/50 mx-[1px]" />
                        <div className="w-1 h-4 bg-gold/50 mx-[1px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-blueGlow relative">
            <div className="max-w-[1440px] mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-gold font-sans tracking-[0.2em] text-sm mb-4 uppercase">
                            Transformative Results
                        </h2>
                        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight mb-6 md:mb-8">
                            Visible Radiance in <br /> Just 7 Days
                        </h3>
                        <p className="font-sans text-base md:text-lg text-midnight/70 leading-relaxed mb-6 md:mb-8">
                            Experience the power of our advanced formula. 98% of users reported significantly brighter, smoother, and more hydrated skin within one week of daily use.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: 'Hydration', value: '98%' },
                                { label: 'Brightness', value: '95%' },
                                { label: 'Texture', value: '92%' },
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-serif text-midnight">{stat.label}</span>
                                        <span className="font-sans font-bold text-gold">{stat.value}</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: stat.value }}
                                            transition={{ duration: 1.5, delay: 0.2 * index }}
                                            className="h-full bg-gold"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Before/After */}
                    <div className="w-full lg:w-1/2">
                        <BeforeAfter />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
