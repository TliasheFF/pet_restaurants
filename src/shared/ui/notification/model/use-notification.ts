import { DEFAULT_DURATION } from '../constants/default-duration';
import { notificationStore } from './notification';

export const useNotification = () => {
  const showNotification = (message: string, duration?: number) => {
    notificationStore.setState({
      isOpen: true,
      message,
      duration: duration ?? DEFAULT_DURATION,
    });
  };

  const hideNotification = () => {
    notificationStore.setState({ isOpen: false });
  };

  return { showNotification, hideNotification };
};
