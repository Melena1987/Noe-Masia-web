import React from 'react';
import { Users, Zap, Target } from 'lucide-react';

export const CampusValues: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-orange text-brand-dark relative overflow-hidden">
      {/* Abstract pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-64 h-64 border-8 border-brand-dark rounded-full absolute -top-10 -left-10"></div>
        <div className="w-96 h-96 border-8 border-brand-dark rounded-full absolute bottom-10 right-10"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Users className="w-16 h-16 mx-auto mb-8 text-brand-dark" />
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-10">
          "Creemos en el esfuerzo individual silencioso, en la unión del equipo y el trabajo como primera elección."
        </h2>
        <div className="flex flex-wrap justify-center gap-6 font-bold uppercase tracking-widest text-sm">
          <span className="flex items-center gap-2"><Zap size={18} /> Sacrificio</span>
          <span className="flex items-center gap-2"><Target size={18} /> Disciplina</span>
          <span className="flex items-center gap-2"><Users size={18} /> Familia</span>
        </div>
      </div>
    </section>
  );
};