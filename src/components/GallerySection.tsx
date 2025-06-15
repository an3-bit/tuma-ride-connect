
export const GallerySection = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Work in Action</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img src="https://images.pexels.com/photos/122164/pexels-photo-122164.jpeg" alt="work 1" className="h-40 w-full object-cover rounded-lg" />
      <img src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg" alt="work 2" className="h-40 w-full object-cover rounded-lg" />
      <img src="https://images.pexels.com/photos/425403/pexels-photo-425403.jpeg" alt="work 3" className="h-40 w-full object-cover rounded-lg" />
      <img src="https://images.pexels.com/photos/256477/pexels-photo-256477.jpeg" alt="work 4" className="h-40 w-full object-cover rounded-lg" />
    </div>
  </section>
);
