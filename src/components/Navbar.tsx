import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_NAME, PHONE_NUMBER } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 md:h-20 flex items-center ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center shrink-0 transition-transform active:scale-95">
          <img 
            src="https://i.ibb.co/N2kznf4N/Gemini-Generated-Image-2-removebg-preview-1.png" 
            alt="LEROY'S WELDING WORKS" 
            className="w-32 h-10 md:w-56 md:h-16 object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-brand-gold ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-8 w-px bg-zinc-200 mx-2" />
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-zinc-500 uppercase tracking-tighter font-bold">Speak to an expert</span>
            <span className="text-brand-gold font-bold text-sm leading-none">{PHONE_NUMBER}</span>
          </div>
          <Link 
            to="/contact"
            className="bg-industrial-black text-white px-5 py-2 rounded-sm font-bold text-xs uppercase hover:bg-zinc-800 transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-industrial-black hover:text-brand-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-20 bg-white z-40 md:hidden flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-black uppercase tracking-tight py-4 border-b border-zinc-100 ${
                    location.pathname === link.path ? 'text-brand-gold' : 'text-industrial-black'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Direct Contact</p>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-2xl font-black text-industrial-black block">
                  {PHONE_NUMBER}
                </a>
              </div>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-brand-gold text-center text-white py-5 rounded-sm font-black uppercase tracking-widest text-sm shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
