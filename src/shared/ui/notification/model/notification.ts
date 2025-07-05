import { create } from 'zustand';

import { DEFAULT_DURATION } from '../constants/default-duration';

interface NotificationState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  duration: number;
  setDuration: (value: number) => void;
}

export const notificationStore = create<NotificationState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  message: '',
  setMessage: (value: string) => set({ message: value }),
  duration: DEFAULT_DURATION,
  setDuration: (value: number) => set({ duration: value }),
}));
