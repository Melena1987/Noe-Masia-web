import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show with a slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] max-w-sm w-[calc(100%-2rem)] bg-brand-dark text-white p-6 shadow-2xl border-l-4 border-brand-green rounded-sm animate-fade-in-up">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-bold text-sm uppercase tracking-widest text-brand-green">Cookies</h4>
        <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>
      <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
        Utilizamos cookies propias y de terceros para mejorar tu experiencia y gestionar las sesiones de usuario. Al continuar navegando, aceptas su uso.
      </p>
      <div className="flex items-center gap-4">
        <button 
          onClick={handleAccept}
          className="bg-brand-green text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm"
        >
          Aceptar
        </button>
        <Link 
          to="/legal" 
          className="text-xs text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-2 transition-colors"
        >
          Leer política
        </Link>
      </div>
    </div>
  );
};