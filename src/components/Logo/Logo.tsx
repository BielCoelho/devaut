import React from 'react';

import * as S from './Logo.styles';

export const Logo = ({ size = 2 }) => {
  return (
    <S.LogoContainer size={size}>
      <h1>
        dev
        <span>aut</span>
      </h1>
    </S.LogoContainer>
  );
};
