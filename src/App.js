import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './themes/useDarkMode';
import { lightTheme, darkTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';

import ToggleBtn from './themes/ToggleBtn';
import Landing from './components/Landing';
import MainContent from './components/MainContent';

const App = function () {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
    if (!componentMounted) {
      return <div />
    }
    
    return(
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
        <>
          <GlobalStyles />
            <header> 
              <ToggleBtn theme={theme} toggleTheme={toggleTheme} /> 
            </header>
          <Landing />
          <MainContent />
          <footer>
              <small>
                  <p>Created by Jade Shenker using React | <a href="https://www.figma.com/file/cDyjWeJDK6T5krMruLtsYF/theme-toggle-portfolio?node-id=0%3A1">Prototype</a></p>
                  <p><a href="https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/#comment-1751623" rel="noopener noreferrer" target="_blank">Theme Toggle Tutorial</a></p>
                </small>
          </footer>
        </>
      </ThemeProvider>
    );
}

export default App; 