import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-rubik relative overflow-hidden">
      {/* Fond uniforme pour toute la page - même style que HeroSection */}
      
      {/* Blurred Circular Shapes - Background global */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Circle - Pink/Rose Dark */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/60 via-[#e91e63]/40 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom Left Circle - Mirrored */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#d63384]/60 via-[#e91e63]/40 to-transparent rounded-full blur-3xl"></div>
        
        {/* Additional circles for more coverage */}
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-gradient-radial from-[#e91e63]/50 via-[#d63384]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-radial from-[#d63384]/50 via-[#e91e63]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Shapes - Background global */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-groove-pink/30 to-groove-violet/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-groove-light-pink/40 to-groove-pink/40 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-groove-violet/20 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-20 h-20 bg-gradient-to-br from-groove-pink/25 to-groove-violet/25 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-groove-light-pink/30 rounded-full blur-md animate-bounce delay-700"></div>
      </div>

      {/* Contenu des sections */}
      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ChatbotSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
