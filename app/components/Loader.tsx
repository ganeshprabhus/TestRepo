'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CARD_IMAGES = [
  '/cards/King_of_Spades.webp',
  '/cards/Five_of_Spades.webp',
  '/cards/Jack_of_Hearts.webp',
  '/cards/Queen_of_Hearts.webp',
  '/cards/King_of_Clubs.webp',
  '/cards/Joker_29.webp',
  '/cards/Ten_of_Hearts.webp',
  '/cards/Three_of_Clubs.webp',
  '/cards/King_of_Spades_29.webp',
  '/cards/Seven_of_Hearts.webp',
  '/cards/Six_of_Spades.webp',
  '/cards/King_of_Diamonds.webp',
];

interface LoadingDeckProps {
  onFinish?: () => void;
}

const LoadingDeck: React.FC<LoadingDeckProps> = ({ onFinish }) => {
  const [ready, setReady] = useState(false);
  const [exit, setExit] = useState(false);
  const [showText, setShowText] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader === 'true') {
      // Skip loader and call onFinish immediately if provided
      if (onFinish) onFinish();
      return;
    }

    // Set flag to render loader
    setShouldRender(true);

    // Animation timers
    const expandTimer = setTimeout(() => setReady(true), 400);
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const exitTimer = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        // Set flag in sessionStorage and call onFinish
        sessionStorage.setItem('hasSeenLoader', 'true');
        if (onFinish) onFinish();
      }, 1200);
    }, 3000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  if (!shouldRender) return null;

  const totalCards = CARD_IMAGES.length;
  const totalAngle = 150; // degrees for semi-circle
  const baseRadius = 420;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={exit ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.9, 0.2, 1] }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Cards */}
        {CARD_IMAGES.map((src, i) => {
          const angleStep = totalAngle / (totalCards - 1);
          const startAngle = -90 - totalAngle / 2;
          const angle = startAngle + i * angleStep;
          const rad = (angle * Math.PI) / 180;

          // Responsive radius based on screen width
          const screenWidth =
            typeof window !== 'undefined' ? window.innerWidth : 1920;
          const radius =
            screenWidth < 640
              ? baseRadius * 0.4
              : screenWidth < 1024
              ? baseRadius * 0.6
              : baseRadius;

          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 0.6, scale: 0.5 }}
              animate={
                ready
                  ? { x, y: -y, rotate: angle + 90, scale: 1, opacity: 1 }
                  : { x: 0, y: 0, rotate: 0, scale: 0.5, opacity: 0.6 }
              }
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: [0.25, 0.9, 0.2, 1],
              }}
              className="absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/90"
              style={{
                width: screenWidth < 640 ? 100 : screenWidth < 1024 ? 150 : 200,
                height:
                  screenWidth < 640 ? 150 : screenWidth < 1024 ? 225 : 300,
                left: '50%',
                top: '25%',
                transformOrigin: 'bottom center',
                zIndex: 100 + i,
                translateX: '-50%',
              }}
            >
              <img
                src={src}
                alt={`Card ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}

        {/* Animated Text */}
        {showText && (
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.9, 0.2, 1] }}
            className="absolute top-1/3 gold-text left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-8xl font-bold tracking-widest text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Aravind V.K
            <h2
              className="text-sm sm:text-3xl lg:text-5xl text-white font-light tracking-widest mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Magician | Mentalist | Filmmaker | Data Engineer
            </h2>
            <p
              className="text-xs sm:text-2xl text-white font-medium italic mb-10 opacity-75"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Where Logic Meets Wonder.
            </p>
          </motion.h1>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingDeck;