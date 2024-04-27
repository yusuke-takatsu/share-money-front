import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm, loginSchema, defaultValues } from './schema';
import { useSetSanctumToken } from '@/features/api/setSanctumToken';
import { useUserLogin } from '../../api/login';
import { useRouter } from 'next/router';

export const useLogin = () => {
  const router = useRouter();

  const { setSanctumToken } = useSetSanctumToken();
  const { userLogin } = useUserLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    const isSunctumSuccess = await setSanctumToken();

    if (!isSunctumSuccess) return;

    const isLoginSuccess = await userLogin(data);

    if (!isLoginSuccess) return;

    router.push('/mypage');
  };

  return { register, handleSubmit, errors, onSubmit };
};
