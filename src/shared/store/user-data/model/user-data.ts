import { create } from "zustand";

interface IUserData {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
}

export const userData = create<IUserData>((set) => ({
  isAuthorized: false,
  setIsAuthorized: (value: boolean) => set({ isAuthorized: value }),
}));
