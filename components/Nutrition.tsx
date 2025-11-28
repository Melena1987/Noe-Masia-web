import React from 'react';
import { SectionProps } from '../types';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Nutrition: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-brand-light text-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="md:col-span-5 relative order-2 md:order-1">
             <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-dark z-0 hidden md:block"></div>
             <div className="relative z-10 aspect-[3/4] overflow-hidden bg-gray-200 shadow-xl">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764323005306_Unknown-5.jpg?alt=media&token=73ca4403-901b-40a0-a192-9196d81633b5" 
                  alt="Noelia Masià Nutrition" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
             </div>
          </div>

          {/* Text Side */}
          <div className="md:col-span-7 order-1 md:order-2">
            <span className="text-brand-orange uppercase tracking-[0.2em] font-bold text-sm mb-4 block">
              Sports Dietitian
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-none text-brand-dark">
              Nutrición<br />Consciente
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light border-l-4 border-brand-orange pl-6">
              "Mi intención es que sientas este espacio como un lugar seguro, donde cuidarse, aprender y evolucionar."
            </p>

            <div className="space-y-6 mb-10 text-gray-600 font-light text-base leading-relaxed">
              <p>
                Más allá de las dietas estrictas, trabajo desde un enfoque profundo. 
                Entre ambas partes construimos bienestar, adaptándonos a tus necesidades reales.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                  <span>Optimización del rendimiento deportivo.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                  <span>Mejora de hábitos y salud diaria.</span>
                </li>
              </ul>
            </div>

            <Link to="/nutricion">
              <Button variant="outline" className="group flex items-center gap-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark">
                Descubrir servicios <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};