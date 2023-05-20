/* eslint-disable prettier/prettier */
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import { Color_Scheme } from '../../assets/constants/color_sheme/Color_Scheme';
import { dashborad_banner } from '../../assets/images';

const {lightBlack,lightBlue,white,black,darkBlue}=Color_Scheme;
const {height,width}=DimenstionsCustom;

const Home = () => {
    console.log(lightBlue);
  return (
    <View style={styles.Container}>
        <View className={`flex-1 bg-[#edf4f6]`}>
              <View className='b w-full h-[180px] bg-[#292b31] rounded-b-xl relative px-4 '>
                  <View className='flex-row items-center mt-[20px] space-x-4'>
                      <View className='b border-red-600 w-12 h-12 bg-white rounded-full'>
                      </View>
                      <Text className='b text-white'>John Lungu</Text>
                  </View>
              </View>
              <View className='w-[90%] h-[180px] bg-blue-300 rounded-md self-center -mt-24'>
                <Image source={dashborad_banner} className='w-full h-full rounded-md'/>
              </View>
              <View className='b px-4 mt-5'>
                <View className='b flex-row justify-between'>
                    <Text className='b text-black text-[16px] font-medium'>Top Quiz Categories</Text>
                    <Pressable 
                        onPress={()=>Alert.alert("Make selection")}
                        className='px-2 bg-[#c4eef5ae] rounded-sm'>
                        <Text className='b text-[#05d3f6] font-semibold '>View All</Text>
                    </Pressable>
                </View>

              </View>
        </View>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    Container:{
        width:width,
        height:height,
    }

})