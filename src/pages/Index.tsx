import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik">
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
