import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { CONTACTS, CREATE_CONTACT, DELETE_CONTACT, SETTINGS, UPDATE_CONTACT } from '../constants/routesName';
import Contact from '../screens/Contacts/Contact';
import Setting from '../screens/Settings/Setting';
import CreateContact from '../screens/CreateContact/CreateContact';
import UpdateContact from '../screens/UpdateContact/UpdateContact';
import DeleteContact from '../screens/DeleteContact/DeleteContact';

const HomeNavigator = props =>{
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={CONTACTS}>
            <Stack.Screen name={CONTACTS} component={Contact}/>
            <Stack.Screen name={CREATE_CONTACT} component={CreateContact}/>
            <Stack.Screen name={UPDATE_CONTACT} component={UpdateContact}/>
            <Stack.Screen name={DELETE_CONTACT} component={DeleteContact}/>
            <Stack.Screen name={SETTINGS} component={Setting}/>
        </Stack.Navigator>
    );
};
export default HomeNavigator;