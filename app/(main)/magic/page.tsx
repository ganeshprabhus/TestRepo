import ScrollReveal from '@/app/components/ScrollReveal';

export const metadata = {
    title: 'Magic & Mentalism - Aravind V.K.',
};

const Magic: React.FC = () => {
    return (
        <>
            {/* 3. MAGIC & MENTALISM SECTION */}
            <section id="magic" className="py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl text-center gold-text mb-12">Magic & Mentalism: Communication Beyond Words</h2>
                        
                        <p className="text-gray-300 text-center text-xl mb-12 max-w-3xl mx-auto">
                            Magic, for Aravind, is not merely performance. It&apos;s communication beyond words. His mentalism blends psychology, data, and human connection to create experiences that blur the lines between science and mystery.
                        </p>
                    </ScrollReveal>

                    {/* Signature Acts */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <ScrollReveal delay="0.2s">
                            <div className="text-center p-6 border rounded-xl border-yellow-500/50 hover:bg-yellow-900/20 transition duration-300 shadow-xl">
                                <i data-lucide="brain" className="w-10 h-10 mx-auto gold-text mb-3"></i>
                                <h3 className="text-xl font-semibold gold-text">Lucid Dreams</h3>
                                <p className="text-sm text-gray-400">Psychological Mentalism</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay="0.3s">
                            <div className="text-center p-6 border rounded-xl border-yellow-500/50 hover:bg-yellow-900/20 transition duration-300 shadow-xl">
                                <i data-lucide="line-chart" className="w-10 h-10 mx-auto gold-text mb-3"></i>
                                <h3 className="text-xl font-semibold gold-text">Google Trends Prediction</h3>
                                <p className="text-sm text-gray-400">Data-driven Illusion</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay="0.4s">
                            <div className="text-center p-6 border rounded-xl border-yellow-500/50 hover:bg-yellow-900/20 transition duration-300 shadow-xl">
                                <i data-lucide="flame" className="w-10 h-10 mx-auto gold-text mb-3"></i>
                                <h3 className="text-xl font-semibold gold-text">Fire Wallet</h3>
                                <p className="text-sm text-gray-400">Classic Physical Magic</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay="0.5s">
                            <div className="text-center p-6 border rounded-xl border-yellow-500/50 hover:bg-yellow-900/20 transition duration-300 shadow-xl">
                                <i data-lucide="shuffle" className="w-10 h-10 mx-auto gold-text mb-3"></i>
                                <h3 className="text-xl font-semibold gold-text">Swengalli Unity Trick</h3>
                                <p className="text-sm text-gray-400">Card & Connection</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal>
                        <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 italic text-xl text-white/80 mb-10 ">
                            <p style={{ fontFamily: 'var(--font-heading)' }}>&quot;Every performance is a story - some told through silence, others through astonishment&quot;</p>
                        </blockquote>
                    </ScrollReveal>

                    {/* Innovation Callout */}
                    <ScrollReveal delay="0.6s">
                        <div className="purple-bg p-8 rounded-xl shadow-2xl border-2 gold-border/50">
                            <h3 className="text-2xl font-bold gold-text mb-3 flex items-center justify-center md:justify-start"><i data-lucide="star" className="w-6 h-6 mr-3"></i>Innovation: PsiSync</h3>
                            <p className="text-gray-200 text-lg">
                                **PsiSync** is a groundbreaking mentalism product invented by Aravind, currently under development. This innovation merges his deep technical expertise in data and AI with the art of illusion, paving the way for the next generation of mentalism.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

export default Magic;