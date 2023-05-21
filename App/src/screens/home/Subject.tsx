/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
const {height,width}=DimenstionsCustom;

type propsType={
    icon:String,
    text:String,
    operation:(args:String)=>void,
};

const Subject = ({icon,text,operation}:propsType) => {

    console.log(width);
  return (
    <Pressable
    className='b w-[100px] h-[100px] bg-white mb-5 relative items-center justify-center rounded-md shadow-md space-y-2'
    onPress={()=>operation(text)}
    >
      <Image source={icon} className='b w-[40px] h-[40px] object-contain'/>
      <Text className='b text-black text-[13px]'>{text}</Text>
    </Pressable>
  )
}

export default Subject;

const styles = StyleSheet.create({});