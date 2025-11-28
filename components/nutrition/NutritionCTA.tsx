import React from 'react';
import { Button } from '../Button';

interface NutritionCTAProps {
  onContactClick: () => void;
}

export const NutritionCTA: React.FC<NutritionCTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-32 bg-brand-dark text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
          ¿Empezamos?
        </h2>
        <p className="text-gray-400 text-xl font-light mb-12">
          Acompañamiento en cada etapa de tu preparación, seas deportista amateur, de élite o en etapa de desarrollo.
        </p>
        <Button variant="white" className="px-12 py-4 text-sm tracking-widest" onClick={onContactClick}>
          Contactar ahora
        </Button>
      </div>
    </section>
  );
};