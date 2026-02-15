import Head from 'next/head';

const PsiSyncPage = () => {
    return (
        <>
            <Head>
                <title>PsiSync – The Future of Mentalism | IMS Magic</title>
                <meta name="description" content="PsiSync is a pioneering mentalism device conceptualized and developed by Aravind V.K., currently in prototype and patenting stage." />
            </Head>

            {/* Main container: Dark background, light text, centered, generous padding */}
            <main className="min-h-screen bg-gray-900 gold-text font-sans">
                <div className="max-w-4xl mx-auto px-6 py-12">
                
                    {/* Hero Section */}
                    <section className="text-center mb-12 border-b border-gold-text pb-8">
                        <h1 className="text-5xl md:text-6xl gold-text font-extrabold tracking-tight mb-2">
                            PsiSync – The Future of Mentalism
                        </h1>
                        <p className="italic text-xl gold-text mt-4">
                            ‘Where mind, motion, and machine align.’
                        </p>
                    </section>

                    {/* Image Element */}
                    <div className="my-10 w-full text-center">
                        {/* NOTE: Ensure /images/psisync-photo.jpg exists in your 'public' folder */}
                        <img 
                            src="/IMG-20250808-WA0072.jpg" 
                            alt="A close-up, aesthetic photo of the PsiSync mentalism device, sleek and futuristic." 
                            className="w-full max-h-[500px] object-cover rounded-xl shadow-lg  transition duration-300 "
                        />
                    </div>

                    {/* Content Body */}
                    <section className="space-y-8 pt-6">
                        
                        {/* Text Block */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                <strong className="gold-text font-semibold">PsiSync</strong> is a pioneering mentalism device conceptualized and developed by 
                                <strong> Aravind V.K.</strong>, blending his expertise in technology, psychology, and illusion design.
                            </p>
                            <p>
                                Currently under development, PsiSync represents a breakthrough in modern magic — an elegant fusion of 
                                software, sensors, and secrecy.
                            </p>
                        </div>
                        
                        {/* Status Box - Highlighted with a glow effect */}
                        <div className="p-5 bg-gray-800 border-2 border-gold-text rounded-lg flex items-center shadow-md shadow-cyan-500/30">
                            <p className="text-xl font-bold gold-text flex items-center">
                                <span className="gold-text text-2xl mr-3">⚠️</span>
                                Currently in prototype and patenting stage.
                            </p>
                        </div>

                        {/* Inventor Info */}
                        <div className="pt-8 mt-10 border-t border-gray-700">
                            <h3 className="text-2xl font-semibold mb-1 gold-text">Inventor and Concept Designer</h3>
                            <p className="text-xl font-bold gold-text">Aravind V.K.</p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default PsiSyncPage;