import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

const ChatbotSection = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">

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
            
            <h2 className="font-rubik text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-wide">
              PARLE À NOTRE IA !
            </h2>
            <p className="font-rubik text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Notre assistant IA comprend tes goûts musicaux et crée ton voyage festival parfait en temps réel
            </p>
          </div>

          {/* Chatbot Preview/Placeholder */}
          <div className="mb-8">
            {!showChat ? (
              // Preview State
              <div className="glass-card p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
                <div className="space-y-6">
                  {/* Mock conversation */}
                  <div className="text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-groove-pink to-groove-violet rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-groove-light-pink/30 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                        <p className="font-rubik text-white text-sm">
                          Salut ! Quel genre de musique te fait vibrer ? 🎵
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-gradient-to-r from-groove-pink to-groove-violet rounded-2xl rounded-tr-sm p-4 max-w-xs">
                        <p className="font-rubik text-white text-sm">
                          J'adore l'electro et la techno ! 
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-groove-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold font-rubik text-xs">U</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-groove-pink to-groove-violet rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-groove-light-pink/30 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                        <p className="font-rubik text-white text-sm">
                          Parfait ! Je pense à Tomorrowland ou Ultra... Quel budget ? 💰
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-groove-pink to-groove-violet rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-groove-light-pink/30 rounded-2xl rounded-tl-sm p-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-groove-pink rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-groove-violet rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-groove-blue rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Actual Chatbot Iframe Placeholder
              <div className="glass-card p-4 shadow-2xl max-w-2xl mx-auto h-96">
                <div className="w-full h-full bg-gradient-to-br from-groove-light-pink/20 to-groove-violet/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Bot className="w-16 h-16 text-groove-pink mx-auto mb-4" />
                    <p className="font-rubik text-white">
                      Intégration chatbot IA ici
                    </p>
                    <p className="font-rubik text-white/70 text-sm mt-2">
                      (iframe ou widget chat)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="groove" 
              size="lg" 
              className="text-lg px-8 py-4 font-rubik"
              onClick={() => setShowChat(!showChat)}
            >
              <MessageCircle className="mr-2" />
              {showChat ? "Voir l'aperçu" : "Commencer à chatter"}
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
              <div className="w-12 h-12 bg-gradient-to-br from-groove-pink to-groove-violet rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Recommandations précises</h4>
              <p className="font-rubik text-white/70 text-sm">L'IA analyse tes goûts musicaux</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-groove-violet to-groove-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Réponses instantanées</h4>
              <p className="font-rubik text-white/70 text-sm">Devis et options en temps réel</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-groove-blue to-groove-pink rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">🔥</span>
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