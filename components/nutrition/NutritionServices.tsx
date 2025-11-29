import React from 'react';
import { Brain, Heart, Microscope } from 'lucide-react';

export const NutritionServices: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-brand-dark mb-6">
            ¿Cómo trabajo?
          </h2>
          <div className="h-1 w-24 bg-brand-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            "No creo en las dietas de cajón ni en los milagros. Trabajo desde la <strong className="text-brand-dark font-bold">educación nutricional</strong>, la <strong className="text-brand-dark font-bold">evidencia científica</strong> y la <strong className="text-brand-dark font-bold">empatía</strong>."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6 bg-brand-light rounded-sm">
            <Microscope className="w-10 h-10 text-brand-green mb-4" strokeWidth={1.5} />
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2">Ciencia</h3>
            <p className="text-sm text-gray-500 font-light">
              Sin modas. Protocolos basados en los últimos estudios fisiológicos y clínicos.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-brand-light rounded-sm">
            <Brain className="w-10 h-10 text-brand-green mb-4" strokeWidth={1.5} />
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2">Educación</h3>
            <p className="text-sm text-gray-500 font-light">
              Mi objetivo es que aprendas a gestionar tu alimentación de forma autónoma.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-brand-light rounded-sm">
            <Heart className="w-10 h-10 text-brand-green mb-4" strokeWidth={1.5} />
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2">Contexto</h3>
            <p className="text-sm text-gray-500 font-light">
              Adaptado a tu realidad, tus horarios, tu estrés y tus gustos personales.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};