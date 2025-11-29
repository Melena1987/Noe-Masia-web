import React, { useState } from 'react';
import { Button } from '../Button';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface CampusCTAProps {
  onContactClick: () => void;
}

export const CampusCTA: React.FC<CampusCTAProps> = ({ onContactClick }) => {
  const [formData, setFormData] = useState({
    playerName: '',
    tutorName: '',
    tutorDni: '',
    email: '',
    address: '',
    age: '',
    birthDate: '',
    category: '',
    club: '',
    yearsPlaying: '',
    allergies: '',
    intolerances: '',
    otherInfo: '',
    shirtSize: '',
    paymentMethod: 'Transferencia'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `INSCRIPCIÓN CAMPUS: ${formData.playerName}`;
    const body = `
DATOS DE INSCRIPCIÓN:
---------------------
1. Jugador/a: ${formData.playerName}
2. Tutor/a: ${formData.tutorName}
3. DNI Tutor/a: ${formData.tutorDni}
4. Email: ${formData.email}
5. Dirección: ${formData.address}
6. Edad: ${formData.age}
7. Fecha Nacimiento: ${formData.birthDate}
8. Categoría: ${formData.category}
9. Club: ${formData.club}
10. Años jugando: ${formData.yearsPlaying}
11. Alergias: ${formData.allergies}
12. Intolerancias: ${formData.intolerances}
13. Info extra: ${formData.otherInfo}
14. Talla Camiseta: ${formData.shirtSize}
15. Método Pago Preferido: ${formData.paymentMethod}
    `;
    window.location.href = `mailto:info@noemasia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white text-brand-dark px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black uppercase mb-6 text-brand-dark">Proceso de Inscripción</h3>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12 text-left md:text-center">
            <div className="flex-1 relative">
              <span className="text-6xl font-black text-brand-light absolute -top-4 -left-4 md:left-1/2 md:-translate-x-1/2 z-0">1</span>
              <div className="relative z-10">
                <p className="font-bold uppercase text-brand-green">Rellena</p>
                <p className="text-sm text-gray-600">Completa el formulario con todos los datos del jugador/a.</p>
              </div>
            </div>
            <ArrowRight className="hidden md:block text-gray-300" />
            <div className="flex-1 relative">
              <span className="text-6xl font-black text-brand-light absolute -top-4 -left-4 md:left-1/2 md:-translate-x-1/2 z-0">2</span>
              <div className="relative z-10">
                <p className="font-bold uppercase text-brand-green">Confirma</p>
                <p className="text-sm text-gray-600">Recibirás un email confirmando la plaza y el enlace de pago.</p>
              </div>
            </div>
            <ArrowRight className="hidden md:block text-gray-300" />
            <div className="flex-1 relative">
              <span className="text-6xl font-black text-brand-light absolute -top-4 -left-4 md:left-1/2 md:-translate-x-1/2 z-0">3</span>
              <div className="relative z-10">
                <p className="font-bold uppercase text-brand-green">Descuentos</p>
                <p className="text-sm text-gray-600">30% Descuento directo para jugadores/as del CAB Estepona.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-200 shadow-2xl">
          <h4 className="text-2xl font-bold uppercase mb-8 text-center border-b border-gray-200 pb-4">Formulario de Inscripción</h4>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Nombre Completo Jugador/a</label>
                <input required name="playerName" value={formData.playerName} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" placeholder="Nombre y Apellidos" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Fecha Nacimiento</label>
                <input required name="birthDate" value={formData.birthDate} onChange={handleChange} type="date" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>
              
              <div className="space-y-1">
                 <label className="text-xs font-bold uppercase text-gray-500">Edad</label>
                 <input required name="age" value={formData.age} onChange={handleChange} type="number" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" placeholder="Años" />
              </div>
              <div className="space-y-1">
                 <label className="text-xs font-bold uppercase text-gray-500">Talla Camiseta</label>
                 <select name="shirtSize" value={formData.shirtSize} onChange={handleChange} className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-white">
                    <option value="">Selecciona talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                 </select>
              </div>

              {/* Tutor Info */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Nombre Tutor/a</label>
                <input required name="tutorName" value={formData.tutorName} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">DNI Tutor/a</label>
                <input required name="tutorDni" value={formData.tutorDni} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>

              {/* Contact Info */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Correo Electrónico</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Dirección</label>
                <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>

              {/* Sport Info */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Club Actual</label>
                <input required name="club" value={formData.club} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Categoría</label>
                <input required name="category" value={formData.category} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase text-gray-500">Años jugando a baloncesto</label>
                <input required name="yearsPlaying" value={formData.yearsPlaying} onChange={handleChange} type="number" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" />
              </div>

              {/* Health Info */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Alergias</label>
                <input name="allergies" value={formData.allergies} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" placeholder="Ninguna o especificar" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-500">Intolerancias</label>
                <input name="intolerances" value={formData.intolerances} onChange={handleChange} type="text" className="w-full border p-3 rounded-sm focus:border-brand-green outline-none" placeholder="Ninguna o especificar" />
              </div>
              
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase text-gray-500">Otras cosas importantes a destacar</label>
                <textarea name="otherInfo" value={formData.otherInfo} onChange={handleChange} rows={3} className="w-full border p-3 rounded-sm focus:border-brand-green outline-none"></textarea>
              </div>
            </div>

            <Button variant="lime" type="submit" className="w-full py-4 text-base font-bold shadow-lg mt-6">
              Enviar Solicitud de Inscripción
            </Button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Al enviar este formulario se abrirá tu gestor de correo predeterminado con los datos rellenos para finalizar la solicitud.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};