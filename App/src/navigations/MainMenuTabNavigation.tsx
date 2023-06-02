/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import NotificationScreen from '../screens/notifications/NotificationScreen';
import LeadersBoadScreen from '../screens/leadersBoard/LeadersBoadScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainMenuTabNavigation = () => {
  return (
    <Tab.Navigator
          screenOptions={({route}) => ({
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => {
                  let iconName;
                  if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home';
                  } else if (route.name === 'Notifications') {
                      iconName = focused ? 'notifications' : 'notifications';
                  } else if (route.name === 'LeadersBoard') {
                      iconName = focused ? 'md-stats-chart-sharp' : 'md-stats-chart-sharp';
                  } 
                  return <Ionicons name={`${iconName}`} size={22} color={color} />
              },
          })}
    >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Notifications' component={NotificationScreen}/>
      <Tab.Screen name='LeadersBoard' component={LeadersBoadScreen}/>
    </Tab.Navigator>
  )
}

export default MainMenuTabNavigation;
