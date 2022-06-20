
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppointmentsScreen,HomeScreen,ProfileScreen } from "./src/screens";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './src/utils/theme';
import { Provider} from 'react-redux';
import { store } from './src/utils/redux/store';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>
          <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Appointments" component={AppointmentsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
      </ThemeProvider>
      </NavigationContainer>
      </Provider>
  );
}

