import React, { useState } from 'react';
import { Button } from '../Button';
import { CheckCircle, Tag, AlertCircle, User, Users, HeartPulse, MapPin } from 'lucide-react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface CampusCTAProps {
  onContactClick: () => void;
}

export const CampusCTA: React.FC<CampusCTAProps> = ({ onContactClick }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    location: '',
    isClubMember: 'No',
    playerName: '',
    birthDate: '',
    shirtSize: '',
    club: '',
    category: '',
    yearsPlaying: '',
    tutorName: '',
    tutorDni: '',
    email: '',
    address: '',
    medicalInfo: '', // Merged field
    otherInfo: '',
    paymentMethod: 'Transferencia'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateAge = (birthDateString: string) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const calculatedAge = calculateAge(formData.birthDate);

    try {
      await addDoc(collection(db, "campus_registrations"), {
        ...formData,
        // Mapping new fields to match existing DB structure for Admin compatibility
        age: calculatedAge, 
        allergies: formData.medicalInfo, // Storing merged health info here
        intolerances: '', // Leaving empty as it's merged
        createdAt: serverTimestamp(),
        status: 'pending',
        viewed: false
      });
      
      console.log("Registro de campus guardado correctamente en Firebase.");
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        location: '',
        isClubMember: 'No',
        playerName: '',
        birthDate: '',
        shirtSize: '',
        club: '',
        category: '',
        yearsPlaying: '',
        tutorName: '',
        tutorDni: '',
        email: '',
        address: '',
        medicalInfo: '',
        otherInfo: '',
        paymentMethod: 'Transferencia'
      });

    } catch (error: any) {
      console.error("Error saving to database:", error);
      setSubmitStatus('error');
      setErrorMessage("No se pudo completar el registro. Por favor verifica tu conexión a internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-24 bg-white text-brand-dark px-6">
        <div className="max-w-2xl mx-auto text-center bg-gray-50 p-12 rounded-sm border-t-4 border-brand-lime shadow-xl animate-fade-in-up">
           <div className="flex justify-center mb-6">
             <CheckCircle size={64} className="text-brand-lime" />
           </div>
           <h2 className="text-3xl font-black uppercase mb-4 text-brand-dark">¡Pre-reserva Realizada!</h2>
           <p className="text-gray-600 text-lg font-light mb-8">
             Hemos registrado tus datos correctamente. En breve recibirás un correo electrónico con los pasos para formalizar el pago y asegurar tu plaza.
           </p>
           <Button variant="lime" onClick={() => setSubmitStatus('idle')}>
             Realizar otra inscripción
           </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white text-brand-dark px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black uppercase mb-6 text-brand-dark">Únete al Campus</h3>
          <p className="max-w-2xl mx-auto text-gray-500 font-light mb-4">
            Elige tu sede y reserva tu plaza. Las plazas son limitadas para asegurar la calidad de los entrenamientos.
          </p>
          <p className="text-brand-green font-bold uppercase tracking-widest text-xs border border-brand-green/30 inline-block px-4 py-2 rounded-full">
            Categorías: Baby a Junior (Nacidos 2008 - 2019)
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Estepona Pricing */}
          <div className="bg-brand-dark text-white p-8 rounded-sm relative overflow-hidden shadow-xl border-t-4 border-brand-green group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-brand-green text-xs font-bold px-3 py-1 uppercase text-white">Málaga</div>
            <h4 className="text-2xl font-black uppercase mb-2">Estepona</h4>
            <p className="text-sm text-gray-400 mb-6">Pabellón JA Pineda (13-18 Julio)</p>
            
            <div className="mb-6">
              <span className="text-5xl font-black">250€</span>
              <span className="text-sm text-gray-400 block mt-1">Precio General</span>
            </div>

            <div className="bg-white/10 p-4 rounded-sm mb-6 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Tag size={16} className="text-brand-lime"/>
                <span className="font-bold text-brand-lime text-sm uppercase">Jugadores CAB Estepona</span>
              </div>
              <p className="text-2xl font-bold">190€ <span className="text-xs font-normal text-gray-400 line-through">250€</span></p>
              <p className="text-xs text-gray-400 mt-1">*30% Descuento (Previa verificación)</p>
            </div>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green"/> 2 Camisetas de entrenamiento</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green"/> Agua, Fruta y Snacks diarios</li>
            </ul>
          </div>

          {/* Moncofa Pricing */}
          <div className="bg-brand-dark text-white p-8 rounded-sm relative overflow-hidden shadow-xl border-t-4 border-brand-lime group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-brand-lime text-xs font-bold px-3 py-1 uppercase text-brand-dark">Castellón</div>
            <h4 className="text-2xl font-black uppercase mb-2">Moncofa</h4>
            <p className="text-sm text-gray-400 mb-6">Instalaciones Municipales (3-8 Agosto)</p>
            
            <div className="mb-6">
              <span className="text-5xl font-black">250€</span>
              <span className="text-sm text-gray-400 block mt-1">Precio General</span>
            </div>

            <div className="bg-white/10 p-4 rounded-sm mb-6 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Tag size={16} className="text-brand-lime"/>
                <span className="font-bold text-brand-lime text-sm uppercase">Jugadores Moncofa</span>
              </div>
              <p className="text-2xl font-bold">150€ <span className="text-xs font-normal text-gray-400 line-through">250€</span></p>
              <p className="text-xs text-gray-400 mt-1">*40% Descuento (Previa verificación)</p>
            </div>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-lime"/> 2 Camisetas de entrenamiento</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-lime"/> Agua, Fruta y Snacks diarios</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-2xl max-w-5xl mx-auto rounded-sm overflow-hidden">
          <div className="bg-brand-dark p-6 text-center">
            <h4 className="text-2xl font-black uppercase text-white">Formulario de Inscripción</h4>
            <p className="text-gray-400 text-xs mt-1 font-light tracking-wide">Rellena los campos para formalizar tu solicitud</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            
            {/* SECTION 1: SEDE */}
            <div className="bg-brand-green/5 p-6 md:p-8 rounded-sm border border-brand-green/20 relative">
              <div className="absolute -top-3 left-6 bg-brand-green text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                 <MapPin size={12} /> Sede y Vinculación
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-2">
                <div className="space-y-1">
                   <label className="text-xs font-bold uppercase text-brand-dark">Selecciona Sede</label>
                   <select required name="location" value={formData.location} onChange={handleChange} className="w-full border-2 border-brand-green p-3 rounded-sm focus:outline-none bg-white text-brand-dark font-bold cursor-pointer hover:bg-gray-50 transition-colors">
                      <option value="">-- Elige una opción --</option>
                      <option value="Estepona">ESTEPONA (13-18 Julio)</option>
                      <option value="Moncofa">MONCOFA (3-8 Agosto)</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-xs font-bold uppercase text-brand-dark">¿Perteneces al club de la sede?</label>
                   <select required name="isClubMember" value={formData.isClubMember} onChange={handleChange} className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark cursor-pointer">
                      <option value="No">No</option>
                      <option value="Si - CAB Estepona">Sí, soy del CAB Estepona</option>
                      <option value="Si - Moncofa">Sí, soy del Club Moncofa</option>
                   </select>
                   <p className="text-[10px] text-gray-400 pt-1">*Se aplicará el descuento tras verificación.</p>
                </div>
              </div>
            </div>

            {/* SECTION 2: JUGADOR */}
            <div className="relative border-t border-gray-100 pt-8">
               <div className="absolute -top-3 left-6 bg-white text-gray-500 border border-gray-200 text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                 <User size={12} /> Datos del Jugador/a
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Nombre Completo</label>
                  <input required name="playerName" autoComplete="name" value={formData.playerName} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" placeholder="Nombre y Apellidos" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Fecha Nacimiento</label>
                    <input required name="birthDate" autoComplete="bday" value={formData.birthDate} onChange={handleChange} type="date" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                  </div>
                  <div className="space-y-1">
                     <label className="text-xs font-bold uppercase text-gray-500">Talla Camiseta</label>
                     <select name="shirtSize" autoComplete="off" value={formData.shirtSize} onChange={handleChange} className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark">
                        <option value="">Selecciona</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                     </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Club Actual</label>
                  <input required name="club" autoComplete="organization" value={formData.club} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Categoría</label>
                    <input required name="category" autoComplete="off" value={formData.category} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" placeholder="Ej. Infantil" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Años jugando</label>
                    <input required name="yearsPlaying" autoComplete="off" value={formData.yearsPlaying} onChange={handleChange} type="number" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: TUTOR */}
            <div className="relative border-t border-gray-100 pt-8">
               <div className="absolute -top-3 left-6 bg-white text-gray-500 border border-gray-200 text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                 <Users size={12} /> Contacto y Tutor/a
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Nombre Tutor/a Legal</label>
                  <input required name="tutorName" autoComplete="name" value={formData.tutorName} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">DNI Tutor/a</label>
                  <input required name="tutorDni" autoComplete="off" value={formData.tutorDni} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Correo Electrónico</label>
                  <input required name="email" autoComplete="email" value={formData.email} onChange={handleChange} type="email" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Dirección Completa</label>
                  <input required name="address" autoComplete="street-address" value={formData.address} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark" />
                </div>
              </div>
            </div>

            {/* SECTION 4: SALUD & EXTRA */}
            <div className="relative border-t border-gray-100 pt-8">
               <div className="absolute -top-3 left-6 bg-white text-gray-500 border border-gray-200 text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                 <HeartPulse size={12} /> Salud y Observaciones
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Alergias / Intolerancias / Problemas Médicos</label>
                  <textarea name="medicalInfo" autoComplete="off" value={formData.medicalInfo} onChange={handleChange} rows={3} className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark resize-none" placeholder="Indica 'Ninguna' si no procede, o detalla cualquier condición relevante."></textarea>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Otras cosas a destacar (Opcional)</label>
                  <textarea name="otherInfo" autoComplete="off" value={formData.otherInfo} onChange={handleChange} rows={3} className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white text-brand-dark resize-none" placeholder="Cualquier otra información que debamos saber."></textarea>
                </div>
              </div>
            </div>
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-600 p-4 rounded-sm text-sm flex items-start gap-2">
                 <AlertCircle size={16} className="mt-0.5 shrink-0"/>
                 <p>{errorMessage}</p>
              </div>
            )}

            <Button disabled={isSubmitting} variant="lime" type="submit" className="w-full py-5 text-base md:text-lg font-bold shadow-lg disabled:opacity-50">
              {isSubmitting ? 'Procesando...' : 'FINALIZAR INSCRIPCIÓN'}
            </Button>
            <p className="text-center text-xs text-gray-400">
              Al hacer clic en finalizar, tus datos serán registrados de forma segura.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};