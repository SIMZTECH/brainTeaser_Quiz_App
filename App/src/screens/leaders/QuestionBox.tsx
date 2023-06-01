/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
const {height,width,DimensionReducer}=DimenstionsCustom;

type propsType={
    answer:any,
    disableBtn:any,
    setDisableBtn:any,
};

const QuestionBox = ({answer,setDisableBtn,disableBtn}:propsType) => {
    const WIDTH=DimensionReducer(width);
    const [mark,setMark]=useState<String>('');
    const [remover,setRemover]=useState<Boolean>(false);


    useEffect(()=>{



        setTimeout(() => {
            setRemover(false);
        },2000);
    });


  return (
      <TouchableOpacity
          onPress={(()=>{
            console.log(answer.correct);
            setMark(answer.correct);
            setDisableBtn(true);
            setRemover(true);
        })}
          disabled={disableBtn}
          className={`w-[${WIDTH}px] h-[50px]  mb-2 mt-2 pb-3 pt-3 items-center flex-row px-2 rounded-xl space-x-2 border-[1.5px] ${mark==='true'?'border-green-700':`${mark==='false'?'border-red-700':'border-gray-500'}`} `}>
          <Text className='b text-[16px] flex-1 text-white'>{answer.Answer}</Text>
          {(mark==='true') &&  
            <View className={`b w-[24px] h-[24px] rounded-full border-[1px] border-green-700 items-center justify-center bg-green-700`}>
                <Ionicons name='checkmark-sharp' size={20} color={'white'}/>
            </View>
          }
           {(mark==='false') &&  
            <View className={`b w-[24px] h-[24px] rounded-full border-[1px] border-red-600 items-center justify-center bg-red-600`}>
                <Ionicons name='close' size={20} color={'white'}/>
            </View>
          }
          {(mark=='') &&  <View className={`b w-[24px] h-[24px] rounded-full border-[1px] border-gray-500 items-center justify-center`}></View>}
      </TouchableOpacity>
  )
}

export default QuestionBox;

const styles = StyleSheet.create({});