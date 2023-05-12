import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './components/Screens/HomeScreen';
import { store } from './Redux/store';
import { SafeAreaView} from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex justify-center items-center h-screen w-screen bg-slate-400 mt-9">
        <HomeScreen/>
      </View>
    </Provider>
  );
}
