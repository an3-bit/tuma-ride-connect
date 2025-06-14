
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, MapPin, Clock, Users } from "lucide-react";
import { toast } from "sonner";

interface SetRouteProps {
  onClose: () => void;
}

export const SetRoute = ({ onClose }: SetRouteProps) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    departureTime: "",
    vehicleType: "",
    maxDeliveries: "",
    spaceAvailable: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Route posted! You'll be notified when delivery requests match your route.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Set Your Route
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="from" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  From
                </Label>
                <Input
                  id="from"
                  placeholder="e.g., Nairobi"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="to" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  To
                </Label>
                <Input
                  id="to"
                  placeholder="e.g., Mombasa"
                  value={formData.to}
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departureDate" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Departure Date
                </Label>
                <Input
                  id="departureDate"
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => setFormData({...formData, departureDate: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="departureTime">Departure Time</Label>
                <Input
                  id="departureTime"
                  type="time"
                  value={formData.departureTime}
                  onChange={(e) => setFormData({...formData, departureTime: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="vehicleType">Vehicle Type</Label>
              <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal-car">Personal Car</SelectItem>
                  <SelectItem value="matatu">Matatu</SelectItem>
                  <SelectItem value="bus">Bus</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle/Boda</SelectItem>
                  <SelectItem value="bicycle">Bicycle</SelectItem>
                  <SelectItem value="walking">Walking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="maxDeliveries">Max Deliveries</Label>
                <Select value={formData.maxDeliveries} onValueChange={(value) => setFormData({...formData, maxDeliveries: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="How many items?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 item</SelectItem>
                    <SelectItem value="2">2 items</SelectItem>
                    <SelectItem value="3">3 items</SelectItem>
                    <SelectItem value="5">5+ items</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="spaceAvailable">Space Available</Label>
                <Select value={formData.spaceAvailable} onValueChange={(value) => setFormData({...formData, spaceAvailable: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Item size limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small items only</SelectItem>
                    <SelectItem value="medium">Medium items</SelectItem>
                    <SelectItem value="large">Large items OK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Earning Potential</h4>
              <p className="text-sm text-green-700">
                Based on your route, you could earn KES 200-800 per delivery. 
                Popular routes like Nairobi-Mombasa typically have higher demand.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                Set Route & Find Deliveries
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
