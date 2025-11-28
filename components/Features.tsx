// import React from 'react';
// import { Smartphone, Search, Magnet, Zap, Layout as LayoutIcon, MessageSquare, Server } from 'lucide-react';
// import { ServiceFeature } from '../types';

// const features: ServiceFeature[] = [
//   {
//     title: "Mobile-Responsive Design",
//     description: "Works perfectly on every device, from iPhone to large desktop monitors. Fluid layouts that adapt instantly.",
//     icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
//   },
//   {
//     title: "SEO-Optimized Structure",
//     description: "Built with clean code and semantic HTML. Ready for Google ranking to help your customers find you organically.",
//     icon: <Search className="h-6 w-6 text-indigo-600" />,
//   },
//   {
//     title: "Lead Magnet Sections",
//     description: "Strategically placed high-converting forms and call-to-actions to turn visitors into paying customers.",
//     icon: <Magnet className="h-6 w-6 text-indigo-600" />,
//   },
//   {
//     title: "Fast Loading Speed",
//     description: "Optimized images and minified code ensuring a 90+ Google PageSpeed score for better UX and ranking.",
//     icon: <Zap className="h-6 w-6 text-indigo-600" />,
//   },
//   {
//     title: "Modern UX/UI",
//     description: "Clean, professional, and trustworthy design that establishes authority and dists confidence with your clients.",
//     icon: <LayoutIcon className="h-6 w-6 text-indigo-600" />,
//   },
//   {
//     title: "WhatsApp & CRM Integration",
//     description: "Receive leads instantly on WhatsApp or sync them directly to your favorite CRM for immediate follow-up.",
//     icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
//   },
//   {
//     title: "Free First-Year Hosting",
//     description: "We handle the technical side. Secure, fast hosting is included for the first year. Optional upgrades available.",
//     icon: <Server className="h-6 w-6 text-indigo-600" />,
//   }
// ];

// const Features: React.FC = () => {
//   return (
//     <div id="features" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Salient Features</h2>
//           <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
//             Everything you need to succeed online
//           </p>
//           <p className="mt-4 text-xl text-slate-500">
//             We don't just dist websites; we dist business tools designed to grow your company.
//           </p>
//         </div>
//   <div className="grid md:grid-cols-3 gap-10">
//           {features.map((f, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
//             >
//               <div className="mb-4">{f.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
//               <p className="text-slate-600">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
//             >
//               <div className="absolute top-8 left-8">
//                 <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors">
//                   {feature.icon}
//                 </div>
//               </div>
//               <div className="mt-16">
//                 <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Search, Magnet, Zap, Layout as LayoutIcon, MessageSquare, Server } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Mobile-Responsive Design",
    description: "Works perfectly on every device, from iPhone to desktop monitors.",
    icon: "📱",
  },
  {
    title: "SEO-Optimized Structure",
    description: "Clean code and semantic HTML prepared for Google ranking.",
    icon: "🔍",
  },
  {
    title: "Lead Magnet Sections",
    description: "High-converting CTAs that turn visitors into paying customers.",
    icon: "🎯",
  },
  {
    title: "Fast Loading Speed",
    description: "Optimized for a 90+ Google PageSpeed score.",
    icon: "⚡",
  },
  {
    title: "Modern UX/UI",
    description: "Clean, professional layouts that dist trust.",
    icon: "🎨",
  },
  {
    title: "WhatsApp & CRM Integration",
    description: "Receive leads instantly via WhatsApp or CRM.",
    icon: "💬",
  },
  {
    title: "Free First-Year Hosting",
    description: "We manage secure hosting for your first year.",
    icon: "🖥️",
  },
];


const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Salient Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Everything you need to succeed online
          </p>
          <p className="mt-4 text-xl text-slate-500">
            We don't just dist websites; we dist business tools designed to grow your company.
          </p>
        </div>

        {/* Animated Features Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.9 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Features;
