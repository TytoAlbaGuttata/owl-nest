/**
 * @description Defines the structure of the authenticated user profile.
 */
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  roles?: string[];
}

/**
 * @description State and actions for the authentication store.
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (user: UserProfile) => void;
  logout: () => void;
}

export interface Service {
  id: string;
  title: string;
  url: string;
}
