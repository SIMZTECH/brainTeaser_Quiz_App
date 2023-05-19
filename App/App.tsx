/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(()=>{
    // hide splash screen
    SplashScreen.hide();

  });

  return (
    <View>
      <Text className='text-red-900'>Am working </Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({});