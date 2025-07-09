import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
} from '@mui/material';
import { theme } from '@shared/config/theme';
import { type ReactNode, useState } from 'react';
import ReactDOM from 'react-dom/client';

export enum ModalType {
  confirm = 'confirm',
  info = 'info',
}

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  content?: ReactNode;
  okText?: string;
  cancelText?: string;
  showCancelButton?: boolean;
  onSubmitButtonClick?: () => void;
  onCancelButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
  submitButtonDisabled?: boolean;
  afterOpenChange?: (open: boolean) => void;
  zIndex?: number;
  width?: number | string;
}

export interface OpenModalProps {
  type?: ModalType;
  title?: string;
  content?: ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onHidden?: (value: boolean) => void;
  onUnmount?: () => void;
  width?: number | string;
}

const DEFAULT_MODAL_SUBMIT_BUTTON_TEXT = 'OK';
const DEFAULT_MODAL_CANCEL_BUTTON_TEXT = 'Cancel';
const DEFAULT_MODAL_WIDTH = 520;

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    title,
    content,
    okText = DEFAULT_MODAL_SUBMIT_BUTTON_TEXT,
    cancelText = DEFAULT_MODAL_CANCEL_BUTTON_TEXT,
    showCancelButton = true,
    onSubmitButtonClick,
    onCancelButtonClick,
    submitButtonDisabled,
    afterOpenChange,
    zIndex,
    width = DEFAULT_MODAL_WIDTH,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={isOpen}
        onClose={onCancelButtonClick}
        maxWidth={false}
        sx={{
          style: {
            width,
            zIndex,
          },
        }}
        onTransitionEnter={() => afterOpenChange?.(true)}
        onTransitionExited={() => afterOpenChange?.(false)}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {showCancelButton && (
            <Button
              onClick={onCancelButtonClick}
              variant="outlined"
              color="primary"
            >
              {cancelText}
            </Button>
          )}
          <Button
            onClick={onSubmitButtonClick}
            variant="contained"
            color="primary"
            disabled={submitButtonDisabled}
          >
            {okText}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

Modal.confirm = (props: OpenModalProps) =>
  openModal({ ...props, type: ModalType.confirm });

Modal.info = (props: OpenModalProps) =>
  openModal({ ...props, type: ModalType.info });

const ModalWrapper = (props: OpenModalProps) => {
  const {
    type,
    title = '',
    content,
    okText,
    cancelText,
    onOk,
    onCancel,
    onHidden,
    onUnmount,
    width,
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const isConfirmModal = type === ModalType.confirm;

  const handleOk = () => {
    onOk?.();
    setIsOpen(false);
  };

  const handleCancel = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(false);
    if ((event.target as HTMLElement).textContent) {
      onCancel?.();
    }
  };

  const handleAfterOpenChange = (open: boolean) => {
    if (!open) {
      onHidden?.(false);
      requestAnimationFrame(() => {
        onUnmount?.();
      });
    }
  };

  return (
    <Modal
      zIndex={2000}
      isOpen={isOpen}
      title={title}
      content={content}
      okText={okText || 'Ok'}
      cancelText={cancelText || DEFAULT_MODAL_CANCEL_BUTTON_TEXT}
      showCancelButton={isConfirmModal}
      onSubmitButtonClick={handleOk}
      onCancelButtonClick={handleCancel}
      afterOpenChange={handleAfterOpenChange}
      width={width}
    />
  );
};

const openModal = (props: OpenModalProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = ReactDOM.createRoot(div);

  const handleUnmount = () => {
    root.unmount();
    div.remove();
  };

  root.render(<ModalWrapper {...props} onUnmount={handleUnmount} />);
};
