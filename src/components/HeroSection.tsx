import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-festival.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8a9cb] to-[#f1b6d2]"></div>

      {/* Blurred Circular Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Circle - Pink/Rose Dark */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/60 via-[#e91e63]/40 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom Left Circle - Mirrored */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#d63384]/60 via-[#e91e63]/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-groove-pink/30 to-groove-violet/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-groove-light-pink/40 to-groove-pink/40 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-groove-violet/20 rounded-full blur-md animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl">
            <h1 className="font-groove text-4xl md:text-6xl font-black text-white tracking-wider">
              GROOVE
              <span className="block text-white">NOMAD</span>
            </h1>
          </div>
        </div>

        {/* Main Slogan */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/64b343b3-72b3-421f-a42f-56780c3ed1c2.png" 
            alt="Ton son. Ton trip. Ton groove." 
            className="mx-auto max-w-full h-auto mb-4"
          />
          <p className="font-rubik text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Crée ton voyage autour d'un festival avec l'IA. 
            Personnalisé, devis instantané, réservation fluide.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="groove" 
            size="lg" 
            className="text-lg px-8 py-4 font-rubik"
          >
            <Sparkles className="mr-2" />
            Crée ton voyage avec l'IA
            <ArrowRight className="ml-2" />
          </Button>
          <Button 
            variant="groove-outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-rubik backdrop-blur-sm"
          >
            <Music className="mr-2" />
            Découvrir les festivals
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-groove-pink font-rubik">500+</div>
            <div className="text-white/80 font-rubik">Festivals partenaires</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-groove-violet font-rubik">24h</div>
            <div className="text-white/80 font-rubik">Délai de réponse IA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-groove-light-pink font-rubik">98%</div>
            <div className="text-white/80 font-rubik">Satisfaction client</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;