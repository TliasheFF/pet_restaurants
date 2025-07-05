import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

export const LogoutModal = (props: {
  isOpen: boolean;
  onCancel: () => void;
  onLogout: () => void;
}) => {
  const { isOpen, onLogout, onCancel } = props;

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogContent>
        <DialogContentText>Вы уверены, что хотите выйти?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Отменить</Button>
        <Button onClick={onLogout}>Выйти</Button>
      </DialogActions>
    </Dialog>
  );
};
