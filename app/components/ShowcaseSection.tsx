'use client';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ShowcaseSection() {
  return (
    <section className="py-20 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Visual <span className="gold-text">Showreel</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A glimpse into the world of mystery and storytelling.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-black rounded-lg overflow-hidden group shadow-2xl border border-white/10"
        >
            {/* Placeholder for actual showreel/video */}
             <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              >
                <source
                  src="/Aravind_VK_Merlin_Award.mp4"
                  type="video/mp4"
                />
            </video>

            {/* Overlay Play Button
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </button>
            </div> */}

             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-xs sm:text-2xl text-white font-bold uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Merlin award winning moment</h3>
                <p className="text-xs sm:text-base text-white/70 hidden sm:block">Indian origin magician in the U.S. receives Merlin Award</p>
                <p className="text-xs sm:text-base text-white/70 block sm:hidden">Indian origin magician in the U.S</p>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
