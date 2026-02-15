import React from 'react'
import ScrollReveal from '@/app/components/ScrollReveal';
import Image from 'next/image';

export default function page() {
  return (
    <>
     <section id="book" className="py-20 px-4 purple-bg border-t gold-border">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl gold-text mb-8">The Magic Within: The Upcoming Autobiography</h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                            <div className="w-80 h-[500px] flex-shrink-0 relative rounded-lg shadow-2xl border-2 border-gold overflow-hidden group">
                                <Image
                                    src="/IMG-20250813-WA0007.jpg"
                                    alt="Book Cover Placeholder"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 900px) 100vw, 500px"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-center">
                                     <span className="text-xs gold-text font-bold uppercase tracking-wider">Coming Soon</span>
                                </div>
                            </div>
                            <p className="text-gray-200 text-lg">
                                Aravind&apos;s upcoming autobiography, <strong>The Magic Within</strong>, is a story of transformation, blending magic, science, and resilience. It&apos;s an invitation to discover the extraordinary within yourself and pursue parallel passions with discipline.
                                <br/><br/>
                                <span className="gold-text font-bold italic">Note: Currently in writing. To be released soon.</span>
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            </>
  )
}
