import HeroSectionEn from "@/components/en/HeroSectionEn";
import HowItWorksSectionEn from "@/components/en/HowItWorksSectionEn";
import FestivalsSectionEn from "@/components/en/FestivalsSectionEn";
import TestimonialsSectionEn from "@/components/en/TestimonialsSectionEn";
import ChatbotSectionEn from "@/components/en/ChatbotSectionEn";
import FooterEn from "@/components/en/FooterEn";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const IndexEn = () => {
  return (
    <div className="min-h-screen font-rubik">
      {/* Language switcher in fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <div 
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
    </div>
  );
};

export default IndexEn;