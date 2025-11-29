import React, { useEffect, useState } from 'react';

export const NutritionHero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-gray-50">
      
      {/* Parallax Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764323005306_Unknown-5.jpg?alt=media&token=73ca4403-901b-40a0-a192-9196d81633b5"
          alt="Background Noelia Masiá"
          className="absolute inset-0 w-full h-[120%] object-cover object-center blur-[3px]"
          style={{ 
            transform: `translateY(${offset * 0.5}px)`, // Parallax moves slower than scroll
          }}
        />
        {/* White Overlay for text readability */}
        <div className="absolute inset-0 bg-white/85 z-10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <span className="text-brand-green font-bold tracking-[0.3em] text-xs uppercase block mb-6 animate-fade-in-up">
          Dietista Deportiva | Antropometrista ISAK 1 | Jugadora PRO
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-brand-dark mb-8 leading-[0.9] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Nutrición<br/>Deportiva
        </h1>
        <div className="h-1 w-24 bg-brand-green mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}></div>
        
        <div className="text-lg md:text-xl font-light text-brand-dark leading-relaxed space-y-6 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <p>
            Mi nombre es <strong className="font-bold">Noelia Masiá</strong>. A lo largo de mi carrera deportiva, 
            he vivido de primera mano lo que significa llevar una vida dedicada al alto rendimiento.
          </p>
          <p>
            Me he especializado en nutrición deportiva general, nutrición en la mujer y he realizado numerosos cursos 
            en deportes específicos como baloncesto, fútbol, resistencia y crossfit.
          </p>
        </div>
      </div>
    </section>
  );
};