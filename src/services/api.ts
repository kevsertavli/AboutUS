import axios from 'axios';
import type { Animal, User, ApiResponse } from '../types';

// Mock data for animals
const mockAnimals: Animal[] = [
  {
    id: 1,
    name: 'Cheetah',
    species: 'Acinonyx jubatus',
    description: 'The cheetah is the fastest land animal, capable of running at speeds of up to 70 mph.',
    imageUrl: '/images/cheetah-hero.jpg',
    habitat: 'African savannas and grasslands',
    diet: 'Carnivorous - primarily gazelles and impalas',
    lifespan: '10-12 years in the wild',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 2,
    name: 'Lion',
    species: 'Panthera leo',
    description: 'Known as the "King of the Jungle", lions are social big cats that live in prides.',
    imageUrl: '/images/lion.jpg',
    habitat: 'African savannas and grasslands',
    diet: 'Carnivorous - large ungulates',
    lifespan: '10-14 years in the wild',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 3,
    name: 'Elephant',
    species: 'Loxodonta africana',
    description: 'The largest land animal, elephants are highly intelligent and social creatures.',
    imageUrl: '/images/elephant.jpg',
    habitat: 'African savannas and forests',
    diet: 'Herbivorous - grasses, leaves, bark, fruits',
    lifespan: '60-70 years',
    conservationStatus: 'Endangered'
  },
  {
    id: 4,
    name: 'Giraffe',
    species: 'Giraffa camelopardalis',
    description: 'The tallest living terrestrial animal, giraffes have long necks to reach high vegetation.',
    imageUrl: '/images/giraffe.jpg',
    habitat: 'African savannas and woodlands',
    diet: 'Herbivorous - leaves, fruits, flowers',
    lifespan: '20-25 years',
    conservationStatus: 'Vulnerable'
  }
];

// Create axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // Mock API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Animal API functions
export const animalApi = {
  getAll: async (): Promise<Animal[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockAnimals;
  },

  getById: async (id: number): Promise<Animal | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockAnimals.find(animal => animal.id === id) || null;
  },

  search: async (query: string): Promise<Animal[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockAnimals.filter(animal => 
      animal.name.toLowerCase().includes(query.toLowerCase()) ||
      animal.species.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// User API functions
export const userApi = {
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication
    if (email === 'admin@example.com' && password === 'password') {
      const user: User = {
        id: 1,
        name: 'Admin User',
        email: 'admin@example.com',
        avatar: '/images/avatar.jpg'
      };
      
      const token = 'mock-jwt-token';
      localStorage.setItem('token', token);
      
      return { user, token };
    }
    
    throw new Error('Invalid credentials');
  },

  logout: async (): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    localStorage.removeItem('token');
  },

  getProfile: async (): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Not authenticated');
    }
    
    return {
      id: 1,
      name: 'Admin User',
      email: 'admin@example.com',
      avatar: '/images/avatar.jpg'
    };
  }
};

export default api; 