import React from 'react';
import { Button } from '../Button';
import { Check, Star, Activity, CalendarClock } from 'lucide-react';

interface NutritionPlansProps {
  onContactClick: () => void;
}

export const NutritionPlans: React.FC<NutritionPlansProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 bg-gray-50 relative z-10" id="plans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-brand-dark mb-6">
            Planes <span className="text-brand-green">Personalizados</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Elige el camino que mejor se adapta a tus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
          
          {/* Plan Atleta */}
          <div className="bg-brand-dark text-white rounded-sm shadow-2xl overflow-hidden flex flex-col relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
               <Star size={200} />
            </div>
            
            <div className="p-10 pb-0 relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-lime text-brand-dark text-xs font-bold uppercase tracking-widest mb-4">
                Alto Rendimiento
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">Plan Atleta</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-8 border-l-2 border-brand-lime pl-4">
                Diseñado para deportistas de élite, profesionales o semi-profesionales que buscan optimizar su rendimiento deportivo desde una perspectiva fisiológica y nutricional avanzada.
              </p>
            </div>

            <div className="px-10 flex-grow relative z-10">
              <ul className="space-y-4">
                {[
                  "Mejora del rendimiento y reducción de lesiones.",
                  "Optimización digestiva y absorción de nutrientes.",
                  "Periodización nutricional y suplementación.",
                  "Optimización del descanso y gestión del estrés.",
                  "Estrategias de recuperación (sauna, frío-calor).",
                  "Análisis de biomarcadores y seguimiento diario."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200 font-light">
                    <Check className="w-5 h-5 text-brand-lime flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 mt-auto relative z-10">
              <Button variant="lime" className="w-full py-4 text-sm" onClick={onContactClick}>
                Solicitar Plan Atleta
              </Button>
            </div>
          </div>

          {/* Plan Salud */}
          <div className="bg-white text-brand-dark border border-gray-200 rounded-sm shadow-xl overflow-hidden flex flex-col relative group">
             <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-700 text-brand-green">
               <Activity size={200} />
            </div>

            <div className="p-10 pb-0 relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-bold uppercase tracking-widest mb-4">
                Salud Integral
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">Plan Salud</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8 border-l-2 border-brand-green pl-4">
                Para quienes buscan entender el origen real de sus síntomas y recuperar su salud desde la raíz. Nutrición clínica y acompañamiento humano.
              </p>
            </div>

            <div className="px-10 flex-grow relative z-10">
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-dark">Abordaje clínico de:</div>
              <ul className="space-y-3">
                {[
                  "Disbiosis, SIBO, gastritis y salud digestiva.",
                  "Patologías autoinmunes e inflamatorias.",
                  "Desequilibrios hormonales y SOP.",
                  "Alteraciones metabólicas (resistencia insulina).",
                  "Problemas de piel (acné, rosácea, dermatitis).",
                  "Fatiga crónica, insomnio y ansiedad."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 mt-auto relative z-10">
              <Button variant="primary" className="w-full py-4 text-sm" onClick={onContactClick}>
                Solicitar Plan Salud
              </Button>
            </div>
          </div>
        </div>

        {/* Plan Trimestral */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-green text-white p-8 md:p-12 rounded-sm shadow-lg flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="bg-white/20 p-4 rounded-full flex-shrink-0 backdrop-blur-sm">
               <CalendarClock size={48} className="text-white" />
            </div>

            <div className="flex-grow text-center md:text-left relative z-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">Pack Trimestral</h3>
              <p className="text-white/90 font-light text-lg">
                El cambio real requiere tiempo. Asegura tu plaza y tu evolución con el plan trimestral.
                <br className="hidden md:block"/>
                <span className="text-sm opacity-80 mt-2 block">
                  *Disponible tanto para Plan Atleta como Plan Salud con condiciones especiales.
                </span>
              </p>
            </div>

            <div className="flex-shrink-0 relative z-10">
               <Button variant="white" onClick={onContactClick} className="whitespace-nowrap">
                 Consultar Condiciones
               </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};