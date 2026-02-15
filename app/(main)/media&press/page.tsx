'use client';

import React from 'react';
import ScrollReveal from '@/app/components/ScrollReveal';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function page() {
  const mediaLink =
    'https://www.msn.com/en-in/news/world/aravind-vk-honoured-with-merlin-award/ar-AA1LYcVj';

  const pressItems = [
    { name: 'Times of India' },
    { name: 'The Hindu' },
    { name: 'Asianet News' },
    { name: 'Malayala Manorama' },
    { name: 'Mathrubhumi' },
  ];

  return (
    <>
      <section id="press" className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:order-1">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl gold-text mb-6 border-b border-gold/30 pb-4 inline-block">
                Media & Press
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
                Coverage from leading national and regional media highlighting the
                global recognition of an Indian-origin magician in the U.S.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pressItems.map((item, index) => (
                  <a
                    key={index}
                    href={mediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div
                      className="p-5 bg-gray-900 border border-white/5 hover:border-gold/30 rounded-lg transition-all duration-300 h-full hover:bg-gray-800"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:gold-text transition-colors">
                          {item.name}
                        </h3>
                        <ExternalLink size={14} className="text-gray-600 group-hover:text-gold transition-colors" />
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        Indian-origin magician in the U.S. receives Merlin Award
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image Column (Clickable with hint) */}
          <div className="lg:order-2">
            <ScrollReveal delay="0.2s">

              {/* Hint above image */}
             

              <a
                href={mediaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="cursor-pointer rounded-xl shadow-2xl border-2 border-gold/20 relative overflow-hidden group aspect-[3/4] lg:aspect-square">
                  <Image
                    src="/ims.jpg"
                    alt="Aravind V.K. Media Coverage"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold text-sm tracking-wide uppercase flex items-center gap-2">
                      <ExternalLink size={16} />
                      View Full Story
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-lg border border-gold/10">
                    <span className="text-sm text-gray-300 block mb-1">
                      Featured Media Coverage
                    </span>
                    <span className="text-xl gold-text font-bold tracking-widest uppercase">
                      Merlin Award News
                    </span>
                     <div className="flex items-center text-sm text-gray-400 mb-3 gap-2">
                <ExternalLink size={14} className="text-gold" />
                <span>Click the image to read the full article</span>
              </div>
                  </div>
                </div>
              </a>

            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
}
