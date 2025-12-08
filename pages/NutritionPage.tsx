import React from 'react';
import { NutritionHero } from '../components/nutrition/NutritionHero';
import { NutritionServices } from '../components/nutrition/NutritionServices';
import { NutritionPlans } from '../components/nutrition/NutritionPlans';
import { NutritionCTA } from '../components/nutrition/NutritionCTA';
import { Testimonials } from '../components/Testimonials';
import { SEO } from '../components/SEO';

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
  const scrollToContact = () => {
    document.getElementById('nutrition-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark relative z-10 overflow-x-hidden selection:bg-brand-green selection:text-white">
      <SEO 
        title="Nutrición Deportiva & Salud Hormonal"
        description="Planes de nutrición online y presencial con Noe Masiá. Especializada en alto rendimiento, ciclo menstrual, SOP, endometriosis y educación alimentaria."
        keywords="Nutricionista Deportiva, Dieta Deportista, Nutrición Online, SOP dieta, Endometriosis Nutrición, Rendimiento Deportivo, Plan Atleta, Noe Masia Nutrición"
        url="https://noemasia.com/nutricion"
        image="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764607006196_logo_noe_salud_nutrocion_y_alto_rendimiento__1_.png?alt=media&token=b341ba68-5fbf-43f1-9858-f35f8aef9740"
      />
      <NutritionHero />
      <NutritionServices />
      
      {/* Food Gallery Mosaic */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="aspect-[3/4] overflow-hidden rounded-sm">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209788612_salmon_cortado.jpg?alt=media&token=68ebcd5e-faaa-48b4-85de-e7e97568000d" 
              alt="Salmón y grasas saludables para deportistas" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
           </div>
           <div className="aspect-[3/4] overflow-hidden rounded-sm md:mt-12">
             <img 
               src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209586344_platano.jpg?alt=media&token=3f27bdde-26ab-460b-8bef-805b169529bc" 
               alt="Fruta y energía natural pre-entreno" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
           </div>
           <div className="aspect-[3/4] overflow-hidden rounded-sm">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209788612_frambuesa.jpg?alt=media&token=d244bd0e-9091-4c30-9db1-18868692cd53" 
              alt="Antioxidantes y frutos rojos" 
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