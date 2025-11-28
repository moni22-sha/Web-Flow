import React from 'react';
import { Star } from 'lucide-react';
import { ServiceTestimonial } from '../types';  // <-- FIXED TYPE IMPORT

// FIXED: Correct export syntax
export const testimonials: ServiceTestimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "SpiceRoute Cafe",
    content: "I needed a website urgently for my new cafe. The team delivered a stunning site in just 5 days. Business has increased by 30% since we launched!",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Priya Patel",
    role: "Director",
    company: "Patel Interiors",
    content: "For ₹25,000, the value is incredible. The admin panel is so easy to use, I can update project photos myself from my phone.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Amit Verma",
    role: "Consultant",
    company: "AV Financials",
    content: "Highly professional service. They handled everything from the domain to the content upload. Highly recommended for small businesses.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Trusted by Entrepreneurs
          </h2>
          <p className="text-slate-600">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-slate-50 p-8 rounded-2xl relative shadow-sm hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
