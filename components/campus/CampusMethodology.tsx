import React from 'react';
import { Dumbbell, Brain, Heart } from 'lucide-react';

export const CampusMethodology: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold uppercase tracking-wide mb-2">Metodología Integral</h3>
          <div className="h-1 w-24 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <Dumbbell className="w-12 h-12 text-brand-orange mb-6" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Técnica & Táctica</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Sesiones diseñadas específicamente para desarrollar fundamentos sólidos y aprender a competir con intención y lectura de juego.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <Brain className="w-12 h-12 text-brand-orange mb-6" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Mentalidad</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Trabajamos la actitud positiva, la gestión del error y la fortaleza mental necesaria para afrontar la competición.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <Heart className="w-12 h-12 text-brand-orange mb-6" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Hábitos</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Herramientas nutricionales y de cuidado físico para que el jugador entienda que el entrenamiento invisible es clave.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};