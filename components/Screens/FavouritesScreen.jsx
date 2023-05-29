import React from 'react'
import Favourites from './Favourites/Favourites';
import Detail from './Favourites/Detail';
import { primaryColor,secondaryColor } from '../../colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FavouritesScreen = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            animation: "slide_from_right",
        }}
        >
            <Stack.Screen name="Favourites" component={Favourites} options={{
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

export default FavouritesScreen
