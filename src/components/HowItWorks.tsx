
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
  );
};
