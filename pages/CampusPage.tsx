import React, { useEffect } from 'react';
import { CampusHero } from '../components/campus/CampusHero';
import { CampusIntro } from '../components/campus/CampusIntro';
import { CampusMethodology } from '../components/campus/CampusMethodology';
import { CampusValues } from '../components/campus/CampusValues';
import { CampusCTA } from '../components/campus/CampusCTA';

export const CampusPage: React.FC = () => {
  useEffect(() => {
    document.title = "Campus de Tecnificación Baloncesto | Noe Masiá";
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    // Trigger the footer animation
    window.dispatchEvent(new Event('highlight-contact'));
  };

  return (
    <div className="pt-20 bg-brand-dark text-white min-h-screen font-sans selection:bg-brand-green selection:text-white">
      <CampusHero />
      <CampusIntro />
      <CampusMethodology />
      <CampusValues />
      <CampusCTA onContactClick={scrollToContact} />
    </div>
  );
};