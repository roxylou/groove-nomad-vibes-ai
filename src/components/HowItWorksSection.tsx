import { Brain, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: "custom",
    image: "/lovable-uploads/5cac453b-5167-428e-9ece-1d783717e179.png",
    title: "Tu choisis ta vibe",
    description: "Dis-nous quel genre de musique te fait vibrer, ton budget et tes dates préférées."
  },
  {
    icon: "custom",
    image: "/lovable-uploads/dabf1291-1584-48d6-a2cb-027ab6d48e3a.png",
    title: "L'IA te génère un séjour complet",
    description: "Notre IA crée ton voyage personnalisé : festival, hébergement, transport et activités."
  },
  {
    icon: "custom",
    image: "/lovable-uploads/23dc5da3-b980-4cb5-8e7b-3e4df254fc09.png",
    title: "Tu reçois ton devis & tu réserves",
    description: "Devis instantané transparent, paiement sécurisé en 3 clics. Ton groove t'attend !"
  }
];

const HowItWorksSection = () => {
  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Pas de fond - utilise le dégradé global du body */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-groove tracking-wide">
            COMMENT ÇA MARCHE ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-rubik font-medium max-w-2xl mx-auto">
            Trois étapes simples pour créer le voyage festival de tes rêves
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-groove-pink/30 to-groove-violet/30 transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative glass-card p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-groove-violet/20 transition-all duration-500 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-groove-pink to-groove-violet rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <img src={step.image} alt={step.title} className="w-20 h-20 object-contain" />
                </div>

                {/* Content */}
                <h3 className="font-rubik text-xl md:text-2xl font-extrabold text-white mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-rubik text-white/80 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-groove-pink/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-groove-violet/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={scrollToChatbot}
            variant="groove"
            size="lg"
            className="text-lg px-8 py-6 font-bold font-rubik shadow-groove hover:shadow-xl rounded-full"
          >
            Commencer ton aventure
            <ArrowRight className="ml-2" />
          </Button>
          <p className="font-rubik text-white/70 mt-4 text-sm">
            L'IA attend tes goûts musicaux pour créer ton voyage parfait
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;