import React, { useState } from 'react';
import { Button } from '../Button';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface NutritionPlansProps {
  onContactClick: () => void;
}

export const NutritionPlans: React.FC<NutritionPlansProps> = ({ onContactClick }) => {
  // By default, the first plan is open
  const [openPlan, setOpenPlan] = useState<string | null>('atleta');

  const togglePlan = (id: string) => {
    setOpenPlan(openPlan === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50 relative z-10" id="plans">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-brand-dark mb-4">
            Planes Personalizados
          </h2>
          <p className="text-gray-500 font-light max-w-2xl">
            Un acompañamiento real adaptado a tus objetivos. Sin atajos.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Plan Deportista / Alto Rendimiento */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            <button 
              onClick={() => togglePlan('atleta')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
            >
              <div>
                 <span className="text-xs font-bold tracking-widest uppercase text-brand-green mb-1 block">Alto Rendimiento</span>
                 <h3 className="text-2xl md:text-3xl font-black uppercase text-brand-dark">Plan Deportista</h3>
              </div>
              {openPlan === 'atleta' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>
            
            {openPlan === 'atleta' && (
              <div className="px-6 md:px-8 pb-8 animate-fade-in text-gray-600 font-light leading-relaxed">
                <div className="border-t border-gray-100 pt-6 mt-2 space-y-6">
                  <p>
                    Diseñado específicamente para atletas que buscan optimizar su rendimiento en competición y entrenamiento. 
                    Este plan no se trata solo de qué comer, sino de cuándo y cómo hacerlo para maximizar la energía, 
                    mejorar la recuperación y prevenir lesiones.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-brand-dark uppercase text-sm mb-3">¿Qué trabajaremos?</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Estrategias de recuperación post-partido/entreno.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Suplementación basada en evidencia (si es necesaria).</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Hidratación y periodización de carbohidratos.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Composición corporal funcional para tu deporte.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark uppercase text-sm mb-3">Incluye</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Valoración inicial completa y estudio antropométrico.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Plan nutricional totalmente adaptado a tus horarios de entreno.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> <strong>Contacto directo y continuo (WhatsApp)</strong> para dudas del día a día.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Revisiones periódicas según calendario competitivo.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" onClick={onContactClick} className="w-full md:w-auto">
                      Solicitar Información Plan Deportista
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Plan Salud */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
             <button 
              onClick={() => togglePlan('salud')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
            >
              <div>
                 <span className="text-xs font-bold tracking-widest uppercase text-brand-green mb-1 block">Bienestar & Patologías</span>
                 <h3 className="text-2xl md:text-3xl font-black uppercase text-brand-dark">Plan Salud</h3>
              </div>
              {openPlan === 'salud' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>
            
            {openPlan === 'salud' && (
              <div className="px-6 md:px-8 pb-8 animate-fade-in text-gray-600 font-light leading-relaxed">
                 <div className="border-t border-gray-100 pt-6 mt-2 space-y-6">
                  <p>
                    Un enfoque centrado en la educación nutricional y la mejora de la calidad de vida. 
                    Ideal para abordar patologías digestivas, hormonales (SOP, amenorrea), o simplemente para aprender a comer 
                    de forma consciente y saludable sin la presión de la competición.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                      <h4 className="font-bold text-brand-dark uppercase text-sm mb-3">Enfoque</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Reeducación de hábitos alimentarios.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Mejora de sintomatología digestiva/hormonal.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> Relación sana con la comida.</li>
                      </ul>
                    </div>
                     <div>
                      <h4 className="font-bold text-brand-dark uppercase text-sm mb-3">Modalidades</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> <strong>Opción Mensual:</strong> Planificación + revisión videollamada.</li>
                        <li className="flex items-start gap-2"><span className="text-brand-green">•</span> <strong>Seguimiento a largo plazo:</strong> Para cambios profundos y sostenibles.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" onClick={onContactClick} className="w-full md:w-auto">
                      Solicitar Información Plan Salud
                    </Button>
                  </div>
                 </div>
              </div>
            )}
          </div>
          
           {/* Others */}
           <div className="bg-transparent p-4 text-center">
             <p className="text-gray-500 font-light text-sm">
               ¿Tienes dudas sobre qué plan es para ti o necesitas una consulta puntual? <button onClick={onContactClick} className="text-brand-green font-bold hover:underline">Escríbeme</button> y lo valoramos.
             </p>
           </div>

        </div>
      </div>
    </section>
  );
};