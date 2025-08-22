import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Zap, Heart, Globe } from "lucide-react";
import { useState } from "react";

const ChatbotSectionEn = () => {
  const [showChat, setShowChat] = useState(false);

  const aiFeatures = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Personalized recommendations",
      description: "Based on your music taste and preferences"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant quotes",
      description: "Real-time pricing for festivals and travel"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Custom itineraries", 
      description: "Tailored experiences just for you"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global festival database",
      description: "Access to 500+ festivals worldwide"
    }
  ];

  return (
    <section id="chatbot-section-en" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Blurred Circular Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-radial from-[#729dc9]/35 via-[#4a90b8]/18 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/35 via-[#e91e63]/18 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 right-1/4 w-20 h-20 bg-gradient-to-br from-groove-pink/25 to-groove-violet/25 rounded-full blur-xl animate-pulse delay-400"></div>
          <div className="absolute bottom-12 left-1/5 w-24 h-24 bg-groove-light-pink/20 rounded-full blur-lg animate-bounce delay-600"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="section-title text-white mb-4">Talk to our AI</h2>
          <p className="section-subtitle text-white/90 max-w-2xl mx-auto">
            Share your music taste and let the AI build the perfect trip in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Chatbot Preview */}
          <div className="order-2 lg:order-1">
            {!showChat ? (
              <div className="glass-card p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-groove-pink to-groove-violet rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass-card p-3 rounded-lg flex-1">
                      <p className="text-white text-sm font-rubik">
                        Hello! I'm your festival AI assistant. What type of music makes you move? 🎵
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-groove-pink/20 p-3 rounded-lg max-w-xs">
                      <p className="text-white text-sm font-rubik">
                        I love techno and electronic music, especially deep house!
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-groove-pink to-groove-violet rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass-card p-3 rounded-lg flex-1">
                      <p className="text-white text-sm font-rubik">
                        Perfect! I recommend Dekmantel Festival in Amsterdam. It features the best deep house artists. Budget of around €300 for 3 days?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-1 min-h-[400px]">
                <iframe 
                  src="https://groovy-nomad-f0hiF.lovableproject.com/"
                  className="w-full h-96 rounded-xl border-0"
                  title="Groove Nomad Chatbot"
                />
              </div>
            )}
          </div>

          {/* CTA and Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <Button 
                variant="groove" 
                size="lg" 
                onClick={() => setShowChat(!showChat)}
                className="w-full text-lg py-4 font-rubik"
              >
                <MessageCircle className="mr-2" />
                {showChat ? "Back to preview" : "Start chatting"}
              </Button>
              <Button 
                variant="groove-outline" 
                size="lg" 
                className="w-full text-lg py-4 font-rubik backdrop-blur-sm"
              >
                <Sparkles className="mr-2" />
                See AI features
              </Button>
            </div>

            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-groove-pink to-groove-violet rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold font-groove text-lg mb-1">{feature.title}</h3>
                    <p className="text-white/80 font-rubik text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-4 rounded-lg">
              <p className="text-white/90 font-rubik text-sm">
                <span className="font-bold text-groove-light-pink">Prototype:</span> the assistant currently speaks French 🇫🇷
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSectionEn;