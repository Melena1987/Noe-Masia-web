import React from 'react';

export const CampusSponsors: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs block mb-12 opacity-70">
          Hacen esto posible
        </span>

        {/* Main Partners - Larger */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16 opacity-90">
          {/* Placeholder for Main Sponsors - Using Text for now as per instruction to create structure */}
          <div className="text-3xl font-black text-gray-300 uppercase tracking-tighter hover:text-brand-dark transition-colors cursor-default">
            CAB Estepona
          </div>
           <div className="text-3xl font-black text-gray-300 uppercase tracking-tighter hover:text-brand-dark transition-colors cursor-default">
            Ayto. Estepona
          </div>
           <div className="text-3xl font-black text-gray-300 uppercase tracking-tighter hover:text-brand-dark transition-colors cursor-default">
            Club Moncofa
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-24 bg-gray-200 mx-auto mb-12"></div>

        {/* Collaborators - Smaller */}
        <h3 className="text-sm font-bold uppercase text-gray-400 mb-8 tracking-widest">Colaboradores</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold text-gray-400 hover:text-brand-green">Sponsor 1</div>
          <div className="text-xl font-bold text-gray-400 hover:text-brand-green">Sponsor 2</div>
          <div className="text-xl font-bold text-gray-400 hover:text-brand-green">Sponsor 3</div>
          <div className="text-xl font-bold text-gray-400 hover:text-brand-green">Sponsor 4</div>
        </div>

      </div>
    </section>
  );
};