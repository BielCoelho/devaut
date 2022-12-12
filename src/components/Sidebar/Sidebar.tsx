import React, { useState } from 'react';
import { Menu, Activity, Sun, Users, CheckCircle, User, LogOut } from 'react-feather';

import { useAuth } from 'contexts/Auth';

export const Sidebar = () => {
  const { handleLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  function toggleVisibility() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="h-screen w-full max-w-[240px] overflow-hidden bg-white shadow-lg">
        <header className="flex h-14 items-center justify-between border-b border-r border-orange-900 px-4">
          <h1 className="pointer-events-none select-none text-3xl font-extrabold tracking-tight">
            DEV<span className="text-orange-500">AULT</span>
          </h1>
          <div
            className="mt-1 transition-all duration-150 ease-in-out hover:text-orange-500"
            onClick={() => toggleVisibility()}
          >
            <Menu />
          </div>
        </header>
        <nav className="mt-4 flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-1">
            <p className="mb-2 text-xs font-bold uppercase text-orange-300">TRABALHO TERAPEUTICO</p>
            <span className="flex items-center gap-2 text-base capitalize transition duration-300 hover:text-orange-600">
              <Activity size={16} />
              Visão Geral
            </span>
            <span className="flex items-center gap-2 text-base capitalize">
              <Sun size={16} />
              Nossas Crianças
            </span>
            <span className="flex items-center gap-2 text-base capitalize">
              <Users size={16} />
              Profissionais
            </span>
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-bold uppercase text-orange-300">CONFIGURAÇÕES</p>
            <span className="flex items-center gap-2 text-base capitalize">
              <CheckCircle size={16} />
              Objetivos ESDM
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-2 text-xs font-bold uppercase text-orange-300">USUÁRIO</p>
            <span className="flex items-center gap-2 text-base capitalize">
              <User size={16} />
              Meu Perfil
            </span>
            <span
              className="flex cursor-pointer items-center gap-2 text-base capitalize transition-all duration-300 ease-in-out hover:text-orange-600"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              Sair
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};
