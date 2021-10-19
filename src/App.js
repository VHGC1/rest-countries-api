import React from "react";
import Routes from "./router/Routes";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import useDarkMode from "./hooks/useDarkMode";


const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={{
      theme: theme === 'light' ? lightTheme : darkTheme,
      toggleTheme,
    }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
