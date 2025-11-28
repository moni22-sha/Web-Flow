import React, { useState } from 'react';
import { Menu, X, Code2, Lock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHome) return; 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-indigo-600 p-2 rounded-lg text-white">
                  <Code2 size={24} />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-800">
                  WebFlow<span className="text-indigo-600">Dev</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {isHome ? (
                <>
                  <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</button>
                  <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Portfolio</button>
                  <button onClick={() => scrollToSection('faq')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">FAQ</button>
                  
                  <Link to="/Login.tsx" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                  
                  Profile</Link>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium">Back to Home</Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {isHome ? (
                <>
                  <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">Features</button>
                  <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">Portfolio</button>
                  <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">FAQ</button>
                 <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-600 font-semibold bg-indigo-50">Book Now</button>
                <button onClick={() => scrollToSection('Profile')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-600 font-semibold bg-indigo-50">Profile</button>
                </>
              ) : (
                <Link to="/" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">Back to Home</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={24} className="text-indigo-500" />
                <span className="font-bold text-xl text-white">
                  WebFlow<span className="text-indigo-500">Dev</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Helping businesses grow with high-performance, SEO-optimized websites. 
                Built for results.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-indigo-400 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-indigo-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-indigo-400 transition-colors">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Admin</h3>
              <Link to="/admin" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Lock size={16} />
                Staff Login
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} WebFlowDev Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;