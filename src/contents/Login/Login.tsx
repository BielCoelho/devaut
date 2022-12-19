import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuth } from 'contexts/Auth';
import { Logo } from 'components/Logo';
import { type AuthFormData, AuthFormSchema } from 'validations/auth.validation';

import * as S from './Login.styles';

export const LoginContent = () => {
  const { handleAuth } = useAuth();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthFormData>({
    resolver: zodResolver(AuthFormSchema),
  });

  const onSubmit = useCallback(handleSubmit(handleAuth), []);

  return (
    <S.LoginWrapper>
      <S.LoginFormWrapper>
        <Logo />
        <S.LoginForm onSubmit={onSubmit}>
          <h1>Login</h1>
          <Input
            name="email"
            type="email"
            label="E-mail"
            control={control}
            error={errors['email']}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            control={control}
            error={errors['password']}
          />
          <Button type="submit" style={{ marginTop: 16 }}>
            Entrar
          </Button>
        </S.LoginForm>
      </S.LoginFormWrapper>
    </S.LoginWrapper>
  );
};
