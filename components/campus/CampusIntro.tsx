import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export const CampusIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Locations / Sedes Section */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-black uppercase text-white mb-12">Nuestras Sedes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Estepona */}
            <div className="bg-white/5 border border-brand-lime/30 p-8 rounded-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-black uppercase text-brand-lime">Estepona</h3>
                   <p className="text-white text-sm tracking-widest uppercase mt-1">Málaga</p>
                 </div>
                 <MapPin className="text-white/50" />
               </div>
               
               <div className="space-y-4 border-t border-white/10 pt-6">
                 <div className="flex items-center gap-3 text-gray-300">
                   <Calendar size={18} className="text-brand-lime"/>
                   <span>13 - 18 Julio</span>
                 </div>
                 <p className="text-sm text-gray-400 font-light">
                   Pabellón JA Pineda. Unas instalaciones de primer nivel para el desarrollo técnico y táctico.
                 </p>
               </div>
            </div>

            {/* Moncofa - Placeholder/Coming Soon */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group opacity-70 hover:opacity-100 transition-opacity">
               <div className="absolute top-4 right-4 bg-brand-lime text-brand-dark text-xs font-bold px-3 py-1 uppercase tracking-wider transform rotate-12">
                 Próximamente
               </div>
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-black uppercase text-white">Moncofa</h3>
                   <p className="text-white text-sm tracking-widest uppercase mt-1">Castellón</p>
                 </div>
                 <MapPin className="text-white/50" />
               </div>
               
               <div className="space-y-4 border-t border-white/10 pt-6">
                 <div className="flex items-center gap-3 text-gray-300">
                   <Calendar size={18} className="text-white"/>
                   <span>1ª Semana Agosto (A confirmar)</span>
                 </div>
                 <p className="text-sm text-gray-400 font-light">
                   Trabajando para llevar la experiencia Noe Masiá a la costa de Castellón.
                 </p>
               </div>
            </div>

          </div>
        </div>

        {/* Philosophy & Action Images */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 sticky top-24">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight text-white">
              Entendiendo el <span className="text-brand-lime">Rendimiento</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed text-justify">
              <p>
                <strong className="text-white">Campus Noelia Masiá</strong> nace con la idea de ofrecer un espacio donde los jugadores y jugadoras puedan evolucionar de forma global. No se trata solo de entrenar baloncesto, sino de entender el deporte desde una perspectiva integral.
              </p>
              <p>
                Como jugadora profesional y dietista deportiva, he entendido que el rendimiento va mucho más allá del entrenamiento en pista. Se compone de <span className="text-brand-lime">cuerpo, mente, hábitos, valores y sacrificio</span>.
              </p>
              <p className="border-l-2 border-brand-lime pl-4 italic text-white bg-white/5 p-4 rounded-r-sm">
                "El objetivo es ofrecer un espacio seguro de trabajo y desarrollo, donde los jugadores tendrán a su disponibilidad herramientas y cercanía a la estructura de trabajo necesaria para desarrollarse como atletas."
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
             {/* Left Column - 2 Stacked Images */}
             <div className="space-y-4 transform md:translate-y-12">
               <img 
                 src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894_8_Octubre-34.jpg?alt=media&token=a5bbd6fa-b235-4b50-aa86-8d81382a9192" 
                 alt="Noe Masiá Action Shot 1"
                 className="w-full h-auto rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-500 object-cover"
               />
                <img 
                 src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894__DSC0164_copia.jpg?alt=media&token=0b62211c-8a63-4402-a661-1f5f409a843a" 
                 alt="Noe Masiá Action Shot 2"
                 className="w-full h-auto rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-500 object-cover"
               />
             </div>
             
             {/* Right Column - 1 Image Staggered */}
             <div className="transform md:-translate-y-4">
               <img 
                 src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848893_CAB_Estepona_13_10-070.jpg?alt=media&token=5f5ffe72-1013-4931-bd77-beb619c91218" 
                 alt="Noe Masiá Action Shot 3"
                 className="w-full h-auto rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-500 object-cover"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};