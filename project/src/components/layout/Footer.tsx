import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="text-emerald-400 h-7 w-7" />
              <span className="font-serif text-2xl font-bold text-white">Emerald</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-xs">
              Luxury living redefined in the heart of Perambur, Chennai. Experience the epitome of modern comfort and elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-emerald-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Apartments', 'Amenities', 'Gallery', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-emerald-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Apartments</h3>
            <ul className="space-y-3">
              {['2 BHK Premium', '3 BHK Luxury'].map((item) => (
                <li key={item}>
                  <a 
                    href="#apartments"
                    className="text-gray-300 hover:text-emerald-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-400 h-5 w-5 shrink-0 mt-1" />
                <p className="text-gray-300">
                  Perambur, Chennai, Tamil Nadu, India - 600011
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-400 h-5 w-5 shrink-0" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-400 h-5 w-5 shrink-0" />
                <p className="text-gray-300">info@emeraldperambur.in</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Emerald Apartments. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};