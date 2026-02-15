'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    category: 'Magic & Mentalism',
    title: 'IMS South Asia Ambassador',
    description: 'Representing the International Magicians Society across South Asia, fostering a new era of illusion.',
    image: '/IMG-20250808-WA0072.jpg',
    link: '/honors/ims-ambassador',
    color: 'border-gold/50'
  },
  {
    category: 'Film & Direction',
    title: 'Hasthinapuri',
    description: 'A visual journey into myth and mystery. Directorial debut exploring ancient narratives.',
    image: '/hasthinapuri.jpg',
    link: '/film',
    color: 'border-blue-500/50'
  },
  {
    category: 'Technology',
    title: 'PsiSync Engine',
    description: 'Proprietary data synchronization engine bridging the gap between digital logic and intuition.',
    image: '/Brain.jpg', 
    link: '/tech', // Assuming a tech page link
    color: 'border-purple-500/50'
  }
];

export default function FeaturedWorks() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-between items-end mb-12">
             <div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    Selected <span className="gold-text">Works</span>
                </h2>
            </div> 
            <Link href="/gallery" className="hidden md:flex items-center text-white/60 hover:text-gold transition-colors">
                View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
                <Link href={project.link} className="block h-full">
                  <div className={`relative h-96 overflow-hidden rounded-lg border ${project.color} bg-gray-900 transition-colors`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 block">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:gold-text transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
                        <p className="text-sm text-white/80 line-clamp-2 group-hover:text-white transition-colors">{project.description}</p>
                    </div>
                  </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* <div className="mt-8 text-center md:hidden">
            <Link href="/gallery" className="inline-flex items-center text-sm text-white/60 hover:text-gold transition-colors uppercase tracking-widest border-b border-white/20 pb-1">
                View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
        </div> */}
      </div>
    </section>
  );
}
