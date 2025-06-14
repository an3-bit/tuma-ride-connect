
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Users, Clock, Star, MapPin } from "lucide-react";

interface UserDashboardProps {
  userType: 'sender' | 'mover';
  onShowDeliveryForm: () => void;
  onShowRouteForm: () => void;
}

export const UserDashboard = ({ userType, onShowDeliveryForm, onShowRouteForm }: UserDashboardProps) => {
  const senderDeliveries = [
    {
      id: 1,
      item: "Documents",
      from: "Nairobi CBD",
      to: "Westlands",
      status: "In Transit",
      mover: "John K.",
      price: "KES 200"
    },
    {
      id: 2,
      item: "Small Package",
      from: "Kisumu",
      to: "Eldoret",
      status: "Pending",
      mover: "Looking for mover...",
      price: "KES 500"
    }
  ];

  const moverRoutes = [
    {
      id: 1,
      from: "Nairobi",
      to: "Mombasa",
      date: "Today 2:00 PM",
      deliveries: 2,
      earnings: "KES 800",
      status: "Active"
    },
    {
      id: 2,
      from: "Kisumu",
      to: "Nakuru",
      date: "Tomorrow 9:00 AM",
      deliveries: 0,
      earnings: "KES 0",
      status: "Available"
    }
  ];

  if (userType === 'sender') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Your Deliveries</h2>
          <Button onClick={onShowDeliveryForm} className="bg-blue-600 hover:bg-blue-700">
            <Package className="mr-2 h-4 w-4" />
            New Delivery Request
          </Button>
        </div>

        <div className="grid gap-4">
          {senderDeliveries.map((delivery) => (
            <Card key={delivery.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{delivery.item}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4" />
                      {delivery.from} → {delivery.to}
                    </CardDescription>
                  </div>
                  <Badge variant={delivery.status === 'In Transit' ? 'default' : 'secondary'}>
                    {delivery.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Mover: {delivery.mover}</p>
                    <p className="text-sm font-medium text-green-600">{delivery.price}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Track
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Routes</h2>
        <Button onClick={onShowRouteForm} className="bg-green-600 hover:bg-green-700">
          <Users className="mr-2 h-4 w-4" />
          Set New Route
        </Button>
      </div>

      <div className="grid gap-4">
        {moverRoutes.map((route) => (
          <Card key={route.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {route.from} → {route.to}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4" />
                    {route.date}
                  </CardDescription>
                </div>
                <Badge variant={route.status === 'Active' ? 'default' : 'secondary'}>
                  {route.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    {route.deliveries} deliveries • {route.earnings}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8 rating</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Requests
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
