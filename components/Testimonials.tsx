import React from 'react';

interface Testimonial {
  name: string;
  role?: string; // e.g., "Liga Femenina Endesa", "Madre de alumno"
  image?: string;
  text?: string;
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
        <h2 className={`text-3xl md:text-5xl font-black uppercase text-center mb-16 ${isDark ? 'text-white' : 'text-brand-dark'}`}>
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center h-full"
            >
              {/* Image Container with Hover Effects */}
              <div className="w-full aspect-square overflow-hidden rounded-sm mb-6 relative shadow-lg bg-gray-200">
                {t.image ? (
                  <>
                    <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply pointer-events-none"></div>
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700 ease-out" 
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold opacity-30 bg-gray-300">
                    {t.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                <h4 className={`font-black text-xl uppercase leading-none mb-2 ${isDark ? 'text-white' : 'text-brand-dark'}`}>
                  {t.name}
                </h4>
                {t.role && (
                  <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-brand-lime' : 'text-brand-green'}`}>
                    {t.role}
                  </p>
                )}
                
                {t.text && (
                  <div className="mt-4 pt-4 border-t border-gray-200/50 w-full max-w-[200px]">
                    <p className={`text-sm font-light italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      "{t.text}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};