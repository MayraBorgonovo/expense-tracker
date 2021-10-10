import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
  }

  // .root {
  //   height: calc(100vh - 11rem);
  //   overflow: scroll;
  // }

  body {
    background: #3f3f3f;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    transition: background .2s linear;
    font-size: 1.6rem;
  }

  li.active {
    color: ${({ theme }) => theme.primary};
  }

  li.active::before {
    background: ${({ theme }) => theme.primary};
  }

  .card.chart,
  .newTransaction {
    box-shadow:  ${({ theme }) => theme.boxShadow};
  }

  .expenses-filter select option {
    background: ${({ theme }) => theme.background};
  }

  .transaction,
  .newTransaction,
  .secondary {
    background: ${({ theme }) => theme.backgroundSecondary};
  }

  h1,
  h2,
  h3,
  p {
    margin: 0.5rem 0;
    font-weight: 400;
  }

  h2 {
    font-size: 1.6rem;
  }

  .btn {
    background: transparent;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    vertical-align: middle;
  }

  .addBtn {
    font-size: 1.8rem;
  }

  .addBtn:not(disabled) {
    opacity: 1;
    color: ${({ theme }) => theme.primary};
  }
  
  .addBtn:disabled {
    color: rgb(139 138 138 / 65%);
  }

  .btn svg {
    color: ${({ theme }) => theme.primary};
  }
`;

export const lightTheme = {
  background: "#f1f1f1",
  backgroundSecondary: "#fff",
  text: "#121212",
  primary: "#0478c9",
  boxShadow: "0px 0px 6px 1px rgba(0, 0, 0, 0.25)"
};

export const darkTheme = {
  background: "#242424",
  backgroundSecondary: "#2e2e2e",
  text: "#ffffffde",
  primary: "#0096FF",
  boxShadow: "0px 0px 6px 1px #ffffff63"
};
