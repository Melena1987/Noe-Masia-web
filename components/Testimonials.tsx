import React from 'react';

interface Testimonial {
  name: string;
  role?: string; // e.g., "Liga Femenina Endesa", "Madre de alumno"
  image?: string;
  text: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
  variant?: 'light' | 'dark';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonials, variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-black uppercase text-center mb-16 ${isDark ? 'text-white' : 'text-brand-dark'}`}>
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-sm transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 border border-white/10 hover:border-brand-lime/50' 
                  : 'bg-gray-50 border border-gray-100 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full overflow-hidden shrink-0 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-bold opacity-50">
                      {t.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className={`font-bold text-lg uppercase leading-none ${isDark ? 'text-white' : 'text-brand-dark'}`}>{t.name}</h4>
                  {t.role && (
                    <p className={`text-xs uppercase tracking-widest mt-1 font-bold ${isDark ? 'text-brand-lime' : 'text-brand-green'}`}>
                      {t.role}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <span className={`absolute -top-4 -left-2 text-6xl font-serif opacity-20 ${isDark ? 'text-brand-lime' : 'text-brand-green'}`}>"</span>
                <p className={`relative z-10 text-sm md:text-base font-light leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};