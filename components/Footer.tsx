import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-900 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-6">Noe Masià</h2>
        
        <div className="flex space-x-8 mb-8">
          <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Noe Masià. Todos los derechos reservados.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Diseñado con pasión.
        </p>
      </div>
    </footer>
  );
};