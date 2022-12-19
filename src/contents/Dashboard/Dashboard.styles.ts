import styled from 'styled-components';

export const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DashGreetings = styled.h1`
  margin-bottom: 1rem;
`;

export const DashContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
