import React from 'react';
import { Dumbbell, Brain, Trophy, CalendarCheck } from 'lucide-react';

export const CampusMethodology: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Methodologies */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white uppercase tracking-wide mb-2">Programa Deportivo</h3>
          <div className="h-1 w-24 bg-brand-lime mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Card 1 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Dumbbell className="w-12 h-12 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Técnica Individual</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Trabajo específico de fundamentos esenciales para aplicar en el juego real:
            </p>
            <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
              <li>Bote y manejo de balón.</li>
              <li>Mecánica y finalizaciones.</li>
              <li>Pase y lectura de juego.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Brain className="w-12 h-12 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Formación Integral</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Charlas formativas sobre nutrición, mentalidad y cuidado del cuerpo impartidas por profesionales:
            </p>
             <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex gap-2"><span className="text-brand-lime font-bold">•</span> <span><strong>Noelia Masiá:</strong> Jugadora y Dietista.</span></li>
              <li className="flex gap-2"><span className="text-brand-lime font-bold">•</span> <span><strong>Paula González:</strong> Psicóloga deportiva y entrenadora.</span></li>
              <li className="flex gap-2"><span className="text-brand-lime font-bold">•</span> <span><strong>Paulina Infantes:</strong> Fisioterapeuta LF Endesa (CAB Estepona).</span></li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-dark p-8 border-t-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Trophy className="w-12 h-12 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold uppercase mb-4 text-white">Competición</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Aplicación de lo aprendido. Para finalizar las sesiones del día, se realizarán diversas competiciones y clasificatorios para las <strong>grandes finales</strong> del sábado.
            </p>
          </div>
        </div>

        {/* Saturday Event Section */}
        <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <CalendarCheck size={300} className="text-brand-lime" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-lime font-bold uppercase tracking-widest text-sm mb-2 block">El gran cierre</span>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 leading-none">
                Sábado de<br/>Familias
              </h3>
              <p className="text-gray-300 text-lg font-light mb-6">
                Es un día para todos. Queremos que acompañéis a vuestros hijos para acabar la semana siendo partícipes de su esfuerzo, trabajo y disfrute. <span className="text-white font-medium">Vosotros también sois importantes.</span>
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-sm border-l-2 border-brand-lime">
              <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-sm border-b border-gray-700 pb-2">Itinerario del Sábado</h4>
              <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
                  Introducción y calentamiento colectivo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
                  Sesión de fotos y Photocall individual.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
                  Presentación profesional de jugadores/as.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
                  Finales competiciones (Mates, Triples, 3x3).
                </li>
                 <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>
                  Entrega de premios y pequeño almuerzo.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};