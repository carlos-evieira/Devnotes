import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components"; //compartilha com todas as rotas o tema

import { Routes } from "./routes";

import theme from "./styles/theme"; //criar uma instancia do Theme provider para compartilhar com todas as rotas o tema


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>
);
