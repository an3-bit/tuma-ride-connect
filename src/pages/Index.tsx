
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { DeliveryRequest } from "@/components/DeliveryRequest";
import { SetRoute } from "@/components/SetRoute";
import { UserDashboard } from "@/components/UserDashboard";
import { PackageTracking } from "@/components/PackageTracking";
import { Hero } from "@/components/Hero";
import { TrustFeatures } from "@/components/TrustFeatures";
import { HowItWorks } from "@/components/HowItWorks";
import { RealLifeExamples } from "@/components/RealLifeExamples";
import { CoreFeatures } from "@/components/CoreFeatures";
import { Testimonials } from "@/components/Testimonials";

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

  if (userType !== 'none') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-green-800">Tuma Ride</h1>
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
      <Hero 
        onSenderClick={() => setUserType('sender')}
        onMoverClick={() => setUserType('mover')}
        onTrackingClick={() => setShowTracking(true)}
      />

      <div className="bg-gradient-to-br from-green-50 to-blue-50">
        <TrustFeatures />
        <HowItWorks />
        <RealLifeExamples />
        <CoreFeatures />
        <Testimonials />
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
