
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, User, Phone, MessageCircle, X } from "lucide-react";
import { toast } from "sonner";

interface TrackingData {
  id: string;
  item: string;
  status: string;
  currentLocation: string;
  destination: string;
  mover: {
    name: string;
    phone: string;
    rating: number;
  };
  estimatedArrival: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  route: {
    from: string;
    to: string;
    progress: number;
  };
}

interface PackageTrackingProps {
  onClose: () => void;
}

export const PackageTracking = ({ onClose }: PackageTrackingProps) => {
  const [trackingId, setTrackingId] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time location updates
  useEffect(() => {
    if (trackingData) {
      const interval = setInterval(() => {
        setTrackingData(prev => {
          if (!prev) return prev;
          
          // Simulate location updates
          const newLat = prev.coordinates.lat + (Math.random() - 0.5) * 0.001;
          const newLng = prev.coordinates.lng + (Math.random() - 0.5) * 0.001;
          const newProgress = Math.min(prev.route.progress + Math.random() * 5, 100);
          
          return {
            ...prev,
            coordinates: { lat: newLat, lng: newLng },
            route: { ...prev.route, progress: newProgress },
            currentLocation: `Moving towards ${prev.destination}`
          };
        });
      }, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [trackingData]);

  const handleTrack = async () => {
    if (!trackingId.trim()) {
      toast.error("Please enter a tracking ID");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockData: TrackingData = {
        id: trackingId,
        item: "Documents Package",
        status: "In Transit",
        currentLocation: "Nakuru",
        destination: "Eldoret",
        mover: {
          name: "John Kimani",
          phone: "+254 712 345 678",
          rating: 4.8
        },
        estimatedArrival: "2:30 PM Today",
        coordinates: {
          lat: -0.3031,
          lng: 36.0800
        },
        route: {
          from: "Nairobi",
          to: "Eldoret",
          progress: 65
        }
      };
      
      setTrackingData(mockData);
      setIsLoading(false);
      toast.success("Package found! Tracking active.");
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Package Tracking
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {!trackingData ? (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Track Your Package</h3>
                <p className="text-gray-600 mb-4">Enter your tracking ID to see real-time location updates</p>
              </div>
              
              <div className="flex gap-4">
                <Input
                  placeholder="Enter tracking ID (e.g., TR12345)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTrack} disabled={isLoading}>
                  {isLoading ? "Tracking..." : "Track"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Package Status */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{trackingData.item}</h3>
                  <p className="text-gray-600">Tracking ID: {trackingData.id}</p>
                </div>
                <Badge className={getStatusColor(trackingData.status)}>
                  {trackingData.status}
                </Badge>
              </div>

              {/* Route Progress */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{trackingData.route.from}</span>
                    <span className="font-medium">{trackingData.route.to}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${trackingData.route.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span>Progress: {trackingData.route.progress.toFixed(0)}%</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      ETA: {trackingData.estimatedArrival}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Live Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Navigation className="h-5 w-5" />
                    Live Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Current Location:</span>
                      <span>{trackingData.currentLocation}</span>
                    </div>
                    
                    {/* Simulated Map */}
                    <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-gray-600">Live Map View</p>
                        <p className="text-sm text-gray-500">
                          Lat: {trackingData.coordinates.lat.toFixed(4)}, 
                          Lng: {trackingData.coordinates.lng.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mover Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Your Mover
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{trackingData.mover.name}</h4>
                      <p className="text-sm text-gray-600">⭐ {trackingData.mover.rating} rating</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Delivery Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Package Picked Up</p>
                        <p className="text-sm text-gray-600">Today, 10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-medium">In Transit</p>
                        <p className="text-sm text-gray-600">Currently moving</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-500">Delivery</p>
                        <p className="text-sm text-gray-500">Expected: {trackingData.estimatedArrival}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
