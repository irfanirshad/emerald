import React from 'react';
import { ShieldCheck, Leaf, Wifi, Dumbbell, Minimize as Swimming, Trees, Wind, Coffee, Utensils, Car, Clock, UserRound } from 'lucide-react';

const amenities = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
    title: '24/7 Security',
    description: 'Round-the-clock security with CCTV surveillance and trained personnel.'
  },
  {
    icon: <Leaf className="h-8 w-8 text-emerald-600" />,
    title: 'Landscaped Gardens',
    description: 'Beautifully maintained green spaces for relaxation and recreation.'
  },
  {
    icon: <Wifi className="h-8 w-8 text-emerald-600" />,
    title: 'High-Speed Internet',
    description: 'Building-wide fiber optic connectivity for seamless internet access.'
  },
  {
    icon: <Trees className="h-8 w-8 text-emerald-600" />,
    title: 'Rooftop Garden',
    description: 'Serene rooftop space with panoramic city views.'
  },
  {
    icon: <Wind className="h-8 w-8 text-emerald-600" />,
    title: 'Power Backup',
    description: '100% power backup for uninterrupted living experience.'
  },
  {
    icon: <Coffee className="h-8 w-8 text-emerald-600" />,
    title: 'Community Lounge',
    description: 'Elegant space for socializing and hosting small gatherings.'
  },
  {
    icon: <Car className="h-8 w-8 text-emerald-600" />,
    title: 'Reserved Parking',
    description: 'Dedicated covered parking spaces for residents and visitors.'
  },
  {
    icon: <Clock className="h-8 w-8 text-emerald-600" />,
    title: 'Concierge Services',
    description: 'Professional assistance for day-to-day needs and special requests.'
  },
  {
    icon: <UserRound className="h-8 w-8 text-emerald-600" />,
    title: 'Children\'s Play Area',
    description: 'Safe and engaging playground for the little ones.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Exceptional <span className="text-emerald-700">Amenities</span> & Features
          </h2>
          <p className="text-gray-600">
            Emerald Apartments offers a comprehensive suite of amenities designed to enhance your living experience and provide convenience, comfort, and recreation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 transition duration-300 hover:shadow-md hover:bg-gray-100"
            >
              <div className="bg-white p-3 inline-block rounded-full shadow-sm mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};