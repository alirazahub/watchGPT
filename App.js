import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainComponent from './MainComponent';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainComponent/>
    </PaperProvider>
  );
}

