/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
const {height,width,DimensionReducer}=DimenstionsCustom;

type propsType={
    answer:any,
    disableBtn:any,
    setDisableBtn:any,
    retrivedAPIData:any,
    setCounter:any
    counter:number
    getQuestionOptionsAndShuffle:any,
    setQuestionOptions:any,
    allData:any,
    setKey:any
    markerOperation:(args:Boolean)=>void,
};

const QuestionBox = ({answer,setDisableBtn,disableBtn,retrivedAPIData,markerOperation,setCounter,counter,getQuestionOptionsAndShuffle,setQuestionOptions,allData,setKey}:propsType) => {
    const WIDTH=DimensionReducer(width);
    const [mark,setMark]=useState<String>('');
    
    const checkMatchAnswer=()=>{
        if (retrivedAPIData.correct_answer===answer){
            setMark('true');
            markerOperation(true);
            setKey((prevState:any)=>prevState+1);
        } else{
            setMark('false');
            markerOperation(false);
            setKey((prevState:any)=>prevState+1);
        }
    };

    const resetInitials=()=>{
        setTimeout(() => {
                setMark('');
                setDisableBtn(false);
                if (counter!=19){
                    setCounter((prevState:any)=>prevState+1);
                    setQuestionOptions(getQuestionOptionsAndShuffle(allData[counter+1]));
                } else{
                    console.log('reached 19');
                }
        },200);
    };

  return (
      <TouchableOpacity
          onPress={(()=>{
                  setMark(answer);
                  setDisableBtn(true);
                  resetInitials();
                  checkMatchAnswer();
        })}
          disabled={disableBtn}
          className={`w-[${WIDTH}px] h-[50px]  mb-2 mt-2 pb-3 pt-3 items-center flex-row px-2 rounded-xl space-x-2 border-[1.5px] ${mark==='true'?'border-green-700':`${mark==='false'?'border-red-700':'border-gray-500'}`} `}>
          <Text className='b text-[16px] flex-1 text-white'>{decodeURIComponent(answer)}</Text>
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
  );
}

export default QuestionBox;

const styles = StyleSheet.create({});