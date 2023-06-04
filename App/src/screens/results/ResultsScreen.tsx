/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {results_bgCover,trophy } from '../../assets/images';
import ResultsBtnComponent from './ResultsBtnComponent';

const {height,width,DimensionReducer}=DimenstionsCustom;
type propsType={
  route:any,
  navigation:any
}

const ResultsScreen = ({route,navigation}:propsType) => {
  const {score}=route.params;
  const WIDTH=DimensionReducer(width);
  const HEIGHT=DimensionReducer(height);

  const HandleOnPressedButton=((args:String)=>{
    if(args=='Share Results'){
      Alert.alert('Warning!',`am redirecting to ${args}`);

    }else if(args=='Take New Quiz'){
      Alert.alert('Warning!',`am redirecting to ${args}`);
    }
  });

  console.log(score);

  return (
    <View
    className={`w-[${WIDTH}px] h-[${HEIGHT}px] relative flex-1`}
    >
      <ImageBackground 
      source={results_bgCover} 
      className={`b w-full h-full`}
      >
        <View className='b  absolute top-0 bottom-0 left-0 right-0 px-5 pt-5'>
          <Text className='b text-white text-[19px] self-center'>Quiz Result</Text>
          <View className='b w-[300px] h-[160px] self-center items-center justify-center mt-5'>
            <Image source={trophy} resizeMode='contain' className='b w-full h-full'/>
          </View>
          <View className='b mt-5 items-center mb-2 space-y-5'>
            <Text className='b text-[24px] text-white'>Congratulations!</Text>
            <View>
              <Text className='text-[#a7a7a7] text-[16px] text-center leading-6'>
                Congratulations on your journey to success. You are heading for great hights
              </Text>
            </View>
            <View className='items-center'>
              <Text className='b text-[#717171] text-[19px]'>YOUR SCORE</Text>
              <Text>
                <Text className='b text-green-600 font-medium text-[32px]'>{score/20*100}%</Text><Text className='b text-white font-medium text-[32px]'>/{20/20*100}</Text>
              </Text>
            </View>
            <View className='b items-center'>
              <Text className='text-[#717171] text-[18px]'>EARNINGS COINS</Text>
              <View className='b flex-row items-center space-x-3'>
                <FontAwesome5 name='coins' size={24} color={'gold'} />
                <Text className='text-[30px] text-white font-medium'>{score*50}</Text>
              </View>
            </View>
          </View>

          <View className='b flex-row justify-between mt-10'>
            <ResultsBtnComponent 
              iconName={'md-share-social-outline'} 
              text={'Share Results'} 
              bg_Color={'#ffffff'} 
              fg_Color={'#000000'} 
              operation={HandleOnPressedButton}            
            />
            <ResultsBtnComponent 
              iconName={''} 
              text={'Take New Quiz'} 
              bg_Color={'#05d3f6'} 
              fg_Color={'#ffffff'} 
              operation={HandleOnPressedButton}            
            />
          </View>

          <TouchableOpacity
          onPress={()=>{Alert.alert('Warning!',`am going to Home`);}}
           className='b w-12 h-12 rounded-full border-[1.5px] border-[#717171] absolute bottom-8 self-center items-center justify-center'>
            <Ionicons name='md-close' size={24} color={'white'}/>
          </TouchableOpacity>
        </View>
        

      </ImageBackground>
    </View>
  )
}

export default ResultsScreen;

const styles = StyleSheet.create({});