"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";
import { X } from "lucide-react";

// --- Image Data (Ensure paths are relative to the /public folder) ---
const galleryImages = [
  { src: "/vk.jpg", alt: "Behind the scenes on a film set", orientation: "landscape" },
  { src: "/IMG-20250808-WA0072.jpg", alt: "Aravind V.K. receiving an award", orientation: "landscape" },
  { src: "/IMG-20250813-WA0007.jpg", alt: "Close-up of a mentalism act", orientation: "portrait" }, // Portrait
  { src: "/MEK00533.jpg", alt: "Promotional still from Hasthinapuri", orientation: "landscape" },
  { src: "/MEK00534.jpg", alt: "Data engineering presentation slide", orientation: "landscape" },
  { src: "/MEK00535.jpg", alt: "Event Highlight 1", orientation: "landscape" },
  { src: "/MEK00536.jpg", alt: "Event Highlight 2", orientation: "landscape" },
  { src: "/MEK00537.jpg", alt: "Event Highlight 3", orientation: "landscape" },
  { src: "/hasthinapuri.jpg", alt: "A dramatic shot of a magic performance", orientation: "landscape" },
  { src: "/MEK00538.jpg", alt: "Event Highlight 4", orientation: "landscape" },
  { src: "/MEK00539.jpg", alt: "Event Highlight 5", orientation: "landscape" },
  { src: "/MEK00540.jpg", alt: "Event Highlight 6", orientation: "landscape" },
  { src: "/MEK00541.jpg", alt: "Event Highlight 7", orientation: "landscape" },
  { src: "/MEK00542.jpg", alt: "Event Highlight 8", orientation: "landscape" },
  { src: "/MEK00543.jpg", alt: "Event Highlight 9", orientation: "landscape" },
  { src: "/MEK00544.jpg", alt: "Event Highlight 10", orientation: "landscape" },
  { src: "/MEK00545.jpg", alt: "Event Highlight 11", orientation: "landscape" },
  { src: "/With_Criss Angel.jpg", alt: "With Criss Angel", orientation: "portrait" }, // Portrait
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <section id="gallery" className="pt-32 pb-16 px-4 bg-gray-950 min-h-screen">
        <div className="max-w-[1600px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl gold-text mb-6 font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Gallery
            </h2>
            <p
              className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A curated collection of moments from the stage, the set, and the world of technology.
            </p>
          </ScrollReveal>

          {/* --- Masonry Layout --- */}
          {/* columns-1 for mobile, 2 for tablet, 3 for desktop, 4 for large screens */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid mb-6"> {/* Add padding wrapper for masonry gap */}
                <ScrollReveal delay={`${(index % 4) * 0.1}s`}>
                  <div
                    className="relative w-full overflow-hidden rounded-xl bg-gray-900 border border-white/10 group cursor-pointer shadow-lg hover:shadow-gold/20 hover:border-gold/40 transition-all duration-500"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      // Use width/height to respect aspect ratio. 
                      // 800x600 (4:3) for landscape, 600x800 (3:4) for portrait
                      width={image.orientation === 'portrait' ? 600 : 800}
                      height={image.orientation === 'portrait' ? 800 : 600}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-white gold-text font-medium tracking-wider uppercase text-xs sm:text-sm border border-gold/60 bg-black/60 px-5 py-2 rounded-full backdrop-blur-md hover:bg-gold hover:text-black transition-colors">
                            View
                          </span>
                       </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Image Modal (Lightbox) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors z-50 p-2"
            aria-label="Close image view"
          >
            <X size={40} strokeWidth={1.5} />
          </button>
          <div
            className="relative w-full h-full max-w-7xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full-screen view"
              fill
              sizes="100vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}