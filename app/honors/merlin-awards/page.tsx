'use client';
import Link from 'next/link';
import { motion ,Variants} from 'framer-motion';
import { useEffect } from 'react';

// Framer Motion variants for scroll-reveal animation
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.9, 0.2, 1], delay: 0.1 },
  },
};

export default function MerlinAwardPage() {
  useEffect(() => {
    // Apply scroll-reveal to elements on mount
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => el.classList.add('visible'));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header is included via layout, so no need to add here */}
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="text-center scroll-reveal"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gold-text mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Merlin Award — The Oscar of Magic
          </h1>
        </motion.section>

        {/* Intro Paragraph */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="mb-12 scroll-reveal"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            In 2025, Aravind V.K. received the prestigious{' '}
            <a
              href="https://www.imsmagic.com/2025-yearbook.html"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-text hover:text-shadow underline"
            >
              Merlin Award
            </a>{' '}
            from the International Magicians Society (IMS) — the world’s largest
            organization for magicians and illusionists, often called the Oscar of
            Magic. The award recognizes his exceptional contributions in merging
            technology and mentalism — a rare blend that redefines the future of
            modern magic.
          </p>
        </motion.section>

        {/* Presented by IMS Founder Tony Hassini */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="mb-12 scroll-reveal"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-6 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Presented by IMS Founder Tony Hassini
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
            The Merlin Award was presented to Aravind V.K. in 2025 during a
            grand ceremony hosted by the International Magicians Society. The
            award, in the category of <strong>Most Magical Techie & Filmmaker</strong>,
            celebrates his innovative approach to blending cutting-edge technology
            with the art of mentalism and storytelling through film. The ceremony,
            led by IMS Founder Tony Hassini, marked a significant milestone in
            Aravind’s career.
          </p>
          <div className="flex justify-center">
            <img
              src="/MEK00536.jpg" // Replace with actual image path
              alt="Aravind V.K. receiving the Merlin Award from Tony Hassini"
              className="rounded-lg border border-gold/20 shadow-2xl max-w-full h-auto sm:max-w-md lg:max-w-lg"
            />
          </div>
          <p className="text-sm text-white/70 mt-4 text-center">
            <a
              href="https://www.imsmagic.com/2025-yearbook.html"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-text hover:text-shadow underline"
            >
              View the IMS 2025 Yearbook
            </a>{' '}
            to see Aravind’s feature.
          </p>
        </motion.section>

        {/* Kerala Magicians Who Made History */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="mb-12 scroll-reveal"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-6 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Kerala Magicians Who Made History
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
            Before Aravind, a few renowned magicians from Kerala have received this
            international honor — a testimony to the state’s deep-rooted tradition
            in the art of magic. Notable recipients include:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
            <li>Gopinath Muthukad</li>
            <li>Magician Samraj</li>
          </ul>
        </motion.section>

        {/* Recognition Beyond Borders */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="mb-12 scroll-reveal"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-6 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Recognition Beyond Borders
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Aravind’s award marks a milestone for South Asian magicians in the
            U.S., bridging art, technology, and emotion on a global stage. His
            journey stands as inspiration for self-taught artists pursuing
            passion-driven excellence.
          </p>
        </motion.section>

        {/* Media Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="scroll-reveal"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-6 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Media & Press Coverage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Image 1 */}
            <div className="relative h-full rounded-lg overflow-hidden border border-gold/20 shadow-xl">
              <img 
                src="/IMG-20250813-WA0007.jpg" 
                alt="Award Ceremony Moment 1" 
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500" 
              />
            </div>
            {/* Image 2 */}
            <div className="relative h-full rounded-lg overflow-hidden border border-gold/20 shadow-xl">
              <img 
                src="/With_Criss Angel.jpg" 
                alt="Award Ceremony Moment 2" 
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500" 
              />
            </div>
          </div>
          <p className="text-sm text-white/70 mt-6 text-center">
            For more details, visit the{' '}
            <a
              href="https://www.imsmagic.com/2025-yearbook.html"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-text hover:text-shadow underline"
            >
              IMS 2025 Yearbook
            </a>.
          </p>
        </motion.section>
      </main>
    </div>
  );
}