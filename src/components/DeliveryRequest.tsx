
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Package, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

interface DeliveryRequestProps {
  onClose: () => void;
}

export const DeliveryRequest = ({ onClose }: DeliveryRequestProps) => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    pickupLocation: "",
    dropoffLocation: "",
    deadline: "",
    urgency: "",
    maxPrice: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Delivery request posted! We'll notify you when movers are available.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              New Delivery Request
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
                <Label htmlFor="itemName">What are you sending?</Label>
                <Input
                  id="itemName"
                  placeholder="e.g., Documents, Small package"
                  value={formData.itemName}
                  onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="urgency">Urgency</Label>
                <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Within a week</SelectItem>
                    <SelectItem value="medium">Medium - Within 2 days</SelectItem>
                    <SelectItem value="high">High - Today</SelectItem>
                    <SelectItem value="urgent">Urgent - Within hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                placeholder="Size, fragility, special instructions..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pickupLocation" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Pickup Location
                </Label>
                <Input
                  id="pickupLocation"
                  placeholder="e.g., Nairobi CBD, Stage name"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="dropoffLocation" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Drop-off Location
                </Label>
                <Input
                  id="dropoffLocation"
                  placeholder="e.g., Westlands, Stage name"
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deadline" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Deadline
                </Label>
                <Input
                  id="deadline"
                  type="datetime-local"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="maxPrice">Maximum Price (KES)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.maxPrice}
                  onChange={(e) => setFormData({...formData, maxPrice: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Post Delivery Request
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
