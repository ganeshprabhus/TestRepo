import ScrollReveal from '@/app/components/ScrollReveal';
import Image from 'next/image';
export const metadata = {
    title: 'Technology & Data - Aravind V.K.',
};
const Tech: React.FC = () => {
    return (
        <>
            {/* 5. TECHNOLOGY & DATA SECTION */}
            <section id="tech" className="py-32 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <ScrollReveal delay="0.1s">
                        <div className="lg:order-1">
                            <h2 className="text-4xl sm:text-5xl gold-text mb-6 border-b border-yellow-500/30 pb-2">Technology & Data: The Logic Behind the Wonder</h2>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                By profession, Aravind is a highly skilled **Data Engineer** at Huntington National Bank. He is a certified Google Cloud Professional specializing in **BigQuery, Dataflow, Python, and Spark**. He views every illusion as a data experiment, and every algorithm as a story of precision.
                            </p>
                            
                            <div className="mb-8">
                                <h3 className="text-2xl text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Core Technical Expertise</h3>
                                <ul className="grid grid-cols-2 gap-3 text-base text-gray-300">
                                    <li className="flex items-center"><i data-lucide="database" className="w-5 h-5 mr-2 gold-text"></i>Oracle / BigQuery</li>
                                    <li className="flex items-center"><i data-lucide="code" className="w-5 h-5 mr-2 gold-text"></i>Python / Spark</li>
                                    <li className="flex items-center"><i data-lucide="cloud" className="w-5 h-5 mr-2 gold-text"></i>Google Cloud Platform (GCP)</li>
                                    <li className="flex items-center"><i data-lucide="target" className="w-5 h-5 mr-2 gold-text"></i>Data Expo: &apos;Next Most Likely Offers&apos;</li>
                                </ul>
                            </div>
                            <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 italic text-xl text-white/80">
                                <p style={{ fontFamily: 'var(--font-heading)' }}>&quot;Engineering data, designing dreams.&quot;</p>
                                <cite className="text-sm text-gray-400 block mt-2">&quot;Data and magic share one truth—both reveal the unseen.&quot;</cite>
                            </blockquote>
                        </div>
                    </ScrollReveal>
                    {/* Image Placeholder */}
                    {/* Image Column */}
                    <ScrollReveal delay="0.4s"> 
                     <div className="lg:order-2 rounded-xl shadow-2xl border-2 border-gold/20 relative overflow-hidden group">
                             <Image 
                                src="/Brain.jpg" 
                                alt="Aravind V.K. - The Analytical Mind"
                                width={800} 
                                height={1000}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                             />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-gold/20">
                                <span className="text-lg gold-text font-bold tracking-widest uppercase">The Analytical Mind</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
export default Tech;