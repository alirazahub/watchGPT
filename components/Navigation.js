import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourites from './Screens/FavouritesScreen';
import History from './Screens/History';
import Settings from './Screens/Settings';
import HomeScreen from './Screens/HomeScreen';
import { primaryColor,secondaryColor } from '../colors';
const size = 35;
const Tab = createBottomTabNavigator();



const Navigation = () => {
  
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;
          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'home'
              : 'home-outline';
            iconColor = focused ? secondaryColor : '#fff';
          } else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
            iconColor = focused ? secondaryColor : '#fff';
          } else if (route.name === 'FavouritesScreen') {
            iconName = focused ? 'ios-heart-circle' : 'ios-heart-circle-outline';
            iconColor = focused ? secondaryColor : '#fff';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'user-circle' : 'user-circle-o';
            iconColor = focused ? secondaryColor : '#fff';
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
          backgroundColor: primaryColor,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={History} options={{
        headerStyle: {
          backgroundColor: primaryColor,
          height: 90,
        },
        headerTitle: ""
      }} />
      <Tab.Screen name="FavouritesScreen" component={Favourites} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        headerStyle: {
          backgroundColor: primaryColor,
          height: 90,
        },
        headerTitle: ""
      }} />
    </Tab.Navigator>
  );
};

export default Navigation;