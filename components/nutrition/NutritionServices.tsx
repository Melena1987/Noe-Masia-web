import React from 'react';

export const NutritionServices: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-brand-dark mb-4 tracking-tight">
                Metodología de trabajo
              </h2>
              <div className="h-1 w-20 bg-brand-green"></div>
            </div>

            <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
              <p className="mb-6 text-xl text-brand-dark font-normal">
                Me baso en conocimientos, evidencia y sobre todo la experiencia y situación de la persona.
              </p>
              <p className="mb-8">
                Sin dietas ni restricciones establecidas, solamente entendiendo qué necesita la persona y cuál es la base del problema que podemos solucionar con la herramienta que sea necesaria en cada caso.
              </p>
              
              <div className="bg-gray-50 p-8 border-l-4 border-brand-green mt-8 rounded-r-sm shadow-sm">
                <p className="text-xl md:text-2xl font-serif italic text-brand-dark/80">
                  "Hablemos más de guías y soporte, antes que de dietas."
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 relative">
             <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply z-10 pointer-events-none"></div>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764606631709_noe_masia_nutricion.jpg?alt=media&token=92290d1a-4f66-4246-ba99-a7bbd3ed4631" 
                  alt="Consulta Nutrición Noe Masiá" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-lime/20 -z-10 rounded-full blur-2xl"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-green/20 -z-10 rounded-full blur-2xl"></div>
          </div>

        </div>

      </div>
    </section>
  );
};