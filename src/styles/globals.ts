import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.main};
  }

  
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.base};
  }

  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  } 

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }  

    *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #555;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #777;
  }
`;
