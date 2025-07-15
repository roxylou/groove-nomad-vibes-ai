import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen font-rubik relative"
    >
      {/* Dégradé de fond qui commence au milieu de la première section */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, #FFBCEE 50%, #DC1F73 75%, #7DA7D5 100%)'
        }}
      />
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
