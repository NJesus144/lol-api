import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../src/theme";


const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.primary};
    font-family: sans-serif;
    color: ${(props) => props.theme.colors.white};
  }

  *{
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
