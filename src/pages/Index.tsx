import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen font-rubik relative overflow-hidden"
      style={{ backgroundColor: '#f1b6d2' }}
    >
      {/* Cercles flous néon avec animation de respiration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Cercle haut droite */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #e8a9cb 0%, rgba(232, 169, 203, 0.6) 40%, transparent 70%)',
            animation: 'breathe 8s ease-in-out infinite'
          }}
        ></div>
        
        {/* Cercle bas gauche - position miroir */}
        <div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #e8a9cb 0%, rgba(232, 169, 203, 0.6) 40%, transparent 70%)',
            animation: 'breathe 8s ease-in-out infinite 4s' // décalage de 4s pour effet organique
          }}
        ></div>
      </div>

      {/* Contenu des sections */}
      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ChatbotSection />
        <Footer />
      </div>

      {/* Animation de respiration CSS */}
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
