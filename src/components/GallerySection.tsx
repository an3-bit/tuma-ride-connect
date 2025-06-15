
export const GallerySection = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Work in Action</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img src="work1.jpg" alt="work 1" className="h-40 w-full object-cover rounded-lg" />
      <img src="work2.jpg" alt="work 2" className="h-40 w-full object-cover rounded-lg" />
      <img src="work3.jpg" alt="work 3" className="h-40 w-full object-cover rounded-lg" />
      <img src="work4.jpg" alt="work 4" className="h-40 w-full object-cover rounded-lg" />
    </div>
  </section>
);
