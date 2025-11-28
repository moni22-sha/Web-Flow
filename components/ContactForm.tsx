import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { saveLead } from '../services/storageService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const success = saveLead(formData);

    if (success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  return (
    <div id="contact" className="bg-indigo-700 py-24 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-800 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Don't miss out on the ₹25,000 limited offer. Fill out the form, and our team will get back to you within 24 hours to discuss your project.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center border border-indigo-500 shadow-inner">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Fill the form</h4>
                    <p className="text-indigo-200">Tell us a bit about your needs.</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center border border-indigo-500 shadow-inner">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Consultation</h4>
                    <p className="text-indigo-200">We discuss your design and structure.</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center border border-indigo-500 shadow-inner">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Launch</h4>
                    <p className="text-indigo-200">Your site goes live in 3-7 days.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
             {status === 'success' ? (
               <div className="text-center py-12">
                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                   <CheckCircle className="h-8 w-8 text-green-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                 <p className="text-slate-600">Thank you for your interest. We will contact you shortly.</p>
                 <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-indigo-600 font-medium hover:text-indigo-500"
                 >
                   Send another request
                 </button>
               </div>
             ) : (
               <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Website</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message (Optional)</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center text-red-600 text-sm">
                      <AlertCircle size={16} className="mr-2" />
                      Failed to submit. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:shadow-lg"
                  >
                    Submit Request <Send size={18} className="ml-2" />
                  </button>
                  
                  <p className="text-xs text-center text-slate-400 mt-4">
                    Your information is secure. We never spam.
                  </p>
                </form>
               </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;