import React from 'react';
import { CampusHero } from '../components/campus/CampusHero';
import { CampusIntro } from '../components/campus/CampusIntro';
import { CampusMethodology } from '../components/campus/CampusMethodology';
import { CampusValues } from '../components/campus/CampusValues';
import { CampusCTA } from '../components/campus/CampusCTA';
import { CampusNews } from '../components/campus/CampusNews';
import { CampusSponsors } from '../components/campus/CampusSponsors';
import { SEO } from '../components/SEO';

export const CampusPage: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    // Trigger the footer animation
    window.dispatchEvent(new Event('highlight-contact'));
  };

  return (
    <div className="bg-brand-dark text-white min-h-screen font-sans selection:bg-brand-green selection:text-white">
      <SEO 
        title="Campus Tecnificación Baloncesto 2025"
        description="Inscripciones abiertas. Campus de Baloncesto Noe Masiá en Estepona (Málaga) y Moncofa (Castellón). Técnica individual, nutrición deportiva y mentalidad."
        keywords="Campus Baloncesto 2025, Campus Verano Basket, Tecnificación Baloncesto, Campus Estepona Baloncesto, Campus Moncofa, Entrenamientos Baloncesto Verano"
        url="https://noemasia.com/campus"
        image="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764609571914_1764315848894_WhatsApp_Image_2025-10-04_at_12.59.55.jpeg?alt=media&token=f4a883b9-f971-4223-82bc-91d6108b0c52"
      />
      <CampusHero />
      <CampusIntro />
      <CampusMethodology />
      <CampusValues />
      <CampusNews />
      <CampusCTA onContactClick={scrollToContact} />
      <CampusSponsors />
    </div>
  );
};