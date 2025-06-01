
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesSection } from "@/components/ServicesSection";
import { AIAgentsSection } from "@/components/AIAgentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <ServicesSection />
      <AIAgentsSection />
      <Footer />
    </div>
  );
};

export default Index;
