import React from 'react';

export const DarkTheme = {
  mode: "dark",
  background: `rgb(20,17,64)`,
  backgroundGradient: `linear-gradient(180deg, rgba(20,17,64,1) 0%, rgba(64,64,105,1) 69%)`,
  bgGradient: {
    first: {
      color: "rgba(20,17,64,1)",
      percent: '0%'
    },
    second: {
      color: "rgba(64,64,105,1)",
      percent: '69%'
    }
  },
  backgroundAttachment: 'fixed',
  headerTextColor: '#F7E064',
  textColor: `hsla(0,0%,100%,0.88)`,
  miscColor: `#FFAA55`,
  timelineColor: '#11FF88',
  cardSubHeader: '#ff9d9d',
  filledStarColor: '#C6E1E1'
}

export const LightTheme = {
  mode: "light",
  background: `#e3ffe7`,
  backgroundGradient: `linear-gradient(180deg, #e3ffe7 0%, #d9e7ff 100%)`,
  bgGradient: {
    first: {
      color: "#ffffff",
      percent: '0%'
    },
    second: {
      color: "#ffffff",
      percent: '100%'
    }
  },
  backgroundAttachment: 'fixed',
  headerTextColor: '#4C4C4C',
  textColor: `#515151`,
  miscColor: `#003A75`,
  timelineColor: '#5B5B00',
  cardSubHeader: '#783D3D',
  filledStarColor: '#003A75'
}

const ThemeContext = React.createContext(DarkTheme);

export const SiteThemeProvider = <ThemeContext.Provider/>;