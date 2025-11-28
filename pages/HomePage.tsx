import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Campus } from '../components/Campus';
import { Nutrition } from '../components/Nutrition';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Noe Masiá | Jugadora Profesional & Dietista Deportiva";
  }, []);

  return (
    <div className="bg-white">
      <Hero id="hero" />
      <About id="about" />
      <Campus id="campus" />
      <Nutrition id="nutrition" />
    </div>
  );
};