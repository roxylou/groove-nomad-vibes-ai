import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FestivalsSection from "@/components/FestivalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen font-rubik"
      style={{
        background: 'linear-gradient(to bottom, #FFBCEE 0%, #DC1F73 50%, #7DA7D5 100%)'
      }}
    >
      <HeroSection />
      <HowItWorksSection />
      <FestivalsSection />
      <TestimonialsSection />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
