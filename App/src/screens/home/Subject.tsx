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
    className='b w-[100px] h-[90px] bg-white mb-3 relative items-center justify-center rounded-md shadow-md space-y-2'
    onPress={()=>operation(text)}
    >
      <Image source={icon} className="b w-[50px] h-[40px] object-contain" resizeMode="contain"/>
      <Text className="b text-black text-[11px]">{text}</Text>
    </Pressable>
  )
}

export default Subject;

const styles = StyleSheet.create({});