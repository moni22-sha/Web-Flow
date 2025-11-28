import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "How long does it take to deliver?",
    answer: "Typical delivery time is 3–7 working days, depending on how quickly you can provide the content (text and images). We start immediately upon booking."
  },
  {
    question: "Is SEO included?",
    answer: "Yes, a basic SEO setup (Meta tags, proper heading structure, sitemap, optimized images) is included to get you started. Advanced ongoing SEO campaigns are optional extras."
  },
  {
    question: "Will I get support after launch?",
    answer: "Absolutely. We provide 30 days of free support after launch to ensure everything runs smoothly and to help you with minor text updates."
  },
  {
    question: "Can you integrate WhatsApp, payment gateways, or CRM?",
    answer: "Yes, all integrations are available. We can link a WhatsApp button for direct chat, integrate Stripe/Razorpay/PayPal, and connect forms to Hubspot, Zoho, or Google Sheets."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-indigo-600 flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`px-6 bg-slate-50 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;