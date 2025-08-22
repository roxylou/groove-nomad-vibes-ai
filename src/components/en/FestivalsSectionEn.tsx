import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const festivals = [
  {
    name: "Dekmantel Festival",
    dates: "July 31 – August 4, 2024",
    location: "Amsterdam, Netherlands",
    price: "From €95",
    image: "/lovable-uploads/1f7546db-e06a-4385-9bbd-465084380c15.png"
  },
  {
    name: "Sonar Festival",
    dates: "June 13-15, 2024",
    location: "Barcelona, Spain", 
    price: "From €180",
    image: "/lovable-uploads/35cd1451-7641-43c7-9583-b35707b9f2ac.png"
  },
  {
    name: "Movement Festival",
    dates: "May 25-27, 2024",
    location: "Detroit, USA",
    price: "From €120",
    image: "/lovable-uploads/4039d3c1-ae30-4f4e-80c9-4653aa46e33d.png"
  },
  {
    name: "Awakenings Festival",
    dates: "June 29-30, 2024", 
    location: "Amsterdam, Netherlands",
    price: "From €85",
    image: "/lovable-uploads/4a771949-e4d6-4aba-bf82-ac450e3aab75.png"
  },
  {
    name: "Time Warp",
    dates: "April 6, 2024",
    location: "Mannheim, Germany",
    price: "From €65",
    image: "/lovable-uploads/54b4fb0f-fad5-4063-bedf-97624ee4afa6.png"
  },
  {
    name: "Fabric London",
    dates: "Every weekend",
    location: "London, UK",
    price: "From €25",
    image: "/lovable-uploads/5cac453b-5167-428e-9ece-1d783717e179.png"
  },
  {
    name: "Berghain",
    dates: "Every weekend",
    location: "Berlin, Germany", 
    price: "From €20",
    image: "/lovable-uploads/6f9e89f1-1145-489a-87fc-71471f2e6f9e.png"
  },
  {
    name: "Coachella",
    dates: "April 12-21, 2024",
    location: "California, USA",
    price: "From €400",
    image: "/lovable-uploads/69aed925-3a00-4266-bc56-43aad1cc58be.png"
  }
];

const FestivalsSectionEn = () => {
  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section-en');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" data-section="festivals-en">
      <div className="container mx-auto px-4">
        {/* Blurred Circular Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-radial from-[#729dc9]/40 via-[#4a90b8]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/40 via-[#e91e63]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-br from-groove-violet/30 to-groove-pink/30 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute bottom-16 right-1/3 w-20 h-20 bg-groove-light-pink/20 rounded-full blur-lg animate-bounce delay-1000"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="section-title text-white mb-4">Featured festivals 🎶</h2>
          <p className="section-subtitle text-white/90 max-w-2xl mx-auto">
            Discover an exclusive selection of the best electronic festivals worldwide.
          </p>
        </div>

        <div className="relative z-10 mb-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {festivals.map((festival, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={festival.image} 
                          alt={festival.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-groove-dark/80 via-groove-dark/30 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-groove-pink/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                            {festival.price}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 font-groove group-hover:text-groove-light-pink transition-colors duration-300">
                          {festival.name}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-white/80 text-sm font-rubik">
                            <Calendar className="w-4 h-4 mr-2 text-groove-light-pink" />
                            {festival.dates}
                          </div>
                          <div className="flex items-center text-white/80 text-sm font-rubik">
                            <MapPin className="w-4 h-4 mr-2 text-groove-light-pink" />
                            {festival.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-button border-white/20 text-white hover:bg-white/10" />
            <CarouselNext className="glass-button border-white/20 text-white hover:bg-white/10" />
          </Carousel>
        </div>

        <div className="text-center relative z-10">
          <Button 
            variant="groove" 
            size="lg" 
            onClick={scrollToChatbot}
            className="mb-4 text-lg px-8 py-4 font-rubik"
          >
            Get a custom quote
            <ArrowRight className="ml-2" />
          </Button>
          <p className="text-white/80 font-rubik text-sm">
            Response in less than 24h · Free quote · No commitment
          </p>
        </div>
      </div>
    </section>
  );
};

export default FestivalsSectionEn;