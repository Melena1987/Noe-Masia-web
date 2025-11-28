import React from 'react';
import { Button } from '../Button';

interface CampusCTAProps {
  onContactClick: () => void;
}

export const CampusCTA: React.FC<CampusCTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 bg-brand-dark text-center px-6">
      <h3 className="text-white text-3xl font-bold uppercase mb-6">¿Quieres formar parte?</h3>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Las plazas son limitadas para garantizar la calidad del entrenamiento y la atención personalizada a cada jugador.
      </p>
      <Button variant="outline" className="px-10 py-4" onClick={onContactClick}>
        Contactar para próxima edición
      </Button>
    </section>
  );
};