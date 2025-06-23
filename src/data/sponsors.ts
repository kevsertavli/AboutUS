// src/data/sponsors.ts

export interface Sponsor {
    name: string;
    image: string;
    url?: string;
  }
  
  export const sponsors: Sponsor[] = [
    {
      name: "WildLife Foundation",
      image: "/images/sponsor1.png",
      url: "https://wildlife.org",
    },
    {
      name: "EcoPlanet",
      image: "/images/sponsor2.png",
      url: "https://ecoplanet.org",
    },
    {
      name: "Nature First",
      image: "/images/sponsor3.png",
      url: "https://naturefirst.org",
    },
  ];
  