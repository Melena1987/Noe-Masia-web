import React from 'react';

export const NutritionHero: React.FC = () => {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-brand-dark overflow-hidden">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50/50 -skew-x-12 transform translate-x-1/3 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start">
             {/* Integrated Logo Header */}
            <div className="flex flex-row items-center gap-4 mb-6 animate-fade-in-up">
              <div className="w-24 md:w-32 shrink-0">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764607006196_logo_noe_salud_nutrocion_y_alto_rendimiento__1_.png?alt=media&token=b341ba68-5fbf-43f1-9858-f35f8aef9740" 
                  alt="Logotipo Noe Masiá Salud y Nutrición" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col border-l-2 border-brand-green pl-4 py-1 space-y-0.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark font-bold">Salud</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark font-bold">Nutrición</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green font-bold">Alto Rendimiento</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-brand-dark mb-6 tracking-tight leading-[0.9]">
              Nutrición<br/>Consciente
            </h1>
            
            <div className="text-base md:text-lg font-light text-gray-600 leading-relaxed space-y-4 max-w-2xl border-l-4 border-brand-green pl-6 bg-white/50 backdrop-blur-sm py-3">
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
      </div>
    </section>
  );
};