import React from 'react';

import * as S from './Logo.styles';

export const Logo = () => {
  return (
    <S.LogoContainer>
      <S.LogoText>
        dev
        <S.LogoHighlight>aut</S.LogoHighlight>
      </S.LogoText>
    </S.LogoContainer>
  );
};
