import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            {/* Logo + AboutUS */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-9 h-9 rounded-full relative" style={{ backgroundColor: "#FBB657" }}>
                  <div className="absolute inset-1 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              {/* AboutUS */}
              <h3 className="font-bold text-2xl md:text-3xl">AboutUS</h3>
            </div>
            {/* Açıklama */}
            <p className="text-gray-300 text-base md:text-lg mt-8 text-center md:text-left w-full md:w-auto">
              Çitaların korunması ve gelecek nesillere aktarılması için çalışan bir sivil toplum kuruluşudur.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/bilgi" className="text-gray-300 hover:text-white transition-colors">Çitalar Hakkında</Link></li>
              <li><Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link to="/katil" className="text-gray-300 hover:text-white transition-colors">Destek</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Programlarımız</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Çita Koruma Projesi</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Habitat Rehabilitasyonu</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Toplum Eğitimi</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Araştırma ve Geliştirme</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Gönüllü Programları</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 mt-1 text-[#577E85] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@aboutus.org</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 mt-1 text-[#577E85] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+90 212 555 0123</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 mt-1 text-[#577E85] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2025 AboutUS. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter; 