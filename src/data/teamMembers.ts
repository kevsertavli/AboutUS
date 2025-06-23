// src/data/teamMembers.ts

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    description: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      name: "Kurbik Kurbiko",
      role: "Kurucu Ortak",
      image: "/images/person2.webp",
      description: "Yaban hayatını koruma konusunda 15 yıllık deneyime sahip bir lider.",
    },
    {
      name: "Alfred",
      role: "Biyolog",
      image: "/images/person4.jpg",
      description: "Çitaların davranışsal analizleri üzerine çalışmalar yürütüyor.",
    },
    {
      name: "Rızzık",
      role: "Veteriner",
      image: "/images/person5.jpg",
      description: "Yaralı hayvanların rehabilitasyonundan sorumlu uzman.",
    },
    {
      name: "Einstein",
      role: "İletişim Sorumlusu",
      image: "/images/person6.jpg",
      description: "Toplumla etkileşim ve farkındalık kampanyalarının lideri.",
    },
    {
      name: "Ali Koç",
      role: "Saha Koordinatörü",
      image: "/images/person7.jpg",
      description: "Afrika'daki saha çalışmalarını ve verilerin toplanmasını yönetiyor.",
    },
    {
      name: "Mia Duran",
      role: "Gönüllü Koordinatörü",
      image: "/images/person8.jpg",
      description: "Gönüllüleri yönlendiren ve eğiten deneyimli bir lider.",
    },
  ];
  