import React from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Button from "../components/Button";
import { Shield, Heart, Users } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Ad Soyad zorunlu"),
  email: Yup.string().email("Geçerli bir e-posta girin").required("E-posta zorunlu"),
  phone: Yup.string(),
  city: Yup.string(),
  participationType: Yup.string().required(),
  message: Yup.string(),
  acceptTerms: Yup.boolean().oneOf([true], "Koşulları kabul etmelisiniz"),
  newsletter: Yup.boolean(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  participationType: "volunteer",
  message: "",
  acceptTerms: false,
  newsletter: false,
};

const Katil: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert("Katılım formunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.");
      resetForm();
    },
  });

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Why Support Section - Now with site's color scheme */}
      <section
        className="pt-20 py-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #577E85 0%, #516655 100%)",
        }}
      >
        {/* Animated background elements with site colors */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-10 left-10 w-32 h-32 rounded-full animate-pulse"
            style={{ backgroundColor: "#FBB657" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 rounded-full animate-bounce"
            style={{ backgroundColor: "#F4E3C7" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full animate-pulse"
            style={{ backgroundColor: "#516655" }}
          ></div>
          <div
            className="absolute bottom-40 right-1/3 w-16 h-16 rounded-full animate-bounce"
            style={{ backgroundColor: "#577E85" }}
          ></div>
        </div>

        <div className="w-full relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Çitaları Neden Desteklemelisiniz?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-lg px-4 md:px-8 lg:px-16">
              Çitalar, ekosistemin dengesini koruyan önemli avcılardır ve nesli tükenmekte olan türlerdendir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {/* Endangered Species */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-2 border-white/50 hover:bg-white">
              <div className="mb-6">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl group-hover:rotate-12"
                  style={{ background: "linear-gradient(135deg, #FBB657 0%, #F4E3C7 100%)" }}
                >
                  <Shield className="h-10 w-10" style={{ color: "#516655" }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#516655" }}>
                Nesli Tükenmekte
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Son 100 yılda çita popülasyonu %90 azaldı. Acil koruma önlemleri gerektiriyor.
              </p>
            </div>

            {/* Ecosystem Balance */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-2 border-white/50 hover:bg-white">
              <div className="mb-6">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl group-hover:rotate-12"
                  style={{ background: "linear-gradient(135deg, #577E85 0%, #516655 100%)" }}
                >
                  <Heart className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#516655" }}>
                Ekosistemin Dengesi
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Çitalar, doğal dengeyi koruyarak diğer türlerin sağlıklı kalmasını sağlar.
              </p>
            </div>

            {/* Social Responsibility */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-2 border-white/50 hover:bg-white">
              <div className="mb-6">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl group-hover:rotate-12"
                  style={{ background: "linear-gradient(135deg, #F4E3C7 0%, #FBB657 100%)" }}
                >
                  <Users className="h-10 w-10" style={{ color: "#577E85" }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#516655" }}>
                Toplumsal Sorumluluk
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Gelecek nesillere bu muhteşem hayvanları bırakmak bizim sorumluluğumuz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section with site's color scheme */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #F4E3C7 0%, #FBB657 100%)",
        }}
      >
        <div className="w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 mx-4 md:mx-8 lg:mx-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#516655] to-[#577E85] bg-clip-text text-transparent">
                Destek Formu
              </h2>
              <p className="text-gray-600 text-lg">Çitaların korunması için bizimle birlikte hareket edin</p>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-semibold block">
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#516655]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm">{formik.errors.name}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-semibold block">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#516655]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-semibold block">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#516655]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-gray-700 font-semibold block">
                    Şehir
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#516655]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold block mb-2">Katılım Türü</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="participationType"
                      value="volunteer"
                      checked={formik.values.participationType === "volunteer"}
                      onChange={formik.handleChange}
                    />
                    Gönüllü
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="participationType"
                      value="donor"
                      checked={formik.values.participationType === "donor"}
                      onChange={formik.handleChange}
                    />
                    Bağışçı
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-semibold block">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#516655]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formik.values.acceptTerms}
                    onChange={formik.handleChange}
                  />
                  <span>
                    <span className="text-red-500">*</span> Koşulları kabul ediyorum
                  </span>
                </label>
                {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                  <div className="text-red-500 text-sm">{formik.errors.acceptTerms}</div>
                )}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formik.values.newsletter}
                    onChange={formik.handleChange}
                  />
                  E-posta ile bilgilendirme almak istiyorum
                </label>
              </div>
              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full md:w-auto px-8 py-3">
                  Gönder
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Katil; 