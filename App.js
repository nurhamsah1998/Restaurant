import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Screen/Dashboard/Dashboard';
import Login from './Screen/Auth/Login';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
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
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={Login}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
