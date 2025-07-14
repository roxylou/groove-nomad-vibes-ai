import { Brain, MapPin, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Tu choisis ta vibe",
    description: "Dis-nous quel genre de musique te fait vibrer, ton budget et tes dates préférées.",
    color: "from-groove-pink to-groove-violet"
  },
  {
    icon: MapPin,
    title: "L'IA te génère un séjour complet",
    description: "Notre IA crée ton voyage personnalisé : festival, hébergement, transport et activités.",
    color: "from-groove-violet to-groove-blue"
  },
  {
    icon: CreditCard,
    title: "Tu reçois ton devis & tu réserves",
    description: "Devis instantané transparent, paiement sécurisé en 3 clics. Ton groove t'attend !",
    color: "from-groove-blue to-groove-pink"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-groove-light-pink/30 via-groove-white to-groove-violet/20"></div>
      
      {/* Floating decoration - larger organic shapes */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-groove-pink/15 to-groove-violet/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-groove-light-pink/25 to-groove-pink/15 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-groove-violet/20 to-groove-blue/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-rubik text-3xl md:text-5xl font-extrabold text-groove-blue mb-6 tracking-wide">
            COMMENT ÇA MARCHE ?
          </h2>
          <p className="font-rubik text-lg md:text-xl text-groove-blue/80 max-w-2xl mx-auto">
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
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-groove-violet/20 transition-all duration-500 group-hover:scale-105 border border-groove-light-pink/30 hover:border-groove-violet/40">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-groove-pink to-groove-violet rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-groove-violet/30 transition-all duration-300`}>
                  <step.icon className="w-12 h-12 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-rubik text-xl md:text-2xl font-extrabold text-groove-blue mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-rubik text-groove-blue/80 leading-relaxed">
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
          <div className="inline-block p-6 bg-gradient-to-r from-groove-pink/10 to-groove-violet/10 rounded-2xl backdrop-blur-sm border border-groove-pink/20">
            <p className="font-rubik text-groove-blue font-semibold text-lg mb-2">
              Prêt à commencer ton aventure ?
            </p>
            <p className="font-rubik text-groove-blue/70">
              L'IA attend tes goûts musicaux pour créer ton voyage parfait
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;