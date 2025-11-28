import React from 'react';
import { TrendingUp, Utensils, Leaf, ClipboardList } from 'lucide-react';

export const NutritionServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 bg-brand-gray text-white py-12 px-4 rounded-sm shadow-xl relative overflow-hidden">
           {/* Decorative Background */}
           <div className="absolute inset-0 bg-brand-dark/20"></div>
           <h2 className="relative z-10 text-3xl md:text-4xl font-light text-white">
             ¿En qué puedo <span className="font-bold border-b-2 border-brand-green pb-1">ayudarte</span>?
           </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-sm">
          
          {/* Service 1 */}
          <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
            <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-green transition-colors">
              <TrendingUp size={60} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Rendimiento</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Mejorar tu rendimiento deportivo a través de estrategias adaptadas a tu disciplina.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
            <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-green transition-colors">
              <Utensils size={60} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Alimentación</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Establecer una alimentación adecuada, sostenible y flexible para tu día a día.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
            <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-green transition-colors">
              <Leaf size={60} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Mujer Deportista</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Estrategias específicas para la fisiología femenina y el ciclo menstrual.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
            <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-green transition-colors">
              <ClipboardList size={60} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Planificación</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Planificación nutricional detallada para semanas de carga y competiciones.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};