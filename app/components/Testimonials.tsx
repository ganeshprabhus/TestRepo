'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aravind redefines what is possible. His blend of technology and illusion creates an experience that is nothing short of magical.",
    author: "Event Chronicles",
    role: "Arts & Culture Review"
  },
  {
    quote: "Rarely do you see a performer who understands the camera as well as the stage. A visionary in every sense.",
    author: "CineMag South",
    role: "Film Critic"
  },
  {
    quote: "The PsiSync engine is a marvel. It turns data into an emotional experience.",
    author: "Tech Today",
    role: "Innovation Watch"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Press & <span className="gold-text">Praise</span>
            </h2>
            <div className="h-1 w-20 bg-gold/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-lg relative border border-white/5 hover:border-gold/20 transition-colors"
            >
              <Quote className="absolute top-8 left-8 w-8 h-8 text-gold/20" />
              <p className="text-white/80 italic text-lg mb-6 relative z-10 pt-6 font-light">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <h4 className="text-gold font-bold uppercase tracking-wider text-sm">{item.author}</h4>
                <p className="text-white/40 text-xs mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
