/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import QuestionMarker from './QuestionMarker';
import QuestionBox from './QuestionBox';
import ButtonComponent from './ButtonComponent';

const {height,width,DimensionReducer}=DimenstionsCustom;


const LeadersBoardScreen = () => {
  console.log(DimensionReducer(width));
  const WIDTH=DimensionReducer(width);

  const [data,setData]=React.useState([true,true,false,false]);
  const track=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
  const questionsAnswers=[
    {
    'id':'01',
    'correct':'true',
    'Answer':'Sir. james Banda'
   },
   {
    'id':'02',
    'correct':'false',
    'Answer':'Dr. Emmanuel '
   },
   {
    'id':'03',
    'correct':'false',
    'Answer':'Prof. john Banda'
   },
   {
    'id':'04',
    'correct':'false',
    'Answer':'Dr. kelvin Lungu'
   },
];
const [correctAnswer,setCorrectAnswer]=React.useState<Boolean>(false);
const [disableBtn,setDisableBtn]=React.useState<Boolean>(false);

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
                  answer={value}
                  key={value.id}
                  disableBtn={disableBtn}
                  setDisableBtn={setDisableBtn}                
                />)
            }
          </View>
      </View>

      <View className={'b flex-row justify-between absolute bottom-10 w-full self-center'}>
        <ButtonComponent 
          iconName={'power-off'}
          text={'Quit Quiz'}
          operation={((args: String) => { console.log(args); })}
          bg_Color={''}
          iconColor={'#8c8c8c'} 
          iconSize={16}
        />

        <ButtonComponent 
          iconName={''}
          text={'Next'}
          operation={((args: String) => { 
            setDisableBtn(false);
            console.log(args); 
          })}
          bg_Color={`#05d3f6`}
          iconColor={''} 
          iconSize={0}/>
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