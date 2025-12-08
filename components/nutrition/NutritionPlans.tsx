import React, { useState } from 'react';
import { Button } from '../Button';
import { ChevronDown, ChevronUp, Check, Star, Activity, Clock } from 'lucide-react';

interface NutritionPlansProps {
  onContactClick: () => void;
}

export const NutritionPlans: React.FC<NutritionPlansProps> = ({ onContactClick }) => {
  const [openPlan, setOpenPlan] = useState<string | null>('atleta');

  const togglePlan = (id: string) => {
    setOpenPlan(openPlan === id ? null : id);
  };

  return (
    <section className="py-12 bg-white relative z-10" id="plans">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-brand-dark mb-6">
            Planes Personalizados
          </h2>
          <div className="bg-brand-green/10 p-6 rounded-sm max-w-3xl mx-auto border-l-4 border-brand-green">
            <p className="text-brand-dark font-medium italic text-lg leading-relaxed">
              "En todos los planes encontrarás lo mismo: dedicación, disponibilidad y ganas de acompañarte en este proceso. Solo van a cambiar los tiempos y la forma de contactar."
            </p>
          </div>
        </div>

        <div className="space-y-12">
          
          {/* === PLAN ATLETA / DEPORTISTA === */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl ring-1 ring-black/5">
            <div className="relative flex flex-col md:block">
              
              {/* Image Side - Absolute in Desktop to allow collapse */}
              <div className="md:absolute md:top-0 md:left-0 md:bottom-0 md:w-[41.66%] w-full h-64 md:h-auto relative z-0 overflow-hidden bg-gray-100 group">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765209526849_uvas_negras.jpg?alt=media&token=1eb8c2f5-be0f-4e51-a0eb-82009d4c0921" 
                  alt="Frutas frescas - Nutrición Real y Antioxidantes"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden"></div>
                <div className="absolute bottom-6 left-6 text-white md:hidden">
                    <span className="bg-brand-lime text-brand-dark text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest mb-2 inline-block">Profesional & Amateur</span>
                    <h3 className="text-3xl font-black uppercase leading-none">Plan Atleta</h3>
                </div>
              </div>

              {/* Content Side - Margined in Desktop */}
              <div className="md:ml-[41.66%] md:w-[58.33%] relative z-10 bg-white flex flex-col">
                <button 
                  onClick={() => togglePlan('atleta')}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 group"
                >
                  <div className="hidden md:block">
                     <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-green">Alto Rendimiento</span>
                        <span className="bg-brand-lime/20 text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Vía WhatsApp</span>
                     </div>
                     <h3 className="text-3xl font-black uppercase text-brand-dark group-hover:text-brand-green transition-colors">Plan Atleta</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider md:ml-auto">
                    {openPlan === 'atleta' ? 'Ocultar info' : 'Ver detalles'}
                    {openPlan === 'atleta' ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>
                
                {openPlan === 'atleta' && (
                  <div className="p-6 md:p-8 animate-fade-in bg-white flex-grow flex flex-col justify-between">
                    <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                      
                      <div>
                        <p className="mb-4 font-normal text-brand-dark">
                          Para deportistas profesionales, semi-profesionales o amateur que quieran llevar su rendimiento al siguiente nivel (dentro y fuera de pista).
                        </p>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-brand-green mb-3 flex items-center gap-2">
                          <Activity size={14} /> Esto es para ti si:
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li className="flex gap-2 items-start"><span className="text-brand-green font-bold">1.</span> Tardas en recuperar entre sesiones.</li>
                          <li className="flex gap-2 items-start"><span className="text-brand-green font-bold">2.</span> Te levantas agotado/a sin energía.</li>
                          <li className="flex gap-2 items-start"><span className="text-brand-green font-bold">3.</span> Tienes dolores musculares constantes.</li>
                          <li className="flex gap-2 items-start"><span className="text-brand-green font-bold">4.</span> Ciclos menstruales irregulares.</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-sm border border-gray-100">
                        <h4 className="font-bold text-brand-dark uppercase text-sm mb-4">¿Qué incluye el seguimiento?</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex gap-3">
                            <Star size={18} className="text-brand-lime shrink-0 fill-brand-lime" />
                            <span><strong>Análisis Integral:</strong> GPS, test de hidratación, monitorización del sueño y pliegues cutáneos (antropometría).</span>
                          </li>
                          <li className="flex gap-3">
                            <Check size={18} className="text-brand-green shrink-0" />
                            <span><strong>Contacto continuo vía WhatsApp</strong> y videollamadas cuando sean necesarias.</span>
                          </li>
                          <li className="flex gap-3">
                            <Check size={18} className="text-brand-green shrink-0" />
                            <span>Recuperación de lesiones (óseas/musculares) y suplementación clínica.</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Sub-options for time */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default">
                            <span className="block text-xl font-black text-brand-dark">3 Meses</span>
                        </div>
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default relative overflow-hidden bg-brand-green/5">
                            <div className="absolute top-0 right-0 bg-brand-green text-white text-[9px] px-2 py-0.5 font-bold uppercase">Recomendado</div>
                            <span className="block text-xl font-black text-brand-dark">6 Meses</span>
                        </div>
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default">
                            <span className="block text-xl font-black text-brand-dark">9 Meses</span>
                        </div>
                      </div>

                    </div>

                    <div className="pt-8 mt-auto">
                      <Button variant="primary" onClick={onContactClick} className="w-full text-center justify-center py-4 text-sm tracking-widest">
                        Solicitar Plan Atleta
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* === PLAN SALUD === */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl ring-1 ring-black/5">
             <div className="relative flex flex-col md:block">
              
              {/* Image Side - Absolute Right in Desktop */}
              <div className="md:absolute md:top-0 md:right-0 md:bottom-0 md:w-[41.66%] w-full h-64 md:h-auto relative z-0 overflow-hidden bg-gray-100 group order-1 md:order-none">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764606631710_noe_masia_nutrici_n.jpg?alt=media&token=d984aa7c-f080-4c3a-8129-78e004dabe15" 
                  alt="Pasta seca - Carbohidratos y Energía"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden"></div>
                 <div className="absolute bottom-6 left-6 text-white md:hidden">
                    <span className="bg-brand-lime text-brand-dark text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest mb-2 inline-block">Bienestar</span>
                    <h3 className="text-3xl font-black uppercase leading-none">Plan Salud</h3>
                </div>
                {/* Green Strip Detail */}
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-green hidden md:block"></div>
              </div>

              {/* Content Side - Margined Right in Desktop */}
              <div className="md:mr-[41.66%] md:w-[58.33%] relative z-10 bg-white flex flex-col order-2 md:order-none">
                <button 
                  onClick={() => togglePlan('salud')}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 group"
                >
                  <div className="hidden md:block">
                     <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-green">Bienestar & Patologías</span>
                        <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Vía Email</span>
                     </div>
                     <h3 className="text-3xl font-black uppercase text-brand-dark group-hover:text-brand-green transition-colors">Plan Salud</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider md:ml-auto">
                    {openPlan === 'salud' ? 'Ocultar info' : 'Ver detalles'}
                    {openPlan === 'salud' ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>
                
                {openPlan === 'salud' && (
                  <div className="p-6 md:p-8 animate-fade-in bg-white flex-grow flex flex-col justify-between">
                     <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                      
                      <div>
                        <p className="mb-4 font-normal text-brand-dark">
                          Dirigido a cualquier persona que quiera cuidarse física y mentalmente, o tratar patologías específicas para mejorar su sintomatología.
                        </p>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-brand-green mb-3 flex items-center gap-2">
                           <Activity size={14} /> Especializado en:
                        </h4>
                        <div className="flex flex-wrap gap-2 text-xs uppercase font-bold text-gray-500">
                          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">SOP & Endometriosis</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Amenorrea</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Resistencia Insulina</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Inflamación</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Alergias</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">Otros</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-sm border border-gray-100">
                          <h4 className="font-bold text-brand-dark uppercase text-sm mb-4">Metodología Plan Mensual</h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex gap-3">
                                <Clock size={18} className="text-brand-green shrink-0" /> 
                                <span><strong>Entrevista inicial</strong> (llamada/video) + Valoración de analíticas.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check size={18} className="text-brand-green shrink-0" /> 
                                <span>Pautas de alimentación, suplementación y mejora del estilo de vida (estrés/descanso).</span>
                            </li>
                            <li className="flex gap-3">
                                <Check size={18} className="text-brand-green shrink-0" /> 
                                <span><strong>1 Videollamada de revisión</strong> y contacto vía correo electrónico.</span>
                            </li>
                          </ul>
                      </div>

                      {/* Sub-options for time - PLAN SALUD */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default">
                            <span className="block text-lg font-black text-brand-dark">1 Mes</span>
                        </div>
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default">
                            <span className="block text-lg font-black text-brand-dark">3 Meses</span>
                        </div>
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default relative overflow-hidden bg-brand-green/5">
                             <div className="absolute top-0 right-0 bg-brand-green text-white text-[8px] px-1.5 py-0.5 font-bold uppercase">Popular</div>
                            <span className="block text-lg font-black text-brand-dark">6 Meses</span>
                        </div>
                        <div className="border border-brand-green/30 p-3 rounded-sm text-center hover:bg-brand-green/5 transition-colors cursor-default">
                            <span className="block text-lg font-black text-brand-dark">9 Meses</span>
                        </div>
                      </div>

                    </div>

                    <div className="pt-8 mt-auto">
                      <Button variant="primary" onClick={onContactClick} className="w-full text-center justify-center py-4 text-sm tracking-widest">
                        Solicitar Plan Salud
                      </Button>
                    </div>
                 </div>
                )}
              </div>
            </div>
          </div>
          
           {/* Footer Note */}
           <div className="text-center pt-4">
             <p className="text-gray-400 font-light text-sm">
               ¿Dudas? <button onClick={onContactClick} className="text-brand-green font-bold hover:underline">Escríbeme</button> y valoramos tu caso sin compromiso.
             </p>
           </div>

        </div>
      </div>
    </section>
  );
};