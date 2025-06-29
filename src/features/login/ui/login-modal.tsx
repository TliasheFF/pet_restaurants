import { Backdrop, Box, Modal, type SxProps } from "@mui/material";
import { type FC } from "react";
import { LoginForm } from "./login-form";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const boxStyles: SxProps = {
  padding: 2,
  width: 300,
  height: "fit-content",
  borderRadius: 2,
  backgroundColor: "background.paper",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={boxStyles}>
        <LoginForm />
      </Box>
    </Modal>
  );
};
