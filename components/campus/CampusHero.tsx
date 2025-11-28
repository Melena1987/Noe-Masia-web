import React from 'react';

export const CampusHero: React.FC = () => {
  return (
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
  );
};