import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 hidden lg:block">
         <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true" className="text-slate-100">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#grid-pattern)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-100">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
              Limited Time Offer
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
              Get Your Dynamic Website at <span className="text-indigo-600">₹25,000</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-0">
              Built for Traffic & Leads. A fast, SEO-ready business website that brings organic traffic and daily enquiries.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Website Now
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </button>
              <button 
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-colors"
              >
                See Portfolio
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-500">
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-green-500" /> 3-7 Days Delivery
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-green-500" /> Free 1st Year Hosting
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-green-500" /> Mobile Responsive
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-green-500" /> Basic SEO Included
               </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-800">
               <div className="absolute top-0 w-full h-8 bg-slate-900 flex items-center px-4 space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <img 
                 src="https://picsum.photos/800/600" 
                 alt="Website Dashboard Preview" 
                 className="w-full h-auto mt-8 opacity-90 hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden sm:flex">
               <div className="bg-green-100 p-3 rounded-full text-green-600">
                 <CheckCircle2 size={24} />
               </div>
               <div>
                 <p className="text-sm font-medium text-slate-500">Google PageSpeed</p>
                 <p className="text-2xl font-bold text-slate-900">90+</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;