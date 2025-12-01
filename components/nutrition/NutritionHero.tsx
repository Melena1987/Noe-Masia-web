import React from 'react';

export const NutritionHero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-white text-brand-dark overflow-hidden">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50/50 -skew-x-12 transform translate-x-1/3 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-8">
             {/* Integrated Logo Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-dark text-white flex items-center justify-center font-black text-2xl tracking-tighter rounded-sm">
                NM
              </div>
              <div className="flex flex-col border-l border-brand-green pl-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Salud</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Nutrición</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Alto Rendimiento</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase text-brand-dark mb-8 tracking-tight">
              Nutrición
            </h1>
            
            <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed space-y-6 max-w-2xl border-l-4 border-brand-green pl-6">
              <p>
                Soy <strong className="font-bold text-brand-dark">Noelia Masiá</strong>.
              </p>
              <p>
                Especializada en nutrición deportiva, nutrición en la mujer deportista, general y patologías.
              </p>
              <p>
                 Siempre baso mi trabajo en conocimiento, formación y evidencia.
              </p>
            </div>
          </div>

           <div className="md:col-span-4 relative hidden md:block">
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                  <div className="absolute inset-0 border border-brand-green/20 transform translate-x-4 translate-y-4 z-0"></div>
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764323005306_Unknown-5.jpg?alt=media&token=73ca4403-901b-40a0-a192-9196d81633b5"
                    alt="Noelia Masiá Nutricionista"
                    className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};