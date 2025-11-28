import React from 'react';

const projects = [
  { id: 1, title: "Modern E-commerce", category: "Retail", img: "https://picsum.photos/400/300?random=1" },
  { id: 2, title: "Corporate Finance", category: "Business", img: "https://picsum.photos/400/300?random=2" },
  { id: 3, title: "Creative Portfolio", category: "Personal", img: "https://picsum.photos/400/300?random=3" },
];

const PortfolioPlaceholder: React.FC = () => {
  return (
    <div id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Recent Projects</h2>
          <p className="mt-4 text-xl text-slate-500">Some of our latest work delivered to happy clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-300 text-sm font-medium">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            View All Projects &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPlaceholder;