import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global.styled";
import Header from "./Header/Header";
import Article from "./styled/Articles/Article";
import Footer from "./styled/Footer/Footer";



const LandingPage = () => {
  let theme = {
    font: {
      primary: `"Open Sans", sans-serif`,
      heading: `"Poppins", sans-serif`,
      bold: 700,
      normal: 400,
      size: "1.125rem",
    },
  
    color: {
      veryPaleCyan: "hsl(193, 100%, 96%)",
      veryDarkCyan: "hsl(192, 100%, 9%)",
      grayishBlue: "hsl(208, 11%, 55%)",
      pink: "hsl(322, 100%, 66%)",
      white: "hsl(0, 0%, 100%)",
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="appContainer">
        <Header />
        <Article />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;