import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const TrustBar = () => {
    // Mock review data
    const reviews = [
        {
            id: 1,
            name: 'Sophie Anderson',
            rating: 5,
            date: 'November 2024',
            text: 'Absolutely transformative! The serum gave me glowing skin within weeks. The quality is exceptional and you can truly feel the luxury in every application.',
            verified: true,
            initials: 'SA'
        },
        {
            id: 2,
            name: 'Emily Chen',
            rating: 5,
            date: 'November 2024',
            text: 'I\'ve tried countless skincare brands, but AURÉLIA stands out. The results are visible, the packaging is gorgeous, and the textures are divine.',
            verified: true,
            initials: 'EC'
        },
        {
            id: 3,
            name: 'Isabella Martinez',
            rating: 5,
            date: 'October 2024',
            text: 'Worth every penny! My skin has never looked better. The attention to detail and premium ingredients make all the difference.',
            verified: true,
            initials: 'IM'
        },
        {
            id: 4,
            name: 'Grace Thompson',
            rating: 5,
            date: 'October 2024',
            text: 'Finally found my holy grail products! The glow is real and the formula feels so luxurious. I get compliments on my skin daily now.',
            verified: true,
            initials: 'GT'
        },
        {
            id: 5,
            name: 'Olivia Williams',
            rating: 5,
            date: 'September 2024',
            text: 'Premium quality that delivers on its promises. My skin feels nourished, looks radiant, and the scent is beautifully subtle.',
            verified: true,
            initials: 'OW'
        }
    ];

    const averageRating = 4.9;
    const totalReviews = 1247;

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-cream/30 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-lavender rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Trust Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    {/* Star Rating Display */}
                    <div className="flex justify-center items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.1,
                                    type: 'spring',
                                    stiffness: 200
                                }}
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                className="text-gold text-3xl md:text-4xl lg:text-5xl drop-shadow-lg"
                            >
                                ★
                            </motion.div>
                        ))}
                    </div>

                    {/* Rating Score */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-midnight mb-3"
                    >
                        {averageRating} out of 5
                    </motion.h2>

                    {/* Excellence Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 rounded-full mb-4"
                    >
                        <span className="text-gold text-lg">★</span>
                        <span className="font-semibold text-midnight">Excellent</span>
                    </motion.div>

                    {/* Review Count */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="text-midnight/60 text-sm md:text-base"
                    >
                        Based on <span className="font-semibold text-midnight">{totalReviews.toLocaleString()}+ verified reviews</span>
                    </motion.p>
                </motion.div>

                {/* Reviews Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24
                            },
                            1536: {
                                slidesPerView: 3,
                                spaceBetween: 32
                            },
                        }}
                        className="pb-20 md:pb-24"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={review.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group h-full mb-8"
                                >
                                    <div className="h-full bg-white/80 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-500 flex flex-col">
                                        {/* Review Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            {/* Avatar */}
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gold via-roseGold to-lavender flex items-center justify-center flex-shrink-0 shadow-md">
                                                <span className="text-white font-serif font-semibold text-sm md:text-base">
                                                    {review.initials}
                                                </span>
                                            </div>

                                            {/* Name and Stars */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                    <h3 className="font-serif font-semibold text-midnight text-base md:text-lg truncate">
                                                        {review.name}
                                                    </h3>
                                                    {review.verified && (
                                                        <span className="flex-shrink-0 text-xs text-gold border border-gold/30 px-2 py-0.5 rounded-full">
                                                            ✓ Verified
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-1 mb-1">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <span key={i} className="text-gold text-sm md:text-base">★</span>
                                                    ))}
                                                </div>
                                                <p className="text-xs md:text-sm text-midnight/50">
                                                    {review.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-midnight/80 text-sm md:text-base leading-relaxed flex-1">
                                            "{review.text}"
                                        </p>

                                        {/* Hover Effect Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-lavender/0 group-hover:from-gold/5 group-hover:to-lavender/5 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Trust Metrics Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8 md:mt-12"
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-gold/10">
                        <span className="text-gold text-xl">★</span>
                        <span className="text-sm md:text-base text-midnight/70">
                            <span className="font-semibold text-midnight">98%</span> 5-Star Reviews
                        </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-gold/10">
                        <span className="text-gold text-xl">✓</span>
                        <span className="text-sm md:text-base text-midnight/70">
                            All Reviews <span className="font-semibold text-midnight">Verified</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-gold/10">
                        <span className="text-gold text-xl">♥</span>
                        <span className="text-sm md:text-base text-midnight/70">
                            <span className="font-semibold text-midnight">Loved</span> by Beauty Experts
                        </span>
                    </div>
                </motion.div>
            </div>

        </section >
    );
};

export default TrustBar;
