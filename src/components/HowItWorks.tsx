
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users } from "lucide-react";

export const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        How It Works
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600 flex items-center gap-2">
              <Package className="h-6 w-6" />
              For the Sender
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg" 
                alt="Person using smartphone app"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                <p className="text-gray-700">Post delivery request</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                <p className="text-gray-700">Choose from available movers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                <p className="text-gray-700">Pay securely via M-Pesa</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                <p className="text-gray-700">Track your package live</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600 flex items-center gap-2">
              <Users className="h-6 w-6" />
              For the Mover
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg" 
                alt="Delivery person on motorcycle"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                <p className="text-gray-700">Set your travel route</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                <p className="text-gray-700">Get matched with packages</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-samll text-sm">3</div>
                <p className="text-gray-700">Accept and deliver items</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                <p className="text-gray-700">Get paid instantly</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
