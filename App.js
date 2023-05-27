import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainComponent from './MainComponent';
import MoviesContext from './contexts/MoviesContext';
import React, { useState } from 'react';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
export default function App() {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      <PaperProvider theme={theme}>
        <MainComponent />
      </PaperProvider>
    </MoviesContext.Provider>
  );
}

