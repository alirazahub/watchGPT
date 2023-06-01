import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MoviesContext from './contexts/MoviesContext';
import React, { useState, useEffect } from 'react';
import Authentication from './components/Authentication/Authentication';
import { primaryColor, secondaryColor } from './colors';
import SearchContext from './contexts/SearchContext';
import Home from './components/Screens/Home/Home';
import UserAuthContext from './contexts/UserAuthContext';
import { storeSearchQuery, getSearchHistory } from './customHooks/useSearchHistory';
import Detail from './components/Screens/History/Detail';

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
  const [searchHistory, setSearchHistory] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      getSearchHistory(user.uid).then((history) => {
        setSearchHistory(history);
      });
    }
  }, [user]);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      <SearchContext.Provider value={{ searchHistory, setSearchHistory }}>
        <MoviesContext.Provider value={{ movies, setMovies }}>
          <PaperProvider theme={theme}>
            <Authentication />
            {/* <Home /> */}
          </PaperProvider>
        </MoviesContext.Provider>
      </SearchContext.Provider>
    </UserAuthContext.Provider>
  );
}

