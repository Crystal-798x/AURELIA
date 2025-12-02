import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="w-full py-32 bg-roseGold relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Form */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/30 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-white/40 shadow-soft"
                        >
                            <h2 className="font-serif text-4xl text-midnight mb-2">Join the Inner Circle</h2>
                            <p className="font-sans text-midnight/60 mb-10">Unlock exclusive access to new releases and expert tips.</p>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="font-sans text-sm font-medium text-midnight/80">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/50 border border-white/50 rounded-xl px-6 py-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300 placeholder:text-midnight/30"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-sans text-sm font-medium text-midnight/80">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/50 border border-white/50 rounded-xl px-6 py-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300 placeholder:text-midnight/30"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <button className="w-full py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-pulse-slow">
                                    Subscribe to Radiance
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 className="font-serif text-5xl md:text-6xl text-midnight mb-8 leading-tight">
                            Beauty is a <br />
                            <span className="italic text-white">Conversation.</span>
                        </h3>

                        <div className="grid grid-cols-2 gap-6">
                            {['Instagram', 'TikTok', 'Pinterest', 'YouTube'].map((social, index) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    className="flex items-center justify-center h-32 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/40 transition-all duration-300 group"
                                >
                                    <span className="font-serif text-xl text-midnight group-hover:text-white transition-colors duration-300">
                                        {social}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
