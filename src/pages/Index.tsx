import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FestivalsSection from "@/components/FestivalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik">
      {/* Language switcher in fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <div 
        style={{
          background: 'linear-gradient(to bottom, #e53975 0%, #729dc9 100%)'
        }}
      >
        <HeroSection />
        <HowItWorksSection />
        <FestivalsSection />
        <TestimonialsSection />
        <ChatbotSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
