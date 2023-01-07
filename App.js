import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  TextInput,
  configureFonts,
} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Routing from './Screen/Routing';

const fontConfig = {
  fontFamily: 'Poppins-Regular',
};
export const theme = {
  ...DefaultTheme,
  custom: <TextInput />,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...DefaultTheme.colors,
    primary: '#43a047',
    secondary: '#1e88e5',
    typography: '#0d0d0d',
    greenTeal: '#00e673',
    divider: '#d2d2d2',
    white: '#FFFF',
    warning: '#ffb300',
    error: '#e53935',
    errorBackground: '#FD9E9E',
    errorFont: '#FF3F3F',
    successBackground: '#B1FD9E',
    successFont: '#209F25',
    info: '#29b6f6',
  },
};
export default function App({navigation}) {
  const queryClient = new QueryClient();
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Routing />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
