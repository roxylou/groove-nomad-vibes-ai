import { Button } from "@/components/ui/button";
import { Bot, Sparkles } from "lucide-react";

const ChatbotSectionEn = () => {

  return (
    <section id="chatbot-section-en" className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10" style={{background:'transparent',backgroundColor:'transparent'}}>
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
            <p className="text-sm text-white/70 font-rubik mt-2 italic">
              Prototype: the assistant currently speaks French 🇫🇷
            </p>
          </div>

          {/* Typebot Chatbot */}
          <div className="mb-8">
            <div className="glass-card shadow-2xl max-w-2xl mx-auto overflow-hidden" style={{background:'transparent',backgroundColor:'transparent'}}>
              <div className="chat-embed" style={{position:'relative',width:'100%',height:'680px',borderRadius:'inherit',overflow:'hidden',background:'transparent',padding:'0'}}>
                <iframe
                  src="https://typebot.co/embed/groove-nomad-assistant-a3rk34f?theme=dark&bg=transparent"
                  title="GrooveNomad AI Assistant"
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
              /* 1) Neutraliser TOUS les fonds blancs dans la zone du chatbot */
              #chatbot-section-en .glass-card,
              #chatbot-section-en .glass-card *,
              #chatbot-section-en .chat-embed, #chatbot-section-en .chat-embed *,
              #chatbot-section-en .bg-white, #chatbot-section-en .background-white, #chatbot-section-en .card-white, #chatbot-section-en .bg-card,
              #chatbot-section-en [class*="Section"][class*="white"],
              #chatbot-section-en [class*="Container"][class*="white"],
              #chatbot-section-en [class*="card"][class*="bg"],
              #chatbot-section-en [style*="background: #fff"], #chatbot-section-en [style*="background:#fff"],
              #chatbot-section-en [style*="background-color: #fff"], #chatbot-section-en [style*="background-color:#fff"],
              #chatbot-section-en [style*="background-color: rgb(255"], #chatbot-section-en [style*="background-color:rgb(255"] {
                background: transparent !important;
                background-color: transparent !important;
              }

              /* 2) La glass-card garde son liseré mais fond transparent */
              #chatbot-section-en .glass-card {
                background: transparent !important;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
              }

              /* 3) L'embed et iframe remplissent 100% sans fond */
              .chat-embed {
                background: transparent !important;
                padding: 0 !important;
                margin: 0 !important;
              }

              .chat-embed iframe { 
                background: transparent !important; 
                border: 0; 
                border-radius: inherit; 
                display: block;
                width: 100% !important;
                height: 100% !important;
              }

              /* 4) Mobile : hauteur fluide */
              @media (max-width: 768px){
                .chat-embed { 
                  height: 75vh !important; 
                  border-radius: inherit !important; 
                }
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
              Start chatting
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
        </div>
      </div>
    </section>
  );
};

export default ChatbotSectionEn;