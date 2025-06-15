
export const Hero = () => (
  <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('hero2.jpg')" }}>
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Kenya's Trusted Logistics Network</h1>
      <p className="text-lg md:text-xl mb-6">Send, track, and earn with TumaRide.<br className="hidden md:block" /> Fast, safe, and reliable across Kenya.</p>
      <a href="#services" className="inline-block bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all">Get Started</a>
    </div>
  </section>
);
