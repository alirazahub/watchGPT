import React from 'react'
import Favourites from './Favourites/Favourites';
import Detail from './Favourites/Detail';
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

export default FavouritesScreen
