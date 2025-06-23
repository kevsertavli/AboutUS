import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Button from "../components/Button";
import { MapPin, Target, AlertTriangle, Baby, Users, ArrowRight } from "lucide-react";

const Bilgi: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section - Text removed completely */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/images/cheetah-portrait.jpg"
          alt="Çitalar Hakkında - Çita Portresi"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </section>

      {/* Cheetah Cubs Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full">
          <div className="flex items-center gap-3 mb-8 px-4 md:px-8 lg:px-16">
            <div
              className="p-3 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg, #FBB657 0%, #F4E3C7 100%)" }}
            >
              <Baby className="h-8 w-8" style={{ color: "#516655" }} />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#516655] to-[#577E85] bg-clip-text text-transparent">
              Çita Yavruları
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12 px-4 md:px-8 lg:px-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/cheetah-cub.jpg"
                alt="Çita yavrusu"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#516655" }}>
                Yavru Çitaların Özellikleri
              </h3>
              <p className="text-gray-600 mb-4">
                Çita yavruları doğduklarında gözleri kapalıdır ve yaklaşık 10-14 gün sonra açılır. İlk haftalarda
                tamamen anneye bağımlıdırlar ve sürekli bakım gerektirirler.
              </p>
              <p className="text-gray-600 mb-4">
                Yavru çitalar, karakteristik siyah gözyaşı çizgilerine sahip olsalar da, vücutlarındaki benekler
                yetişkinlere göre daha belirsizdir. Ayrıca sırtlarında gri-gümüş renkli uzun tüyleri vardır.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                  <span className="text-gray-600">
                    <strong>Doğum ağırlığı:</strong> 250-300 gram
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                  <span className="text-gray-600">
                    <strong>Gözler açılma:</strong> 10-14 gün
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                  <span className="text-gray-600">
                    <strong>Sütten kesme:</strong> 3-4 ay
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                  <span className="text-gray-600">
                    <strong>Bağımsızlık:</strong> 14-18 ay
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded-2xl shadow-xl border border-white/50 mx-4 md:mx-8 lg:mx-16"
            style={{ background: "linear-gradient(135deg, #F4E3C7 0%, rgba(244, 227, 199, 0.8) 100%)" }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: "#516655" }}>
              Yavru Bakımı ve Gelişim
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: "#FBB657" }}>
                  3-5
                </div>
                <div className="text-sm text-gray-600">Yavru Sayısı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: "#FBB657" }}>
                  %70
                </div>
                <div className="text-sm text-gray-600">İlk Yıl Ölüm Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: "#FBB657" }}>
                  18 ay
                </div>
                <div className="text-sm text-gray-600">Anne ile Kalma Süresi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F4E3C7" }}>
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 px-4 md:px-8 lg:px-16" style={{ color: "#516655" }}>
            Çitaların Özellikleri
          </h2>

          <div className="space-y-12 px-4 md:px-8 lg:px-16">
            {/* Speed Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#516655" }}>
                  İnanılmaz Hız
                </h3>
                <p className="text-gray-600 mb-4">
                  Çitalar, dünyanın en hızlı kara hayvanıdır. Saatte 120 kilometreye kadar çıkabilen hızlarıyla avlarını
                  yakalamak için kısa mesafelerde inanılmaz bir performans sergilerler.
                </p>
                <p className="text-gray-600 mb-4">
                  Sadece 3 saniyede 0'dan 95 km/h hıza ulaşabilirler. Bu hızlanma kabiliyeti, birçok spor arabasından
                  bile daha iyidir.
                </p>
                <div className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: "#FBB657" }}>
                  <div className="text-3xl font-bold text-white">120 km/h</div>
                  <div className="text-sm text-white">Maksimum Hız</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/cheetah-speed.jpg"
                  alt="Çita hız - Koşan çita"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Length/Size Section */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/cheetah-length.jpg"
                    alt="Çita uzunluk - Çitanın vücut ölçüleri"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Moved dimension boxes here - directly under the photo */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg text-center shadow-lg" style={{ backgroundColor: "#FBB657" }}>
                    <div className="text-2xl font-bold text-white">7-8m</div>
                    <div className="text-sm text-white">Tam Uzanma</div>
                  </div>
                  <div className="p-4 rounded-lg text-center shadow-lg" style={{ backgroundColor: "#FBB657" }}>
                    <div className="text-2xl font-bold text-white">110-140cm</div>
                    <div className="text-sm text-white">Vücut Uzunluğu</div>
                  </div>
                </div>
                {/* Additional dimension info next to the photo */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg text-center shadow-md" style={{ backgroundColor: "#516655" }}>
                    <div className="text-xl font-bold text-white">60-80cm</div>
                    <div className="text-xs text-white">Kuyruk</div>
                  </div>
                  <div className="p-3 rounded-lg text-center shadow-md" style={{ backgroundColor: "#516655" }}>
                    <div className="text-xl font-bold text-white">70-90cm</div>
                    <div className="text-xs text-white">Yükseklik</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#516655" }}>
                  Vücut Ölçüleri ve Uzanma Kabiliyeti
                </h3>
                <p className="text-gray-600 mb-4">
                  Çitalar, koşarken vücutlarını tam olarak uzattıklarında 7-8 metre uzunluğa kadar ulaşabilirler. Bu
                  uzanma kabiliyeti, onların adım uzunluğunu artırarak hızlarını maksimize etmelerine yardımcı olur.
                </p>
                <p className="text-gray-600 mb-4">
                  Vücut uzunlukları 110-140 cm, kuyruk uzunlukları ise 60-80 cm arasındadır. Uzun ve esnek omurgaları,
                  koşu sırasında vücutlarını yay gibi bükerek daha uzun adımlar atmalarını sağlar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    <span className="text-gray-600">
                      <strong>Ağırlık:</strong> 35-65 kg
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    <span className="text-gray-600">
                      <strong>Adım uzunluğu:</strong> 6-7 metre
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    <span className="text-gray-600">
                      <strong>Koşu süresi:</strong> Maksimum 30 saniye
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
                    <span className="text-gray-600">
                      <strong>Kalp atışı:</strong> Dakikada 250 atış (koşu sırasında)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habitat and Distribution Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="p-3 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
            >
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "#516655" }}>
              Yaşam Alanı ve Dağılımı
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#516655" }}>
                Doğal Habitatları
              </h3>
              <p className="text-gray-600 mb-4">
                Çitalar genellikle Afrika'nın doğu ve güney bölgelerindeki açık savanlar, çayırlar ve yarı çöl
                bölgelerinde yaşarlar. Küçük bir popülasyon da İran'ın kuzeydoğusunda bulunur.
              </p>
              <p className="text-gray-600 mb-4">
                Geniş açık alanları tercih ederler çünkü avlanma stratejileri yüksek hızda koşmaya dayanır. Ağaçlık
                alanları da gözetleme noktaları olarak kullanırlar.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Afrika savanları ve çayırları</li>
                <li>Yarı çöl bölgeleri</li>
                <li>Açık ormanlık alanlar</li>
                <li>İran'da küçük popülasyon</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/cheetah-habitat.jpg"
                alt="Çita yaşam alanı - Doğal habitat"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className="p-6 rounded-2xl shadow-xl border border-white/50"
            style={{ background: "linear-gradient(135deg, #F4E3C7 0%, rgba(244, 227, 199, 0.8) 100%)" }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: "#516655" }}>
              Güncel Dağılım
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#FBB657" }}>
                  6,500+
                </div>
                <div className="text-sm text-gray-600">Afrika'da</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#FBB657" }}>
                  50-70
                </div>
                <div className="text-sm text-gray-600">İran'da</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#FBB657" }}>
                  25+
                </div>
                <div className="text-sm text-gray-600">Ülkede Bulunur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diet and Hunting Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F4E3C7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="p-3 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg, #FBB657 0%, #F4E3C7 100%)" }}
            >
              <Target className="h-8 w-8" style={{ color: "#516655" }} />
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "#516655" }}>
              Beslenme ve Avcılığı
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/cheetah-hunting-action.jpg"
                alt="Çita avlanma - Av peşinde koşan çita"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#516655" }}>
                  Avlama Stratejileri
                </h3>
                <p className="text-gray-600 mb-4">
                  Çitalar etçildir ve genellikle orta boy toynaklı hayvanları avlarlar. Ceylan, impala ve genç
                  antiloplar tercih ettikleri avlar arasındadır. Ayrıca tavşan gibi küçük memelileri de avlayabilirler.
                </p>
                <p className="text-gray-600 mb-4">
                  Avlanma stratejileri, kısa mesafelerde inanılmaz hızlanma ve yüksek hız üzerine kuruludur. Bir çita, 3
                  saniyede 0'dan 95 km/h hıza ulaşabilir ve kısa süreler için 120 km/h hıza kadar çıkabilir.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-semibold mb-2" style={{ color: "#516655" }}>
                    Başarı Oranı
                  </h4>
                  <div className="text-2xl font-bold" style={{ color: "#FBB657" }}>
                    %50-60
                  </div>
                  <div className="text-sm text-gray-600">Avlanma başarısı</div>
                </div>
              </div>

              {/* Info cards next to image */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h4 className="font-semibold mb-2" style={{ color: "#516655" }}>
                    Ana Avları
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Ceylan</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">İmpala</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Genç Antilop</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tavşan</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h4 className="font-semibold mb-2" style={{ color: "#516655" }}>
                    Avlanma Zamanı
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sabah erken</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Akşam geç</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Serin saatler</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h4 className="font-semibold mb-2" style={{ color: "#516655" }}>
                    Günlük İhtiyaç
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold" style={{ color: "#FBB657" }}>
                      3-5 kg
                    </div>
                    <div className="text-sm text-gray-600">Et/gün</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats and Conservation Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="p-3 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)" }}
            >
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "#516655" }}>
              Tehditler ve Koruma
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#516655" }}>
              Tehdit Altında
            </h3>
            <p className="text-gray-600 mb-4">
              Çitalar, Uluslararası Doğa Koruma Birliği (IUCN) tarafından "Tehlike Altında" olarak sınıflandırılmıştır.
              Dünya genelinde yaklaşık 7,100 çita kaldığı tahmin edilmektedir.
            </p>
            <p className="text-gray-600 mb-6">
              Habitat kaybı, insan-yaban hayatı çatışması ve yasa dışı yaban hayatı ticareti, çitaların karşı karşıya
              olduğu başlıca tehditlerdir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className="p-6 rounded-2xl shadow-xl"
              style={{ background: "linear-gradient(135deg, #F4E3C7 0%, rgba(244, 227, 199, 0.8) 100%)" }}
            >
              <h4 className="text-xl font-semibold mb-3" style={{ color: "#516655" }}>
                Ana Tehditler
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-0">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#FBB657" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Habitat Kaybı</div>
                    <div className="text-sm text-gray-600">
                      Tarım ve şehirleşme nedeniyle yaşam alanlarının azalması
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#FBB657" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">İnsan-Çita Çatışması</div>
                    <div className="text-sm text-gray-600">Çiftlik hayvanlarına saldırı nedeniyle öldürülme</div>
                  </div>
                </li>
                <li className="flex items-start gap-14">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#FBB657" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Yasa Dışı Ticaret</div>
                    <div className="text-sm text-gray-600">Yavru çitaların kaçak pet ticareti</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#FBB657" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Genetik Çeşitlilik Kaybı</div>
                    <div className="text-sm text-gray-600">Küçük popülasyonlar nedeniyle akrabalı çiftleşme</div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="p-6 rounded-2xl shadow-xl"
              style={{ background: "linear-gradient(135deg, #F4E3C7 0%, rgba(244, 227, 199, 0.8) 100%)" }}
            >
              <h4 className="text-xl font-semibold mb-3" style={{ color: "#516655" }}>
                Koruma Çabaları
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#516655" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Korunan Alanlar</div>
                    <div className="text-sm text-gray-600">Milli parklar ve rezerv alanların genişletilmesi</div>
                  </div>
                </li>
                <li className="flex items-start gap-12">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#516655" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Toplum Eğitimi</div>
                    <div className="text-sm text-gray-600">Yerel toplulukların bilinçlendirilmesi</div>
                  </div>
                </li>
                <li className="flex items-start gap-14">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#516655" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Yeniden Yerleştirme</div>
                    <div className="text-sm text-gray-600">Çitaların güvenli alanlara taşınması</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#516655" }}></div>
                  <div>
                    <div className="font-semibold text-gray-700">Araştırma Projeleri</div>
                    <div className="text-sm text-gray-600">Çita davranışları ve ekolojisi üzerine çalışmalar</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="text-center p-8 rounded-2xl shadow-xl"
            style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)" }}
          >
            <h4 className="text-2xl font-bold text-white mb-4">Acil Eylem Gerekiyor</h4>
            <p className="text-white/90 mb-6">
              Son 100 yılda çita popülasyonu %90 azaldı. Etkili koruma önlemleri alınmazsa, çitalar 20 yıl içinde nesli
              tükenebilir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold" style={{ color: "#FBB657" }}>
                  100,000
                </div>
                <div className="text-white text-sm">1900'deki Popülasyon</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: "#FBB657" }}>
                  7,100
                </div>
                <div className="text-white text-sm">Güncel Popülasyon</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: "#FBB657" }}>
                  %90
                </div>
                <div className="text-white text-sm">Azalma Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Call to Action */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#F4E3C7" }}>
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#FBB657" }}></div>
          <div
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full"
            style={{ backgroundColor: "#577E85" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full"
            style={{ backgroundColor: "#516655" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div
              className="inline-block p-4 rounded-full mb-6 shadow-xl"
              style={{ background: "linear-gradient(135deg, #516655 0%, #577E85 100%)" }}
            >
              <Users className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#516655] to-[#577E85] bg-clip-text text-transparent">
              Gönüllü Ol
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Çitaların korunması için bizimle birlikte hareket et. Sen de bu önemli misyonun bir parçası ol.
            </p>
          </div>

          <Link to="/katil">
            <Button
              size="lg"
              className="px-12 py-5 text-xl font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex items-center justify-center gap-3 mx-auto"
              style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)", color: "white" }}
            >
              <Users className="h-6 w-6 mr-3 group-hover:animate-pulse" />
              Gönüllü Olmak İstiyorum
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <p className="text-gray-500 mt-6 text-sm">Birlikte daha güçlüyüz. Çitaların geleceği için harekete geç.</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Bilgi; 