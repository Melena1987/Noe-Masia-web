import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { Brain, Dumbbell, Heart, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CampusPage: React.FC = () => {
  useEffect(() => {
    document.title = "Campus de Tecnificación Baloncesto | Noe Masià";
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20 bg-brand-dark text-white min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark z-10"></div>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894_ESTEPONA_-38.jpg?alt=media&token=b7bc2b58-9295-45ef-b632-cb62b8ba6fac"
            alt="Campus Basket Action"
            className="w-full h-full object-cover object-top opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <span className="text-brand-orange font-bold tracking-[0.3em] text-sm uppercase block mb-4 animate-fade-in-up">
            Más que baloncesto
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase text-white mb-6 leading-[0.9] drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Campus<br/>Noe Masià
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Un espacio para crecer dentro y fuera de la pista.
          </p>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Entendiendo el <span className="text-brand-orange">Rendimiento</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed text-justify">
              <p>
                <strong className="text-white">Campus Noelia Masià</strong> nace con la idea de ofrecer un espacio donde los jugadores y jugadoras puedan evolucionar de forma global. No se trata solo de entrenar baloncesto, sino de entender el deporte desde una perspectiva integral.
              </p>
              <p>
                Como jugadora profesional y dietista deportiva, he entendido que el rendimiento va mucho más allá del entrenamiento en pista. Se compone de <span className="text-brand-orange">cuerpo, mente, hábitos, valores y sacrificio</span>.
              </p>
              <p className="border-l-2 border-brand-orange pl-4 italic text-white">
                "El objetivo es crear un ambiente sólido de trabajo, acompañar y dar las herramientas a los próximos jugadores para competir con intención."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-orange/20 transform rotate-3 rounded-sm z-0"></div>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764320049135_587736943_17845357059615820_1696571582367293604_n_400x400.jpg?alt=media&token=438fe860-3d50-432e-a833-bddb9353339c"
              alt="Noe Masia Campus Portrait"
              className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold uppercase tracking-wide mb-2">Metodología Integral</h3>
            <div className="h-1 w-24 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-brand-dark p-8 border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <Dumbbell className="w-12 h-12 text-brand-orange mb-6" />
              <h4 className="text-2xl font-bold uppercase mb-4 text-white">Técnica & Táctica</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Sesiones diseñadas específicamente para desarrollar fundamentos sólidos y aprender a competir con intención y lectura de juego.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-dark p-8 border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <Brain className="w-12 h-12 text-brand-orange mb-6" />
              <h4 className="text-2xl font-bold uppercase mb-4 text-white">Mentalidad</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Trabajamos la actitud positiva, la gestión del error y la fortaleza mental necesaria para afrontar la competición.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-dark p-8 border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <Heart className="w-12 h-12 text-brand-orange mb-6" />
              <h4 className="text-2xl font-bold uppercase mb-4 text-white">Hábitos</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Herramientas nutricionales y de cuidado físico para que el jugador entienda que el entrenamiento invisible es clave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Quote Section */}
      <section className="py-32 px-6 bg-brand-orange text-brand-dark relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-64 h-64 border-8 border-brand-dark rounded-full absolute -top-10 -left-10"></div>
          <div className="w-96 h-96 border-8 border-brand-dark rounded-full absolute bottom-10 right-10"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Users className="w-16 h-16 mx-auto mb-8 text-brand-dark" />
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-10">
            "Creemos en el esfuerzo individual silencioso, en la unión del equipo y el trabajo como primera elección."
          </h2>
          <div className="flex flex-wrap justify-center gap-6 font-bold uppercase tracking-widest text-sm">
            <span className="flex items-center gap-2"><Zap size={18} /> Sacrificio</span>
            <span className="flex items-center gap-2"><Target size={18} /> Disciplina</span>
            <span className="flex items-center gap-2"><Users size={18} /> Familia</span>
          </div>
        </div>
      </section>

      {/* CTA Footer for Page */}
      <section className="py-24 bg-brand-dark text-center px-6">
        <h3 className="text-white text-3xl font-bold uppercase mb-6">¿Quieres formar parte?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Las plazas son limitadas para garantizar la calidad del entrenamiento y la atención personalizada a cada jugador.
        </p>
        <Button variant="outline" className="px-10 py-4" onClick={scrollToContact}>
          Contactar para próxima edición
        </Button>
      </section>
    </div>
  );
};