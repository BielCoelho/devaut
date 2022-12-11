import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuth } from 'contexts/Auth';

export const LoginContent = () => {
  const { handleLogin, user } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'teste@teste.com',
      password: '123456',
    },
  });

  const onSubmit = useCallback(handleSubmit(handleLogin), []);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-2">
        <p className="pointer-events-none select-none text-5xl  font-extrabold tracking-tight">
          DEV<span className="text-orange-500">AULT</span>
        </p>
        {user && <h2>Logado como {user.name}</h2>}
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label className="mb-2 block font-bold text-orange-700">E-Mail</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  placeholder="Enter your Email"
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              );
            }}
          />
          <label className="mb-2 mt-4 block font-bold text-orange-700">Password</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  type="password"
                  placeholder="Enter your Password"
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              );
            }}
          />
          <div className="mt-4">
            <Button type="submit">Login</Button>
          </div>
          <div className="flex gap-2">
            <div className="mt-4 w-full">
              <Button>Sign Up</Button>
            </div>
            <div className="mt-4 w-full">
              <Button>Recover Password</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
