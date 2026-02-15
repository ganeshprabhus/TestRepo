'use client';
import Link from 'next/link';
import Head from 'next/head';
import ScrollReveal from '@/app/components/ScrollReveal';
import CinematicDivider from '@/app/components/CinematicDivider';

export default function Film() {
  const otherProjects = [
    'Park Bench',
    "Pa's Pap",
    'Animal Pet',
    "Raina's Sweet 16",
    'Documentary Projects',
  ];

  return (
    <>
      <Head>
        <title>Film & Direction - Aravind V.K.</title>
        <meta
          name="description"
          content="Explore Aravind V.K.'s cinematic vision, blending Indian traditions with global storytelling through films like Hasthinapuri, a 4K HDR musical."
        />
        <meta
          name="keywords"
          content="Aravind V.K., film, direction, Hasthinapuri, Indian cinema, 4K HDR, musical"
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 cinematic-placeholder relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollReveal>
                <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold gold-text mb-6 text-shadow"
                style={{ fontFamily: 'var(--font-heading)' }}
                >
                Cinematic Vision: Bridging Emotion and Culture
                </h1>
            </ScrollReveal>
             <ScrollReveal delay={0.2}>
                <p
                className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
                >
                Aravind&apos;s cinematic vision bridges{' '}
                <span className="gold-text font-semibold">emotion and culture</span>. His films and musical projects bring{' '}
                <span className="gold-text font-semibold">Indian traditions</span> into global frames through stunning storytelling.
                </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Hasthinapuri Highlight */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                 <ScrollReveal delay={0.2}>
                    <div
                    className="p-6 rounded-xl shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500"
                    style={{
                        backgroundImage: "url('/hasthinapuri.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '400px',
                    }}
                    >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                 </ScrollReveal>
              </div>
              
              <div className="p-6 rounded-xl border border-gold/30 bg-deep-purple/10 hover:bg-deep-purple/20 transition duration-300">
                <ScrollReveal delay={0.4}>
                    <h3 className="text-2xl sm:text-3xl font-bold gold-text mb-4 text-shadow">
                    Hasthinapuri Highlight
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg">
                    The first South Indian (Malayalam-Telugu) musical filmed entirely in the USA in{' '}
                    <span className="gold-text font-semibold">4K HDR</span>, featuring over{' '}
                    <span className="gold-text font-semibold">35 international actors</span>. A true cultural collaborative endeavor.
                    </p>
                    <Link
                    href="/film/hasthinapuri"
                    className="mt-4 inline-block text-sm gold-text hover:text-shadow underline learn-more"
                    >
                    Learn More
                    </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Other Featured Works */}
        <section className="py-20 px-4 cinematic-placeholder">
          <div className="max-w-7xl mx-auto">
             <ScrollReveal>
                <h3
                className="text-2xl sm:text-3xl gold-text mt-12 mb-6 border-b-2 border-gold/50 pb-2 text-shadow"
                style={{ fontFamily: 'var(--font-heading)' }}
                >
                Other Featured Works
                </h3>
             </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {otherProjects.map((project, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                    <div
                    className="p-4 rounded-lg border border-gold/20 bg-deep-purple/10 hover:bg-deep-purple/20 transition duration-300 text-center text-sm sm:text-base font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(229,216,149,0.3)]"
                    >
                    {project}
                    </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CinematicDivider
          quote="A story is not written by pen - It's written by emotion, light, and timing."
          className="py-12 bg-gradient-to-r from-black via-deep-purple to-black"
        />
      </div>
    </>
  );
}