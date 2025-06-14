
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation } from "lucide-react";

interface LocationInputProps {
  placeholder?: string;
  onLocationSelect?: (location: string) => void;
}

export const LocationInput = ({ placeholder = "What's your address?", onLocationSelect }: LocationInputProps) => {
  const [address, setAddress] = useState("");

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, you'd reverse geocode these coordinates
          const mockAddress = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          setAddress(mockAddress);
          onLocationSelect?.(mockAddress);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to get your location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-green-600" />
        <Input
          type="text"
          placeholder={placeholder}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-1 border-0 focus:ring-0 text-gray-700"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={handleUseCurrentLocation}
          className="text-green-600 hover:text-green-700 hover:bg-green-50"
        >
          <Navigation className="h-4 w-4 mr-1" />
          Use current location
        </Button>
      </div>
    </div>
  );
};
