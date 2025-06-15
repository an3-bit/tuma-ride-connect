
export const TeamSection = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Meet Our Amazing Team</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl shadow flex flex-col items-center py-6">
        <img src="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg" alt="team 1" className="w-20 h-20 rounded-full object-cover mb-3" />
        <div className="font-semibold">Faith Okendo</div>
        <div className="text-sm text-gray-600">Logistics Manager</div>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col items-center py-6">
        <img src="https://images.pexels.com/photos/779969/pexels-photo-779969.jpeg" alt="team 2" className="w-20 h-20 rounded-full object-cover mb-3" />
        <div className="font-semibold">Moses Muthoni</div>
        <div className="text-sm text-gray-600">Driver Lead</div>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col items-center py-6">
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="team 3" className="w-20 h-20 rounded-full object-cover mb-3" />
        <div className="font-semibold">Janet Awuor</div>
        <div className="text-sm text-gray-600">Customer Success</div>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col items-center py-6">
        <img src="https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg" alt="team 4" className="w-20 h-20 rounded-full object-cover mb-3" />
        <div className="font-semibold">John Cheb</div>
        <div className="text-sm text-gray-600">Operations</div>
      </div>
    </div>
  </section>
);
