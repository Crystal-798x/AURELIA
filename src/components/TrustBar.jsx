import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

const TrustBar = () => {
    const brands = [
        'VOGUE', 'ELLE', 'Harper\'s BAZAAR', 'Marie Claire', 'Cosmopolitan', 'Vanity Fair', 'Glamour', 'Allure'
    ];

    return (
        <section className="w-full py-12 bg-white border-b border-gold/10">
            <div className="max-w-[1440px] mx-auto px-8 mb-8 flex justify-center">
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.2
                            }}
                            className="text-gold text-xl"
                        >
                            ★
                        </motion.div>
                    ))}
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                }}
                className="w-full opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <span className="font-serif text-2xl md:text-3xl text-midnight/80 hover:text-gold transition-colors duration-300 cursor-default">
                            {brand}
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TrustBar;
