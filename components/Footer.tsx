import React, { useState, useEffect } from 'react';
import { Instagram, Heart, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true);
      // Remove the highlight class after the animation finishes (0.5s * 2 iterations = 1s)
      setTimeout(() => setIsHighlighted(false), 1000);
    };

    window.addEventListener('highlight-contact', handleHighlight);
    return () => window.removeEventListener('highlight-contact', handleHighlight);
  }, []);

  // Determine classes based on state
  const iconBaseClass = "transition-all duration-300";
  const iconNormalClass = "text-gray-500 hover:text-brand-green";
  const iconHighlightClass = "text-brand-green animate-pop-pulse";

  return (
    <footer id="contact" className="bg-brand-dark border-t border-gray-900 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-6">Noe Masiá</h2>
        
        <div className="flex space-x-8 mb-8">
          <a 
            href="https://www.instagram.com/noemasia/?hl=es" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${iconBaseClass} ${isHighlighted ? iconHighlightClass : iconNormalClass}`}
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://wa.me/34645805177" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${iconBaseClass} ${isHighlighted ? iconHighlightClass : iconNormalClass}`}
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
          <a 
            href="mailto:campus@noemasia.com" 
            className={`${iconBaseClass} ${isHighlighted ? iconHighlightClass : iconNormalClass}`}
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Noe Masiá. Todos los derechos reservados.
        </p>
        
        <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mt-4">
          <span>Diseñado con</span>
          <Heart size={12} className="text-brand-green fill-current" />
          <span>por</span>
          <a 
            href="https://melenamarketing.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium hover:text-brand-green transition-colors"
          >
            Melena Marketing
          </a>
        </div>
      </div>
    </footer>
  );
};