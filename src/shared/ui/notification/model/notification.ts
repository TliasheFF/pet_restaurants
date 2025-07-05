import { create } from 'zustand';

import { DEFAULT_DURATION } from '../constants/default-duration';

interface NotificationState {
  isOpen: boolean;
  message: string;
  duration: number;
  setIsOpen: (value: boolean) => void;
}

export const $notificationStore = create<NotificationState>((set) => ({
  isOpen: false,
  message: '',
  duration: DEFAULT_DURATION,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
