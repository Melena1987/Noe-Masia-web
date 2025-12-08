import React from 'react';

export const NutritionHero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-12 md:pt-48 md:pb-24 bg-white text-brand-dark overflow-hidden">
      
      {/* Abstract Background Decoration - Subtle */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-50 -skew-x-12 transform translate-x-1/3 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end">
            
            {/* Logo Section - Massive Size as requested */}
            <div className="md:col-span-4 flex justify-center md:justify-start animate-fade-in-up">
               <div className="w-48 h-48 md:w-64 md:h-64 relative bg-white p-4 rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764607006196_logo_noe_salud_nutrocion_y_alto_rendimiento__1_.png?alt=media&token=b341ba68-5fbf-43f1-9858-f35f8aef9740" 
                    alt="Logotipo NM" 
                    className="w-full h-full object-contain p-2"
                  />
               </div>
            </div>

            {/* Text Section */}
            <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase text-brand-dark mb-6 tracking-tighter leading-[0.8] mix-blend-multiply">
                Nutrición
              </h1>
              
              <div className="text-base md:text-xl font-light text-gray-600 leading-relaxed max-w-xl pl-0 md:pl-2">
                <p className="border-l-4 border-brand-green pl-4 py-2 bg-white/80 backdrop-blur-sm">
                  Soy <strong className="font-bold text-brand-dark">Noelia Masiá</strong>. Especializada en nutrición deportiva, nutrición en la mujer deportista, general y patologías.
                </p>
              </div>
            </div>

          </div>
      </div>
    </section>
  );
};