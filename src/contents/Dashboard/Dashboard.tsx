import React from 'react';

import { useAuth } from 'contexts/Auth';
import { getGreetingsMessage } from 'helpers/getGreetingsMessage';
import { Todo } from 'components/Todo';

import * as S from './Dashboard.styles';

export const DashboardContent = () => {
  const { user } = useAuth();
  const boasVindas = getGreetingsMessage();

  return (
    <S.DashContainer>
      <S.DashGreetings>
        {boasVindas}, {user?.name}
      </S.DashGreetings>
      <S.DashContent>
        <div>
          Proximos Aniversariantes
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>franks</li>
            <li>tein</li>
            <li>da silva</li>
            <li>frik</li>
            <li>corredor</li>
            <li>usain bolt</li>
          </ul>
        </div>
        <div>Ultimas atividades</div>
        <div>
          <Todo />
        </div>
      </S.DashContent>
    </S.DashContainer>
  );
};
