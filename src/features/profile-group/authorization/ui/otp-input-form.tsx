import { Box, Button, FormHelperText, Stack } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';
import {
  Controller,
  type ControllerRenderProps,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';
import { FormContainer } from 'react-hook-form-mui';

export const OtpInputForm = (props: {
  length: number;
  onSuccess: SubmitHandler<{ code: string }>;
}) => {
  const { length, onSuccess } = props;

  const handleInputChange = (
    field: ControllerRenderProps<FieldValues, 'code'>,
    value: string,
  ) => {
    if (value.length === length) {
      onSuccess({ code: value });
    }
    return field.onChange(value);
  };

  return (
    <FormContainer defaultValues={{ code: '' }} onSuccess={onSuccess}>
      <Stack spacing={2}>
        <Controller
          name="code"
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
                onChange={(value) => handleInputChange(field, value)}
              />
              {fieldState.invalid && (
                <FormHelperText error>
                  {fieldState.error?.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />
        <Button type="submit">Войти</Button>
      </Stack>
    </FormContainer>
  );
};
