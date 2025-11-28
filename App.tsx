import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { NutritionPage } from './pages/NutritionPage';
import { CampusPage } from './pages/CampusPage';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nutricion" element={<NutritionPage />} />
          <Route path="/campus" element={<CampusPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;