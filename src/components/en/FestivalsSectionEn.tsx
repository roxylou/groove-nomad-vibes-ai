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
    dates: "July 19–28, 2024",
    location: "Boom, Belgium",
    price: 89,
    image: "/lovable-uploads/fdad185a-0221-48ab-a835-839049e117b2.png"
  },
  {
    name: "Sónar Festival",
    dates: "June 13–15, 2024", 
    location: "Barcelona, Spain",
    price: 79,
    image: "/lovable-uploads/69aed925-3a00-4266-bc56-43aad1cc58be.png"
  },
  {
    name: "Primavera Sound",
    dates: "May 29 – June 2, 2024",
    location: "Barcelona, Spain", 
    price: 120,
    image: "/lovable-uploads/4a771949-e4d6-4aba-bf82-ac450e3aab75.png"
  },
  {
    name: "Coachella",
    dates: "April 12–21, 2024",
    location: "Indio, California, USA",
    price: 450,
    image: "/lovable-uploads/364183a8-4f42-4900-83d9-8f98ec026919.png"
  },
  {
    name: "Ultra Music Festival", 
    dates: "March 22–24, 2024",
    location: "Miami, USA",
    price: 299,
    image: "/lovable-uploads/13542835-590e-4fb0-a291-47d334e4471d.png"
  },
  {
    name: "Exit Festival",
    dates: "July 10–14, 2024",
    location: "Novi Sad, Serbia",
    price: 70,
    image: "/lovable-uploads/6f9e89f1-1145-489a-87fc-71471f2e6f9e.png"
  },
  {
    name: "Dekmantel Festival",
    dates: "July 31 – August 4, 2024", 
    location: "Amsterdam, Netherlands",
    price: 95,
    image: "/lovable-uploads/92a5bbff-8aca-4a1d-9c78-0423c2289668.png"
  },
  {
    name: "Burning Man",
    dates: "August 25 – September 2, 2024",
    location: "Black Rock Desert, Nevada, USA", 
    price: 425,
    image: "/lovable-uploads/4039d3c1-ae30-4f4e-80c9-4653aa46e33d.png"
  },
  {
    name: "DGTL Amsterdam",
    dates: "March 29–31, 2024",
    location: "Amsterdam, Netherlands",
    price: 75,
    image: "/lovable-uploads/8251015b-3617-4948-9aa8-e4fffff7b4dd.png"
  },
  {
    name: "Movement Detroit", 
    dates: "May 25–27, 2024",
    location: "Detroit, USA",
    price: 95,
    image: "/lovable-uploads/1f7546db-e06a-4385-9bbd-465084380c15.png"
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
    <section className="py-20 relative" data-section="festivals-en">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-groove tracking-wide">
            Featured festivals 🎶
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-rubik font-medium max-w-2xl mx-auto">
            Discover an exclusive selection of the best electronic festivals worldwide
          </p>
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                   <Card className="glass-card border-white/20 overflow-hidden group hover:scale-105 transition-groove shadow-groove hover:shadow-xl">
                     <div className="relative h-48 overflow-hidden">
                       <img 
                         src={festival.image}
                         alt={`${festival.name} - Electronic festival`}
                         className="w-full h-full object-cover group-hover:scale-110 transition-groove"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-groove-blue/80 via-groove-blue/20 to-transparent" />
                       <div className="absolute top-4 right-4">
                         <div className="bg-groove-pink/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold font-rubik">
                           From €{festival.price}
                         </div>
                       </div>
                     </div>
                     <CardContent className="p-6 bg-gradient-to-br from-white/10 to-white/5">
                       <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-groove tracking-wide">
                         {festival.name}
                       </h3>
                       <div className="space-y-3 text-white/90 font-rubik">
                         <div className="flex items-center gap-3">
                           <span className="text-lg">📅</span>
                           <span className="text-sm md:text-base font-medium">{festival.dates}</span>
                         </div>
                         <div className="flex items-center gap-3">
                           <span className="text-lg">📍</span>
                           <span className="text-sm md:text-base font-medium">{festival.location}</span>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-card border-white/30 text-white hover:bg-groove-pink/20 hover:border-groove-pink/50 transition-groove -left-4 md:-left-12" />
            <CarouselNext className="glass-card border-white/30 text-white hover:bg-groove-pink/20 hover:border-groove-pink/50 transition-groove -right-4 md:-right-12" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            onClick={scrollToChatbot}
            variant="groove"
            size="lg"
            className="text-lg px-8 py-6 font-bold font-rubik shadow-groove hover:shadow-xl"
          >
            Get a custom quote
          </Button>
          <p className="text-white/80 mt-4 font-rubik text-sm">
            Response in less than 24h • Free quote • No commitment
          </p>
        </div>
      </div>
    </section>
  );
};

export default FestivalsSectionEn;