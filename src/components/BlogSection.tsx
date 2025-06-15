
export const BlogSection = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Latest Blog & News</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl overflow-hidden shadow">
        <img src="hero1.jpg" alt="blog1" className="h-40 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">Kenya's supply chain: Opportunities in 2025</h3>
          <span className="block text-xs text-gray-500 mb-2">June 2025</span>
          <p className="text-sm text-gray-600">Discover how TumaRide is optimizing logistics efficiency for all Kenyans.</p>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow">
        <img src="work3.jpg" alt="blog2" className="h-40 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">Mover Spotlight: Michael</h3>
          <span className="block text-xs text-gray-500 mb-2">May 2025</span>
          <p className="text-sm text-gray-600">A real story of earning extra as a mover, and building trust with customers.</p>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow">
        <img src="work4.jpg" alt="blog3" className="h-40 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">Tracking Innovation</h3>
          <span className="block text-xs text-gray-500 mb-2">April 2025</span>
          <p className="text-sm text-gray-600">See how live tech is reshaping Kenya’s delivery industry.</p>
        </div>
      </div>
    </div>
  </section>
);
