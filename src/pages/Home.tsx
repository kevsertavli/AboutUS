import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Shield, Heart, Users, Eye, Volume2 } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img 
          src="/images/cheetah-hero.jpg" 
          alt="Çita yavrusu - About US" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white drop-shadow-lg rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </section>

      {/* Why Protect Cheetahs Section */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F4E3C7 0%, #FBB657 100%)" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: "#516655" }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full"
            style={{ backgroundColor: "#516655" }}
          ></div>
          <div
            className="absolute bottom-40 right-1/3 w-8 h-8 rounded-full"
            style={{ backgroundColor: "#577E85" }}
          ></div>
        </div>

        <div className="w-full relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#516655] to-[#577E85] bg-clip-text text-transparent">
              Çitaları Neden Korumalıyız?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed px-4 md:px-8 lg:px-16">
              Çitalar, ekosistemin dengesini koruyan önemli avcılardır ve nesli tükenmekte olan türlerdendir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {/* Endangered Species */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/50">
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
                >
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#516655" }}>
                Nesli Tükenmekte
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Son 100 yılda çita popülasyonu %90 azaldı. Acil koruma önlemleri gerektiriyor.
              </p>
            </div>

            {/* Ecosystem Balance */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/50">
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
                >
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#516655" }}>
                Ekosistemin Dengesi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Çitalar, doğal dengeyi koruyarak diğer türlerin sağlıklı kalmasını sağlar.
              </p>
            </div>

            {/* Social Responsibility */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/50">
              <div className="mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
                >
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#516655" }}>
                Toplumsal Sorumluluk
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gelecek nesillere bu muhteşem hayvanları bırakmak bizim sorumluluğumuz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Silent Cries Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/cheetah-call.jpeg"
              alt="Sessiz Çığlıkları Duyun - Çita"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

            {/* Text overlay positioned more centered in the green area */}
            <div className="absolute inset-12 flex items-center justify-center md:justify-start">
              <div className="max-w-lg ml-4 md:ml-12 lg:ml-20 text-center ">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Sessiz Çığlıkları Duyun
                </h2>
                <p className="text-xl text-white/90 mb-8 drop-shadow-lg leading-relaxed">
                  Çitalar sessizce yardım çağrısında bulunuyor. Onların sesini duyabilir misiniz?
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link to="/bilgi">
                    <button
                      className="px-10 py-6 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)", color: "white" }}
                    >
                      Onları Tanıyın
                    </button>
                  </Link>
                  <Link to="/katil">
                    <button
                      className="px-10 py-6 text-lg rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 bg-white/90 backdrop-blur-sm"
                      style={{
                        borderColor: "#FBB657",
                        color: "#516655",
                      }}
                    >
                      Seslerini Duyurun
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotted Big Cats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl"
            style={{ backgroundColor: "#FBB657" }}
          ></div>
          <div
            className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-3xl"
            style={{ backgroundColor: "#516655" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div
                className="p-3 rounded-full shadow-lg"
                style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
              >
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#516655] to-[#577E85] bg-clip-text text-transparent">
                Benekli Kediler: Nasıl Ayırt Ederim?
              </h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed px-4 md:px-8 lg:px-16">
              Çitalar sıklıkla diğer benekli büyük kedilerle karıştırılır. İşte onları nasıl ayırt edebileceğiniz:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Cheetah */}
            <div
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ borderColor: "#FBB657" }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/cheetah-portrait.jpg"
                  alt="Çita"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2" style={{ color: "#516655" }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                  Çita
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    Yuvarlak, küçük benekler
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    Siyah gözyaşı çizgileri
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    İnce, uzun vücut
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    Küçük kafa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    Uzun bacaklar
                  </li>
                </ul>
              </div>
            </div>

            {/* Leopard */}
            <div
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ borderColor: "#516655" }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/leopard.jpg"
                  alt="Leopar"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2" style={{ color: "#516655" }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                  Leopar
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                    Rozet şeklinde benekler
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                    Gözyaşı çizgisi yok
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                    Güçlü, kaslı vücut
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                    Büyük kafa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#516655" }}></div>
                    Ağaç tırmanma yetisi
                  </li>
                </ul>
              </div>
            </div>

            {/* Jaguar */}
            <div
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ borderColor: "#577E85" }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/jaguar.jpg"
                  alt="Jaguar"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2" style={{ color: "#516655" }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
                  Jaguar
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
                    Büyük rozet benekler
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
                    Rozetlerin içinde nokta
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
                    En güçlü çene
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
                    Kısa, güçlü bacaklar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#577E85" }}></div>
                    Yüzme yeteneği
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div
            className="p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm"
            style={{ background: "linear-gradient(135deg, #F4E3C7 0%, rgba(244, 227, 199, 0.8) 100%)" }}
          >
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: "#516655" }}>
              Hızlı Karşılaştırma
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2" style={{ borderColor: "#516655" }}>
                    <th className="text-left py-4 px-4 font-bold" style={{ color: "#516655" }}>
                      Özellik
                    </th>
                    <th className="text-center py-4 px-4 font-bold" style={{ color: "#516655" }}>
                      Çita
                    </th>
                    <th className="text-center py-4 px-4 font-bold" style={{ color: "#516655" }}>
                      Leopar
                    </th>
                    <th className="text-center py-4 px-4 font-bold" style={{ color: "#516655" }}>
                      Jaguar
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200 hover:bg-white/30 transition-colors">
                    <td className="py-4 px-4 font-semibold">Maksimum Hız</td>
                    <td className="py-4 px-4 text-center font-bold" style={{ color: "#FBB657" }}>
                      120 km/h
                    </td>
                    <td className="py-4 px-4 text-center">60 km/h</td>
                    <td className="py-4 px-4 text-center">50 km/h</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-white/30 transition-colors">
                    <td className="py-4 px-4 font-semibold">Ağırlık</td>
                    <td className="py-4 px-4 text-center">35-65 kg</td>
                    <td className="py-4 px-4 text-center">30-90 kg</td>
                    <td className="py-4 px-4 text-center">56-96 kg</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-white/30 transition-colors">
                    <td className="py-4 px-4 font-semibold">Yaşam Alanı</td>
                    <td className="py-4 px-4 text-center">Afrika, İran</td>
                    <td className="py-4 px-4 text-center">Afrika, Asya</td>
                    <td className="py-4 px-4 text-center">Güney Amerika</td>
                  </tr>
                  <tr className="hover:bg-white/30 transition-colors">
                    <td className="py-4 px-4 font-semibold">Ayırt Edici Özellik</td>
                    <td className="py-4 px-4 text-center">Gözyaşı çizgileri</td>
                    <td className="py-4 px-4 text-center">Ağaç tırmanma</td>
                    <td className="py-4 px-4 text-center">En güçlü çene</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 rounded-full"
            style={{ backgroundColor: "#F4E3C7" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full"
            style={{ backgroundColor: "#FBB657" }}
          ></div>
        </div>

        <div className="w-full text-center relative z-10">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FBB657] to-[#577E85] bg-clip-text text-transparent">
              Gönüllü Ol
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed px-4 md:px-8 lg:px-16">
              Çitaların korunması için bizimle birlikte hareket et. Sen de bu önemli misyonun bir parçası ol.
            </p>
          </div>
          <Link to="/bilgi">
            <button
              className="text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #FBB657 0%, #F4E3C7 100%)", color: "#516655" }}
            >
              Daha Fazla Bilgi Al
            </button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home; 