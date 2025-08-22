import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const FooterEn = () => {
  return (
    <footer className="bg-groove-dark/50 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/9bc7e05f-20ce-469d-bf51-875605907f4c.png" 
              alt="Groove Nomad" 
              className="h-12 mb-4"
            />
            <p className="text-white/80 font-rubik text-sm leading-relaxed max-w-md">
              Build your festival trip with AI. Personalized experiences, instant quotes, seamless booking for electronic music lovers worldwide.
            </p>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-bold font-groove text-lg mb-4">Quick links</h3>
            <ul className="space-y-2 font-rubik text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Legal notice
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-white font-bold font-groove text-lg mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-groove-pink/20 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-groove-pink/20 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-groove-pink/20 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-groove-pink/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-rubik text-sm">
              © 2024 Groove Nomad. All rights reserved.
            </p>
            <p className="text-white/60 font-rubik text-xs mt-2 md:mt-0">
              Made with ❤️ for festival lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEn;