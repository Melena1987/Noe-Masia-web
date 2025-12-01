import React, { useEffect } from 'react';
import { CampusHero } from '../components/campus/CampusHero';
import { CampusIntro } from '../components/campus/CampusIntro';
import { CampusMethodology } from '../components/campus/CampusMethodology';
import { CampusValues } from '../components/campus/CampusValues';
import { CampusCTA } from '../components/campus/CampusCTA';
import { Testimonials } from '../components/Testimonials';

const campusTestimonials = [
  {
    name: "María G.",
    role: "Madre de jugadora",
    text: "Mi hija volvió encantada. No solo mejoró su tiro, sino que vino con una mentalidad diferente sobre cómo cuidarse y comer.",
  },
  {
    name: "Pablo R.",
    role: "Jugador Cadete",
    text: "Los entrenamientos son duros pero se aprenden cosas que en mi club no me habían explicado nunca. El ambiente es increíble.",
  },
  {
    name: "Laura S.",
    role: "Madre de jugador",
    text: "La organización de 10. Se nota que hay profesionales detrás cuidando cada detalle, desde la comida hasta los entrenos.",
  }
];

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
    <div className="bg-brand-dark text-white min-h-screen font-sans selection:bg-brand-green selection:text-white">
      <CampusHero />
      <CampusIntro />
      <CampusMethodology />
      <CampusValues />
      <Testimonials title="Lo que dicen del Campus" testimonials={campusTestimonials} variant="dark" />
      <CampusCTA onContactClick={scrollToContact} />
    </div>
  );
};