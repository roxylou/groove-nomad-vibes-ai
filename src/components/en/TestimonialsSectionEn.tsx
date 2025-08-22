import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie",
    location: "Paris, France",
    text: "Amazing experience! The AI found the perfect festival for my taste and the trip was seamless from start to finish.",
    rating: 5,
    festival: "Dekmantel Festival"
  },
  {
    name: "Marcus",
    location: "Berlin, Germany", 
    text: "I discovered festivals I never would have found on my own. The personalized recommendations were spot on!",
    rating: 5,
    festival: "Sonar Festival"
  },
  {
    name: "Elena",
    location: "Barcelona, Spain",
    text: "The booking process was so smooth and the AI understood exactly what I was looking for. Will definitely use again!",
    rating: 5,
    festival: "Movement Festival"
  }
];

const TestimonialsSectionEn = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Blurred Circular Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-radial from-[#d63384]/30 via-[#e91e63]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-gradient-radial from-[#729dc9]/30 via-[#4a90b8]/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-16 h-16 bg-groove-light-pink/20 rounded-full blur-md animate-pulse delay-200"></div>
          <div className="absolute bottom-1/4 right-1/5 w-12 h-12 bg-groove-violet/25 rounded-full blur-lg animate-bounce delay-800"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="section-title text-white mb-4">They found their groove</h2>
          <p className="section-subtitle text-white/90 max-w-2xl mx-auto">
            Discover how others lived their unforgettable festival journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 font-rubik italic leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white font-groove text-lg">{testimonial.name}</div>
                <div className="text-white/70 font-rubik text-sm">{testimonial.location}</div>
                <div className="text-groove-light-pink font-rubik text-sm mt-1">
                  @ {testimonial.festival}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <div className="glass-card inline-block px-8 py-4 rounded-full">
            <p className="text-white/90 font-rubik">
              <span className="text-groove-light-pink font-bold">Join them!</span> Share your experience with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionEn;