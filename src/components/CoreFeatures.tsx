
import { Users, Package, Star, Clock } from "lucide-react";

export const CoreFeatures = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Core Features
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-4">
          <Users className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-sm font-medium">User Verification</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <Package className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-sm font-medium">Real-time Tracking</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <Star className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-sm font-medium">Ratings & Reviews</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <Clock className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-sm font-medium">M-Pesa Integration</p>
        </div>
      </div>
    </div>
  );
};
