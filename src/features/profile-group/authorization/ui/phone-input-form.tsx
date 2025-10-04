import { Button, Stack } from '@mui/material';
import IMask from 'imask';
import {
  FormContainer,
  type SubmitHandler,
  TextFieldElement,
} from 'react-hook-form-mui';

const transformPhoneNumber = (value: string) => {
  const masked = IMask.createMask({
    mask: '+7 (000) 000-00-00',
  });
  masked.resolve(value);
  return masked.value;
};

export const PhoneInputForm = (props: {
  onSuccess: SubmitHandler<{ phone: string }>;
}) => {
  const { onSuccess } = props;
  return (
    <FormContainer defaultValues={{ phone: '' }} onSuccess={onSuccess}>
      <Stack spacing={2}>
        <TextFieldElement
          required
          autoFocus
          name="phone"
          label="Номер телефона"
          placeholder="+7 (999) 999-99-99"
          transform={{
            input: transformPhoneNumber,
            output: (e) => e.target.value.replace(/\D/g, ''),
          }}
        />
        <Button type="submit">Получить код</Button>
      </Stack>
    </FormContainer>
  );
};
