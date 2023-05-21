/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainRoute from './src/navigations/MainRoute';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {

  useEffect(()=>{
    // hide splash screen
    SplashScreen.hide();

  });

  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({});