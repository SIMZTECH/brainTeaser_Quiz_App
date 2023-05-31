/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
const {height,width,DimensionReducer}=DimenstionsCustom;

type propsType={
    answer:string,
    operation:(args:Boolean)=>any,
    answerStatus:Boolean,
};

const QuestionBox = ({answer,operation,answerStatus}:propsType) => {
    const WIDTH=DimensionReducer(width);

  return (
      <TouchableOpacity
          onPress={(()=>console.log(answerStatus))}
          className={`w-[${WIDTH}px]  mb-2 mt-2 pb-3 pt-3 items-center flex-row px-2 rounded-xl space-x-2 border-[2px] border-gray-500 `}>
          <Text className='b text-[16px] flex-1 text-white'>{answer}</Text>
          <View 
            className={`b h-5 w-5 rounded-full border-[1px] border-gray-500 items-center justify-center ${answerStatus?'bg-green-500':'bg-red-500'}`}
            >
                {/* {answerStatus && <Ionicons name='md-checkmark-circle-sharp' color={'green'} size={20}/>} */}
          </View>
      </TouchableOpacity>
  )
}

export default QuestionBox;

const styles = StyleSheet.create({});