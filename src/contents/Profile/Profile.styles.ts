import styled, { css } from 'styled-components';

export const ProfileWrapper = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ProfileConteiner = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    max-width: 500px;
    background: ${theme.colors.background_light};
  `}
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProfileAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  align-self: center;
  margin: 2rem 0;

  span {
    position: absolute;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    inset: 0;
    z-index: 1;
    background: #000000aa;

    transition: all 0.2s;
  }

  &:hover {
    span {
      backdrop-filter: blur(1px);
      opacity: 1;
    }
  }
`;
