import React from 'react';
import { SectionProps } from '../types';
import { Button } from './Button';
import { Brain, Dumbbell, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Campus: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-32 md:py-40 bg-fixed bg-cover bg-center bg-gray-900" 
      style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894_ESTEPONA_-38.jpg?alt=media&token=b7bc2b58-9295-45ef-b632-cb62b8ba6fac")' }}>
      
      {/* Dark tint for legibility */}
      <div className="absolute inset-0 bg-brand-dark/90"></div>
      
      {/* Diagonal Cut Effect */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-2 origin-top-left -translate-y-8 z-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* Logo Integration */}
          <div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl shadow-black/50 bg-white">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764320049135_587736943_17845357059615820_1696571582367293604_n_400x400.jpg?alt=media&token=438fe860-3d50-432e-a833-bddb9353339c" 
              alt="Logo Campus Noe Masiá" 
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-brand-lime font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Beyond the Court
          </span>
          <h3 className="text-5xl md:text-7xl font-black uppercase text-white mt-2 mb-6 leading-none">
            Campus<br/>Noe Masiá
          </h3>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-300 leading-relaxed">
            Un espacio para crecer dentro y fuera de la pista. Entendemos el deporte desde una perspectiva integral: 
            <span className="text-white font-medium"> cuerpo, mente, hábitos y valores.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            { 
              icon: Dumbbell, 
              title: "Técnica & Táctica", 
              desc: "Sesiones diseñadas para desarrollar fundamentos y competir con intención." 
            },
            { 
              icon: Brain, 
              title: "Mentalidad", 
              desc: "Construimos actitud positiva, sacrificio y unión de equipo." 
            },
            { 
              icon: Heart, 
              title: "Integral", 
              desc: "Herramientas físicas y nutricionales para entender el rendimiento real." 
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-brand-lime transition-colors duration-300">
              <item.icon className="w-10 h-10 text-brand-lime mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="font-bold text-xl uppercase tracking-wider text-white mb-4">{item.title}</h4>
              <p className="text-sm font-light text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="text-brand-lime uppercase tracking-[0.2em] text-xs font-bold mb-8 opacity-80">
            "Creemos en el esfuerzo individual silencioso"
          </p>
          <Link to="/campus">
            <Button variant="lime" className="px-10 py-4 text-sm font-bold">
              Descubre el Campus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};