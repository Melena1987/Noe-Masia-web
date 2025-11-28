import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight, Leaf, TrendingUp, Utensils, ClipboardList } from 'lucide-react';

export const NutritionPage: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 bg-white min-h-screen text-brand-dark relative z-10">
      
      {/* Header / Intro */}
      <section className="relative py-20 bg-brand-light overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 transform skew-x-12 translate-x-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-[0.3em] text-xs uppercase block mb-4">
            Dietista Deportiva | Antropometrista ISAK 1 | Jugadora PRO
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-brand-dark mb-8">
            Nutrición<br/>Deportiva
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto mb-10"></div>
          
          <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed space-y-6">
            <p>
              Mi nombre es <strong className="text-brand-dark">Noelia Masiá</strong>. A lo largo de mi carrera deportiva, 
              he vivido de primera mano lo que significa llevar una vida dedicada al alto rendimiento.
            </p>
            <p>
              Me he especializado en nutrición deportiva general, nutrición en la mujer y he realizado numerosos cursos 
              en deportes específicos como baloncesto, fútbol, resistencia y crossfit.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid "En qué puedo ayudarte" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 bg-brand-gray text-white py-12 px-4 rounded-sm shadow-xl relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute inset-0 bg-brand-dark/20"></div>
             <h2 className="relative z-10 text-3xl md:text-4xl font-light text-white">
               ¿En qué puedo <span className="font-bold border-b-2 border-brand-orange pb-1">ayudarte</span>?
             </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-sm">
            
            {/* Service 1 */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
              <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-orange transition-colors">
                <TrendingUp size={60} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Rendimiento</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Mejorar tu rendimiento deportivo a través de estrategias adaptadas a tu disciplina.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
              <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-orange transition-colors">
                <Utensils size={60} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Alimentación</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Establecer una alimentación adecuada, sostenible y flexible para tu día a día.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
              <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-orange transition-colors">
                <Leaf size={60} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Mujer Deportista</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Estrategias específicas para la fisiología femenina y el ciclo menstrual.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-10 flex flex-col items-center text-center hover:bg-brand-light transition-colors duration-300 group">
              <div className="w-16 h-16 mb-6 text-brand-dark group-hover:text-brand-orange transition-colors">
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

      {/* Women's Health Focus */}
      <section className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 text-brand-dark leading-tight">
              La Mujer<br/><span className="text-brand-orange">Deportista</span>
            </h3>
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Quiero destacar la importancia de la nutrición en la mujer deportista. Uno de mis objetivos principales es 
                <strong> romper mitos</strong> que han aparecido a lo largo del tiempo.
              </p>
              <p>
                Te ayudo a entender tu ciclo, la importancia que este tiene en nuestro cuerpo y te doy las herramientas 
                nutricionales necesarias para alcanzar bienestar físico a la vez que rendimiento deportivo.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="primary" onClick={scrollToContact}>
                Agendar Consulta
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] bg-white p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764321274510_Gemini_Generated_Image_8rvn68rvn68rvn68.png?alt=media&token=5f12b4f3-cb43-4620-8d1b-5365524d2f29" 
                alt="Women in Sports" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-orange z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-dark text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            ¿Empezamos?
          </h2>
          <p className="text-gray-400 text-xl font-light mb-12">
            Acompañamiento en cada etapa de tu preparación, seas deportista amateur, de élite o en etapa de desarrollo.
          </p>
          <Button variant="white" className="px-12 py-4 text-sm tracking-widest" onClick={scrollToContact}>
            Contactar ahora
          </Button>
        </div>
      </section>

    </div>
  );
};