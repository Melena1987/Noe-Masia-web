import React from 'react';

export const NutritionServices: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-left">
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
              
              {/* Quote - Sans-serif, Clean, Modern (Basicón) */}
              <div className="bg-gray-100/80 p-8 border-l-8 border-brand-green mt-12 rounded-r-sm">
                <p className="text-2xl md:text-3xl font-bold text-brand-dark not-italic tracking-tight leading-tight">
                  "Hablemos más de guías y soporte, antes que de dietas."
                </p>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};