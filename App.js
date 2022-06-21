import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
// import HomeScreen from './src/screens/HomeScreen';
// import SecondScreen from './src/screens/SecondScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
// import HomeNavigator from './src/navigation/HomeNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import GlobalProvider, { GlobalContext } from './src/Context/Provider';

const Stack = createNativeStackNavigator();

const App = () => {
  var isLoggedIn = false;
  const state = useContext(GlobalContext);
  console.log("State: " , state);

  return (
    <GlobalProvider>
      {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
    </GlobalProvider>
  );
};
export default App;