import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isNutrition = location.pathname === '/nutricion';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHome) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Logic for visual style:
  // Starts transparent (unless scrolled).
  // On Nutrition page, transparent mode needs dark text because background is light.
  const isTransparent = !isScrolled;
  const useDarkText = isTransparent && isNutrition;

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
  }`;

  const logoColor = useDarkText ? 'text-brand-dark' : 'text-white';
  const linkDefaultColor = useDarkText ? 'text-brand-dark/80 hover:text-brand-green' : 'text-gray-300 hover:text-brand-green';
  const linkActiveColor = "text-brand-green font-bold";
  const menuButtonColor = useDarkText ? 'text-brand-dark' : 'text-white';

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold tracking-[0.2em] uppercase relative group z-50 ${logoColor}`}>
          Noe Masiá
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <button 
            onClick={(e) => handleNavigation(e, 'about')}
            className={`text-sm uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer ${linkDefaultColor}`}
          >
            Noe Masiá
          </button>
          
          <Link 
            to="/campus"
            className={`text-sm uppercase tracking-widest transition-colors ${
              location.pathname === '/campus' ? linkActiveColor : linkDefaultColor
            }`}
          >
            Campus
          </Link>

          <Link 
            to="/nutricion"
            className={`text-sm uppercase tracking-widest transition-colors ${
              location.pathname === '/nutricion' ? linkActiveColor : linkDefaultColor
            }`}
          >
            Nutrición
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 ${isMobileMenuOpen ? 'text-white' : menuButtonColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-dark flex flex-col justify-center items-center space-y-8 z-40">
           <button 
            onClick={(e) => handleNavigation(e, 'about')}
            className="text-xl uppercase tracking-widest text-white hover:text-brand-green bg-transparent border-none"
          >
            Noe Masiá
          </button>
          
          <Link 
            to="/campus"
            className="text-xl uppercase tracking-widest text-white hover:text-brand-green"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Campus
          </Link>

          <Link 
            to="/nutricion"
            className="text-xl uppercase tracking-widest text-white hover:text-brand-green"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nutrición
          </Link>
        </div>
      )}
    </nav>
  );
};