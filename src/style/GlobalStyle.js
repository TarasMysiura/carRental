import { createGlobalStyle } from "styled-components";
import ManropeRegular from "../assets/fonts/Manrope-Regular.ttf";
import ManropeMedium from "../assets/fonts/Manrope-Medium.ttf";
import ManropeSemiBold from "../assets/fonts/Manrope-SemiBold.ttf";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
  
    @font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    } 
    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
  
 
  html, body {
    font-family: 'Inter Tight', sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
`;
