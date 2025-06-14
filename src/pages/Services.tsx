
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Users, MapPin, Clock, Star, Shield, Smartphone, CreditCard } from "lucide-react";

const Services = () => {
  const senderServices = [
    {
      title: "Document Delivery",
      description: "Send important documents, contracts, or certificates safely between cities",
      price: "From KES 100",
      time: "Same day delivery"
    },
    {
      title: "Small Package Delivery",
      description: "Electronics, gifts, medicines, and other small items up to 5kg",
      price: "From KES 200",
      time: "Within 24 hours"
    },
    {
      title: "Grocery & Food Items",
      description: "Fresh produce, packaged foods, and household items within town",
      price: "From KES 150",
      time: "Within 4 hours"
    },
    {
      title: "Emergency Delivery",
      description: "Urgent medical supplies, keys, or critical documents",
      price: "From KES 300",
      time: "Within 2 hours"
    }
  ];

  const moverOpportunities = [
    {
      title: "Inter-City Routes",
      description: "Earn money on long-distance journeys between major towns",
      earning: "KES 500-2000 per trip",
      frequency: "Daily opportunities"
    },
    {
      title: "Within City Delivery",
      description: "Short deliveries within Nairobi, Mombasa, Kisumu, and other cities",
      earning: "KES 100-500 per delivery",
      frequency: "Multiple daily"
    },
    {
      title: "Regular Route Optimization",
      description: "Set your regular commute and earn on items along your path",
      earning: "KES 200-800 daily",
      frequency: "Based on your schedule"
    },
    {
      title: "Weekend & Holiday Specials",
      description: "Higher rates during peak travel times and holidays",
      earning: "KES 800-3000 per trip",
      frequency: "Seasonal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-700 mb-2">
            Comprehensive delivery solutions for everyone
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you need something delivered or want to earn money while traveling, 
            we have the perfect solution for you.
          </p>
        </div>

        {/* For Senders */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            For Senders
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {senderServices.map((service, index) => (
              <Card key={index} className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <Badge variant="outline" className="mb-2">{service.price}</Badge>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* For Movers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            For Movers
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {moverOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{opportunity.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <Badge variant="outline" className="mb-2 bg-green-50">{opportunity.earning}</Badge>
                      <p className="text-sm text-gray-600">{opportunity.frequency}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Verified Users</h3>
                <p className="text-sm text-gray-600">ID verification and photo confirmation for all users</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Real-Time Tracking</h3>
                <p className="text-sm text-gray-600">Track your package location in real-time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ratings & Reviews</h3>
                <p className="text-sm text-gray-600">Transparent feedback system for quality assurance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">M-Pesa Integration</h3>
                <p className="text-sm text-gray-600">Secure payments through M-Pesa and cards</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Service Areas
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-600">Major Cities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nairobi</li>
                    <li>• Mombasa</li>
                    <li>• Kisumu</li>
                    <li>• Nakuru</li>
                    <li>• Eldoret</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-green-600">Popular Routes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nairobi ↔ Mombasa</li>
                    <li>• Nairobi ↔ Kisumu</li>
                    <li>• Nairobi ↔ Eldoret</li>
                    <li>• Kisumu ↔ Kakamega</li>
                    <li>• Mombasa ↔ Malindi</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-600">Expanding To</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Thika</li>
                    <li>• Machakos</li>
                    <li>• Nyeri</li>
                    <li>• Meru</li>
                    <li>• Kitale</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Package className="mr-2 h-5 w-5" />
              Send Your First Package
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Users className="mr-2 h-5 w-5" />
              Start Earning Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
