import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const festivals = [
  {
    name: "Tomorrowland",
    dates: "19–28 juillet 2024",
    location: "Boom, Belgique",
    price: 89,
    image: "/lovable-uploads/fdad185a-0221-48ab-a835-839049e117b2.png"
  },
  {
    name: "Sónar Festival",
    dates: "13–15 juin 2024", 
    location: "Barcelone, Espagne",
    price: 79,
    image: "/lovable-uploads/69aed925-3a00-4266-bc56-43aad1cc58be.png"
  },
  {
    name: "Primavera Sound",
    dates: "29 mai – 2 juin 2024",
    location: "Barcelone, Espagne", 
    price: 120,
    image: "/lovable-uploads/4a771949-e4d6-4aba-bf82-ac450e3aab75.png"
  },
  {
    name: "Coachella",
    dates: "12–21 avril 2024",
    location: "Indio, Californie, USA",
    price: 450,
    image: "/lovable-uploads/364183a8-4f42-4900-83d9-8f98ec026919.png"
  },
  {
    name: "Ultra Music Festival", 
    dates: "22–24 mars 2024",
    location: "Miami, USA",
    price: 299,
    image: "/lovable-uploads/13542835-590e-4fb0-a291-47d334e4471d.png"
  },
  {
    name: "Exit Festival",
    dates: "10–14 juillet 2024",
    location: "Novi Sad, Serbie",
    price: 70,
    image: "/lovable-uploads/6f9e89f1-1145-489a-87fc-71471f2e6f9e.png"
  },
  {
    name: "Dekmantel Festival",
    dates: "31 juillet – 4 août 2024", 
    location: "Amsterdam, Pays-Bas",
    price: 95,
    image: "/lovable-uploads/dabf1291-1584-48d6-a2cb-027ab6d48e3a.png"
  },
  {
    name: "Burning Man",
    dates: "25 août – 2 septembre 2024",
    location: "Black Rock Desert, Nevada, USA", 
    price: 425,
    image: "/lovable-uploads/ec20c808-cfdb-4a19-9379-e8cb77a44449.png"
  },
  {
    name: "DGTL Amsterdam",
    dates: "29–31 mars 2024",
    location: "Amsterdam, Pays-Bas",
    price: 75,
    image: "/lovable-uploads/f40d29b3-88f0-4531-b5e3-fce050b053e3.png"
  },
  {
    name: "Movement Detroit", 
    dates: "25–27 mai 2024",
    location: "Détroit, USA",
    price: 95,
    image: "/lovable-uploads/1f7546db-e06a-4385-9bbd-465084380c15.png"
  }
];

const FestivalsSection = () => {
  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="glass-section py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 font-groove">
            Festivals phares 🎶
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {festivals.map((festival, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={festival.image}
                        alt={festival.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 font-groove">
                        {festival.name}
                      </h3>
                      <div className="space-y-2 text-white/90">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">📅</span>
                          <span className="text-sm">{festival.dates}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">📍</span>
                          <span className="text-sm">{festival.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">💶</span>
                          <span className="text-sm font-semibold">Prix à partir de {festival.price} €</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-card border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="glass-card border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            onClick={scrollToChatbot}
            variant="groove"
            size="lg"
            className="text-lg px-8 py-6 font-semibold"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FestivalsSection;