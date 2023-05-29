import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MoviesContext from './contexts/MoviesContext';
import React, { useState } from 'react';
import Authentication from './components/Authentication/Authentication';
import { primaryColor,secondaryColor } from './colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: secondaryColor,
    secondary: primaryColor,
  },
};
export default function App() {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies}}>
      <PaperProvider theme={theme}>
        <Authentication />
      </PaperProvider>
    </MoviesContext.Provider>
  );
}

