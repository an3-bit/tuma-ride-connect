
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, CreditCard, Star } from "lucide-react";

export const TrustFeatures = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Why Trust Tuma Ride?
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">100% Verified Users</h3>
            <p className="text-sm text-gray-600">All users verified with national ID and photo confirmation</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Real-Time Tracking</h3>
            <p className="text-sm text-gray-600">Track your package location live, just like Uber or Bolt</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Secure Payments</h3>
            <p className="text-sm text-gray-600">M-Pesa integration with instant, secure transactions</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Ratings & Reviews</h3>
            <p className="text-sm text-gray-600">Transparent feedback system for quality assurance</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
