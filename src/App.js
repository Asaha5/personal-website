import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { DarkTheme, LightTheme } from "./common/ThemeContext";
import {  IntersectionObserverDefault, IntersectionObserverContext } from "./common/IntersectionObserverContext";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    font-family: 'Crimson Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, ${props => props.theme.bgGradient.first.color} ${props => props.theme.bgGradient.first.percent},
      ${props => props.theme.bgGradient.second.color} ${props => props.theme.bgGradient.second.percent});
    background-attachment: fixed;
    color: ${props => props.theme.textColor};
    @media only screen and (max-width: 600px) {
      background: ${props => props.theme.background}
    }
  }
`
function App() {
  const [currentTheme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={currentTheme === "dark" ? DarkTheme : LightTheme}>
      <IntersectionObserverContext.Provider value={IntersectionObserverDefault}>
        <>
          <GlobalStyle theme={currentTheme === "dark" ? DarkTheme : LightTheme} />
          <Layout toggleTheme={(e) => {
            setTheme(currentTheme === "dark" ? "light" : "dark")
          }} />
        </>
      </IntersectionObserverContext.Provider>
    </ThemeProvider>
  );
}

export default App;
