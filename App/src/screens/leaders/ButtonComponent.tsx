/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
type propsType={
    iconName:string,
    text:String,
    operation:(args:String)=>void,
    bg_Color:String,
    iconColor:string,
    iconSize:number,
};

const ButtonComponent = ({iconName,text,operation,bg_Color,iconColor,iconSize}:propsType) => {
    console.log(bg_Color);
  return (
      <TouchableOpacity 
      onPress={()=>operation(text)}
      className={`w-32 h-12 flex-row space-x-1 items-center justify-center rounded-md ${(bg_Color)?'bg-[#05d3f6]':''}`}>
          {(iconName!=='') && <FontAwesome5 name={iconName} size={iconSize} color={iconColor}/>}
          <Text className='b text-[16px] text-white'>{text}</Text>
      </TouchableOpacity>
  );
}

export default ButtonComponent;

const styles = StyleSheet.create({});