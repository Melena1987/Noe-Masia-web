import React from 'react';

export const NutritionServices: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-brand-dark mb-4 tracking-widest">
            Metodología de trabajo
          </h2>
          <div className="h-0.5 w-12 bg-brand-green mx-auto mb-8"></div>
        </div>

        <div className="prose prose-lg mx-auto text-center text-gray-600 font-light leading-relaxed">
          <p className="mb-8 text-xl">
            Me baso en conocimientos, evidencia y sobre todo la experiencia y situación de la persona.
          </p>
          <p className="mb-12">
            Sin dietas ni restricciones establecidas, solamente entendiendo qué necesita la persona y cuál es la base del problema que podemos solucionar con la herramienta que sea necesaria en cada caso.
          </p>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-100 mt-12">
            <p className="text-2xl md:text-3xl font-serif italic text-brand-green">
              "Hablemos más de guías y soporte, antes que de dietas."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};