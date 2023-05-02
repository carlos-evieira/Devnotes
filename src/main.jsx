import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./pages/Profile";
import { ThemeProvider } from "styled-components"; //compartilha com todas as rotas o tema
import GlobalStyles from "./styles/global";
import theme from "./styles/theme"; //criar uma instancia do Theme provider para compartilhar com todas as rotas o tema

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile/>
    </ThemeProvider>
  </React.StrictMode>
);
