import React from 'react';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Emerald Apartments Exterior" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-emerald-800 text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">30+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              About <span className="text-emerald-700">Emerald</span> Apartments
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nestled in the vibrant neighborhood of Perambur, Emerald Apartments stands as a symbol of luxury and modern living in Chennai. Our meticulously designed residential complex offers a perfect blend of comfort, convenience, and elegance.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              With attention to detail and commitment to quality, we've created living spaces that transcend the ordinary. Every apartment is crafted to maximize space, natural light, and ventilation, providing residents with a harmonious living environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Prime location in Perambur', 
                'Contemporary architecture', 
                'Eco-friendly design', 
                'Premium construction materials',
                'Spacious floor plans',
                'Elegant interiors',
                'Abundant natural light',
                'High-end finishes'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-emerald-600 h-5 w-5 shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded font-medium transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};