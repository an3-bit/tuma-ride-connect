
import { Card, CardContent } from "@/components/ui/card";

export const RealLifeExamples = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Real-Life Examples
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <img 
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" 
              alt="University student"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              A university student heading home from Nairobi to Eldoret carries a parcel for someone and earns KES 500.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <img 
              src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg" 
              alt="Boda rider"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              A boda rider in Kisumu delivers groceries within town and earns more daily.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <img 
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" 
              alt="Business documents"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              A businessperson in Mombasa sends urgent documents to a client via a verified matatu headed to Nairobi.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
