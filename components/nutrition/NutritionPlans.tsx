import React from 'react';
import { Button } from '../Button';
import { Check, Star, Activity, Clock, Phone, MessageCircle } from 'lucide-react';

interface NutritionPlansProps {
  onContactClick: () => void;
}

export const NutritionPlans: React.FC<NutritionPlansProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 bg-gray-50 relative z-10 overflow-hidden" id="plans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-brand-dark mb-6">
            Planes <span className="text-brand-green">Personalizados</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            En todos los planes encontrarás lo mismo: dedicación, disponibilidad y ganas de acompañarte. Solo cambian los tiempos y la forma de contacto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Plan Salud */}
          <div className="bg-white text-brand-dark border border-gray-200 rounded-sm shadow-xl overflow-hidden flex flex-col relative group">
             <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-700 text-brand-green">
               <Activity size={200} />
            </div>

            <div className="p-8 pb-0 relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-bold uppercase tracking-widest mb-4">
                Bienestar Integral
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">Plan Salud</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6 border-l-2 border-brand-green pl-4 text-sm">
                Para personas de cualquier edad que quieran cuidarse física y mentalmente, o mejorar sintomatología de patologías específicas.
              </p>
              
              <div className="bg-brand-light p-4 rounded-sm mb-6">
                <p className="text-xs font-bold uppercase text-brand-dark mb-2">Abordaje de:</p>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 font-light">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>Desequilibrios hormonales</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>Estrés y ansiedad</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>Alteraciones metabólicas (insulina, inflamación)</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>Retención de líquidos y estilo de vida</span>
                </div>
              </div>
            </div>

            <div className="px-8 flex-grow relative z-10 space-y-6">
               {/* 1 Mes Option */}
               <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-brand-dark flex items-center gap-2 mb-2"><Clock size={16} /> Opción 1 Mes</h4>
                  <ul className="space-y-2 text-sm text-gray-600 font-light">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-green"/> Entrevista inicial + Cuestionario + Valoración analíticas.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-green"/> Planificación alimentación y suplementación.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-green"/> 1 videollamada de revisión y cierre.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-green"/> Contacto vía Email.</li>
                  </ul>
               </div>

               {/* Long Term Option */}
               <div className="border-t border-gray-100 pt-4 pb-4">
                  <h4 className="font-bold text-brand-dark flex items-center gap-2 mb-2"><Clock size={16} /> 3 - 6 - 9 - 12 Meses</h4>
                  <p className="text-sm text-gray-600 font-light flex items-center gap-2">
                    <MessageCircle size={14} className="text-brand-green" /> 
                    Incluye contacto directo y continuo vía <strong>WhatsApp</strong>.
                  </p>
               </div>
            </div>

            <div className="p-8 mt-auto relative z-10">
              <Button variant="primary" className="w-full py-4 text-sm" onClick={onContactClick}>
                Solicitar Plan Salud
              </Button>
            </div>
          </div>

          {/* Plan Atleta */}
          <div className="bg-brand-dark text-white rounded-sm shadow-2xl overflow-hidden flex flex-col relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
               <Star size={200} />
            </div>
            
            <div className="p-8 pb-0 relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-lime text-brand-dark text-xs font-bold uppercase tracking-widest mb-4">
                Alto Rendimiento
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">Plan Atleta</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6 border-l-2 border-brand-lime pl-4 text-sm">
                Para deportistas profesionales, semi-profesionales o amateur que buscan el siguiente nivel. <br/>
                <span className="text-brand-lime font-bold not-italic mt-1 block">*Mínimo de trabajo: 3 Meses.</span>
              </p>

              <div className="bg-white/5 p-4 rounded-sm mb-6 border border-white/10">
                <p className="text-xs font-bold uppercase text-brand-lime mb-2">Esto es para ti si:</p>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-300 font-light">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>Tardas en recuperar entre sesiones</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>Te levantas sin energía o con dolor</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>Ciclos menstruales irregulares</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-lime rounded-full"></span>Necesitas organización profesional</span>
                </div>
              </div>
            </div>

            <div className="px-8 flex-grow relative z-10 space-y-4">
               <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-widest">Incluye (3 - 6 - 9 - 12 Meses):</h4>
               <ul className="space-y-2 text-sm text-gray-300 font-light">
                  <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-lime"/> Análisis integral (GPS, Monitorización sueño, Pliegues).</li>
                  <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-lime"/> Análisis de sangre y estado de hidratación.</li>
                  <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-lime"/> Estrategias de recuperación de lesiones.</li>
                  <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-brand-lime"/> Contacto continuo vía <strong>WhatsApp</strong>.</li>
               </ul>
            </div>

            <div className="p-8 mt-auto relative z-10">
              <Button variant="lime" className="w-full py-4 text-sm" onClick={onContactClick}>
                Solicitar Plan Atleta
              </Button>
            </div>
          </div>
        </div>

        {/* Final Disclaimer */}
        <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-12">
           <p className="text-gray-500 italic font-light text-sm md:text-base">
             "Algo es muy importante en este proceso: el <strong>compromiso</strong> de aportar la máxima información posible y necesaria para que nos pongamos manos a la obra con cualquier detalle que pueda ayudarte."
           </p>
           <p className="text-brand-dark font-bold mt-4 font-script text-lg">- Noe Masiá</p>
        </div>

      </div>
    </section>
  );
};