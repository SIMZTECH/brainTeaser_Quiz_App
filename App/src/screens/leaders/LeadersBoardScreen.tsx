/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import QuestionMarker from './QuestionMarker';
import QuestionBox from './QuestionBox';

const {height,width,DimensionReducer}=DimenstionsCustom;

const LeadersBoardScreen = () => {
  console.log(DimensionReducer(width));
  const WIDTH=DimensionReducer(width);

  const [data,setData]=React.useState([true,true,false,false]);
  const track=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
  const questionsAnswers=[true,true,true,true];

  // const QuestionSelector=((args:Boolean)=>{
  //   console.log(args);
  // });

  useEffect(()=>{


  },[data]);
 
  return (
    <View
    style={styles.Container}
    className='b flex-1 bg-[#141933] px-5 pt-10 relative'
    >
      {/* category title */}
      <Text className="b text-gray-500 text-[19px] mb-1">Mathematics</Text>
      <View>
        <Text><Text className='b text-[20px] text-white font-medium '>Question 06</Text> <Text className='b text-[18px] text-gray-500 font-medium'>/20</Text></Text>
        <View className={`b mb-4 flex-row mt-3 justify-around`}>
          {
            track.map((value,index)=>{
              return <QuestionMarker questionstotal={20} status={value} key={index} data={data} elementIndex={index}/>
            })
          }
        </View>
      </View>
      {/* Question Box */}
      <View className=' mt-3'>
          <Text className='b text-[22px] text-white w-full text-justify'>
            What do you understand by the term photosynthesis, and briefly describe how water moves up to the leaves?
          </Text>
          <View className='b mt-6'>
            {
              questionsAnswers.map((value,_index)=>
                <QuestionBox 
                  answer={'Question 1'} 
                  operation={((args:Boolean)=>{
                    console.log(args);
              })} 
              answerStatus={value} key={_index}
              />)
            }

          </View>
      </View>

      <View className={`b flex-row justify-between absolute bottom-12 w-full self-center`}>
      <View className='b w-32 h-11  items-center justify-center rounded-md'>
          <Text className='b text-[18px] text-white'>Quit Quiz</Text>
        </View>
        <View className='b w-32 h-11 bg-[#05d3f6] items-center justify-center rounded-md'>
          <Text className='b text-[18px] text-white'>Next</Text>
        </View>

      </View>

    </View>
  )
}

export default LeadersBoardScreen;

const styles = StyleSheet.create({
  Container:{
    height:DimensionReducer(height),
    width:DimensionReducer(width),
  },


});