// User related types
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

// Animal related types
export interface Animal {
  id: number;
  name: string;
  species: string;
  description: string;
  imageUrl: string;
  habitat: string;
  diet: string;
  lifespan: string;
  conservationStatus: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Navigation types
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

// Global state types
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
  loading: boolean;
}

// Component props types
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
} 