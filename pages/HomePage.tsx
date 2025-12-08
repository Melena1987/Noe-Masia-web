import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Campus } from '../components/Campus';
import { Nutrition } from '../components/Nutrition';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Jugadora Profesional & Dietista Deportiva"
        description="Web oficial de Noe Masiá. Rendimiento integral uniendo baloncesto profesional y ciencia de la nutrición. Planes personalizados y Campus de tecnificación."
        keywords="Noelia Masia, Jugadora Baloncesto, Dietista Deportiva, Nutricionista Valencia, Nutricionista Estepona, Alto Rendimiento, Salud Hormonal"
        url="https://noemasia.com/"
      />
      <Hero id="hero" />
      <About id="about" />
      <Campus id="campus" />
      <Nutrition id="nutrition" />
    </div>
  );
};