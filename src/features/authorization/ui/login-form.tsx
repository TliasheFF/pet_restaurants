import { Box, Button, FormHelperText, Stack } from '@mui/material';
import IMask from 'imask';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useEffect } from 'react';
import {
  Controller,
  FormContainer,
  TextFieldElement,
  useFormContext,
} from 'react-hook-form-mui';

import { useGenerateLoginCode } from '../api/use-generate-code';
import { useLogin } from '../api/use-login';
import { cleanePhone } from '../utils/clean-phone';

const OtpInputField = ({ name, length }: { name: string; length: number }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) =>
          value.length === length || 'Код должен содержать 4 символа',
      }}
      render={({ field, fieldState }) => (
        <Box>
          <MuiOtpInput
            sx={{ gap: 1 }}
            {...field}
            autoFocus
            length={length}
            onChange={(value) => field.onChange(value)}
          />
          {fieldState.invalid && (
            <FormHelperText error>{fieldState.error?.message}</FormHelperText>
          )}
        </Box>
      )}
    />
  );
};

// раскидать на отдельные шаги ввод номера и ввод кода
export const LoginForm = (props: { onClose?: () => void }) => {
  const { onClose } = props;
  const { mutate: generateCode, isSuccess } = useGenerateLoginCode();
  const { mutate: onLogin, isSuccess: isLoginSuccess } = useLogin();

  useEffect(() => {
    if (isLoginSuccess) {
      onClose?.();
    }
  }, [isLoginSuccess, onClose]);

  const onSubmit = (values: { phone: string; code: string }) => {
    if (isSuccess) {
      onLogin({ ...values, phone: cleanePhone(values.phone) });
      return;
    }
    generateCode({ phone: cleanePhone(values.phone) });
  };

  const transformPhoneNumber = (value: string) => {
    const masked = IMask.createMask({
      mask: '+7 (000) 000-00-00',
    });
    masked.resolve(value);
    return masked.value;
  };

  return (
    <FormContainer defaultValues={{ phone: '', code: '' }} onSuccess={onSubmit}>
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
        {isSuccess && <OtpInputField name="code" length={4} />}
        <Button type="submit">{isSuccess ? 'Войти' : 'Получить код'}</Button>
      </Stack>
    </FormContainer>
  );
};
