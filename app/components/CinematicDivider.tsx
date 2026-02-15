// app/components/CinematicDivider.tsx
'use client';
import { motion } from 'framer-motion';

interface CinematicDividerProps {
  quote: string;
  className?: string;
}

const CinematicDivider: React.FC<CinematicDividerProps> = ({ quote, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.9, 0.2, 1] }}
      className={`py-12 text-center text-lg sm:text-xl italic gold-text text-shadow ${className}`}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent h-px top-1/2"></div>
        <p>{quote}</p>
      </div>
    </motion.div>
  );
};

export default CinematicDivider;