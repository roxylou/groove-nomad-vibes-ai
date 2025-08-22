import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

const ChatbotSectionEn = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <section id="chatbot-section-en" className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6 p-4 glass-card">
              <Bot className="w-8 h-8 text-groove-pink" />
              <span className="font-rubik text-xl font-extrabold text-white tracking-wide">
                PERSONALIZED AI
              </span>
              <Sparkles className="w-6 h-6 text-groove-violet" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-groove tracking-wide">
              TALK TO OUR AI!
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-rubik font-medium max-w-2xl mx-auto leading-relaxed">
              Share your music taste and let the AI build the perfect trip in real time
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
                          Hello! What type of music makes you move? 🎵
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-gradient-to-r from-groove-pink to-groove-violet rounded-2xl rounded-tr-sm p-4 max-w-xs">
                        <p className="font-rubik text-white text-sm">
                          I love electro and techno! 
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
                          Perfect! I'm thinking Tomorrowland or Ultra... What budget? 💰
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
              // Chatbot IA intégré
              <div className="glass-card p-4 shadow-2xl max-w-2xl mx-auto h-96">
                <iframe
                  src="https://backtofest-v2.onrender.com"
                  className="w-full h-full rounded-2xl border-0"
                  title="GrooveNomad AI Chatbot"
                  allow="microphone; camera; clipboard-read; clipboard-write"
                  loading="lazy"
                />
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
              {showChat ? "See preview" : "Start chatting"}
            </Button>
            <Button 
              variant="groove-outline" 
              size="lg" 
              className="text-lg px-8 py-4 font-rubik"
            >
              <Sparkles className="mr-2" />
              See AI features
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
              <h4 className="font-rubik font-semibold text-white mb-2">Precise recommendations</h4>
              <p className="font-rubik text-white/70 text-sm">AI analyzes your music taste</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/lovable-uploads/97efa918-8b26-4c24-8fe9-3d52878d45d0.png" 
                  alt="Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Instant responses</h4>
              <p className="font-rubik text-white/70 text-sm">Quotes and options in real time</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/lovable-uploads/fe60db83-1c2b-4ae8-8798-2ec766325797.png" 
                  alt="Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-rubik font-semibold text-white mb-2">Exclusive tips</h4>
              <p className="font-rubik text-white/70 text-sm">Hidden tips and deals</p>
            </div>
          </div>

          {/* Prototype notice */}
          <div className="mt-8">
            <div className="inline-block p-4 glass-card">
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