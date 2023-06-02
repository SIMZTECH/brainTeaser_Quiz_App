/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { StyleSheet,View } from 'react-native';
import React from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';

const {height,width,DimensionReducer}=DimenstionsCustom;

type propsTypes={
    questionstotal:number,
    status:Boolean,
    data:any,
    elementIndex:number,
}

const QuestionMarker = ({questionstotal,status,data,elementIndex}:propsTypes) => {
    const WIDTH=DimensionReducer(width/20);

    //method to find matching index
    const findMatchingIndex=()=>{
      let res=data.find((value,_index)=>_index==elementIndex);
      return res;
    };

  return (
    <View className={`  h-1 w-[15px] rounded-md bg-gray-400`}>
      {(findMatchingIndex()===true) && <View className='b w-full h-full bg-green-700 rounded-md'></View>}
      {(findMatchingIndex()===false) && <View className='b w-full h-full bg-red-800 rounded-md'></View>}
      {(findMatchingIndex() !==false && findMatchingIndex()!==true) && <View className='b w-full h-full bg-gray-400 rounded-md'></View>}
    </View>
  )
}

export default QuestionMarker;

const styles = StyleSheet.create({});

//${status?'bg-green-600':'bg-red-500'}