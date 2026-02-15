// This file must use 'use client' because it renders client-side components like CustomCursor
'use client'; 
import { ReactNode } from 'react';
import Header from '@/app/components/Header';
import SmoothScroll from '@/app/components/SmoothScroll';
// import CustomCursor from '@/app/components/CustomCursor';
import Link from 'next/link';
import "./globals.css"


// Component for the dynamic content wrapping the whole application
const RootLayout = ({ children }: { children: ReactNode }) => {
    
    // Note: Fonts and Lucide Icons are handled here via Head component
    return (
        <html lang="en">
            <head>
                <title>Aravind V.K. - Magician, Filmmaker, Data Engineer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/magicicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" /> */}
                {/* Lucide Icons are loaded globally via script for simplicity */}
                <script src="https://unpkg.com/lucide@latest" async />
            </head>
            <body>
                <SmoothScroll />
                {/* <CustomCursor /> */}
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow pt-16"> {/* Added pt-16 to offset fixed header */}
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

// Footer is a simple component so it's kept here
const Footer = () => (
    <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Aravind V.K. All Rights Reserved. </p>
            <div className="mt-4 flex justify-center space-x-4">
                <Link href="/charity" className="nav-link hover:gold-text">Charity</Link>
                <span className="text-gray-600">|</span>
                <Link href="/media&press" className="nav-link hover:gold-text">Media</Link>
                <span className="text-gray-600">|</span>
                <Link href="/awards" className="nav-link hover:gold-text">Awards</Link>
            </div>
          
        </div>
    </footer>
);

export default RootLayout;