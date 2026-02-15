import CinematicDivider from '@/app/components/CinematicDivider';
import ScrollReveal from '@/app/components/ScrollReveal';
import Image from 'next/image';

// Server-side SEO metadata
export const metadata = {
  title: 'About Aravind V.K. - Where Art Meets Engineering',
};

const About: React.FC = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="py-24 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <ScrollReveal delay="0.4s">
            <div className="lg:order-2 rounded-xl shadow-2xl border-2 border-gold/20 relative overflow-hidden group max-w-md mx-auto lg:max-w-none">
              <Image
                src="/vk.jpg"
                alt="Aravind V.K. - The Visionary"
                width={800}
                height={1000}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-gold/20">
                <span className="text-sm sm:text-lg gold-text font-bold tracking-widest uppercase">
                  The Visionary
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay="0.1s">
            <div className="lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:max-w-none">
              <h2 className="text-3xl sm:text-4xl md:text-5xl gold-text mb-6 border-b border-yellow-500/30 pb-3">
                The Journey: Where Art Meets Engineering
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                Born in Kerala, India, and based in the United States,{' '}
                <strong>Aravind V.K.</strong> is a man who blends logic with illusion,
                technology with art, and dreams with discipline. A self-trained
                magician and filmmaker, he pursued a professional career in
                technology—mastering <strong>data engineering, AI, and cloud computing</strong>
                —while nurturing his parallel passion for magic, mentalism, and filmmaking.
              </p>

              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                Today, he stands recognized across continents as a{' '}
                <strong>Merlin Award winner</strong>,{' '}
                <strong>Vice President of the International Magicians Society</strong>, and
                a visionary who inspires others to rediscover awe in an analytical world.
              </p>

              <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 italic text-lg sm:text-xl text-white/80 mx-auto lg:mx-0 max-w-lg">
                <p style={{ fontFamily: 'var(--font-heading)' }}>
                  &quot;Magic begins where logic ends.&quot;
                </p>
              </blockquote>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <CinematicDivider quote="Magic is not deception. It's the most honest way of showing how powerful human imagination can be." />
    </>
  );
};

export default About;
