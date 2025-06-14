
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, Clock, Star } from "lucide-react";
import { DeliveryRequest } from "@/components/DeliveryRequest";
import { SetRoute } from "@/components/SetRoute";
import { UserDashboard } from "@/components/UserDashboard";

const Index = () => {
  const [userType, setUserType] = useState<'none' | 'sender' | 'mover'>('none');
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showRouteForm, setShowRouteForm] = useState(false);

  const resetView = () => {
    setUserType('none');
    setShowDeliveryForm(false);
    setShowRouteForm(false);
  };

  if (userType !== 'none') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-blue-900">Tuma Ride</h1>
              <Badge variant="outline" className="text-sm">
                Kila Safari Ina Thamani
              </Badge>
            </div>
            <Button variant="outline" onClick={resetView}>
              Back to Home
            </Button>
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
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Tuma Ride
          </h1>
          <p className="text-xl text-blue-700 mb-2">
            "Kila Safari Ina Thamani"
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Value in every stop - Turn your journey into income
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Connect with travelers going your way. Send packages, earn money, build community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setUserType('sender')}
            >
              <Package className="mr-2 h-5 w-5" />
              I Need Something Delivered
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => setUserType('mover')}
            >
              <Users className="mr-2 h-5 w-5" />
              I'm Traveling & Can Help
            </Button>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Sender */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  For the Sender
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <p className="text-gray-700">Open the app or web platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <p className="text-gray-700">Post delivery request (Item, Pickup, Drop-off, Deadline)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <p className="text-gray-700">Choose from available riders/travelers based on price, route, and rating</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Real-Life Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  A university student heading home from Nairobi to Eldoret carries a parcel for someone and earns KES 500.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  A boda rider in Kisumu delivers groceries within town and earns more daily.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  A businessperson in Mombasa sends urgent documents to a client via a verified matatu headed to Nairobi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Features */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Core Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <p className="text-sm font-medium">User Verification</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Package className="h-8 w-8 text-green-600 mb-2" />
              <p className="text-sm font-medium">Real-time Tracking</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Star className="h-8 w-8 text-yellow-600 mb-2" />
              <p className="text-sm font-medium">Ratings & Reviews</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Clock className="h-8 w-8 text-purple-600 mb-2" />
              <p className="text-sm font-medium">M-Pesa Integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
