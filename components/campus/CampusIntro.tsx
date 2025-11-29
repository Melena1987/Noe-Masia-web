import React from 'react';
import { MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';

export const CampusIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Key Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 border-b border-brand-lime/30 pb-12">
          <div className="flex items-start gap-4">
             <Calendar className="text-brand-lime w-8 h-8 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase tracking-wider">Fechas</h4>
               <p className="text-gray-400 font-light">13 - 18 Julio</p>
               <p className="text-gray-500 text-xs mt-1 italic">(A valorar sede Moncofa 1ª semana Agosto)</p>
             </div>
          </div>
          <div className="flex items-start gap-4">
             <MapPin className="text-brand-lime w-8 h-8 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase tracking-wider">Lugar</h4>
               <p className="text-gray-400 font-light">Pabellón JA Pineda</p>
               <p className="text-gray-400 font-light">Estepona</p>
             </div>
          </div>
          <div className="flex items-start gap-4">
             <Clock className="text-brand-lime w-8 h-8 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase tracking-wider">Horario</h4>
               <p className="text-gray-400 font-light">10:00h - 14:30h</p>
               <p className="text-gray-500 text-xs mt-1">Llegada Lunes: 09:00h</p>
             </div>
          </div>
          <div className="flex items-start gap-4">
             <AlertCircle className="text-brand-lime w-8 h-8 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase tracking-wider">Servicios</h4>
               <p className="text-gray-400 font-light text-sm">Bar/Cafetería disponible.</p>
               <p className="text-gray-400 font-light text-sm">Opción menú reserva anticipada.</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
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
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-lime/20 transform rotate-3 rounded-sm z-0"></div>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894__DSC0086_copia.jpg?alt=media&token=229254d8-b280-46ff-8880-25ac6a1f1efd"
              alt="Noe Masiá Campus Portrait"
              className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};