/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Color_Scheme } from './src/assets/constants/color_sheme/Color_Scheme';
import Home from './src/screens/home/Home';



const App = () => {

  useEffect(()=>{
    // hide splash screen
    SplashScreen.hide();

  });

  return (
    <ScrollView>
      <Home />
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({});