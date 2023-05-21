/* eslint-disable prettier/prettier */
import React, { useLayoutEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuTabNavigation from './MainMenuTabNavigation';
import QuestionsScreen from '../screens/questions/QuestionsScreen';
import ResultsScreen from '../screens/results/ResultsScreen';

const Stack = createNativeStackNavigator();

const MainRoute = () => {

  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
    }}
    
    >
      <Stack.Screen name="HomeMenuTab" component={MainMenuTabNavigation}/>
      <Stack.Screen name="Questions" component={QuestionsScreen}/>
      <Stack.Screen name="Results" component={ResultsScreen}/>
    </Stack.Navigator>
  )
}

export default MainRoute;

