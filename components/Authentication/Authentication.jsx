import React,{useEffect} from 'react'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../Navigation';
import { primaryColor,secondaryColor } from '../../colors'
import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createNativeStackNavigator();

const Authentication = ({navigation}) => {
    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((user) => {
                if (user) {
                    navigation.navigate('Navigation', { screen: 'HomeScreen' })
                }
            })
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    animation: "slide_from_right",
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerStyle: {
                        backgroundColor: primaryColor,
                        height: 80,
                    },
                    headerTitle: ""
                }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{
                    headerStyle: {
                        backgroundColor: primaryColor,
                        height: 80,
                    },
                    headerTitle: "",
                    headerTintColor: secondaryColor
                }} />
                <Stack.Screen name="Navigation" component={Navigation} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Authentication
