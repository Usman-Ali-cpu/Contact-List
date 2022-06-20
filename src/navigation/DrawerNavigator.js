import React from 'react';
import {View, Text} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import { HOME_NAVIGATOR } from '../constants/routesName';


const DrawerNavigator = props =>{
    const Stack = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HOME_NAVIGATOR}>
                <Stack.Screen name={HOME_NAVIGATOR} component={HomeNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default DrawerNavigator;