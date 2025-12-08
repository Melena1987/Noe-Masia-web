import React, { useState } from 'react';
import { Button } from '../Button';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const NutritionCTA: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Plan Atleta',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await addDoc(collection(db, "nutrition_requests"), {
        ...formState,
        createdAt: serverTimestamp(),
        status: 'new', // Status for admin panel
        viewed: false
      });
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        plan: 'Plan Atleta',
        message: ''
      });
      console.log("Solicitud de nutrición guardada en base de datos.");
    } catch (error: any) {
      console.error("Error saving to database:", error);
      setSubmitStatus('error');
      setErrorMessage("Hubo un error al guardar tu solicitud. Por favor, revisa tu conexión o inténtalo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (submitStatus === 'success') {
    return (
      <section id="nutrition-contact" className="py-24 bg-white text-brand-dark px-4 md:px-6 relative overflow-hidden">
         <div className="max-w-2xl mx-auto text-center bg-gray-50 p-12 rounded-sm border border-brand-green/20 shadow-xl">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-brand-green" />
            </div>
            <h2 className="text-3xl font-black uppercase mb-4 text-brand-dark">¡Solicitud Recibida!</h2>
            <p className="text-gray-600 text-lg font-light mb-8">
              Gracias por tu interés. He recibido tus datos correctamente y me pondré en contacto contigo en las próximas 24/48h para valorar tu caso.
            </p>
            <Button variant="primary" onClick={() => setSubmitStatus('idle')}>
              Enviar otra solicitud
            </Button>
         </div>
      </section>
    );
  }

  return (
    <section id="nutrition-contact" className="py-24 bg-white text-brand-dark px-4 md:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start relative z-10">
        
        {/* Text Column */}
        <div className="md:sticky md:top-24 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-6 leading-none text-brand-dark">
            ¿Empezamos?
          </h2>
          <div className="h-1 w-20 bg-brand-green mb-8 mx-auto md:mx-0"></div>
          <p className="text-gray-600 text-lg md:text-xl font-light mb-8 leading-relaxed">
            Si estás buscando mejorar tu rendimiento, recuperar tu salud o simplemente aprender a comer mejor, este es el momento.
          </p>
          <p className="text-gray-500 font-light mb-8">
             Rellena el formulario y me pondré en contacto contigo lo antes posible para valorar tu caso y explicarte cómo podemos trabajar.
          </p>
          
          <div className="hidden md:block text-sm text-gray-500 font-light mt-12 border-t border-gray-200 pt-8">
            <p className="mb-2">También puedes escribirme directamente a:</p>
            <a href="mailto:nutricion@noemasia.com" className="text-brand-green hover:underline text-lg font-bold">nutricion@noemasia.com</a>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-gray-50 p-6 md:p-10 rounded-sm border border-gray-200 shadow-2xl w-full max-w-md mx-auto md:max-w-none">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-green font-bold">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  autoComplete="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 text-brand-dark px-4 py-3 focus:border-brand-green focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-brand-green font-bold">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  autoComplete="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 text-brand-dark px-4 py-3 focus:border-brand-green focus:outline-none transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-green font-bold">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                autoComplete="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 text-brand-dark px-4 py-3 focus:border-brand-green focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="plan" className="text-xs uppercase tracking-widest text-brand-green font-bold">Interés</label>
              <div className="relative">
                <select 
                  id="plan" 
                  name="plan"
                  value={formState.plan}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 text-brand-dark px-4 py-3 focus:border-brand-green focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="Plan Atleta">Plan Atleta Profesional</option>
                  <option value="Plan Salud">Plan Salud Integral</option>
                  <option value="Otro">Otro / Consulta General</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-green font-bold">Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 text-brand-dark px-4 py-3 focus:border-brand-green focus:outline-none transition-colors resize-none"
                placeholder="Cuéntame brevemente tu caso o tus objetivos..."
              ></textarea>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-600 p-4 rounded-sm text-sm flex items-start gap-2">
                 <AlertCircle size={16} className="mt-0.5 shrink-0"/>
                 <p>{errorMessage}</p>
              </div>
            )}

            <Button disabled={isSubmitting} type="submit" variant="primary" className="w-full py-4 text-sm font-bold tracking-widest mt-4 disabled:opacity-50">
              {isSubmitting ? 'Guardando...' : 'Enviar Solicitud'}
            </Button>
            
            <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed opacity-80">
              Al enviar este formulario aceptas ser contactado para recibir información sobre los servicios de Noe Masiá.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};