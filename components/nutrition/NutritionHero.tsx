import React from 'react';

export const NutritionHero: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-light overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 transform skew-x-12 translate-x-20"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-brand-orange font-bold tracking-[0.3em] text-xs uppercase block mb-4">
          Dietista Deportiva | Antropometrista ISAK 1 | Jugadora PRO
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-brand-dark mb-8">
          Nutrición<br/>Deportiva
        </h1>
        <div className="h-1 w-20 bg-brand-orange mx-auto mb-10"></div>
        
        <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed space-y-6">
          <p>
            Mi nombre es <strong className="text-brand-dark">Noelia Masiá</strong>. A lo largo de mi carrera deportiva, 
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