import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER } from './constants';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-industrial-black">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-6 right-6 z-40">
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="w-14 h-14 bg-brand-orange text-industrial-black rounded-full flex items-center justify-center shadow-2xl spark-shadow animate-pulse"
          >
            <Phone size={24} fill="currentColor" />
          </a>
        </div>
      </div>
    </Router>
  );
}

