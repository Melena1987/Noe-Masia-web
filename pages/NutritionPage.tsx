
import React, { useEffect } from 'react';
import { NutritionHero } from '../components/nutrition/NutritionHero';
import { NutritionServices } from '../components/nutrition/NutritionServices';
import { NutritionPlans } from '../components/nutrition/NutritionPlans';
import { NutritionCTA } from '../components/nutrition/NutritionCTA';
import { Testimonials } from '../components/Testimonials';

// Data for testimonials/clients
const testimonials = [
  {
    name: "Enzo- Jugador de fútbol",
    role: "Infantil división de honor Malaga CF",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765210679376_1.png?alt=media&token=1c38069e-824b-44cd-ae0d-c093ee0e72f9"
  },
  {
    name: "Leo Anaya",
    role: "CAB Estepona - Junior",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765210679376_2.png?alt=media&token=fa88c9b8-293d-4e72-975d-04a79d21f59a"
  },
  {
    name: "Sur Lozano- Jugadora de baloncesto",
    role: "Cleveland State University. NCAA D1",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765210679376_3.png?alt=media&token=957ed20e-aa12-480a-a946-70170948026c"
  },
  {
    name: "Ainhoa Gervasini Lazorzana- Jugadora de baloncesto",
    role: "Cadi La Seu- Liga Femenina Endesa",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765210679376_4.png?alt=media&token=9df1bc96-3c35-4af9-9cc6-8d10521c1721"
  },
  {
    name: "Alejandro Carrasco- Jugador de fútbol",
    role: "Real club Recreativo de Huelva - Segunda REFF",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765210679376_5.png?alt=media&token=e2b3c811-fd64-4626-b70f-d17c697bd855"
  },
  {
    name: "Pablo Ávalos",
    role: "Jaén Paraíso Interior FS - Tercera FEB",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765211045088_6.png?alt=media&token=1fe8a96a-4067-40db-8e46-06daab41782a"
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
           <div className="aspect-[3/4] overflow-hidden rounded-sm">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209788612_salmon_cortado.jpg?alt=media&token=68ebcd5e-faaa-48b4-85de-e7e97568000d" 
              alt="Salmón y grasas saludables" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
           </div>
           <div className="aspect-[3/4] overflow-hidden rounded-sm md:mt-12">
             <img 
               src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209586344_platano.jpg?alt=media&token=3f27bdde-26ab-460b-8bef-805b169529bc" 
               alt="Plátano y energía natural" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
           </div>
           <div className="aspect-[3/4] overflow-hidden rounded-sm">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209788612_frambuesa.jpg?alt=media&token=d244bd0e-9091-4c30-9db1-18868692cd53" 
              alt="Frutos rojos antioxidantes" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
           </div>
           <div className="aspect-[3/4] overflow-hidden rounded-sm md:mt-12">
             <img 
               src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764606631709_noe_masia_nutricion.jpg?alt=media&token=92290d1a-4f66-4246-ba99-a7bbd3ed4631" 
               alt="Consulta Nutrición Noelia Masiá" 
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
