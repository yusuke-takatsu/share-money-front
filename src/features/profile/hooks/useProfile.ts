import React from 'react';
import { useForm } from 'react-hook-form';
import { ProfileRegisterForm, defaultValues, profileSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetSanctumToken } from '@/features/api/setSanctumToken';
import { registerProfile } from '../api/registerProfile';

export const useProfile = () => {
  const { setSanctumToken } = useSetSanctumToken();
  const { registerProf } = registerProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileRegisterForm>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: ProfileRegisterForm) => {
    const isSunctumSuccess = await setSanctumToken();

    if (!isSunctumSuccess) return;

    const isLoginSuccess = await registerProf(data);

    if (!isLoginSuccess) return;
  };

  return { register, handleSubmit, errors, onSubmit };
};
