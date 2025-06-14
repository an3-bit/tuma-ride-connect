
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, Star, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            About Tuma Ride
          </h1>
          <p className="text-xl text-blue-700 mb-2">
            "Kila Safari Ina Thamani"
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing delivery in Kenya by connecting travelers with people who need items delivered. 
            Every journey becomes an opportunity to earn and help others.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To create a sustainable peer-to-peer delivery ecosystem that maximizes the value of every journey 
                while building trust and community connections across Kenya.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600 flex items-center gap-2">
                <Package className="h-6 w-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To become Kenya's leading platform where every trip creates value, connecting communities 
                and making delivery accessible and affordable for everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Story
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Born from the understanding that millions of Kenyans travel daily between cities and within towns, 
                Tuma Ride saw an opportunity to transform these regular journeys into income-generating opportunities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Whether it's a university student heading home to upcountry, a business person traveling between 
                Nairobi and Mombasa, or a boda rider making rounds in town, every journey can now create value 
                for both the traveler and someone who needs an item delivered.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in the power of community, trust, and shared prosperity. That's why every feature 
                we build focuses on safety, transparency, and creating genuine value for all our users.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  Trust & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Every user is verified with ID and photo. We maintain strict safety standards 
                  and transparent rating systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  Community First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  We're building more than a platform - we're creating a community where 
                  Kenyans help each other succeed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <Package className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  Shared Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Every transaction should benefit everyone involved - senders, movers, 
                  and the communities they serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're just getting started. Join thousands of Kenyans who are already turning 
            their daily journeys into opportunities for income and community building.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Kila Safari Ina Thamani - Value in Every Journey
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default About;
