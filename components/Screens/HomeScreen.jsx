import React from 'react'
import Home from './Home/Home';
import Detail from './Home/Detail';
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
                    backgroundColor: "#f69dc8",
                    height: 80,
                },
                headerTitle: ""
            }} />
            <Stack.Screen name="Detail" component={Detail}  options={{
                headerStyle: {
                    backgroundColor: "#f69dc8",
                    height: 80,
                },
                headerTitle: "",
                headerTintColor: "#fa1b86"
            }} />
        </Stack.Navigator>
    )
}

export default HomeScreen
