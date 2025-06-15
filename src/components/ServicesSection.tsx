
import { Package, Users, MapPin } from "lucide-react";

export const ServicesSection = () => (
  <section id="services" className="container mx-auto px-4 py-14">
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8">
        <Package className="w-12 h-12 text-green-600 mb-3" />
        <h3 className="font-bold text-lg mb-2">Parcel Delivery</h3>
        <img src="https://images.pexels.com/photos/616966/pexels-photo-616966.jpeg" alt="parcel delivery" className="h-32 w-full object-cover rounded mb-4" />
        <p className="text-gray-600">Send packages to any destination in Kenya securely and quickly.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8">
        <Users className="w-12 h-12 text-green-600 mb-3" />
        <h3 className="font-bold text-lg mb-2">Earn as a Mover</h3>
        <img src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg" alt="earn as mover" className="h-32 w-full object-cover rounded mb-4" />
        <p className="text-gray-600">Travel and get paid to deliver packages along your route.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8">
        <MapPin className="w-12 h-12 text-green-600 mb-3" />
        <h3 className="font-bold text-lg mb-2">Real-Time Tracking</h3>
        <img src="https://images.pexels.com/photos/184634/pexels-photo-184634.jpeg" alt="tracking" className="h-32 w-full object-cover rounded mb-4" />
        <p className="text-gray-600">Track your package with live updates from pickup to delivery.</p>
      </div>
    </div>
  </section>
);
