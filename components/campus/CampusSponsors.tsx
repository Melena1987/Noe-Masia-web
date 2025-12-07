import React from 'react';

const SPONSORS = [
  {
    name: "Jugador Doce",
    logo: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765136872912_jugador_doce__400x400.png?alt=media&token=40a0f353-08a1-47ee-ae8c-9b90133cc09d"
  },
  {
    name: "Melena Marketing",
    logo: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765136970995_logo_color_sin_fondo_400x400.png?alt=media&token=8cbcd618-a254-4a48-b1fb-b43e3327f09e"
  },
  {
    name: "CAB Estepona",
    logo: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765136872912_CAB_estepona_logo_400x400.png?alt=media&token=013bccb9-1ad3-49b1-9715-664a190effa3"
  },
  {
    name: "Club Baloncesto Moncofa",
    logo: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765136872912_CBM_400x400.png?alt=media&token=6032435c-25a6-40fc-9f8f-9c230cb40ed8"
  }
];

export const CampusSponsors: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs block mb-12 opacity-70">
          Hacen esto posible
        </span>

        {/* Single line of logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {SPONSORS.map((sponsor, index) => {
            // Specific sizing logic per logo
            let sizeClass = "w-20 h-20 md:w-28 md:h-28"; // Default square (index > 1)

            if (index === 0) {
              // Jugador Doce: Reduced size as requested (smaller than before)
              sizeClass = "w-40 h-20 md:w-56 md:h-28";
            } else if (index === 1) {
              // Melena Marketing: Kept large for visibility
              sizeClass = "w-56 h-28 md:w-80 md:h-40";
            }

            return (
              <div 
                key={index} 
                className={`${sizeClass} flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110`}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};