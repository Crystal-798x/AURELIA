import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-br from-midnight via-midnight to-midnight/95 text-white pt-24 pb-8 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h3 className="font-serif text-3xl md:text-4xl mb-4 text-gold">Stay Radiant</h3>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Subscribe to receive exclusive offers, skincare tips, and early access to new collections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-gold transition-all"
                        />
                        <button className="px-8 py-3 bg-gold text-midnight font-medium rounded-full hover:bg-gold/90 transition-all shadow-lg hover:shadow-gold/50">
                            Subscribe
                        </button>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-serif text-4xl font-bold mb-6 tracking-widest text-gold">AURÉLIA</h2>
                        <p className="font-sans text-white/70 leading-relaxed mb-6">
                            Where science meets pure skin radiance. Redefining luxury skincare with dermatological excellence.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
                                >
                                    <span className="text-white/60 group-hover:text-midnight text-xs font-medium">
                                        {social[0]}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-gold">Shop</h3>
                        <ul className="space-y-3 font-sans text-white/60">
                            {['All Products', 'Best Sellers', 'Sets & Bundles', 'Gift Cards'].map(item => (
                                <li key={item} className="hover:text-gold hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl mb-6 text-gold">Company</h3>
                        <ul className="space-y-3 font-sans text-white/60">
                            {['Our Story', 'Ingredients', 'Sustainability', 'Careers'].map(item => (
                                <li key={item} className="hover:text-gold hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl mb-6 text-gold">Support</h3>
                        <ul className="space-y-3 font-sans text-white/60">
                            {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map(item => (
                                <li key={item} className="hover:text-gold hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-white/40 text-sm">
                        © 2024 Aurélia Cosmetics. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="font-sans text-white/40 hover:text-gold transition-colors cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-sans text-white/40 text-sm">Made with</span>
                        <span className="text-gold text-lg">✨</span>
                        <span className="font-sans text-white/40 text-sm">Elegance</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
