import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { LOGIN, SIGNUP } from '../constants/routesName';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';




const AuthNavigator = props =>{
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown:false}}>
                <Stack.Screen name={SIGNUP} component={SignUp}/>
                <Stack.Screen name={LOGIN} component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AuthNavigator;