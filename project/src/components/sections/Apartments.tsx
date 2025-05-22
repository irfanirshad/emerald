import React, { useState } from 'react';
import { ArrowRight, Bed, Bath, Maximize, Check } from 'lucide-react';

const apartmentTypes = [
  {
    id: '2bhk',
    name: '2 BHK Premium',
    size: '950 sq.ft.',
    uds: '350 sq.ft.',
    bedrooms: 2,
    bathrooms: 2,
    price: '₹10,000/sq.ft.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Spacious prayer room with qibla direction marked',
      'Modern modular kitchen with separate wet and dry areas',
      'Premium vitrified tile flooring',
      'Separate utility area',
      'Large windows for natural lighting',
      'Quality fixtures and fittings',
      'One covered car parking available (extra cost)'
    ]
  },
  {
    id: '3bhk',
    name: '3 BHK Luxury',
    size: '1350 sq.ft.',
    uds: '495 sq.ft.',
    bedrooms: 3,
    bathrooms: 3,
    price: '₹10,000/sq.ft.',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Dedicated prayer room with wudu area',
      'Spacious modular kitchen with separate wet and dry areas',
      'Premium vitrified tile flooring',
      'Separate utility and storage areas',
      'Large windows for natural lighting',
      'Premium fixtures and fittings',
      'One covered car parking available (extra cost)'
    ]
  }
];

export const Apartments: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState(apartmentTypes[0]);

  return (
    <section id="apartments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Find Your <span className="text-emerald-700">Perfect</span> Home
          </h2>
          <p className="text-gray-600">
            JC's Emerald offers thoughtfully designed 2 BHK and 3 BHK apartments, perfect for families seeking a harmonious living environment in a vibrant Muslim community.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Apartment types sidebar */}
            <div className="lg:w-1/4 bg-gray-50 p-4">
              <h3 className="font-bold text-gray-700 mb-4 text-lg">Available Units</h3>
              <ul className="space-y-2">
                {apartmentTypes.map((apt) => (
                  <li key={apt.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg transition ${
                        selectedApartment.id === apt.id
                          ? 'bg-emerald-700 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedApartment(apt)}
                    >
                      <span className="font-medium">{apt.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Apartment details */}
            <div className="lg:w-3/4 p-6 lg:p-8">
              <div className="flex flex-col xl:flex-row gap-8">
                <div className="xl:w-1/2">
                  <img
                    src={selectedApartment.image}
                    alt={selectedApartment.name}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Bed className="mx-auto h-6 w-6 text-emerald-700 mb-1" />
                      <span className="block text-sm text-gray-500">Bedrooms</span>
                      <span className="block font-bold text-gray-800">{selectedApartment.bedrooms}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Bath className="mx-auto h-6 w-6 text-emerald-700 mb-1" />
                      <span className="block text-sm text-gray-500">Bathrooms</span>
                      <span className="block font-bold text-gray-800">{selectedApartment.bathrooms}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Maximize className="mx-auto h-6 w-6 text-emerald-700 mb-1" />
                      <span className="block text-sm text-gray-500">Area</span>
                      <span className="block font-bold text-gray-800">{selectedApartment.size}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Maximize className="mx-auto h-6 w-6 text-emerald-700 mb-1" />
                      <span className="block text-sm text-gray-500">UDS</span>
                      <span className="block font-bold text-gray-800">{selectedApartment.uds}</span>
                    </div>
                  </div>
                </div>
                
                <div className="xl:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedApartment.name}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-emerald-700 font-bold text-xl">{selectedApartment.price}</span>
                    <span className="text-gray-500">+ Registration + 5% GST</span>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-emerald-800">
                      Additional charges apply for EB connection, Metro Water, Sewerage, and Car Parking
                    </p>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-3">Features & Amenities</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedApartment.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="text-emerald-600 h-5 w-5 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#contact" 
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded inline-flex items-center justify-center transition duration-300 font-medium"
                    >
                      Book a Visit
                    </a>
                    <button className="bg-transparent hover:bg-gray-100 text-emerald-700 border border-emerald-700 px-6 py-3 rounded inline-flex items-center justify-center transition duration-300 font-medium">
                      Download Floor Plan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};