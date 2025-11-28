import React from 'react';
import { Button } from '../Button';

interface NutritionWomenProps {
  onContactClick: () => void;
}

export const NutritionWomen: React.FC<NutritionWomenProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 text-brand-dark leading-tight">
            La Mujer<br/><span className="text-brand-orange">Deportista</span>
          </h3>
          <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
            <p>
              Quiero destacar la importancia de la nutrición en la mujer deportista. Uno de mis objetivos principales es 
              <strong> romper mitos</strong> que han aparecido a lo largo del tiempo.
            </p>
            <p>
              Te ayudo a entender tu ciclo, la importancia que este tiene en nuestro cuerpo y te doy las herramientas 
              nutricionales necesarias para alcanzar bienestar físico a la vez que rendimiento deportivo.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="primary" onClick={onContactClick}>
              Agendar Consulta
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] bg-white p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764321274510_Gemini_Generated_Image_8rvn68rvn68rvn68.png?alt=media&token=5f12b4f3-cb43-4620-8d1b-5365524d2f29" 
              alt="Women in Sports" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-orange z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};