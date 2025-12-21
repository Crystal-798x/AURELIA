import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        notification
    } = useCart();

    // Body Scroll Lock
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'; // Prevent layout shift
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isCartOpen]);

    return (
        <>
            {/* Toast Notification */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
                        className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[110] bg-midnight/90 backdrop-blur-xl text-white px-8 py-3 rounded-full border border-gold/30 shadow-2xl flex items-center justify-center whitespace-nowrap"
                    >
                        <span className="font-sans text-sm font-medium tracking-wide">{notification}</span>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Floating Liquid Orb Trigger */}
            <motion.button
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-glow z-50 text-white group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark to-gold-light animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div className="relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {cartCount > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 bg-midnight text-white text-[10px] font-bold w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center"
                        >
                            {cartCount}
                        </motion.span>
                    )}
                </motion.div>
            </motion.button>

            {/* Radiant Expansion Modal */}
            <AnimatePresence>
                {isCartOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop with extreme blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="absolute inset-0 bg-midnight/30 backdrop-blur-3xl"
                        />

                        {/* Centered Expanding Card */}
                        <motion.div
                            layoutId="cart-orb"
                            initial={{
                                opacity: 0,
                                scale: 0.2,
                                borderRadius: '100%'
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                borderRadius: '2rem'
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.2,
                                borderRadius: '100%'
                            }}
                            className="relative w-full max-w-2xl h-[80vh] bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl flex flex-col overflow-hidden"
                            style={{ WebkitBackdropFilter: 'blur(40px)' }}
                        >
                            {/* Header */}
                            <div className="p-8 border-b border-white/20 flex items-center justify-between">
                                <h2 className="font-serif text-3xl text-midnight font-bold tracking-tight">Your Selection</h2>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-midnight">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Cart Items List */}
                            <div className="flex-1 overflow-y-auto px-8 py-4 custom-scrollbar">
                                {cartItems.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        <p className="font-serif text-xl italic">Your selection is currently empty</p>
                                        <button
                                            onClick={() => setIsCartOpen(false)}
                                            className="text-gold border-b border-gold font-sans text-sm tracking-widest uppercase pb-1"
                                        >
                                            Return to Shop
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {cartItems.map((item) => (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                className="flex items-center gap-6 p-4 bg-white/30 rounded-2xl border border-white/20 group hover:bg-white/50 transition-all"
                                            >
                                                <div className="w-24 h-24 bg-white/50 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-md" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-serif text-xl text-midnight font-semibold">{item.name}</h3>
                                                    <p className="text-sm text-midnight/60 mb-2">{item.desc}</p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3 bg-white/40 px-3 py-1.5 rounded-full border border-white/30">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="w-6 h-6 flex items-center justify-center hover:text-gold"
                                                            >
                                                                −
                                                            </button>
                                                            <span className="font-sans font-bold text-sm w-4 text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="w-6 h-6 flex items-center justify-center hover:text-gold"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <span className="font-serif text-xl text-midnight font-bold">{item.price}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 hover:scale-110"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Summary & Checkout */}
                            {cartItems.length > 0 && (
                                <div className="p-8 bg-midnight/5 border-t border-white/20">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-sans text-midnight/60 font-medium uppercase tracking-widest text-sm">Estimated Total</span>
                                        <span className="font-serif text-3xl text-midnight font-bold">
                                            ${cartTotal.toFixed(2)}
                                        </span>
                                    </div>
                                    <button className="w-full py-5 bg-midnight text-white rounded-2xl font-bold tracking-[0.2em] uppercase hover:bg-gold transition-all duration-500 shadow-xl overflow-hidden relative group">
                                        <span className="relative z-10">Proceed to Checkout</span>
                                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                    <p className="text-center text-xs text-midnight/40 mt-4 font-sans tracking-wide">
                                        Free express shipping on all orders over $200
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;
