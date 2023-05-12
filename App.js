import { Provider } from 'react-redux';
import HomeScreen from './components/Screens/HomeScreen';
import { store } from './Redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider className="flex justify-center items-center h-screen w-screen bg-slate-400 mt-9">
          <HomeScreen/>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
