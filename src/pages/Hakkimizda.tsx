import React from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Award, Globe, Sparkles, BookOpen, Leaf, Users } from "lucide-react";
import { teamMembers } from "../data/teamMembers";
import { sponsors } from "../data/sponsors";

const Hakkimizda: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* About Section */}
      <section className="pt-20 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4E3C7]/30 to-white"></div>

        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: "#FBB657" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: "#577E85" }}
          ></div>
          <div
            className="absolute top-40 left-1/3 w-20 h-20 rounded-full opacity-10"
            style={{ backgroundColor: "#516655" }}
          ></div>
        </div>

        <div className="w-full relative z-10">
          <div className="text-center mb-12">
            <div
              className="inline-block p-3 rounded-full mb-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
            >
              <Award className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#516655] to-[#577E85] bg-clip-text text-transparent">
              Hakkımızda
            </h1>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Misyonumuz</h2>
            <p className="text-xl text-gray-600 px-4 md:px-8 lg:px-16">
              AboutUS, çitaların doğal yaşam alanlarında korunması ve gelecek nesillere aktarılması için çalışan bir
              sivil toplum kuruluşudur. Amacımız, bu muhteşem hayvanların neslinin tükenmesini önlemek ve yaşam
              alanlarını korumaktır.
            </p>
          </div>

          {/* Mission cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 px-4 md:px-8 lg:px-16">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4" style={{ borderColor: "#FBB657" }}>
              <div className="mb-4 p-3 rounded-full inline-block" style={{ backgroundColor: "#FBB657" }}>
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#516655" }}>
                Koruma
              </h3>
              <p className="text-gray-600">Çitaların doğal yaşam alanlarını korumak ve genişletmek için çalışıyoruz.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4" style={{ borderColor: "#577E85" }}>
              <div className="mb-4 p-3 rounded-full inline-block" style={{ backgroundColor: "#577E85" }}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#516655" }}>
                Eğitim
              </h3>
              <p className="text-gray-600">Toplumu çitalar ve onların korunması hakkında bilinçlendiriyoruz.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4" style={{ borderColor: "#516655" }}>
              <div className="mb-4 p-3 rounded-full inline-block" style={{ backgroundColor: "#516655" }}>
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#516655" }}>
                Araştırma
              </h3>
              <p className="text-gray-600">
                Çitaların davranışları ve ekolojisi üzerine bilimsel çalışmalar yürütüyoruz.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-lg opacity-20"
                style={{ backgroundColor: "#FBB657" }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg opacity-20"
                style={{ backgroundColor: "#577E85" }}
              ></div>
              <div className="rounded-lg overflow-hidden shadow-2xl relative">
                <img
                  src="/images/i5.webp"
                  alt="Tarihçemiz"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#F4E3C7" }}>
                  <Award className="h-5 w-5" style={{ color: "#516655" }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: "#516655" }}>
                  Tarihçemiz
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                AboutUS, 2010 yılında bir grup doğa koruma uzmanı ve çita araştırmacısı tarafından kurulmuştur.
                Kuruluşumuzdan bu yana, çitaların korunması için birçok proje geliştirdik ve uyguladık.
              </p>
              <p className="text-gray-600">
                Yıllar içinde, Afrika'nın farklı bölgelerinde çalışmalar yürüttük ve yerel topluluklar, hükümetler ve
                diğer sivil toplum kuruluşlarıyla işbirliği yaparak çitaların korunması için önemli adımlar attık.
              </p>

              {/* Timeline */}
              <div className="mt-6 space-y-4 relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5" style={{ backgroundColor: "#F4E3C7" }}></div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full mt-1 flex-shrink-0 z-10"
                    style={{ backgroundColor: "#FBB657" }}
                  ></div>
                  <div>
                    <div className="font-bold" style={{ color: "#516655" }}>
                      2010
                    </div>
                    <div className="text-gray-600">Kuruluş</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full mt-1 flex-shrink-0 z-10"
                    style={{ backgroundColor: "#FBB657" }}
                  ></div>
                  <div>
                    <div className="font-bold" style={{ color: "#516655" }}>
                      2015
                    </div>
                    <div className="text-gray-600">İlk koruma alanı projesi</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full mt-1 flex-shrink-0 z-10"
                    style={{ backgroundColor: "#FBB657" }}
                  ></div>
                  <div>
                    <div className="font-bold" style={{ color: "#516655" }}>
                      2020
                    </div>
                    <div className="text-gray-600">Uluslararası işbirliği programı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#F4E3C7" }}>
                  <Award className="h-5 w-5" style={{ color: "#516655" }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: "#516655" }}>
                  Değerlerimiz
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4" style={{ borderColor: "#FBB657" }}>
                  <h4 className="font-semibold text-gray-700">Bilimsel Yaklaşım</h4>
                  <p className="text-gray-600 text-sm">Tüm çalışmalarımızı bilimsel veriler ışığında yürütüyoruz.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4" style={{ borderColor: "#577E85" }}>
                  <h4 className="font-semibold text-gray-700">Sürdürülebilirlik</h4>
                  <p className="text-gray-600 text-sm">
                    Uzun vadeli ve sürdürülebilir koruma stratejileri geliştiriyoruz.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4" style={{ borderColor: "#516655" }}>
                  <h4 className="font-semibold text-gray-700">İşbirliği</h4>
                  <p className="text-gray-600 text-sm">
                    Yerel topluluklar ve diğer paydaşlarla işbirliği içinde çalışıyoruz.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4" style={{ borderColor: "#F4E3C7" }}>
                  <h4 className="font-semibold text-gray-700">Şeffaflık</h4>
                  <p className="text-gray-600 text-sm">
                    Tüm faaliyetlerimizde şeffaflık ve hesap verebilirlik ilkelerini benimsiyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-lg opacity-20"
                style={{ backgroundColor: "#516655" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg opacity-20"
                style={{ backgroundColor: "#F4E3C7" }}
              ></div>
              <div className="rounded-lg overflow-hidden shadow-2xl relative">
                <img
                  src="/images/i6.webp"
                  alt="Değerlerimiz"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 relative" style={{ backgroundColor: "#F4E3C7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block p-3 rounded-full mb-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)" }}
            >
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Ekibimiz</h2>
            <p className="text-gray-600 mt-4">Çitaların korunması için tutkuyla çalışan uzman ekibimiz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-48 relative">
                  <img
                    src={member.image}
                    alt={`Ekip Üyesi - ${member.name}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-[#577E85] mb-2 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block p-3 rounded-full mb-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #FBB657 0%, #F4E3C7 100%)" }}
            >
              <Globe className="h-8 w-8" style={{ color: "#516655" }} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Partnerlerimiz</h2>
            <p className="text-gray-600 mt-4">Çitaların korunması için birlikte çalıştığımız kuruluşlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center h-32 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#F4E3C7" }}
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-full opacity-70"
                  />
                </a>
              ))}
            </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Başarılarımız</h2>
            <p className="text-white/90">Çitaların korunması için gerçekleştirdiğimiz çalışmaların sonuçları</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "#FBB657" }}>
                15+
              </div>
              <div className="text-white">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "#FBB657" }}>
                500+
              </div>
              <div className="text-white">Korunan Çita</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "#FBB657" }}>
                25
              </div>
              <div className="text-white">Partner Ülke</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "#FBB657" }}>
                100K+
              </div>
              <div className="text-white">Bilinçlendirilen Kişi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Friends Section */}
      <section className="py-16 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/cheetah-friends.webp"
              alt="Dostlarımız - Çitalar"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-md ml-8 md:ml-16">
                <h2
                  className="text-3xl md:text-4xl font-bold text-black mb-4"
                  style={{
                    fontFamily: "'Inter', 'Helvetica', sans-serif",
                    fontWeight: "800",
                  }}
                >
                  Dostlarımız Sizin Yardımınızı Bekliyor!
                </h2>
                <p
                  className="text-lg text-black font-semibold leading-relaxed"
                  style={{
                    fontFamily: "'Inter', 'Helvetica', sans-serif",
                  }}
                >
                  Bu muhteşem hayvanların korunması için bizimle birlikte hareket edin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Hakkimizda; 