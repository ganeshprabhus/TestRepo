'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import Head from 'next/head';

// Framer Motion variants for animations
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.9, 0.2, 1], delay: 0.1 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.9, 0.2, 1], delay: 0.3 },
  },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.9, 0.2, 1], delay: i * 0.2 },
  }),
};

export default function IMSAmbassadorPage() {
  useEffect(() => {
    // Apply scroll-reveal to elements on mount
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => el.classList.add('visible'));
  }, []);

  return (
    <>
      <Head>
        <title>IMS South Asia Ambassador | Aravind V.K.</title>
        <meta
          name="description"
          content="Aravind V.K. serves as the South Asian Ambassador for the International Magicians Society, elevating the magic community through innovation and mentorship."
        />
        <meta
          name="keywords"
          content="IMS Ambassador, Aravind V.K., South Asia, magic, mentalism, International Magicians Society"
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-center scroll-reveal"
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold gold-text mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              IMS South Asia Ambassador
            </h1>
          </motion.section>

          {/* Intro Paragraph */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mb-12 scroll-reveal"
          >
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Appointed as the South Asian Ambassador for the{' '}
              <a
                href="https://www.imsmagic.com/ims-officers.html"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text hover:text-shadow underline"
              >
                International Magicians Society (IMS)
              </a>
              , Aravind V.K. serves as a representative voice for magicians and
              mentalists across India, Sri Lanka, Nepal, Bangladesh, and other
              neighboring countries. The role highlights a continued commitment to
              elevate the South Asian magic community through innovation,
              mentorship, and cross-cultural collaboration.
            </motion.p>
          </motion.section>

          {/* Ambassador Flyer Image */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mb-12 scroll-reveal"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              whileHover="hover"
              className="flex justify-center"
            >
              <img
                src="/ims.jpg" // Replace with actual image path
                alt="Aravind V.K. IMS South Asia Ambassador Flyer"
                className="rounded-lg border border-gold/20 shadow-2xl max-w-full h-auto sm:max-w-md lg:max-w-lg"
              />
            </motion.div>
          </motion.section>

          {/* Mission and Role */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mb-12 scroll-reveal"
          >
            <motion.h2
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-6 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Mission and Role
            </motion.h2>
            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              The ambassadorship focuses on strengthening international
              connections between South Asian performers and the global IMS
              network. Planned initiatives emphasize professional development,
              recognition for original artistry, and integration of modern
              technology into traditional forms of illusion.
            </motion.p>
          </motion.section>

          {/* Pull Quote */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mb-16 scroll-reveal"
          >
             <blockquote className="border-l-4 border-gold pl-6 py-4 italic text-xl md:text-2xl text-white/80 max-w-4xl mx-auto bg-white/5 rounded-r-lg">
                <p style={{ fontFamily: 'var(--font-heading)' }}>
                  &quot;To represent South Asia on the global stage is not just an honor, but a responsibility to bridge heritage with the future of illusion.&quot;
                </p>
             </blockquote>
          </motion.section>

          {/* Upcoming Initiatives (2025–2026) */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mb-12 scroll-reveal"
          >
            <motion.h2
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-8 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Upcoming Initiatives (2025–2026)
            </motion.h2>
            <motion.div
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
            >
                {[
                  {
                    title: "South Asia Membership Drive",
                    desc: "An outreach campaign to introduce IMS to emerging magicians in India, Sri Lanka, and Nepal through virtual sessions and regional partners.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  },
                  {
                    title: "“Magic Without Borders” Series",
                    desc: "Planned webinars and digital meetups connecting IMS-recognized illusionists with South Asian performers to exchange creative and technical insights.",
                    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  },
                  {
                    title: "Young Magicians Connect",
                    desc: "Development of an online community platform to mentor aspiring performers, encourage innovation, and facilitate IMS certification guidance.",
                    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  },
                  {
                    title: "Collaborative Showcase Program",
                    desc: "Scheduled cultural and performance collaborations between IMS members worldwide, celebrating the fusion of heritage and modern magic.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  }
                ].map((item, idx) => (
                   <div key={idx} className="bg-gray-900 border border-white/10 p-6 rounded-lg hover:border-gold/30 transition-all duration-300 group">
                      <div className="flex items-start mb-4">
                         <div className="p-3 bg-black rounded-full border border-gold/20 mr-4 group-hover:bg-gold group-hover:text-black transition-colors text-gold">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                         </div>
                         <h3 className="text-xl font-bold text-white mt-1 group-hover:gold-text transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed pl-[3.5rem]">{item.desc}</p>
                   </div>
                ))}
            </motion.div>
          </motion.section>

          {/* Vision Ahead */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="mb-12 scroll-reveal"
          >
            <motion.h2
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold gold-text mb-6 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Vision Ahead
            </motion.h2>
            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              The ambassadorship aims to build a sustainable ecosystem of artists,
              combining cultural depth with technological innovation. The
              long-term vision is to make South Asia a leading hub for creative
              excellence and ethical practice within the international magic
              fraternity.
            </motion.p>
          </motion.section>

          {/* Related Link */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="scroll-reveal"
          >
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-sm text-white/70 text-center"
            >
              Learn more about the IMS leadership at{' '}
              <a
                href="https://www.imsmagic.com/ims-officers.html"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text hover:text-shadow underline"
              >
                IMS Officers
              </a>.
            </motion.p>
          </motion.section>
        </main>
      </div>
    </>
  );
}