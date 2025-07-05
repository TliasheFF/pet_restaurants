import { userData } from './user-data';

interface UserDataReturnType {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
}

export const useUserData = (): UserDataReturnType => {
  const { isAuthorized, setIsAuthorized } = userData();

  return { isAuthorized, setIsAuthorized };
};
