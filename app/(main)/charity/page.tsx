import React from 'react'
import ScrollReveal from '@/app/components/ScrollReveal';
export default function page() {
  return (
    <>
     <section id="community" className="py-20 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl gold-text mb-12">True Magic: The Joy You Create for Others</h2>
                        
                        <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
                            Aravind believes that true magic lies in spreading joy. His commitment to community service is a core part of his life&apos;s work.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-sm font-semibold uppercase tracking-wider">
                        <ScrollReveal delay="0.1s"><div className="bg-black p-4 rounded-lg shadow-xl border gold-border/20 hover:bg-gray-800 transition duration-300">Hasthinapuri Food Drive</div></ScrollReveal>
                        <ScrollReveal delay="0.2s"><div className="bg-black p-4 rounded-lg shadow-xl border gold-border/20 hover:bg-gray-800 transition duration-300">Magic for Kids Workshops</div></ScrollReveal>
                        <ScrollReveal delay="0.3s"><div className="bg-black p-4 rounded-lg shadow-xl border gold-border/20 hover:bg-gray-800 transition duration-300">COMA Collaborations</div></ScrollReveal>
                        <ScrollReveal delay="0.4s"><div className="bg-black p-4 rounded-lg shadow-xl border gold-border/20 hover:bg-gray-800 transition duration-300">Meals on Wheels</div></ScrollReveal>
                    </div>
                    
                    <ScrollReveal>
                        <p className="mt-12 text-2xl italic gold-text" style={{ fontFamily: 'var(--font-heading)' }}>
                            &quot;True magic lies in the joy you create for others.&quot;
                        </p>
                    </ScrollReveal>
                </div>
            </section>
            </>
  )
}
