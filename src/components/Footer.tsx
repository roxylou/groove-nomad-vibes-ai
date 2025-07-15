import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-rubik text-3xl font-extrabold text-white tracking-wider mb-2">
                GROOVE<span className="text-groove-light-pink">NOMAD</span>
              </h3>
              <p className="font-rubik text-white/80 max-w-md leading-relaxed">
                Crée ton voyage festival parfait avec l'IA. 
                Personnalisé, authentique, inoubliable. 
                Ton groove t'attend quelque part dans le monde.
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-rubik font-semibold text-white mb-3">
                Reste dans le groove 🎵
              </h4>
              <div className="flex gap-2 max-w-sm">
                <input 
                  type="email" 
                  placeholder="ton@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-rubik focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="groove" size="sm" className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rubik font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 font-rubik">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Festivals</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">IA Chatbot</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-rubik font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 font-rubik">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>hello@groovenomad.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 font-rubik text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGU</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="font-rubik text-white/70 text-sm">
              © 2024 GrooveNomad. Tous droits réservés. 
              <span className="text-groove-light-pink font-semibold"> Made with 💜 for festival lovers</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;