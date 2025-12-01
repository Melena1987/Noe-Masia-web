import React from 'react';

export const CampusHero: React.FC = () => {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-0 bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark z-10"></div>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894_ESTEPONA_-38.jpg?alt=media&token=b7bc2b58-9295-45ef-b632-cb62b8ba6fac"
          alt="Campus Basket Action"
          className="w-full h-full object-cover object-top opacity-50"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo Integration - Larger and Dynamic */}
        <div className="mb-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl shadow-brand-lime/20 bg-white animate-fade-in-up relative group">
            <div className="absolute inset-0 bg-brand-lime/10 animate-ping rounded-full"></div>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764320049135_587736943_17845357059615820_1696571582367293604_n_400x400.jpg?alt=media&token=438fe860-3d50-432e-a833-bddb9353339c" 
              alt="Logo Campus Noe Masiá" 
              className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-500"
            />
        </div>

        <span className="text-brand-lime font-bold tracking-[0.3em] text-sm uppercase block mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Más que baloncesto
        </span>
        <h1 className="text-5xl md:text-8xl font-black uppercase text-white mb-6 leading-[0.9] drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Campus<br/>Noe Masiá
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Un espacio para crecer dentro y fuera de la pista.
        </p>
      </div>
    </section>
  );
};