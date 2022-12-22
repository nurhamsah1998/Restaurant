import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Routing from './Screen/Routing';
export const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#2eb82e',
    secondary: 'yellow',
    typography: '#0d0d0d',
    white: '#FFFF',
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
