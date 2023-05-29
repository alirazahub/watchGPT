import React from 'react'
import Home from './Home/Home';
import Detail from './Home/Detail';
import { primaryColor,secondaryColor } from '../../colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            animation: "slide_from_right",
        }}
        >
            <Stack.Screen name="Home" component={Home} options={{
                headerStyle: {
                    backgroundColor: primaryColor,
                    height: 80,
                },
                headerTitle: ""
            }} />
            <Stack.Screen name="Detail" component={Detail}  options={{
                headerStyle: {
                    backgroundColor: primaryColor,
                    height: 80,
                },
                headerTitle: "",
                headerTintColor: secondaryColor
            }} />
        </Stack.Navigator>
    )
}

export default HomeScreen
