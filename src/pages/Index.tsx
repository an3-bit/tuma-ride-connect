
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SearchBoxSection } from "@/components/SearchBoxSection";
import { HowItWorks } from "@/components/HowItWorks";
import { GallerySection } from "@/components/GallerySection";
import { StatsSection } from "@/components/StatsSection";
import { TeamSection } from "@/components/TeamSection";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 font-sans">
      <Hero />
      <ServicesSection />
      <SearchBoxSection />
      <HowItWorks />
      <GallerySection />
      <StatsSection />
      {/* <TeamSection /> */}
      <Testimonials />
      <BlogSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
