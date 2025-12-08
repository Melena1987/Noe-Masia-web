
import React from 'react';

interface Testimonial {
  name: string;
  role?: string; 
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

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-24">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="group relative w-full aspect-[3/4] flex flex-col justify-end overflow-hidden"
            >
              {/* Text Content - Absolute Top with Zoom Effect */}
              <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center text-center p-4 transition-transform duration-300 group-hover:scale-105 origin-top">
                <h4 className={`font-bold text-sm uppercase leading-tight mb-1 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  {t.name}
                </h4>
                {t.role && (
                  <p className={`text-xs italic font-medium leading-tight ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t.role}
                  </p>
                )}
                
                {t.text && (
                  <div className="mt-2 pt-2 border-t border-gray-200/50 w-auto">
                    <p className={`text-[10px] font-light italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      "{t.text}"
                    </p>
                  </div>
                )}
              </div>

              {/* Image Container - Full size, Object Contain, Aligned Bottom */}
              <div className="w-full h-full">
                {t.image ? (
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold opacity-10 bg-gray-100">
                    {t.name.charAt(0)}
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
