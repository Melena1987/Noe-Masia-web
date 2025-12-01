import React, { useEffect } from 'react';
import { NutritionHero } from '../components/nutrition/NutritionHero';
import { NutritionServices } from '../components/nutrition/NutritionServices';
import { NutritionPlans } from '../components/nutrition/NutritionPlans';
import { NutritionCTA } from '../components/nutrition/NutritionCTA';
import { Testimonials } from '../components/Testimonials';

// Mock data for testimonials
const testimonials = [
  {
    name: "Ana Pocek",
    role: "Jugadora Profesional LF Endesa",
    text: "Trabajar con Noe ha cambiado mi forma de entender la energía en pista. No solo es dieta, es entender qué gasolina necesito en cada momento del partido.",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764320049135_ana_pocek.jpg?alt=media&token=placeholder" // Using placeholder logic in component if link fails
  },
  {
    name: "Marta Soriano",
    role: "Basket Pro",
    text: "La cercanía es clave. Poder escribirle cuando tengo dudas en el supermercado o antes de un viaje hace que todo sea mucho más fácil.",
  },
  {
    name: "Laura Méndez",
    role: "Atleta Crossfit",
    text: "Llegué con problemas hormonales y fatiga crónica. El enfoque no fue comer menos, sino comer mejor para mis hormonas. He recuperado mi vitalidad.",
  }
];

export const NutritionPage: React.FC = () => {
  useEffect(() => {
    document.title = "Nutrición Deportiva y Salud | Noe Masiá";
  }, []);

  const scrollToContact = () => {
    document.getElementById('nutrition-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark relative z-10 overflow-x-hidden selection:bg-brand-green selection:text-white">
      <NutritionHero />
      <NutritionServices />
      
      {/* Food Gallery Mosaic */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="aspect-square overflow-hidden rounded-sm">
             <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" alt="Healthy Food" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
           </div>
           <div className="aspect-square overflow-hidden rounded-sm md:mt-12">
             <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" alt="Healthy Bowl" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
           </div>
           <div className="aspect-square overflow-hidden rounded-sm">
             <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" alt="Avocado Toast" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
           </div>
           <div className="aspect-square overflow-hidden rounded-sm md:mt-12">
             <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800" alt="Fresh Salad" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
           </div>
        </div>
      </section>

      <NutritionPlans onContactClick={scrollToContact} />
      <Testimonials title="Ellas confían en mí" testimonials={testimonials} />
      <NutritionCTA />
    </div>
  );
};