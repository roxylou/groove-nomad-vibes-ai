import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    image: "/lovable-uploads/8251015b-3617-4948-9aa8-e4fffff7b4dd.png",
    title: "Pick your vibe",
    description: "Tell us your favorite music style, your budget, and your preferred dates."
  },
  {
    image: "/lovable-uploads/92a5bbff-8aca-4a1d-9c78-0423c2289668.png",
    title: "AI crafts your trip",
    description: "Our AI creates your personalized trip: festival, accommodation, transport, and activities."
  },
  {
    image: "/lovable-uploads/64b343b3-72b3-421f-a42f-56780c3ed1c2.png",
    title: "Get your quote & book",
    description: "Instant transparent quote, secure booking in just 3 clicks. Your groove is waiting!"
  }
];

const HowItWorksSectionEn = () => {
  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section-en');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Blurred Circular Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/40 via-[#e91e63]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-radial from-[#729dc9]/40 via-[#4a90b8]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-1/4 w-20 h-20 bg-gradient-to-br from-groove-light-pink/30 to-groove-pink/30 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-groove-violet/20 rounded-full blur-md animate-bounce delay-700"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="section-title text-white mb-4">How it works?</h2>
          <p className="section-subtitle text-white/90 max-w-2xl mx-auto">
            Three simple steps to create the festival trip of your dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-groove-pink to-groove-violet rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-groove-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-groove">{step.title}</h3>
              <p className="text-white/90 font-rubik leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <Button 
            variant="groove" 
            size="lg" 
            onClick={scrollToChatbot}
            className="mb-4 text-lg px-8 py-4 font-rubik"
          >
            Start your journey
            <ArrowRight className="ml-2" />
          </Button>
          <p className="text-white/80 font-rubik text-sm">
            The AI is waiting to learn your music taste to build your perfect trip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSectionEn;