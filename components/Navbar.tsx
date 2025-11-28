import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkHref = (anchor: string) => {
    return isHome ? anchor : `/${anchor}`;
  };

  const navLinks = [
    { name: 'About', href: getLinkHref('#about'), isRouterLink: false },
    { name: 'Campus', href: getLinkHref('#campus'), isRouterLink: false },
    { name: 'Nutrición', href: '/nutricion', isRouterLink: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !isHome ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white uppercase relative group z-50">
          Noe Masià
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            link.isRouterLink ? (
              <Link 
                key={link.name}
                to={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
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
           {navLinks.map((link) => (
             link.isRouterLink ? (
              <Link 
                key={link.name}
                to={link.href}
                className="text-xl uppercase tracking-widest text-white hover:text-brand-orange"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
             ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl uppercase tracking-widest text-white hover:text-brand-orange"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
             )
          ))}
        </div>
      )}
    </nav>
  );
};