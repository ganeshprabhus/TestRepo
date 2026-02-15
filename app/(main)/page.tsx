"use client";
import ScrollReveal from "@/app/components/ScrollReveal";
import { useEffect, useRef } from "react";
import LoadingDeck from "../components/Loader";
import Link from "next/link";
import AboutSection from "../components/AboutSection";
import ShowcaseSection from "../components/ShowcaseSection";
import FeaturedWorks from "../components/FeaturedWorks";
import Testimonials from "../components/Testimonials";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Globe, Clapperboard, Database, Zap } from "lucide-react";

const ParallaxVideo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax Effect
    if (videoRef.current) {
        gsap.to(videoRef.current, {
            yPercent: 30, // Moves the video down by 30% of its height as we scroll
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }
    
    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {/* Video element - Parallax Target */}
      <div 
        ref={videoRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] -z-10" // Make it slightly taller for parallax room
      >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/active_storage/video_items/100371/1723575849/100371-video-720.mp4"
              type="video/mp4"
            />
          </video>
      </div>

      {/* Text container */}
      <div className="relative text-center max-w-4xl mx-auto z-10 p-4">
        <ScrollReveal delay={0.2}>
          <h1
            className="text-3xl sm:text-6xl lg:text-6xl font-extrabold gold-text tracking-tighter uppercase mb-4 text-shadow-lg drop-shadow-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ARAVIND V.K
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
            <h2
                className="text-xl sm:text-3xl lg:text-4xl text-white font-light  mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
            >
                Magician | Mentalist | Filmmaker | Data Engineer
            </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
            <p
                className="text-lg sm:text-3xl text-white font-medium italic mb-10 "
                style={{ fontFamily: "var(--font-heading)" }}
            >
                Where Logic Meets Wonder.
            </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
            <a
                href="/contact"
                className="cta-button inline-block text-base sm:text-lg uppercase px-8 py-3 rounded-full font-semibold tracking-wider hover:scale-105 transition duration-300"
            >
                Cultural Collaborations & Press Inquiries
            </a>
        </ScrollReveal>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <LoadingDeck />
      {/* 1. HOME PAGE (Hero Section) */}
      <section
        id="home"
        className="relative h-screen w-full flex flex-col justify-center items-center p-4 overflow-hidden"
      >
        <ParallaxVideo />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 "></div> */}
        {/* Content Layer */}
      </section>

      {/* Quick Highlights/Quote Section */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="border-l-4 border-gold-text pl-4 py-2 italic text-xl text-white/80">
              <p
                className="text-xl sm:text-3xl italic font-medium mb-8 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &quot;You don&apos;t need to believe in magic. You just need to
                feel it.&quot;
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold gold-text mb-12 uppercase tracking-wider">
                Key Accolades & Expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-y-12 sm:gap-x-6">
                
                <Link href={"/honors/merlin-awards"} className="flex flex-row sm:flex-col items-center justify-start sm:justify-start group cursor-pointer p-3 sm:p-4 transition duration-300 transform hover:scale-105 border-2 border-[#e5d895]/30 rounded-xl sm:border-0 bg-transparent">
                    <div className="gold-text mr-3 sm:mr-0 sm:mb-3 size-12 sm:size-20 p-2 sm:p-4 border-2 border-gold-text rounded-full flex items-center justify-center bg-gray-800 shadow-lg group-hover:bg-gray-700 transition duration-300 flex-shrink-0">
                        <Award className="w-6 sm:w-10 h-6 sm:h-10" strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-sm sm:text-lg font-bold uppercase sm:tracking-wider sm:mt-4 text-left sm:text-center">
                        Merlin Award Winner
                    </span>
                </Link>

                <Link href={"/honors/ims-ambassador"} className="flex flex-row sm:flex-col items-center justify-start sm:justify-start group cursor-pointer p-3 sm:p-4 transition duration-300 transform hover:scale-105 border-2 border-[#e5d895]/30 rounded-xl sm:border-0 bg-transparent">
                    <div className="gold-text mr-3 sm:mr-0 sm:mb-3 size-12 sm:size-20 p-2 sm:p-4 border-2 border-gold-text rounded-full flex items-center justify-center bg-gray-800 shadow-lg group-hover:bg-gray-700 transition duration-300 flex-shrink-0">
                        <Globe className="w-6 sm:w-10 h-6 sm:h-10" strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-sm sm:text-lg font-bold uppercase sm:tracking-wider sm:mt-4 text-left sm:text-center">
                        <span className="sm:hidden">South Asian Ambassador</span>
                        <span className="hidden sm:inline">South Asian Ambassador-IMS</span>
                    </span>
                </Link>

                <Link href={"/film"} className="flex flex-row sm:flex-col items-center justify-start sm:justify-start group cursor-pointer p-3 sm:p-4 transition duration-300 transform hover:scale-105 border-2 border-[#e5d895]/30 rounded-xl sm:border-0 bg-transparent">
                    <div className="gold-text mr-3 sm:mr-0 sm:mb-3 size-12 sm:size-20 p-2 sm:p-4 border-2 border-gold-text rounded-full flex items-center justify-center bg-gray-800 shadow-lg group-hover:bg-gray-700 transition duration-300 flex-shrink-0">
                        <Clapperboard className="w-6 sm:w-10 h-6 sm:h-10" strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-sm sm:text-lg font-bold uppercase sm:tracking-wider sm:mt-4 text-left sm:text-center">
                       Filmmaker & Director
                    </span>
                </Link>

                <Link href={"/tech"} className="flex flex-row sm:flex-col items-center justify-start sm:justify-start group cursor-pointer p-3 sm:p-4 transition duration-300 transform hover:scale-105 border-2 border-[#e5d895]/30 rounded-xl sm:border-0 bg-transparent">
                    <div className="gold-text mr-3 sm:mr-0 sm:mb-3 size-12 sm:size-20 p-2 sm:p-4 border-2 border-gold-text rounded-full flex items-center justify-center bg-gray-800 shadow-lg group-hover:bg-gray-700 transition duration-300 flex-shrink-0">
                        <Database className="w-6 sm:w-10 h-6 sm:h-10" strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-sm sm:text-lg font-bold uppercase sm:tracking-wider sm:mt-4 text-left sm:text-center">
                        Data Engineer
                    </span>
                </Link>

                <Link href={"/honors/psisync"} className="flex flex-row sm:flex-col items-center justify-start sm:justify-start group cursor-pointer p-3 sm:p-4 transition duration-300 transform hover:scale-105 border-2 border-[#e5d895]/30 rounded-xl sm:border-0 bg-transparent">
                    <div className="gold-text mr-3 sm:mr-0 sm:mb-3 size-12 sm:size-20 p-2 sm:p-4 border-2 border-gold-text rounded-full flex items-center justify-center bg-gray-800 shadow-lg group-hover:bg-gray-700 transition duration-300 flex-shrink-0">
                        <Zap className="w-6 sm:w-10 h-6 sm:h-10" strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-sm sm:text-lg font-bold uppercase sm:tracking-wider sm:mt-4 text-left sm:text-center">
                     Inventor of PsiSync
                    </span>
                </Link>
            </div>
        </div>
      </section>

      <AboutSection />
      <ShowcaseSection />
      <FeaturedWorks />
      <Testimonials />

      {/* Achievements Bar */}
   
    </>
  );
};

export default Home;
