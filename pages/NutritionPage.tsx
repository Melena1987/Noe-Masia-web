
import React, { useEffect } from 'react';
import { NutritionHero } from '../components/nutrition/NutritionHero';
import { NutritionServices } from '../components/nutrition/NutritionServices';
import { NutritionPlans } from '../components/nutrition/NutritionPlans';
import { NutritionCTA } from '../components/nutrition/NutritionCTA';
import { Testimonials } from '../components/Testimonials';

// Data for testimonials/clients
const testimonials = [
  {
    name: "Enzo",
    role: "Málaga CF - Infantil Div. Honor",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765178293780_Enzo_._M_laga_CF-Infantil_divisi_n_de_honor__400x400.jpg?alt=media&token=a5b9e953-c2f4-4b70-b3f4-2a4e31a08546"
  },
  {
    name: "Ainhoa Gervasini",
    role: "Liga Femenina Endesa",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765178293780_WAinhoa_Gervasini_Lacorzana_Liga_Fem_Endesa_400x400.jpeg?alt=media&token=550c3c43-56a7-46ba-8eea-d22f38db7ac6"
  },
  {
    name: "Pablo Ávalos",
    role: "Jaén Paraíso Interior FS - Tercera FEB",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765178293780_Pablo__valos_._Ja_n_Para_so_interior_FS_Baloncesto_-_Tercera_FEB__400x400.jpg?alt=media&token=8f0b121b-b944-47c4-baae-65deb6ad0f59"
  },
  {
    name: "Leo Anaya",
    role: "CAB Estepona - Junior",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765178293780_Leo_Anaya_._CAB_Estepona_-Junior__400x400.jpeg?alt=media&token=94e55c93-74d0-4272-851b-ff29522d5c92"
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
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764606631710_noe_masia_nutrici_n.jpg?alt=media&token=d984aa7c-f080-4c3a-8129-78e004dabe15" 
              alt="Noelia Masiá Nutrición" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
           </div>
           <div className="aspect-square overflow-hidden rounded-sm md:mt-12">
             <img 
               src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765179478682_frutas_negras.png?alt=media&token=0863687d-c873-4fd9-9214-5ad25d763894" 
               alt="Frutas frescas y antioxidantes" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
           </div>
           <div className="aspect-square overflow-hidden rounded-sm">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764606631709_noe_masia_nutricion.jpg?alt=media&token=92290d1a-4f66-4246-ba99-a7bbd3ed4631" 
              alt="Consulta Nutrición" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
           </div>
           <div className="aspect-square overflow-hidden rounded-sm md:mt-12">
             <img 
               src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765179478682_pasta_seca.png?alt=media&token=10938296-7a39-4665-be01-e3b88162b21e" 
               alt="Carbohidratos y energía" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
           </div>
        </div>
      </section>

      <NutritionPlans onContactClick={scrollToContact} />
      <Testimonials title="Confían en mí" testimonials={testimonials} />
      <NutritionCTA />
    </div>
  );
};
