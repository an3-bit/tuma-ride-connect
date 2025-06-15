
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Package, Users, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LocationInput } from "@/components/LocationInput";
import Autoplay from "embla-carousel-autoplay";

interface HeroProps {
  onSenderClick: () => void;
  onMoverClick: () => void;
  onTrackingClick: () => void;
}

export const Hero = ({ onSenderClick, onMoverClick, onTrackingClick }: HeroProps) => {
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      title: 'Send Packages Anywhere',
      subtitle: 'Connect with travelers going your way',
      description: 'Send documents, gifts, or essentials across Kenya with trusted travelers'
    },
    {
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      title: 'Earn While You Travel',
      subtitle: 'Turn your journey into income',
      description: 'Make money by delivering packages along your regular routes'
    },
    {
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg',
      title: 'Track in Real-Time',
      subtitle: 'Know where your package is',
      description: 'Live tracking just like Uber - see your package location anytime'
    }
  ];

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      <Carousel 
        className="w-full h-full" 
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-[90vh]">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div 
                className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`
                }}
              >
                <div className="container mx-auto px-4 py-16 relative z-10 h-full flex items-center">
                  <div className="text-center text-green-700 w-full">
                    <h1 className="text-5xl font-bold mb-4">
                      Tuma Ride
                    </h1>
                    <p className="text-lg mb-4">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-3xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="max-w-2xl mx-auto mb-12 text-green-100">
                      {slide.description}
                    </p>
                    
                    <div className="flex justify-center mb-8">
                      <LocationInput placeholder="Where do you want to send from?" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                      <Button 
                        size="lg"
                        className="bg-white text-green-700 hover:bg-green-50 font-semibold shadow-lg"
                        onClick={onSenderClick}
                      >
                        <Package className="mr-2 h-5 w-5" />
                        I Need Something Delivered
                      </Button>
                      <Button 
                        size="lg"
                        
                        className="bg-white text-green-700 hover:bg-green-50 font-semibold shadow-lg"
                        onClick={onMoverClick}
                      >
                        <Users className="mr-2 h-5 w-5" />
                        I'm Traveling & Can Help
                      </Button>
                    </div>

                    <Button 
                      size="lg"
                      onClick={onTrackingClick}
                      className="bg-white text-green-700 hover:bg-green-50 font-semibold shadow-lg"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Track Your Package
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-white border-white hover:bg-white hover:text-green-700" />
        <CarouselNext className="right-4 text-white border-white hover:bg-white hover:text-green-700" />
      </Carousel>
    </div>
  );
};
