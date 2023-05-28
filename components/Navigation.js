import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourites from './Screens/Favourites';
import Home from './Screens/Home';
import History from './Screens/History';
import Settings from './Screens/Settings';

const size = 35;
const Tab = createBottomTabNavigator();


const Navigation = () => {
  const [number, setNumber] = useState(0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Settings"
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused }) => {
            let iconName;
            let iconColor;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
              iconColor = focused ? '#fa1b86' : '#fff';
            } else if (route.name === 'History') {
              iconName = focused ? 'history' : 'history';
              iconColor = focused ? '#fa1b86' : '#fff';
            } else if (route.name === 'Favourites') {
              iconName = focused ? 'ios-heart-circle' : 'ios-heart-circle-outline';
              iconColor = focused ? '#fa1b86' : '#fff';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'user-circle' : 'user-circle-o';
              iconColor = focused ? '#fa1b86' : '#fff';
            }
            if (route.name === 'History') {
              return <MaterialCommunityIcons name={iconName} size={size} color={iconColor} />;
            } else if (route.name === 'Settings') {
              return <FontAwsome name={iconName} size={size} color={iconColor} />;
            }
            else {
              return <Ionicons name={iconName} size={size} color={iconColor} />;
            }
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            height: 60,
            backgroundColor: '#f69dc8',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={History} options={{ headerShown: false }} />
        <Tab.Screen name="Favourites" component={Favourites} options={{ headerShown: false, tabBarBadge: number }} />
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;