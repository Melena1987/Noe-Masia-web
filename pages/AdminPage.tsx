import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { collection, query, orderBy, getDocs, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { Button } from '../components/Button';
import { Lock, LogOut, LayoutGrid, Mail, Phone, MapPin, User as UserIcon, Activity, ChevronDown, RefreshCcw, ArrowLeft, Download, Trash2, ArchiveRestore, AlertTriangle } from 'lucide-react';
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
  status: string;
  deletedAt?: any;
}

interface CampusRegistration {
  id: string;
  playerName: string;
  location: string;
  category: string;
  tutorName: string;
  tutorDni: string;
  email: string;
  phone: string; 
  age: string;
  club: string;
  isClubMember: string;
  createdAt: any;
  birthDate: string;
  yearsPlaying: string;
  shirtSize: string;
  address: string;
  allergies: string;
  intolerances: string;
  otherInfo: string;
  paymentMethod: string;
  status: string;
  deletedAt?: any;
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
  const [viewTrash, setViewTrash] = useState(false); // Toggle for Trash view
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
      console.error(err);
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

  // --- ACTIONS: EXPORT & TRASH ---

  const handleExportCSV = () => {
    // Determine which data to export based on active tab and trash view
    const isCampus = activeTab === 'campus';
    const sourceData = isCampus ? campusRegistrations : nutritionRequests;
    
    // Filter data same as the view
    const filteredData = sourceData.filter(item => 
      viewTrash ? item.status === 'trash' : item.status !== 'trash'
    );

    if (filteredData.length === 0) {
      alert("No hay datos para exportar en esta vista.");
      return;
    }

    // Convert to CSV
    const headers = Object.keys(filteredData[0]).join(",");
    const rows = filteredData.map(row => 
      Object.values(row).map(value => {
        // Handle dates and objects
        if (typeof value === 'object' && value !== null) {
           // Basic check for Firebase timestamp-like objects
           if ('seconds' in value) return `"${new Date((value as any).seconds * 1000).toLocaleDateString()}"`;
           return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
        }
        return `"${String(value).replace(/"/g, '""')}"`; 
      }).join(",")
    );

    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const fileName = `${activeTab}_${viewTrash ? 'papelera' : 'activos'}_${new Date().toISOString().slice(0,10)}.csv`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMoveToTrash = async (e: React.MouseEvent, collectionName: string, id: string) => {
    e.stopPropagation();
    if (!window.confirm("¿Mover este registro a la papelera?")) return;

    try {
      await updateDoc(doc(db, collectionName, id), {
        status: 'trash',
        deletedAt: serverTimestamp()
      });
      fetchData(); // Refresh UI
    } catch (error) {
      console.error("Error moving to trash", error);
      alert("Error al mover a la papelera");
    }
  };

  const handleRestore = async (e: React.MouseEvent, collectionName: string, id: string) => {
    e.stopPropagation();
    try {
      await updateDoc(doc(db, collectionName, id), {
        status: 'pending', // or 'new', default status
        deletedAt: null
      });
      fetchData();
    } catch (error) {
      console.error("Error restoring", error);
    }
  };

  const handleDeletePermanent = async (e: React.MouseEvent, collectionName: string, id: string) => {
    e.stopPropagation();
    if (!window.confirm("PELIGRO: Esto eliminará el registro PARA SIEMPRE. ¿Estás seguro?")) return;
    
    try {
      await deleteDoc(doc(db, collectionName, id));
      fetchData();
    } catch (error) {
      console.error("Error deleting", error);
    }
  };

  // --- FILTERING ---
  const filteredCampus = campusRegistrations.filter(r => viewTrash ? r.status === 'trash' : r.status !== 'trash');
  const filteredNutrition = nutritionRequests.filter(r => viewTrash ? r.status === 'trash' : r.status !== 'trash');


  if (loading) return <div className="min-h-screen flex items-center justify-center text-brand-green font-bold animate-pulse">Cargando Noe Masiá Admin...</div>;

  // LOGIN VIEW
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <SEO title="Admin Login" description="Acceso restringido" />
        <div className="bg-white p-8 rounded-sm shadow-xl w-full max-w-md border-t-4 border-brand-green flex flex-col items-center">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764604683421_Logo_Noe_Masi___400x400.png?alt=media&token=22b6be11-a50d-42f6-ba19-90215d779d94"
              alt="Admin Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <h1 className="text-2xl font-black uppercase text-brand-dark">Panel de Control</h1>
            <p className="text-gray-400 text-sm mt-2 font-light">Acceso exclusivo Noe Masiá</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 w-full">
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
            
            {error && <p className="text-red-500 text-xs font-bold bg-red-50 p-2 rounded-sm">{error}</p>}

            <Button variant="primary" type="submit" className="w-full justify-center">
              Entrar
            </Button>
          </form>

          <Link to="/" className="mt-8 text-sm text-gray-400 hover:text-brand-green flex items-center gap-2 transition-colors">
             <ArrowLeft size={16} /> Volver a la web
          </Link>
        </div>
      </div>
    );
  }

  // DASHBOARD VIEW
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <SEO title="Admin Dashboard" description="Panel de control" />
      
      {/* Header */}
      <header className={`text-white shadow-lg sticky top-0 z-40 transition-colors duration-300 ${viewTrash ? 'bg-gray-800' : 'bg-brand-dark'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-lg md:text-xl font-black uppercase flex items-center gap-2 tracking-widest">
              <LayoutGrid size={20} className={viewTrash ? "text-red-400" : "text-brand-green"}/> 
              {viewTrash ? "Papelera" : "Panel Admin"}
            </h1>
            <Link to="/" className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors border-l border-gray-700 pl-6">
              <ArrowLeft size={14} /> Web Principal
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 hidden md:inline font-mono">{user.email}</span>
            <button onClick={handleLogout} className="text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors" title="Cerrar sesión">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        
        {/* Top Controls: TABS + ACTIONS */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-8 gap-6">
           
           {/* Left: Tabs */}
           <div className="flex gap-1 bg-white p-1 rounded-sm shadow-sm border border-gray-200 w-full md:w-auto">
            <button 
              onClick={() => setActiveTab('campus')}
              className={`flex-1 md:flex-none py-2 px-6 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
                activeTab === 'campus' 
                  ? 'bg-brand-dark text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              Campus ({filteredCampus.length})
            </button>
            <button 
              onClick={() => setActiveTab('nutrition')}
              className={`flex-1 md:flex-none py-2 px-6 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
                activeTab === 'nutrition' 
                  ? 'bg-brand-dark text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              Nutrición ({filteredNutrition.length})
            </button>
          </div>
          
          {/* Right: Actions (Refresh, Trash Toggle, Export) */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
             
             <button 
               onClick={fetchData} 
               className="p-2 border border-gray-300 bg-white rounded-sm hover:bg-gray-50 text-gray-600"
               title="Actualizar datos"
             >
               <RefreshCcw size={16} />
             </button>

             <button
                onClick={() => setViewTrash(!viewTrash)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase border rounded-sm transition-colors ${
                  viewTrash 
                  ? 'bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300' 
                  : 'bg-white border-red-200 text-red-500 hover:bg-red-50'
                }`}
             >
               {viewTrash ? <><ArrowLeft size={14}/> Ver Activos</> : <><Trash2 size={14}/> Ver Papelera</>}
             </button>

             <Button 
                variant="outline" 
                onClick={handleExportCSV} 
                className="flex items-center gap-2 py-2 px-4 text-xs h-10 border-green-600 text-green-700 bg-green-50 hover:bg-green-100 hover:text-green-800"
             >
                <Download size={16} /> Exportar CSV
             </Button>
          </div>
        </div>

        {viewTrash && (
           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mb-6 flex items-center gap-3 text-sm">
             <AlertTriangle size={18} />
             <span>Estás viendo la <strong>Papelera</strong>. Los registros aquí pueden ser restaurados o eliminados permanentemente.</span>
           </div>
        )}

        {dataLoading ? (
           <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-green"></div>
           </div>
        ) : (
          <div className="grid gap-4">
            
            {/* CAMPUS LIST */}
            {activeTab === 'campus' && (
              filteredCampus.length === 0 ? (
                <div className="text-center py-20 bg-white border border-dashed border-gray-300 rounded-sm">
                  <p className="text-gray-400 font-light">No hay registros de Campus {viewTrash ? 'en la papelera' : 'activos'}.</p>
                </div>
              ) : (
              filteredCampus.map((reg) => (
                <div key={reg.id} className={`bg-white border-l-4 shadow-sm hover:shadow-lg transition-all duration-300 rounded-r-sm ${viewTrash ? 'border-gray-400 opacity-75' : 'border-brand-lime'}`}>
                  <div 
                    onClick={() => toggleExpand(reg.id)}
                    className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-md ${viewTrash ? 'bg-gray-400' : (reg.location === 'Estepona' ? 'bg-brand-green' : 'bg-brand-lime text-brand-dark')}`}>
                         {reg.location ? reg.location.charAt(0) : '?'}
                       </div>
                       <div>
                         <h3 className="font-bold text-lg text-brand-dark uppercase tracking-tight flex items-center gap-2">
                           {reg.playerName}
                           {viewTrash && <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full">ELIMINADO</span>}
                         </h3>
                         <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-1 items-center">
                           <span className="flex items-center gap-1 font-bold text-brand-green"><MapPin size={12}/> {reg.location}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                           <span className="bg-gray-100 px-2 py-0.5 rounded-sm border border-gray-200">{reg.category}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                           <span>{reg.age} años</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 md:min-w-[250px] border-t md:border-t-0 border-gray-100 pt-3 md:pt-0 mt-2 md:mt-0">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Recibido</span>
                        <span className="text-xs text-brand-dark font-mono font-medium">{formatDate(reg.createdAt)}</span>
                      </div>
                      
                      {/* ACTION BUTTONS */}
                      <div className="flex items-center gap-2">
                         {viewTrash ? (
                            <>
                               <button 
                                onClick={(e) => handleRestore(e, "campus_registrations", reg.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                                title="Restaurar"
                               >
                                 <ArchiveRestore size={18} />
                               </button>
                               <button 
                                onClick={(e) => handleDeletePermanent(e, "campus_registrations", reg.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                title="Eliminar Definitivamente"
                               >
                                 <Trash2 size={18} />
                               </button>
                            </>
                         ) : (
                            <button 
                              onClick={(e) => handleMoveToTrash(e, "campus_registrations", reg.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                              title="Mover a Papelera"
                            >
                              <Trash2 size={18} />
                            </button>
                         )}
                         
                         <div className={`p-1 rounded-full transition-transform duration-300 ${expandedId === reg.id ? 'rotate-180 bg-gray-100' : ''}`}>
                           <ChevronDown size={20} className="text-gray-400"/>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedId === reg.id && (
                    <div className="bg-gray-50 border-t border-gray-100 p-6 md:p-8 animate-fade-in grid md:grid-cols-12 gap-8 text-sm text-gray-600 relative">
                       {/* Decorative background number */}
                       <div className="absolute right-4 bottom-4 text-9xl font-black text-gray-200/50 pointer-events-none select-none z-0">
                         {reg.shirtSize}
                       </div>

                       <div className="md:col-span-6 space-y-6 relative z-10">
                         <div>
                           <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider flex items-center gap-2">
                             <UserIcon size={14} className="text-brand-green"/> Información Jugador/a
                           </h4>
                           <div className="bg-white p-4 rounded-sm border border-gray-200 space-y-2 shadow-sm">
                             <p><span className="font-bold text-xs uppercase text-gray-400 w-24 inline-block">Nacimiento:</span> {reg.birthDate}</p>
                             <p><span className="font-bold text-xs uppercase text-gray-400 w-24 inline-block">Club:</span> {reg.club}</p>
                             <p><span className="font-bold text-xs uppercase text-gray-400 w-24 inline-block">Socio Sede:</span> 
                                <span className={reg.isClubMember !== 'No' ? "text-brand-green font-bold" : ""}>{reg.isClubMember}</span>
                             </p>
                             <p><span className="font-bold text-xs uppercase text-gray-400 w-24 inline-block">Experiencia:</span> {reg.yearsPlaying} años</p>
                             <p><span className="font-bold text-xs uppercase text-gray-400 w-24 inline-block">Talla:</span> {reg.shirtSize}</p>
                           </div>
                         </div>

                         <div>
                            <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider flex items-center gap-2">
                             <Activity size={14} className="text-red-400"/> Salud
                           </h4>
                           <div className="bg-white p-4 rounded-sm border border-gray-200 space-y-2 shadow-sm">
                              <p className="flex flex-col">
                                <span className="font-bold text-xs uppercase text-gray-400">Alergias</span>
                                <span className={reg.allergies ? "text-red-500 font-medium" : "text-gray-400 italic"}>{reg.allergies || "Ninguna"}</span>
                              </p>
                              <div className="h-px bg-gray-100 w-full"></div>
                              <p className="flex flex-col">
                                <span className="font-bold text-xs uppercase text-gray-400">Intolerancias</span>
                                <span className={reg.intolerances ? "text-red-500 font-medium" : "text-gray-400 italic"}>{reg.intolerances || "Ninguna"}</span>
                              </p>
                           </div>
                         </div>
                       </div>

                       <div className="md:col-span-6 space-y-6 relative z-10">
                         <div>
                           <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider flex items-center gap-2">
                             <UserIcon size={14} className="text-brand-green"/> Datos Tutor/a
                           </h4>
                           <div className="bg-white p-4 rounded-sm border border-gray-200 space-y-2 shadow-sm">
                             <p><span className="font-bold text-xs uppercase text-gray-400 block mb-1">Nombre Completo:</span> {reg.tutorName}</p>
                             <p><span className="font-bold text-xs uppercase text-gray-400 block mb-1">DNI:</span> {reg.tutorDni}</p>
                             <p className="flex items-center gap-2 pt-2"><Mail size={14} className="text-brand-green"/> <a href={`mailto:${reg.email}`} className="hover:text-brand-green font-medium transition-colors">{reg.email}</a></p>
                             <p className="flex items-center gap-2"><MapPin size={14} className="text-brand-green"/> {reg.address}</p>
                           </div>
                         </div>
                         
                         <div>
                            <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider">Notas & Pago</h4>
                            <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm h-full">
                                <p className="mb-4 italic text-gray-500">"{reg.otherInfo || "Sin notas adicionales."}"</p>
                                <div className="bg-brand-lime/10 p-2 rounded-sm text-center">
                                  <span className="font-bold text-brand-dark text-xs uppercase">Método de pago:</span> <span className="font-bold text-brand-green">{reg.paymentMethod}</span>
                                </div>
                            </div>
                         </div>
                       </div>

                    </div>
                  )}
                </div>
              ))
             )
            )}

            {/* NUTRITION LIST */}
            {activeTab === 'nutrition' && (
               filteredNutrition.length === 0 ? (
                <div className="text-center py-20 bg-white border border-dashed border-gray-300 rounded-sm">
                  <p className="text-gray-400 font-light">No hay solicitudes de Nutrición {viewTrash ? 'en la papelera' : 'activas'}.</p>
                </div>
               ) : (
               filteredNutrition.map((req) => (
                <div key={req.id} className={`bg-white border-l-4 shadow-sm hover:shadow-lg transition-all duration-300 rounded-r-sm ${viewTrash ? 'border-gray-400 opacity-75' : 'border-brand-green'}`}>
                  <div 
                    onClick={() => toggleExpand(req.id)}
                    className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 border border-gray-100 shadow-sm ${viewTrash ? 'bg-gray-100 text-gray-400' : 'bg-gray-50 text-brand-green'}`}>
                         <Activity size={20} />
                       </div>
                       <div>
                         <h3 className="font-bold text-lg text-brand-dark uppercase tracking-tight flex items-center gap-2">
                           {req.name}
                           {viewTrash && <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full">ELIMINADO</span>}
                         </h3>
                         <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-1 items-center">
                           <span className="text-brand-green font-bold bg-brand-green/10 px-2 py-0.5 rounded-sm border border-brand-green/20 uppercase tracking-wider">{req.plan}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                           <span className="flex items-center gap-1"><Mail size={12}/> {req.email}</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 md:min-w-[250px] border-t md:border-t-0 border-gray-100 pt-3 md:pt-0 mt-2 md:mt-0">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Recibido</span>
                        <span className="text-xs text-brand-dark font-mono font-medium">{formatDate(req.createdAt)}</span>
                      </div>
                      
                      {/* ACTION BUTTONS */}
                      <div className="flex items-center gap-2">
                        {viewTrash ? (
                            <>
                               <button 
                                onClick={(e) => handleRestore(e, "nutrition_requests", req.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                                title="Restaurar"
                               >
                                 <ArchiveRestore size={18} />
                               </button>
                               <button 
                                onClick={(e) => handleDeletePermanent(e, "nutrition_requests", req.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                title="Eliminar Definitivamente"
                               >
                                 <Trash2 size={18} />
                               </button>
                            </>
                         ) : (
                            <button 
                              onClick={(e) => handleMoveToTrash(e, "nutrition_requests", req.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                              title="Mover a Papelera"
                            >
                              <Trash2 size={18} />
                            </button>
                         )}

                        <div className={`p-1 rounded-full transition-transform duration-300 ${expandedId === req.id ? 'rotate-180 bg-gray-100' : ''}`}>
                          <ChevronDown size={20} className="text-gray-400"/>
                        </div>
                      </div>
                    </div>
                  </div>

                   {/* Expanded Content */}
                   {expandedId === req.id && (
                    <div className="bg-gray-50 border-t border-gray-100 p-6 md:p-8 animate-fade-in">
                       <div className="grid md:grid-cols-12 gap-8">
                          <div className="md:col-span-4">
                            <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider">Datos de Contacto</h4>
                            <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm space-y-3">
                                <p className="flex items-center gap-3"><UserIcon size={16} className="text-brand-green"/> <span className="font-medium">{req.name}</span></p>
                                <p className="flex items-center gap-3"><Mail size={16} className="text-brand-green"/> <a href={`mailto:${req.email}`} className="hover:text-brand-green transition-colors">{req.email}</a></p>
                                <p className="flex items-center gap-3"><Phone size={16} className="text-brand-green"/> <a href={`tel:${req.phone}`} className="hover:text-brand-green transition-colors">{req.phone}</a></p>
                            </div>
                          </div>
                          <div className="md:col-span-8">
                            <h4 className="font-bold text-brand-dark uppercase mb-3 text-xs tracking-wider">Mensaje / Objetivo</h4>
                            <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm h-full relative">
                                <div className="absolute top-4 left-4 text-6xl text-gray-100 font-serif leading-none select-none">"</div>
                                <p className="italic text-gray-600 relative z-10 leading-relaxed">{req.message}</p>
                            </div>
                          </div>
                       </div>
                       <div className="mt-6 flex justify-end">
                          <a href={`mailto:${req.email}?subject=Respuesta solicitud Noe Masiá: ${req.plan}`} className="bg-brand-dark text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-green transition-colors flex items-center gap-2">
                             Responder por Email <Mail size={14} />
                          </a>
                       </div>
                    </div>
                  )}
                </div>
               ))
               )
            )}
            
          </div>
        )}
      </main>
    </div>
  );
};