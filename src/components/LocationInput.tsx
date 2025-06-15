
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
          const mockAddress = `Current Location (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`;
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

  const handleSetLocation = () => {
    if (address) {
      onLocationSelect?.(address);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="pl-10 h-12 w-full bg-gray-50 border-gray-200"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <Button
          variant="ghost"
          onClick={handleUseCurrentLocation}
          className="text-green-600 hover:text-green-700 hover:bg-green-50 w-full sm:w-auto"
        >
          <Navigation className="h-4 w-4 mr-2" />
          Use current location
        </Button>
        <Button onClick={handleSetLocation} disabled={!address} className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800">
          Set Location
        </Button>
      </div>
    </div>
  );
};
