import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Button } from '../components/Button';
import { Lock, LogOut, LayoutGrid, Calendar, Mail, Phone, MapPin, User as UserIcon, Activity, ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '../components/SEO';

// Data types based on our forms
interface NutritionRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
  createdAt: any;
}

interface CampusRegistration {
  id: string;
  playerName: string;
  location: string;
  category: string;
  tutorName: string;
  tutorDni: string;
  email: string;
  phone: string; // Sometimes not in form directly but good to have type
  age: string;
  club: string;
  isClubMember: string;
  createdAt: any;
  [key: string]: any; // For other fields like allergies etc
}

export const AdminPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dashboard Data State
  const [activeTab, setActiveTab] = useState<'campus' | 'nutrition'>('campus');
  const [nutritionRequests, setNutritionRequests] = useState<NutritionRequest[]>([]);
  const [campusRegistrations, setCampusRegistrations] = useState<CampusRegistration[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  
  // Expanded card state
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchData();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      // Fetch Nutrition
      const nutritionQuery = query(collection(db, "nutrition_requests"), orderBy("createdAt", "desc"));
      const nutritionSnap = await getDocs(nutritionQuery);
      const nutritionData = nutritionSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as NutritionRequest));
      setNutritionRequests(nutritionData);

      // Fetch Campus
      const campusQuery = query(collection(db, "campus_registrations"), orderBy("createdAt", "desc"));
      const campusSnap = await getDocs(campusQuery);
      const campusData = campusSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as CampusRegistration));
      setCampusRegistrations(campusData);

    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setDataLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError('Credenciales incorrectas o error de conexión.');
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Sin fecha';
    // Handle Firebase Timestamp
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute:'2-digit' });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-brand-green">Cargando...</div>;

  // LOGIN VIEW
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <SEO title="Admin Login" description="Acceso restringido" />
        <div className="bg-white p-8 rounded-sm shadow-xl w-full max-w-md border-t-4 border-brand-green">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-brand-green/10 p-4 rounded-full mb-4">
              <Lock className="text-brand-green w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black uppercase text-brand-dark">Panel de Control</h1>
            <p className="text-gray-400 text-sm mt-2">Acceso exclusivo Noe Masiá</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-gray-50"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-3 rounded-sm focus:border-brand-green outline-none bg-gray-50"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

            <Button variant="primary" type="submit" className="w-full justify-center">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // DASHBOARD VIEW
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Admin Dashboard" description="Panel de control" />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-black uppercase text-brand-dark flex items-center gap-2">
            <LayoutGrid size={20} className="text-brand-green"/> Panel Admin
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 hidden md:inline">{user.email}</span>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('campus')}
            className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'campus' 
                ? 'border-brand-green text-brand-green' 
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Campus ({campusRegistrations.length})
          </button>
          <button 
            onClick={() => setActiveTab('nutrition')}
            className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'nutrition' 
                ? 'border-brand-green text-brand-green' 
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Nutrición ({nutritionRequests.length})
          </button>
        </div>

        {dataLoading ? (
           <div className="text-center py-12 text-gray-400">Actualizando datos...</div>
        ) : (
          <div className="grid gap-4">
            
            {/* CAMPUS LIST */}
            {activeTab === 'campus' && (
              campusRegistrations.length === 0 ? <p className="text-gray-400 italic">No hay registros aún.</p> :
              campusRegistrations.map((reg) => (
                <div key={reg.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div 
                    onClick={() => toggleExpand(reg.id)}
                    className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${reg.location === 'Estepona' ? 'bg-brand-green' : 'bg-brand-lime text-brand-dark'}`}>
                         {reg.location.charAt(0)}
                       </div>
                       <div>
                         <h3 className="font-bold text-lg text-brand-dark uppercase">{reg.playerName}</h3>
                         <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-1">
                           <span className="flex items-center gap-1"><MapPin size={12}/> {reg.location}</span>
                           <span className="bg-gray-100 px-2 py-0.5 rounded-sm">{reg.category}</span>
                           <span>{reg.age} años</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-4 md:min-w-[200px]">
                      <span className="text-xs text-gray-400 font-mono">{formatDate(reg.createdAt)}</span>
                      {expandedId === reg.id ? <ChevronUp size={20} className="text-gray-400"/> : <ChevronDown size={20} className="text-gray-400"/>}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedId === reg.id && (
                    <div className="bg-gray-50 border-t border-gray-100 p-6 grid md:grid-cols-2 gap-8 text-sm text-gray-600 animate-fade-in">
                       <div>
                         <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider">Información Personal</h4>
                         <ul className="space-y-2">
                           <li><span className="font-semibold">Nacimiento:</span> {reg.birthDate}</li>
                           <li><span className="font-semibold">Club:</span> {reg.club}</li>
                           <li><span className="font-semibold">Socio Club Sede:</span> {reg.isClubMember}</li>
                           <li><span className="font-semibold">Talla:</span> {reg.shirtSize}</li>
                           <li><span className="font-semibold">Años jugando:</span> {reg.yearsPlaying}</li>
                         </ul>
                       </div>
                       <div>
                         <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider">Contacto & Salud</h4>
                         <ul className="space-y-2">
                           <li><span className="font-semibold">Tutor:</span> {reg.tutorName} (DNI: {reg.tutorDni})</li>
                           <li className="flex items-center gap-2"><Mail size={14}/> {reg.email}</li>
                           <li><span className="font-semibold">Dirección:</span> {reg.address}</li>
                           <li className="text-red-500"><span className="font-semibold text-gray-600">Alergias:</span> {reg.allergies}</li>
                           <li className="text-red-500"><span className="font-semibold text-gray-600">Intolerancias:</span> {reg.intolerances}</li>
                         </ul>
                       </div>
                       <div className="md:col-span-2 bg-white p-4 border border-gray-200 rounded-sm">
                         <span className="block font-bold text-xs uppercase text-gray-400 mb-1">Notas Adicionales</span>
                         <p>{reg.otherInfo || "Sin notas adicionales."}</p>
                         <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <span className="font-bold">Pago preferido: {reg.paymentMethod}</span>
                            <a href={`mailto:${reg.email}`} className="text-brand-green hover:underline font-bold text-xs uppercase">Enviar Email</a>
                         </div>
                       </div>
                    </div>
                  )}
                </div>
              ))
            )}

            {/* NUTRITION LIST */}
            {activeTab === 'nutrition' && (
               nutritionRequests.length === 0 ? <p className="text-gray-400 italic">No hay solicitudes aún.</p> :
               nutritionRequests.map((req) => (
                <div key={req.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div 
                    onClick={() => toggleExpand(req.id)}
                    className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 shrink-0">
                         <Activity size={20} />
                       </div>
                       <div>
                         <h3 className="font-bold text-lg text-brand-dark uppercase">{req.name}</h3>
                         <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-1">
                           <span className="text-brand-green font-bold bg-brand-green/10 px-2 py-0.5 rounded-sm">{req.plan}</span>
                           <span className="flex items-center gap-1"><Mail size={12}/> {req.email}</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-4 md:min-w-[200px]">
                      <span className="text-xs text-gray-400 font-mono">{formatDate(req.createdAt)}</span>
                      {expandedId === req.id ? <ChevronUp size={20} className="text-gray-400"/> : <ChevronDown size={20} className="text-gray-400"/>}
                    </div>
                  </div>

                   {/* Expanded Content */}
                   {expandedId === req.id && (
                    <div className="bg-gray-50 border-t border-gray-100 p-6 text-sm text-gray-600 animate-fade-in">
                       <div className="grid md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h4 className="font-bold text-brand-dark uppercase mb-2 text-xs">Datos de Contacto</h4>
                            <p className="flex items-center gap-2 mb-1"><UserIcon size={14}/> {req.name}</p>
                            <p className="flex items-center gap-2 mb-1"><Mail size={14}/> <a href={`mailto:${req.email}`} className="hover:text-brand-green">{req.email}</a></p>
                            <p className="flex items-center gap-2"><Phone size={14}/> {req.phone}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-brand-dark uppercase mb-2 text-xs">Mensaje</h4>
                            <p className="bg-white p-3 border border-gray-200 rounded-sm italic">"{req.message}"</p>
                          </div>
                       </div>
                    </div>
                  )}
                </div>
               ))
            )}
            
          </div>
        )}
      </main>
    </div>
  );
};