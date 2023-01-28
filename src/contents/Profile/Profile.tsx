import React from 'react';
import { Camera } from 'react-feather';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { useAuth } from 'contexts/Auth';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Avatar } from 'components/Avatar';

import * as S from './Profile.styles';

export const ProfileContent = () => {
  const { user } = useAuth();

  return (
    <S.ProfileWrapper>
      <S.ProfileConteiner>
        <S.ProfileHeader>
          <h3>
            Meu perfil / <span>Profissão: {faker.name.jobTitle()}</span>
          </h3>
        </S.ProfileHeader>
        <S.ProfileContent>
          <S.ProfileAvatar>
            <span>
              <Camera />
            </span>
            <Avatar name={user?.name} size="xlarge" src={'https://github.com/bielcoelho.png'} />
            {/*TODO: Quando passar o mouse em cima aparecer um lapis de "editar", poder escolher a foto */}
          </S.ProfileAvatar>
          <div>
            <label>E-mail</label>
            {/* TODO: este input tem que varia pra uma cor um pouco mais apagada e o next está reclando erro  */}
            <Input readOnly name="email" value={user?.email} />
          </div>
          <div>
            <label>Nome</label>
            <Input name="nome" value={user?.name} />
          </div>
          <div>
            <label>Telefone</label>
            <Input name="telefone" value={user?.phone ?? ''} />
          </div>
          <div>
            <label>Nova senha</label>
            <Input name="novaSenha" />
          </div>
          <div>
            <Button>Salvar</Button>
          </div>
        </S.ProfileContent>
      </S.ProfileConteiner>
    </S.ProfileWrapper>
  );
};
