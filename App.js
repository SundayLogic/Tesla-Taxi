import { Provider } from 'react-redux';
import HomeScreen from './components/Screens/HomeScreen';
import MapScreen from './components/Screens/MapScreen';
import { store } from './Redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <stack.Navigator>
            <stack.Screen 
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <stack.Screen 
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
          </stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider>
  );
}
