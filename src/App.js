import React from "react";
import StartScreen from "./StartScreen/StartScreen";
import { ThemeProvider } from "styled-components";
import theme from "./Utils/theme";
import GlobalStyle from "./Utils/GlobalTheme";
import styled from "styled-components";
const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Height = styled.div`
  height: 100%;
`;
function App() {
  return (
    <Height>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <StyledWrapper >
            <StartScreen />
          </StyledWrapper>
        </>
      </ThemeProvider>
    </Height>
  );
}

export default App;
