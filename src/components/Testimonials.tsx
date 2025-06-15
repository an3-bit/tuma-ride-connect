
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "University Student",
      location: "Nairobi",
      rating: 5,
      comment: "I earn KES 1,500 every weekend when I travel home to Nyeri. It covers my transport costs and gives me extra pocket money!",
      avatar: "GW"
    },
    {
      name: "David Kiprotich",
      role: "Business Owner", 
      location: "Eldoret",
      rating: 5,
      comment: "Sent urgent documents to Nairobi and they arrived the same day. Much faster and cheaper than courier services!",
      avatar: "DK"
    },
    {
      name: "Mary Achieng",
      role: "Matatu Driver",
      location: "Kisumu", 
      rating: 5,
      comment: "I've been using Tuma Ride for 3 months. It's added KES 800-1,200 to my daily earnings without extra effort.",
      avatar: "MA"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
