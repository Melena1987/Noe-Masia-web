import React, { useEffect, useState } from 'react';
import { SectionProps } from '../types';

export const About: React.FC<SectionProps> = ({ id }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={id} className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-900/20 pointer-events-none -skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Content Side */}
        <div className="md:col-span-7 order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-none">
            Athlete <span className="text-brand-orange">&</span><br />
            Dietitian.
          </h2>
          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
            <p>
              Soy <strong className="text-white font-normal">Noelia Masià</strong>, jugadora profesional de baloncesto, dietista deportiva y <strong className="text-brand-orange font-normal">antropometrista ISAK 1</strong>.
              A lo largo de mi carrera he aprendido en primera persona cómo la nutrición, el cuidado del cuerpo y la mente, 
              el entrenamiento y la disciplina son pilares indivisibles.
            </p>
            <p>
              Mi objetivo va más allá de la pista: ayudo a atletas y personas activas a optimizar su rendimiento y mejorar su día a día.
              Trabajo desde un <span className="text-brand-orange">enfoque personalizado y consciente</span>, donde construimos bienestar 
              escuchando lo que cada persona necesita para crear una base sólida que se sostenga en el tiempo.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-12 border-t border-gray-800 pt-8">
            <div>
              <span className="block text-4xl font-black text-white">PRO</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-orange">Basketball</span>
            </div>
            <div>
              <span className="block text-4xl font-black text-white">Health</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-orange">Dietitian</span>
            </div>
            <div>
              <span className="block text-4xl font-black text-white">ISAK 1</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-orange">Certified</span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="relative aspect-[3/4] overflow-hidden group">
             {/* Wrapper for Parallax */}
             <div 
               className="w-full h-[120%] -mt-[10%]"
               style={{ transform: `translateY(${(offset - 300) * 0.08}px)` }}
             >
               <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894__DSC2907_copia.jpg?alt=media&token=451882a3-b460-4a4a-8e3a-ff0495ff330d" 
                alt="Noe Masià Portrait" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Minimalist Border Frame */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none transition-all duration-500 group-hover:inset-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};