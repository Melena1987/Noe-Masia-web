import React, { useState, useEffect } from 'react';
import { Newspaper, X, Calendar, ArrowRight } from 'lucide-react';

// Data structure for news items
interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: React.ReactNode;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Presentación Oficial del Campus Noe Masiá",
    date: "Noviembre 2025",
    category: "Lanzamiento",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764609571914_1764315848894_WhatsApp_Image_2025-10-04_at_12.59.55.jpeg?alt=media&token=f4a883b9-f971-4223-82bc-91d6108b0c52",
    excerpt: "Lanzamos la primera edición de un campus diferente, centrado en el rendimiento integral del jugador.",
    content: (
      <>
        <p className="mb-4 text-lg font-medium">Es un orgullo para mí presentar la <strong>primera edición del Campus Noe Masiá</strong>. Un proyecto que nace de la ilusión por transmitir todo lo aprendido durante mi carrera profesional.</p>
        <p className="mb-4">El objetivo principal es ofrecer a los jugadores y jugadoras una visión 360º de lo que significa ser deportista. No solo trabajaremos la técnica y la táctica en pista, sino que daremos mucha importancia al <strong>entrenamiento invisible</strong>: nutrición, descanso y mentalidad.</p>
        <p className="mb-4">Esta primera edición contará con dos sedes: Estepona y Moncofa. Dos lugares muy especiales para mí donde espero veros a todos disfrutando del baloncesto.</p>
        <p className="italic border-l-4 border-brand-green pl-4 my-6 text-gray-500">
          "Queremos que los chicos y chicas se lleven herramientas que les sirvan para su futuro, tanto dentro como fuera de la cancha."
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "Sede Moncofa: Baloncesto junto al mar",
    date: "Diciembre 2025",
    category: "Sedes",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764315848894_ESTEPONA_-38.jpg?alt=media&token=b7bc2b58-9295-45ef-b632-cb62b8ba6fac", 
    excerpt: "Confirmamos las fechas para nuestra sede en Castellón. Del 3 al 8 de Agosto, te esperamos en Moncofa.",
    content: (
      <>
        <p className="mb-4">¡Ya es oficial! Estaremos en <strong>Moncofa del 3 al 8 de Agosto</strong>. Una oportunidad única para combinar baloncesto de alto nivel con un entorno inmejorable en la costa de Castellón.</p>
        <p className="mb-4">Gracias a la colaboración del Club de Baloncesto Moncofa y el Ayuntamiento, hemos preparado una semana intensa de entrenamientos en las instalaciones municipales.</p>
        <h4 className="font-bold text-brand-dark uppercase mb-2 mt-6">Descuentos Especiales</h4>
        <p>Los jugadores y jugadoras locales contarán con un descuento exclusivo del 40% en su inscripción como agradecimiento a la acogida del municipio.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Entrevista: La importancia de la nutrición",
    date: "Mayo 2025",
    category: "Prensa",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1765179478682_pasta_seca.png?alt=media&token=10938296-7a39-4665-be01-e3b88162b21e",
    excerpt: "Hablamos sobre cómo los hábitos alimenticios influyen en el desarrollo de los jóvenes jugadores.",
    content: (
      <>
        <p className="mb-4">En esta breve entrevista quiero destacar un pilar fundamental del campus: <strong>la educación nutricional</strong>.</p>
        <p className="mb-4">Muchas veces, los jugadores jóvenes no rinden al máximo no por falta de talento, sino por falta de energía. Enseñarles qué comer antes y después de un partido es tan importante como enseñarles a tirar.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>¿Qué comer antes de entrenar?</li>
            <li>Hidratación durante el juego.</li>
            <li>Recuperación post-partido.</li>
        </ul>
        <p>Durante el campus, tendremos talleres prácticos donde aprenderán a gestionar su propia alimentación de forma sencilla y efectiva.</p>
      </>
    )
  }
];

export const CampusNews: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNews]);

  return (
    <section className="py-24 px-6 bg-brand-dark text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Newspaper className="text-brand-lime" size={24} />
              <span className="text-brand-lime font-bold uppercase tracking-widest text-sm">Actualidad</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none">
              Noticias &<br />Novedades
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article 
              key={item.id} 
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedNews(item)}
            >
              <div className="aspect-[16/9] bg-white/10 rounded-sm overflow-hidden mb-6 relative border border-white/5">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                 />
                 <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 uppercase shadow-lg">
                   {item.category}
                 </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                <Calendar size={12} />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold uppercase text-white group-hover:text-brand-lime transition-colors leading-tight mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light text-sm line-clamp-3 mb-4 flex-grow">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                Leer artículo <ArrowRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedNews && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedNews(null)}></div>
          
          <div className="relative bg-white text-brand-dark w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-brand-dark hover:text-brand-green bg-white/50 rounded-full p-2 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="h-64 md:h-80 w-full relative">
               <img 
                 src={selectedNews.image} 
                 alt={selectedNews.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                 <span className="bg-brand-lime text-brand-dark text-xs font-bold px-3 py-1 uppercase mb-3 inline-block">
                   {selectedNews.category}
                 </span>
                 <h2 className="text-2xl md:text-3xl font-black uppercase text-white leading-tight">
                   {selectedNews.title}
                 </h2>
                 <p className="text-white/80 text-sm mt-2 flex items-center gap-2">
                   <Calendar size={14} /> {selectedNews.date}
                 </p>
               </div>
            </div>

            <div className="p-8 md:p-10 prose prose-lg text-gray-600 font-light leading-relaxed max-w-none">
              {selectedNews.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};