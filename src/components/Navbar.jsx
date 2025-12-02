import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const nav = navRef.current;

        // Initial animation
        gsap.fromTo(nav,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        // Scroll animation
        ScrollTrigger.create({
            start: 'top top',
            end: 99999,
            onUpdate: (self) => {
                if (self.scroll() > 50) {
                    gsap.to(nav, {
                        height: '60px',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(30px) saturate(180%)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        duration: 0.3
                    });
                } else {
                    gsap.to(nav, {
                        height: '70px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(20px) saturate(150%)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        duration: 0.3
                    });
                }
            }
        });
    }, []);

    const links = ['Home', 'About Us', 'Products', 'Services'];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 border-b border-gold/20 h-[70px] transition-all duration-300 backdrop-blur-xl bg-white/40"
                style={{ WebkitBackdropFilter: 'blur(20px)' }}
            >
                {/* Hamburger Menu Button (Mobile/Tablet) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-midnight block transition-all"
                    />
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-midnight block transition-all"
                    />
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-midnight block transition-all"
                    />
                </button>

                {/* Left Links (Desktop) */}
                <div className="hidden lg:flex space-x-8">
                    {links.map((link, index) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            className="text-midnight/80 hover:text-gold transition-colors duration-300 font-sans text-sm tracking-wide"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Logo (Center) */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <h1 className="font-serif text-2xl font-bold tracking-widest text-midnight">
                        AURÉLIA
                    </h1>
                </div>

                {/* Right Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="hidden lg:block px-6 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-full text-sm font-medium">
                        Login
                    </button>
                    <button className="px-4 md:px-6 py-2 bg-gold text-white hover:bg-gold-dark transition-all duration-300 rounded-full text-sm font-medium shadow-glow">
                        Signup
                    </button>
                </div>
            </nav>

            {/* Mobile/Tablet Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-4/5 max-w-sm h-screen bg-white/95 backdrop-blur-2xl z-40 shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col pt-24 px-8 space-y-6">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-midnight text-2xl font-serif hover:text-gold transition-colors duration-300 border-b border-gold/20 pb-4"
                                >
                                    {link}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: links.length * 0.1 }}
                                className="w-full px-6 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-full text-sm font-medium mt-8"
                            >
                                Login
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
