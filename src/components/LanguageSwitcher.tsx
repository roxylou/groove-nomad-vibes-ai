import { useLocation, Link } from "react-router-dom";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const currentSection = location.hash;

  const frenchPath = isEnglish ? 
    (location.pathname.replace('/en', '') || '/') + currentSection : 
    location.pathname + currentSection;
  
  const englishPath = isEnglish ? 
    location.pathname + currentSection : 
    '/en' + (location.pathname === '/' ? '' : location.pathname) + currentSection;

  return (
    <div className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        to={frenchPath}
        className={`transition-colors duration-200 ${
          !isEnglish 
            ? 'text-white font-medium' 
            : 'text-white/70 hover:text-white/90'
        }`}
      >
        FR
      </Link>
      <span className="text-white/50">|</span>
      <Link
        to={englishPath}
        className={`transition-colors duration-200 ${
          isEnglish 
            ? 'text-white font-medium' 
            : 'text-white/70 hover:text-white/90'
        }`}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;