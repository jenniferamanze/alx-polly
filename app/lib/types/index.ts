// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
}

// Poll types
export interface Poll {
  id: string;
  title: string;
  description?: string;
  author: User;
  category: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  totalVotes: number;
  options: PollOption[];
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage?: number;
}

export interface CreatePollData {
  title: string;
  description?: string;
  category: string;
  duration: number; // in days
  options: string[];
}

export interface VoteData {
  pollId: string;
  optionId: string;
}

// Auth types
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined;
}
