import React from 'react'
import Detail from './History/Detail';
import History from './History/History';
import { primaryColor,secondaryColor } from '../../colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HistoryScreen = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            animation: "slide_from_right",
        }}
        >
            <Stack.Screen name="History" component={History} options={{
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

export default HistoryScreen
