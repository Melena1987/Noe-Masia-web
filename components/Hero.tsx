import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionProps } from '../types';

export const Hero: React.FC<SectionProps> = ({ id }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id={id} className="relative h-screen w-full overflow-hidden flex flex-col justify-end bg-gray-900">
      
      {/* Parallax Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Fallback gradient in case image loads slowly */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black z-0"></div>
        
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764321274510_Gemini_Generated_Image_8rvn68rvn68rvn68.png?alt=media&token=5f12b4f3-cb43-4620-8d1b-5365524d2f29"
          alt="Noe Masià Background"
          className="absolute inset-0 w-full h-[120%] object-cover object-[center_20%] z-10 will-change-transform opacity-90"
          style={{ 
            transform: `translateY(${offset * 0.5}px)`, // Parallax: moves at half speed of scroll
          }}
        />

        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/30 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/20 z-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 w-full pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto pointer-events-none">
        <div className="animate-fade-in-up pointer-events-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-brand-orange"></span>
            <h2 className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              Professional Basketball Player
            </h2>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-lg">
            Noe<br />Masià
          </h1>
          
          <p className="max-w-md text-gray-100 text-lg md:text-xl font-light leading-relaxed border-l-2 border-brand-orange pl-6 backdrop-blur-md bg-black/20 py-4 pr-2 rounded-r-sm">
            Talento, disciplina y pasión en cada jugada.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-30 opacity-80 mix-blend-overlay">
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}} className="text-white hover:text-brand-orange transition-colors duration-300 cursor-pointer">
          <ChevronDown size={40} strokeWidth={1} />
        </a>
      </div>
    </header>
  );
};