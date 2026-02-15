'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Head from 'next/head';
import ScrollReveal from '@/app/components/ScrollReveal';
import CinematicDivider from '@/app/components/CinematicDivider';

export default function Awards() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  const awards = [
    {
      icon: 'trophy',
      title: 'Merlin Award 2025',
      description: 'Most Magical Techie & Filmmaker',
      link: '/honors/merlin-awards',
    },
    {
      icon: 'users',
      title: 'IMS Vice President',
      description: 'International Magicians Society Leadership Role',
      link: '/honors/ims-ambassador', 
    },
    {
      icon: 'award',
      title: 'Nominee & Festival Recognitions',
      description: 'Asian Ohio Award & International Film Festival Honors',
    },
  ];

  return (
    <>
      <Head>
        <title>Honors & Awards - Aravind V.K.</title>
        <meta
          name="description"
          content="Explore Aravind V.K.'s prestigious honors, including the Merlin Award 2025 and IMS Vice President role, reflecting a decade of devotion to art and humanity."
        />
        <meta
          name="keywords"
          content="Aravind V.K., Merlin Award, IMS Vice President, honors, awards, magic, mentalism"
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Intro */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollReveal>
                <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold gold-text mb-6 text-shadow"
                style={{ fontFamily: 'var(--font-heading)' }}
                >
                Honors & Awards: Recognition of Devotion
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p
                className="text-xl sm:text-2xl italic text-gray-200 mb-10 max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-heading)' }}
                >
                &quot;Each honor reflects a decade of devotion to art, imagination, and humanity.&quot;
                </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 px-4 cinematic-placeholder">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                    <div
                    className="p-8 rounded-xl border border-gold/30 bg-deep-purple/10 hover:bg-deep-purple/20 transition duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(229,216,149,0.5)] hover:scale-[1.02] transform"
                    >
                    <i
                        data-lucide={award.icon}
                        className="w-12 h-12 mx-auto gold-text mb-4"
                        style={{
                        background: 'linear-gradient(45deg, #e5d895, #ffffff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        }}
                    ></i>
                    <h3 className="text-xl sm:text-2xl font-bold gold-text mb-2 text-shadow">{award.title}</h3>
                    <p className="text-gray-300 text-base sm:text-lg">{award.description}</p>
                    {award.link && (
                        <Link
                        href={award.link}
                        className="mt-4 inline-block text-sm gold-text hover:text-shadow underline"
                        >
                        Learn More
                        </Link>
                    )}
                    </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CinematicDivider
          quote="Media may write headlines, but it's your journey that makes the story."
          className="py-12 bg-gradient-to-r from-black via-deep-purple to-black"
        />
      </div>
    </>
  );
}