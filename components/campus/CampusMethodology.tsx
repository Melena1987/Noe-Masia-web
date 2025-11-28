import React from 'react';
import { Dumbbell, Brain, Heart } from 'lucide-react';

export const CampusMethodology: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white uppercase tracking-wide mb-2">Metodología Integral</h3>
          <div className="h-1 w-24 bg-brand-lime mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Dumbbell className="w-12 h-12 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Técnica & Táctica</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Sesiones diseñadas específicamente para desarrollar fundamentos sólidos y aprender a competir con intención y lectura de juego.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Brain className="w-12 h-12 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Mentalidad</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Trabajamos la actitud positiva, la gestión del error y la fortaleza mental necesaria para afrontar la competición.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Heart className="w-12 h-12 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
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