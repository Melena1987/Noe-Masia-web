import React from 'react';

export const CampusIntro: React.FC = () => {
  return (
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
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764320049135_587736943_17845357059615820_1696571582367293604_n.jpg?alt=media&token=438fe860-3d50-432e-a833-bddb9353339c"
            alt="Noe Masia Campus Portrait"
            className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};