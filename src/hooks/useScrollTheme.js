import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTheme = (scrollRef) => {
    useEffect(() => {
        if (!scrollRef.current) return;

        const el = scrollRef.current;

        // Sync ScrollTrigger with Locomotive Scroll
        ScrollTrigger.scrollerProxy(el, {
            scrollTop(value) {
                return arguments.length
                    ? window.locomotive?.scrollTo(value, 0, 0)
                    : window.locomotive?.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: el.style.transform ? "transform" : "fixed"
        });

        // Update ScrollTrigger on Locomotive Scroll update
        window.locomotive?.on("scroll", ScrollTrigger.update);

        const sections = el.querySelectorAll('[data-scroll-section]');
        const body = document.body;

        // Define colors for each section
        const colors = [
            '#FFF7EA', // Hero - Cream
            '#FFFFFF', // Trust - White
            '#FCE7EF', // About - Blush
            '#F3E3D3', // Info - Nude
            '#E2DAFF', // Products - Lavender
            '#CDEAFF', // Services - Blue Glow
            '#F7D4C6', // Contact - Rose Gold
            '#1A0827', // Footer - Midnight
        ];

        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                scroller: el, // Important: define scroller
                start: 'top 50%', // Trigger when top of section hits middle of viewport
                end: 'bottom 50%',
                onEnter: () => {
                    gsap.to(body, {
                        backgroundColor: colors[index] || '#FFF7EA',
                        duration: 1.4,
                        ease: 'power2.out',
                    });
                },
                onEnterBack: () => {
                    gsap.to(body, {
                        backgroundColor: colors[index] || '#FFF7EA',
                        duration: 1.4,
                        ease: 'power2.out',
                    });
                },
            });
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.locomotive?.off("scroll", ScrollTrigger.update);
        };
    }, [scrollRef]);
};

export default useScrollTheme;
