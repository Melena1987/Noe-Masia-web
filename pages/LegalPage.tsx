import React from 'react';
import { SEO } from '../components/SEO';

export const LegalPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <SEO 
        title="Aviso Legal y Privacidad"
        description="Términos y condiciones, política de privacidad y cookies de Noe Masiá."
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-black uppercase text-brand-dark mb-12 border-l-8 border-brand-green pl-6">
          Legal & Privacidad
        </h1>

        <div className="space-y-16 text-gray-600 font-light leading-relaxed">
          
          {/* AVISO LEGAL */}
          <section id="aviso-legal">
            <h2 className="text-xl font-bold uppercase text-brand-dark mb-4 tracking-widest">1. Aviso Legal</h2>
            <p className="mb-4">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se exponen los siguientes datos identificativos del titular del sitio web:
            </p>
            <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-4 rounded-sm border border-gray-100 text-sm">
              <li><strong>Titular:</strong> Noelia Masiá</li>
              <li><strong>Actividad:</strong> Dietista Deportiva y Jugadora Profesional de Baloncesto</li>
              <li><strong>Contacto Nutrición:</strong> nutricion@noemasia.com</li>
              <li><strong>Contacto Campus:</strong> campus@noemasia.com</li>
            </ul>
          </section>

          {/* POLÍTICA DE PRIVACIDAD */}
          <section id="privacidad">
            <h2 className="text-xl font-bold uppercase text-brand-dark mb-4 tracking-widest">2. Política de Privacidad</h2>
            <p className="mb-4">
              En <strong>Noe Masiá</strong> nos comprometemos a proteger tu privacidad y a cumplir con la normativa vigente en protección de datos (RGPD y LOPDGDD).
            </p>
            
            <h3 className="font-bold text-brand-dark mt-6 mb-2 text-sm uppercase">Recogida de datos</h3>
            <p className="mb-4">
              Los datos personales que nos facilitas a través de los formularios de la web (contacto, nutrición o inscripción al campus) se utilizan únicamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
              <li>Gestionar tu solicitud de información o servicio.</li>
              <li>Formalizar la inscripción en el Campus Noe Masiá.</li>
              <li>Mantenerte informado sobre novedades relacionadas con nuestros servicios (siempre que lo hayas autorizado).</li>
            </ul>

            <h3 className="font-bold text-brand-dark mt-6 mb-2 text-sm uppercase">Tus derechos</h3>
            <p className="mb-4">
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y limitación enviando un correo electrónico a cualquiera de las direcciones de contacto indicadas anteriormente.
            </p>
          </section>

          {/* POLÍTICA DE COOKIES */}
          <section id="cookies">
            <h2 className="text-xl font-bold uppercase text-brand-dark mb-4 tracking-widest">3. Política de Cookies</h2>
            <p className="mb-4">
              Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de usuario y obtener estadísticas de uso.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cookies Técnicas:</strong> Necesarias para el funcionamiento de la web (ej. recordar tu sesión o tus preferencias de privacidad).</li>
              <li><strong>Cookies Analíticas:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización de la web para mejorar la oferta de servicios.</li>
            </ul>
            <p className="mt-4 text-sm bg-gray-100 p-4 rounded-sm">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};