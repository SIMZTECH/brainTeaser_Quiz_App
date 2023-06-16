/* eslint-disable prettier/prettier */
import { StyleSheet, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
type propsType={
    iconName:string,
    text:String,
    score:number
    operation:(args:String)=>void,
};

const ResultsBtnComponent = ({iconName,text,operation,score}:propsType) => {
  return (
    <>
        {score > 9 ?
            (
                <TouchableOpacity
                    onPress={(() => operation(text))}
                    className={`${text=='Take New Quiz'?'bg-[#05d3f6]':'bg-white'} px-2 flex-row items-center justify-center space-x-1 h-12 w-[140px] rounded-md`}>
                      {iconName && <Ionicons name={iconName} size={24} color={'black'} />}
                      <Text className={`${text=='Take New Quiz'?'text-white':'text-black'} text-[15px]`}>{text}</Text>
                  </TouchableOpacity>
            ) : (
                <TouchableOpacity
                onPress={(() => operation(text))}
                className={`${text=='Take New Quiz'?'bg-[#873b3b]':'bg-[#6a3535]'} px-2 flex-row items-center justify-center space-x-1 h-12 w-[140px] rounded-md`}>
                  {iconName && <Ionicons name={iconName} size={24} color={'#b0a4a4'}  />}
                  <Text className={`${text=='Take New Quiz'?'text-[#b6a4a4]':'text-[#b0a4a4]'} text-[15px]`}>{text}</Text>
              </TouchableOpacity>
            )
          }
    </>
  );
}

export default ResultsBtnComponent;

const styles = StyleSheet.create({});