import React from 'react';

export const DarkTheme = {
  mode: "dark",
  background: `#424265`,
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
  filledStarColor: '#C6E1E1',
  barColors: {
    1: `#FF0000`,
    2: `#C44000`,
    3: `#BFBF00`,
    4: `#B9B9FF`,
    5: `#00D200`
  }
}

export const LightTheme = {
  mode: "light",
  background: `#ffffff`,
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
  timelineColor: '#408080',
  cardSubHeader: '#783D3D',
  filledStarColor: '#003A75',
  barColors: {
    1: `#FF0000`,
    2: `#C44000`,
    3: `#9B9B00`,
    4: `#007EBB`,
    5: `#008000`
  }
}

const ThemeContext = React.createContext(DarkTheme);

export const SiteThemeProvider = <ThemeContext.Provider/>;