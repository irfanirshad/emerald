import React from 'react';
import { MapPin, Clock, Car, Building, GraduationCap, HeartPulse, Utensils } from 'lucide-react';

const nearbyPlaces = [
  {
    icon: <Building className="h-5 w-5 text-emerald-600" />,
    place: 'Masjid-e-Anwari',
    distance: '0.3 km',
    time: '2 min'
  },
  {
    icon: <Building className="h-5 w-5 text-emerald-600" />,
    place: 'Jawahar Nagar Mosque',
    distance: '0.5 km',
    time: '3 min'
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-emerald-600" />,
    place: 'New College',
    distance: '2.5 km',
    time: '10 min'
  },
  {
    icon: <Utensils className="h-5 w-5 text-emerald-600" />,
    place: 'Halal Food Street',
    distance: '1.2 km',
    time: '5 min'
  },
  {
    icon: <HeartPulse className="h-5 w-5 text-emerald-600" />,
    place: 'Apollo Hospital',
    distance: '3.2 km',
    time: '12 min'
  },
  {
    icon: <Building className="h-5 w-5 text-emerald-600" />,
    place: 'Perambur Railway Station',
    distance: '1.5 km',
    time: '7 min'
  }
];

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Prime <span className="text-emerald-700">Location</span>
          </h2>
          <p className="text-gray-600">
            Located in the heart of Jawahar Nagar on 3rd Circular Road, JC's Emerald offers excellent connectivity while being part of a thriving Muslim community.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
              <div className="h-full w-full bg-cover bg-center p-8 flex items-center justify-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1071188/pexels-photo-1071188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg mb-2">
                    <MapPin className="h-5 w-5" />
                    <span>JC's Emerald</span>
                  </div>
                  <p className="text-gray-700">Jawahar Nagar, 3rd Circular Road, Chennai</p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-emerald-100 p-2 rounded">
                    <Car className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">By Car</h4>
                    <p className="text-gray-600">Easy access via 3rd Circular Road, well-connected to major parts of the city</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-100 p-2 rounded">
                    <Building className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">By Train</h4>
                    <p className="text-gray-600">7 minutes from Perambur Railway Station with frequent local train connectivity</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-100 p-2 rounded">
                    <Clock className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Airport Access</h4>
                    <p className="text-gray-600">45 minutes from Chennai International Airport via Inner Ring Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Neighborhood Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-emerald-50 p-2 rounded shrink-0">
                      {place.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{place.place}</h4>
                      <div className="flex items-center gap-3 mt-1 text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {place.distance}
                        </span>
                        <span className="text-gray-600 flex items-center gap-1">
                          <Car className="h-3 w-3" /> {place.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-700 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Community Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Walking distance to multiple mosques</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Vibrant Muslim community and cultural environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Easy access to halal restaurants and shops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-emerald-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Close to Islamic educational institutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};