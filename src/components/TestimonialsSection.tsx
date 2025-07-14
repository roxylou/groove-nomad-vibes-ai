import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Léa, 24 ans",
    location: "Paris",
    text: "GrooveNomad m'a organisé un weekend magique à Tomorrowland ! L'IA avait tout prévu, même les afterparties secrètes 🔥",
    rating: 5,
    festival: "Tomorrowland Belgium"
  },
  {
    name: "Tom, 28 ans", 
    location: "Lyon",
    text: "Première fois que je voyageais seul pour un festival. L'app m'a trouvé des colocs parfaits et un hébergement de fou !",
    rating: 5,
    festival: "Burning Man"
  },
  {
    name: "Sarah, 22 ans",
    location: "Marseille", 
    text: "Budget étudiant respecté, expérience de dingue ! L'IA connaît vraiment nos goûts de jeunes festivaliers 💜",
    rating: 5,
    festival: "Ultra Music Festival"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Festival Background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-groove-light-pink/20 via-groove-white to-groove-blue/15"></div>
      
      {/* Large organic background shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-groove-violet/10 to-groove-pink/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-groove-light-pink/15 to-groove-blue/10 rounded-full blur-2xl animate-bounce"></div>
      
      {/* Sparkle effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-groove-pink rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-groove-violet rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-groove-light-pink/50 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-rubik text-3xl md:text-5xl font-extrabold text-groove-blue mb-6 tracking-wide">
            ILS ONT VÉCU LEUR GROOVE
          </h2>
          <p className="font-rubik text-lg md:text-xl text-groove-blue/80 max-w-2xl mx-auto">
            Découvre les témoignages de notre communauté de festivaliers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card with soft shadow */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg shadow-groove-violet/10 hover:shadow-2xl hover:shadow-groove-blue/20 transition-all duration-500 group-hover:scale-105 border border-groove-light-pink/30 overflow-hidden">
                {/* Glitter overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-groove-pink/5 via-transparent to-groove-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-groove-pink to-groove-violet rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-groove-pink fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="font-rubik text-groove-blue mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* User info */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-groove-pink to-groove-violet rounded-full flex items-center justify-center">
                      <span className="text-white font-bold font-rubik text-sm">
                        {testimonial.name.split(',')[0][0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-rubik font-semibold text-groove-blue">
                        {testimonial.name}
                      </div>
                      <div className="font-rubik text-sm text-groove-blue/70">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Festival badge with colored dots */}
                  <div className="flex items-center gap-2 mt-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-groove-blue' : 
                      index === 1 ? 'bg-groove-pink' : 
                      'bg-groove-violet'
                    }`}></div>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-groove-light-pink/30 to-groove-violet/20 rounded-full">
                      <span className="font-rubik text-xs font-medium text-groove-blue">
                        🎵 {testimonial.festival}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-groove-light-pink/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute top-1/2 left-2 w-2 h-2 bg-groove-violet/30 rounded-full group-hover:animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-groove-pink/10 via-groove-violet/10 to-groove-blue/10 rounded-3xl backdrop-blur-sm border border-groove-pink/20">
            <h3 className="font-rubik text-2xl font-extrabold text-groove-blue mb-2 tracking-wide">
              TON AVIS NOUS INTÉRESSE !
            </h3>
            <p className="font-rubik text-groove-blue/80 mb-4">
              Rejoins notre communauté et partage tes expériences festival
            </p>
            <div className="flex items-center justify-center gap-2 text-groove-pink">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-rubik font-semibold">4.9/5 sur 2000+ avis</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;