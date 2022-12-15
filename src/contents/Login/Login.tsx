import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuth } from 'contexts/Auth';
import { Logo } from 'components/Logo';

import * as S from './Login.styles';

export const LoginContent = () => {
  const { handleAuth } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'teste@teste.com',
      password: '123456',
    },
  });

  const onSubmit = useCallback(handleSubmit(handleAuth), []);

  return (
    <S.LoginWrapper>
      <S.LoginFormWrapper>
        <Logo />
        <S.LoginForm onSubmit={onSubmit}>
          <h1>Login</h1>
          <Input name="email" type="email" label="E-mail" control={control} />
          <Input name="password" type="password" label="Senha" control={control} />
          <Button type="submit" style={{ marginTop: 16 }}>
            Entrar
          </Button>
        </S.LoginForm>
      </S.LoginFormWrapper>
    </S.LoginWrapper>
  );
};
