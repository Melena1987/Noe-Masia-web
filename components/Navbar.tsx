import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

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

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !isHome ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white uppercase relative group z-50">
          Noe Masiá
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <button 
            onClick={(e) => handleNavigation(e, 'about')}
            className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-green transition-colors bg-transparent border-none cursor-pointer"
          >
            About
          </button>
          
          <Link 
            to="/campus"
            className={`text-sm uppercase tracking-widest transition-colors ${
              location.pathname === '/campus' ? 'text-brand-green font-bold' : 'text-gray-300 hover:text-brand-green'
            }`}
          >
            Campus
          </Link>

          <Link 
            to="/nutricion"
            className={`text-sm uppercase tracking-widest transition-colors ${
              location.pathname === '/nutricion' ? 'text-brand-green font-bold' : 'text-gray-300 hover:text-brand-green'
            }`}
          >
            Nutrición
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
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
            About
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