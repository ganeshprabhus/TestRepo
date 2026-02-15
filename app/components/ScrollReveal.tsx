'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: string | number; // Support both "0.1s" and 0.1
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

    // Normalize delay to number
    const delayNum = typeof delay === 'string' ? parseFloat(delay) : delay;

    return (
        <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delayNum, ease: [0.25, 0.9, 0.2, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;