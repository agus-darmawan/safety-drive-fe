import { create } from 'zustand';

type AuthState = 'login' | 'forgot-password' | 'register';

interface AuthModalState {
  isOpen: boolean;
  authState: AuthState;
  openModal: (state: AuthState) => void;
  closeModal: () => void;
  setAuthState: (state: AuthState) => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  authState: 'login',
  openModal: (state: AuthState) => set({ isOpen: true, authState: state }),
  closeModal: () => set({ isOpen: false }),
  setAuthState: (state: AuthState) => set({ authState: state }),
}));
