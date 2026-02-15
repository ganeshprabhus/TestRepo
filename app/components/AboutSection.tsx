'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gold/10 z-10 mix-blend-overlay"></div>
            <Image
              src="/vk.jpg" 
              alt="Aravind V.K. Portrait" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold/50 hidden md:block"></div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="text-sm tracking-[0.2em] text-gold/80 uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>The Artist</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Weaving <span className="gold-text">Illusions</span>,<br />
            Frames, & <span className="text-purple-400">Data</span>
          </h3>
          <p className="text-lg text-white/70 mb-6 leading-relaxed">
            I sit at the intersection of three distinct worlds. As a <span className="text-white font-semibold">Mentalist</span>, I explore the depths of human psychology. As a <span className="text-white font-semibold">Filmmaker</span>, I craft visual narratives that linger in the mind. As a <span className="text-white font-semibold">Data Engineer</span>, I find patterns in chaos.
          </p>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            My work is not just about performing tricks or writing code—it's about creating <span className="gold-text italic">moments of wonder</span>. Whether on stage, on screen, or in the cloud.
          </p>
          <Link href="/about" className="inline-block border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-gold transition-all duration-300">
            Read Full Bio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
