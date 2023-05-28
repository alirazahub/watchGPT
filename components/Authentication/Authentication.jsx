import React from 'react'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../Navigation';

const Stack = createNativeStackNavigator();

const Authentication = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    animation: "slide_from_right",
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerStyle: {
                        backgroundColor: "#f69dc8",
                        height: 80,
                    },
                    headerTitle: ""
                }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{
                    headerStyle: {
                        backgroundColor: "#f69dc8",
                        height: 80,
                    },
                    headerTitle: "",
                    headerTintColor: "#fa1b86"
                }} />
                <Stack.Screen name="Navigation" component={Navigation} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Authentication
