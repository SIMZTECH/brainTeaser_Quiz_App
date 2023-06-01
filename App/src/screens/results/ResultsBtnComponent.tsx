/* eslint-disable prettier/prettier */
import { StyleSheet, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
type propsType={
    iconName:string,
    text:String,
    bg_Color:string,
    fg_Color:string,
    operation:(args:String)=>void,
};

const ResultsBtnComponent = ({iconName,text,bg_Color,fg_Color,operation}:propsType) => {
    console.log(fg_Color);
  return (
      <TouchableOpacity
          onPress={(() => operation(text))}
          className={`${bg_Color=='#05d3f6'?'bg-[#05d3f6]':'bg-white'} px-2 flex-row items-center justify-center space-x-1 h-12 w-[140px] rounded-md`}
      >
          {iconName && <Ionicons name={iconName} size={24} color={'black'} />}
          <Text className={`${fg_Color=='#ffffff'?'text-[#ffffff]':'text-[#000000]'} text-[15px]`}>{text}</Text>
      </TouchableOpacity>
  );
}

export default ResultsBtnComponent;

const styles = StyleSheet.create({});