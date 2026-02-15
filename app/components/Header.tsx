"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    lucide?: {
      createIcons: () => void;
    };
  }
}

const navItems = [
  { name: "Magic & Mentalism", href: "/magic/" },
  { name: "Film & Direction", href: "/film/" },
  { name: "Technology & Data", href: "/tech/" },
  { name: "Gallery", href: "/gallery/" },
  { name: "Media & Press", href: "/media&press/" },
  { name: "Book", href: "/book/" },
  { name: "Charity & Community", href: "/charity/" },
  { name: "Honors", href: "/awards/" },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="mx-auto px-4 md:px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-lg sm:text-2xl font-bold gold-text transition-all duration-300 header"
            style={{ fontFamily: "var(--font-heading)" }}
               onClick={() => setIsOpen(false)}
          >
            ARAVIND V.K.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-3 lg:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                  pathname === item.href
                    ? "gold-text font-semibold active-link"
                    : "text-white hover:gold-text hover:text-shadow"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:gold-text focus:outline-none focus:ring-2 focus:ring-gold rounded-md p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col h-screen items-center bg-black/95">
            {/* <Link
            href="/"
            onClick={() => setIsOpen(false)}
          className={`nav-link block px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 w-full text-center ${
                pathname === "/"
                  ? "gold-text font-semibold active-link bg-deep-purple/20"
                  : "text-white hover:bg-deep-purple/20 hover:gold-text hover:text-shadow"
              }`}
          >
            Home
          </Link> */}
          {navItems.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`nav-link block px-4 py-2 text-lg font-medium rounded-md transition-all duration-300 w-full text-center ${
                pathname === item.href
                  ? "gold-text font-semibold active-link bg-deep-purple/20"
                  : "text-white hover:bg-deep-purple/20 hover:gold-text hover:text-shadow"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
      
        </div>
      </div>
      <style jsx>{`
        /* Responsive fix for 1280x800 screens */
    @media (min-width: 1400px){
  

          nav .mx-auto {
            padding: 0 3% !important;
          }

     
        }
      `}</style>
    </nav>
  );
};

export default Header;

