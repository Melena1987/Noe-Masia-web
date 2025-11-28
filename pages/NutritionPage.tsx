import React, { useEffect } from 'react';
import { NutritionHero } from '../components/nutrition/NutritionHero';
import { NutritionServices } from '../components/nutrition/NutritionServices';
import { NutritionWomen } from '../components/nutrition/NutritionWomen';
import { NutritionCTA } from '../components/nutrition/NutritionCTA';

export const NutritionPage: React.FC = () => {
  useEffect(() => {
    document.title = "Nutrición Deportiva y Salud | Noe Masià";
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 bg-white min-h-screen text-brand-dark relative z-10">
      <NutritionHero />
      <NutritionServices />
      <NutritionWomen onContactClick={scrollToContact} />
      <NutritionCTA onContactClick={scrollToContact} />
    </div>
  );
};