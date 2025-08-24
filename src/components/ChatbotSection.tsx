import { Button } from "@/components/ui/button";
import { Bot, Sparkles } from "lucide-react";

const ChatbotSection = () => {

  return (
    <section id="chatbot-section" className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6 p-4 glass-card">
              <Bot className="w-8 h-8 text-groove-pink" />
              <span className="font-rubik text-xl font-extrabold text-white tracking-wide">
                IA PERSONNALISÉE
              </span>
              <Sparkles className="w-6 h-6 text-groove-violet" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-groove tracking-wide">
              PARLE À NOTRE IA !
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-rubik font-medium max-w-2xl mx-auto leading-relaxed">
              Notre assistant IA comprend tes goûts musicaux et crée ton voyage festival parfait en temps réel
            </p>
          </div>

          {/* Typebot Chatbot */}
          <div className="mb-8">
            <div className="glass-card shadow-2xl max-w-2xl mx-auto overflow-hidden">
               <div className="chat-embed" style={{position:'relative',width:'100%',height:'680px',borderRadius:'26px',overflow:'hidden'}}>
                <iframe
                  src="https://typebot.co/groove-nomad-assistant-a3rk34f"
                  title="Assistant GrooveNomad"
                  allow="camera; microphone; autoplay; clipboard-read; clipboard-write; encrypted-media"
                  loading="lazy"
                  style={{position:'absolute',inset:'0',width:'100%',height:'100%',border:'0',borderRadius:'inherit',background:'transparent'}}
                />
              </div>
            </div>
          </div>

          {/* CSS global pour neutraliser tous les fonds blancs */}
          <style dangerouslySetInnerHTML={{
            __html: `
              /* 1) Rendre le wrapper et tout son contenu TRANSPARENT */
              .chat-embed, .chat-embed * { background: transparent !important; }

              /* 2) Tuer les fonds blancs Lovable fréquents (classes & inline styles) */
              .bg-white, .background-white, .card-white,
              [class*="Section"][class*="white"],
              [class*="Container"][class*="white"],
              [style*="background: #fff"], [style*="background:#fff"],
              [style*="background-color: #fff"], [style*="background-color: rgb(255"] {
                background: transparent !important;
              }

              /* 3) L'iframe ne doit jamais recréer un fond et hérite de l'arrondi */
              .chat-embed iframe { background: transparent !important; border:0; border-radius:inherit; display:block; }

              /* 4) Mobile : hauteur fluide */
              @media (max-width: 768px){
                .chat-embed{ height:72vh; border-radius:20px; }
              }
            `
          }} />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="groove" 
              size="lg" 
              className="text-lg px-8 py-4 font-rubik"
            >
              <Bot className="mr-2" />
              Commencer à chatter
            </Button>
            <Button 
              variant="groove-outline" 
              size="lg" 
              className="text-lg px-8 py-4 font-rubik"
            >
              <Sparkles className="mr-2" />
              Voir les fonctionnalités IA
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/lovable-uploads/a57b665d-f50e-47e5-bba3-a6536b06b1a9.png" 
                  alt="Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Recommandations précises</h4>
              <p className="font-rubik text-white/70 text-sm">L'IA analyse tes goûts musicaux</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/lovable-uploads/97efa918-8b26-4c24-8fe9-3d52878d45d0.png" 
                  alt="Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Réponses instantanées</h4>
              <p className="font-rubik text-white/70 text-sm">Devis et options en temps réel</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/lovable-uploads/fe60db83-1c2b-4ae8-8798-2ec766325797.png" 
                  alt="Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Conseils exclusifs</h4>
              <p className="font-rubik text-white/70 text-sm">Tips et bons plans cachés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;