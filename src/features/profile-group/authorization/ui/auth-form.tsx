import { useState } from 'react';

import { useGenerateLoginCode } from '../api/use-generate-code';
import { useLogin } from '../api/use-login';
import { cleanePhone } from '../utils/clean-phone';
import { OtpInputForm } from './otp-input-form';
import { PhoneInputForm } from './phone-input-form';

export const AuthForm = () => {
  const [phone, setPhone] = useState<string>('');
  const { mutate: generateCode, isSuccess } = useGenerateLoginCode();
  const { mutate: onLogin } = useLogin();

  const handleGenerateCode = (value: { phone: string }) => {
    const cleanedPhone = cleanePhone(value.phone);
    setPhone(cleanedPhone);
    generateCode({ phone: cleanedPhone });
  };

  const handleSubmitCode = (values: { code: string }) => {
    onLogin({
      phone,
      code: values.code,
    });
  };

  if (isSuccess) {
    return <OtpInputForm length={4} onSuccess={handleSubmitCode} />;
  }

  return <PhoneInputForm onSuccess={handleGenerateCode} />;
};
