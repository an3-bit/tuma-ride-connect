
import { Button } from "@/components/ui/button";

export const SearchBoxSection = () => (
  <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 items-center">
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Start Shipping or Earning Now
      </h2>
      <p className="text-gray-600 mb-6">Post a package or set your travel route in one click.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="bg-green-600 text-white hover:bg-green-500">Send a Package</Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-500">Become a Mover</Button>
      </div>
    </div>
    <div className="flex-1">
      <img src="action.jpg" alt="search/logistics action" className="w-full h-56 object-cover rounded-xl shadow" />
    </div>
  </section>
);
