import HeroSectionEn from "@/components/en/HeroSectionEn";
import HowItWorksSectionEn from "@/components/en/HowItWorksSectionEn";
import FestivalsSectionEn from "@/components/en/FestivalsSectionEn";
import TestimonialsSectionEn from "@/components/en/TestimonialsSectionEn";
import ChatbotSectionEn from "@/components/en/ChatbotSectionEn";
import FooterEn from "@/components/en/FooterEn";

const IndexEn = () => {
  return (
    <div 
      className="min-h-screen font-rubik"
      style={{
        background: 'linear-gradient(to bottom, #e53975 0%, #729dc9 100%)'
      }}
    >
      <HeroSectionEn />
      <HowItWorksSectionEn />
      <FestivalsSectionEn />
      <TestimonialsSectionEn />
      <ChatbotSectionEn />
      <FooterEn />
    </div>
  );
};

export default IndexEn;