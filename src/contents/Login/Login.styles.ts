import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;

  p {
    pointer-events: none;
    user-select: none;
    font-size: 3rem;
    letter-spacing: -0.025;
    /* color: ; */

    span {
      margin: -8px;
      font-weight: 900;
    }
  }
`;
