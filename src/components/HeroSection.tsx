import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculer les transformations basées sur le scroll
  const logoScale = Math.max(0.3, 1 - scrollY / 800);
  const logoX = Math.min(scrollY / 2, 300);
  const logoY = Math.min(scrollY / 3, 200);
  const contentOpacity = Math.min(scrollY / 400, 1);

  return (
    <div className="relative">
      {/* Section d'accueil avec logo */}
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

        {/* Logo Groove Nomad avec animation */}
        <div 
          className="fixed top-1/2 left-1/2 z-50 transition-all duration-300 ease-out"
          style={{
            transform: `translate(-50%, -50%) translate(${logoX}px, -${logoY}px) scale(${logoScale})`,
            transformOrigin: 'center center'
          }}
        >
          <img 
            src="/lovable-uploads/9bc7e05f-20ce-469d-bf51-875605907f4c.png" 
            alt="Groove Nomad" 
            className="max-w-full h-auto object-scale-down"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section du contenu principal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient - continuation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8a9cb] to-[#f1b6d2]"></div>

        {/* Blurred Circular Shapes - continuation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/60 via-[#e91e63]/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#d63384]/60 via-[#e91e63]/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Shapes - continuation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-groove-pink/30 to-groove-violet/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-groove-light-pink/40 to-groove-pink/40 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-groove-violet/20 rounded-full blur-md animate-pulse delay-1000"></div>
        </div>

        {/* Contenu principal */}
        <div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6 transition-opacity duration-500"
          style={{ opacity: contentOpacity }}
        >
          {/* Texte principal */}
          <div className="mb-12">
            <p className="font-rubik text-3xl md:text-5xl font-extrabold text-[#DC1F73] max-w-2xl mx-auto tracking-wide leading-tight mb-4">
              CRÉE TON VOYAGE<br />
              AUTOUR D'UN FESTIVAL<br />
              AVEC L'IA.
            </p>
            <p className="font-rubik text-lg md:text-2xl text-[#DC1F73] font-semibold max-w-3xl mx-auto">
              Personnalisé, devis instantané, réservation fluide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="groove" size="lg" className="text-lg px-8 py-4 font-rubik">
              <Sparkles className="mr-2" />
              Crée ton voyage avec l'IA
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="groove-outline" size="lg" className="text-lg px-8 py-4 font-rubik backdrop-blur-sm">
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
      </section>
    </div>
  );
};

export default HeroSection;