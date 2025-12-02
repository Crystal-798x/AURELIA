import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import serumImg from '../assets/product-serum.png';
import creamImg from '../assets/product-cream.png';
import essenceImg from '../assets/product-essence.png';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Luminous Gold Serum',
            price: '$128',
            desc: '24k Gold infused radiance booster',
            image: serumImg,
        },
        {
            id: 2,
            name: 'Velvet Night Cream',
            price: '$145',
            desc: 'Deep restorative overnight treatment',
            image: creamImg,
        },
        {
            id: 3,
            name: 'Crystal Essence',
            price: '$95',
            desc: 'Pure hydration with rare orchid',
            image: essenceImg,
        },
        {
            id: 4,
            name: 'Diamond Eye Serum',
            price: '$118',
            desc: 'Intensive anti-aging eye treatment',
            image: serumImg,
        },
        {
            id: 5,
            name: 'Pearl Glow Mask',
            price: '$89',
            desc: 'Instant luminosity boost',
            image: creamImg,
        },
        {
            id: 6,
            name: 'Rose Elixir',
            price: '$105',
            desc: 'Timeless beauty in a bottle',
            image: essenceImg,
        },
        // Duplicated for better looping
        {
            id: 7,
            name: 'Luminous Gold Serum',
            price: '$128',
            desc: '24k Gold infused radiance booster',
            image: serumImg,
        },
        {
            id: 8,
            name: 'Velvet Night Cream',
            price: '$145',
            desc: 'Deep restorative overnight treatment',
            image: creamImg,
        },
        {
            id: 9,
            name: 'Crystal Essence',
            price: '$95',
            desc: 'Pure hydration with rare orchid',
            image: essenceImg,
        },
        {
            id: 10,
            name: 'Diamond Eye Serum',
            price: '$118',
            desc: 'Intensive anti-aging eye treatment',
            image: serumImg,
        },
        {
            id: 11,
            name: 'Pearl Glow Mask',
            price: '$89',
            desc: 'Instant luminosity boost',
            image: creamImg,
        },
        {
            id: 12,
            name: 'Rose Elixir',
            price: '$105',
            desc: 'Timeless beauty in a bottle',
            image: essenceImg,
        },
    ];

    return (
        <section className="w-full py-32 bg-lavender relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-gold font-sans tracking-[0.2em] text-sm mb-4 uppercase">
                        Our Collection
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-midnight">
                        Curated for Perfection
                    </h3>
                </div>

                <div className="relative px-12"> {/* Container for arrows */}
                    <Swiper
                        modules={[Autoplay, EffectCoverflow, Mousewheel, Navigation]}
                        effect={'coverflow'}
                        grabCursor={false} // Disabled grab cursor
                        allowTouchMove={false} // Disabled manual dragging
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        mousewheel={{
                            forceToAxis: true,
                            sensitivity: 1,
                            releaseOnEdges: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={1000}
                        loop={true}
                        className="w-full py-10"
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                            1536: { slidesPerView: 3 },
                        }}
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index} className="max-w-sm">
                                <motion.div
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/30 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 relative group overflow-hidden shadow-2xl shadow-midnight/5 flex flex-col items-center text-center h-full"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-72 w-full mb-8 rounded-2xl overflow-hidden bg-gradient-to-b from-white/60 to-white/20 p-4 flex items-center justify-center shadow-inner">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-auto object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 drop-shadow-xl"
                                        />

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center flex-grow justify-between w-full">
                                        <div className="mb-6">
                                            <h4 className="font-serif text-2xl text-midnight mb-3 group-hover:text-gold transition-colors duration-300">
                                                {product.name}
                                            </h4>
                                            <p className="font-sans text-sm text-midnight/70">
                                                {product.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-center gap-4 w-full">
                                            <span className="font-serif text-2xl text-midnight font-medium">
                                                {product.price}
                                            </span>
                                            <button className="w-full py-3 bg-midnight text-white rounded-full text-sm font-medium hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-gold/30 uppercase tracking-wider">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev-custom absolute top-1/2 -left-4 md:-left-12 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-midnight hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer shadow-lg -translate-y-1/2 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="swiper-button-next-custom absolute top-1/2 -right-4 md:-right-12 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-midnight hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer shadow-lg -translate-y-1/2 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
