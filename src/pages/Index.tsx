
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SearchBoxSection } from "@/components/SearchBoxSection";
import { HowItWorks } from "@/components/HowItWorks";
import { GallerySection } from "@/components/GallerySection";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <ServicesSection />
      <SearchBoxSection />
      <HowItWorks />
      <GallerySection />
      <StatsSection />
      <Testimonials />
      <BlogSection />
    </div>
  );
};

export default Index;
