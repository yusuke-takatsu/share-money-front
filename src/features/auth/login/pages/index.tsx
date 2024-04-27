import { Button } from '@/components/button/Button';
import { InputText } from '@/components/inputs/InputText';
import styled from '@emotion/styled';
import React from 'react';
import { useLogin } from '../hooks/useLogin';

const InputTextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
`;

const ButtonWrapper = styled('div')`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 40px;
`;

const Login = () => {
  const { register, handleSubmit, onSubmit, errors } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextWrapper>
        <InputText
          label="メールアドレス"
          placeholder="example@example.com"
          register={register('email')}
          error={errors.email !== undefined}
          helperText={errors.email?.message}
        />
        <InputText
          type="password"
          label="パスワード"
          autoComplete="current-password"
          register={register('password')}
          error={errors.password !== undefined}
          helperText={errors.password?.message}
        />
      </InputTextWrapper>
      <ButtonWrapper>
        <Button type="submit">ログイン</Button>
      </ButtonWrapper>
    </form>
  );
};

export default Login;
