
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, Clock, Star, Shield, MapPin, CreditCard, Smartphone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { DeliveryRequest } from "@/components/DeliveryRequest";
import { SetRoute } from "@/components/SetRoute";
import { UserDashboard } from "@/components/UserDashboard";
import { PackageTracking } from "@/components/PackageTracking";
import { LocationInput } from "@/components/LocationInput";

const Index = () => {
  const [userType, setUserType] = useState<'none' | 'sender' | 'mover'>('none');
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showRouteForm, setShowRouteForm] = useState(false);
  const [showTracking, setShowTracking] = useState(false);

  const resetView = () => {
    setUserType('none');
    setShowDeliveryForm(false);
    setShowRouteForm(false);
  };

  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "University Student",
      location: "Nairobi",
      rating: 5,
      comment: "I earn KES 1,500 every weekend when I travel home to Nyeri. It covers my transport costs and gives me extra pocket money!",
      avatar: "GW"
    },
    {
      name: "David Kiprotich",
      role: "Business Owner", 
      location: "Eldoret",
      rating: 5,
      comment: "Sent urgent documents to Nairobi and they arrived the same day. Much faster and cheaper than courier services!",
      avatar: "DK"
    },
    {
      name: "Mary Achieng",
      role: "Matatu Driver",
      location: "Kisumu", 
      rating: 5,
      comment: "I've been using Tuma Ride for 3 months. It's added KES 800-1,200 to my daily earnings without extra effort.",
      avatar: "MA"
    }
  ];

  if (userType !== 'none') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-green-800">Tuma Ride</h1>
              <Badge variant="outline" className="text-sm border-green-600 text-green-600">
                Kila Safari Ina Thamani
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowTracking(true)}>
                <MapPin className="mr-2 h-4 w-4" />
                Track Package
              </Button>
              <Button variant="outline" onClick={resetView}>
                Back to Home
              </Button>
            </div>
          </div>
          
          <UserDashboard 
            userType={userType}
            onShowDeliveryForm={() => setShowDeliveryForm(true)}
            onShowRouteForm={() => setShowRouteForm(true)}
          />
          
          {showDeliveryForm && (
            <DeliveryRequest onClose={() => setShowDeliveryForm(false)} />
          )}
          
          {showRouteForm && (
            <SetRoute onClose={() => setShowRouteForm(false)} />
          )}

          {showTracking && (
            <PackageTracking onClose={() => setShowTracking(false)} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.8)), url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16 text-white">
            <h1 className="text-5xl font-bold mb-4">
              Tuma Ride
            </h1>
            <p className="text-xl mb-2">
              "Kila Safari Ina Thamani"
            </p>
            <p className="text-lg mb-8">
              Value in every stop - Turn your journey into income
            </p>
            <p className="max-w-2xl mx-auto mb-12 text-green-100">
              Connect with travelers going your way. Send packages, earn money, build community.
            </p>
            
            {/* Location Input */}
            <div className="flex justify-center mb-8">
              <LocationInput placeholder="Where do you want to send from?" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50"
                onClick={() => setUserType('sender')}
              >
                <Package className="mr-2 h-5 w-5" />
                I Need Something Delivered
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
                onClick={() => setUserType('mover')}
              >
                <Users className="mr-2 h-5 w-5" />
                I'm Traveling & Can Help
              </Button>
            </div>

            <Button 
              variant="outline" 
              onClick={() => setShowTracking(true)}
              className="border-white text-white hover:bg-white hover:text-green-700"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Track Your Package
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50">
        {/* Trust Features */}
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

        {/* How It Works */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Sender */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  For the Sender
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <p className="text-gray-700">Open the app or web platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <p className="text-gray-700">Post delivery request (Item, Pickup, Drop-off, Deadline)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <p className="text-gray-700">Choose from available riders/travelers based on price, route, and rating</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <p className="text-gray-700">Pay via M-Pesa or card</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Mover */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  For the Mover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <p className="text-gray-700">Set your route (e.g., Nairobi → Kisumu)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <p className="text-gray-700">Get matched with items needing delivery along your path</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <p className="text-gray-700">Accept the task, deliver the item</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                    <p className="text-gray-700">Get paid instantly via M-Pesa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Real-Life Examples */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Real-Life Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <img 
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" 
                  alt="University student"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  A university student heading home from Nairobi to Eldoret carries a parcel for someone and earns KES 500.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img 
                  src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg" 
                  alt="Boda rider"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  A boda rider in Kisumu delivers groceries within town and earns more daily.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" 
                  alt="Business documents"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  A businessperson in Mombasa sends urgent documents to a client via a verified matatu headed to Nairobi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Features */}
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

        {/* Testimonials Section - Moved to be next to footer */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {showDeliveryForm && (
        <DeliveryRequest onClose={() => setShowDeliveryForm(false)} />
      )}
      
      {showRouteForm && (
        <SetRoute onClose={() => setShowRouteForm(false)} />
      )}

      {showTracking && (
        <PackageTracking onClose={() => setShowTracking(false)} />
      )}
    </div>
  );
};

export default Index;
