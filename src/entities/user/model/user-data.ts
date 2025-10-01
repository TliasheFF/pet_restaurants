import { create } from 'zustand';

interface IUserData {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
}

export const $userData = create<IUserData>((set) => ({
  isAuthorized: !!localStorage.getItem('accessToken'),
  setIsAuthorized: (value: boolean) => set({ isAuthorized: value }),
}));
