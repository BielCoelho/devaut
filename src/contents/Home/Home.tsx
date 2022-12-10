import React from 'react';

import { Button } from 'components/Button/Button';
import { Sidebar } from 'components/Sidebar';
import { Login } from 'contents/Login';
import { useLoginMutation } from 'hooks/react-query';
import { withAuth } from 'utils/withAuth';

export const HomeContent = withAuth(() => {
  const { mutateAsync } = useLoginMutation();

  const handleLogin = () => {
    mutateAsync({
      email: 'teste@teste.com',
      password: '123456',
    });
  };

  return (
    <>
      <Sidebar />
      <Login />
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
});
