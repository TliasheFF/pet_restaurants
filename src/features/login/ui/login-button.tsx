import { LoginModal } from "@features/login/ui/login-modal";
import { AccountCircle, Login } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useUserData } from "@shared/store/user-data";
import { useState } from "react";

export const LoginButton = () => {
  const { isAuthorized } = useUserData();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={!isAuthorized ? () => setIsLoginModalOpen(true) : undefined}
      >
        {isAuthorized ? <AccountCircle /> : <Login />}
      </IconButton>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};
