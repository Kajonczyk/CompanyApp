import React from "react";
import StartScreen from "./StartScreen/StartScreen";
import { ThemeProvider } from "styled-components";
import theme from "./Utils/theme";
import GlobalStyle from "./Utils/GlobalTheme";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StartScreen />
      </ThemeProvider>
    </div>
  );
}

export default App;
