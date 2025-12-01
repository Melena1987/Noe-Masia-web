import React from 'react';

export const NutritionHero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-white text-brand-dark overflow-hidden">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50/50 -skew-x-12 transform translate-x-1/3 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 lg:col-span-8">
             {/* Integrated Logo Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 animate-fade-in-up">
              <div className="w-32 md:w-48 shrink-0">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764607006196_logo_noe_salud_nutrocion_y_alto_rendimiento__1_.png?alt=media&token=b341ba68-5fbf-43f1-9858-f35f8aef9740" 
                  alt="Logotipo Noe Masiá Salud y Nutrición" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col border-l-2 border-brand-green pl-6 py-2 space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-dark font-bold">Salud</span>
                <span className="text-xs uppercase tracking-[0.25em] text-brand-dark font-bold">Nutrición</span>
                <span className="text-xs uppercase tracking-[0.25em] text-brand-green font-bold">Alto Rendimiento</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-brand-dark mb-8 tracking-tight leading-[0.9]">
              Nutrición<br/>Consciente
            </h1>
            
            <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed space-y-6 max-w-2xl border-l-4 border-brand-green pl-6 bg-white/50 backdrop-blur-sm py-4">
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

           <div className="md:col-span-5 lg:col-span-4 relative hidden md:block">
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative shadow-2xl group">
                  <div className="absolute inset-0 border-2 border-brand-green transform translate-x-3 translate-y-3 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764606631710_noe_masia_nutrici_n.jpg?alt=media&token=d984aa7c-f080-4c3a-8129-78e004dabe15"
                    alt="Noelia Masiá Nutricionista"
                    className="relative z-10 w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};