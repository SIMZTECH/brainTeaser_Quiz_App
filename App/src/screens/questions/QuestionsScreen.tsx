/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import QuestionMarker from './QuestionMarker';
import QuestionBox from './QuestionBox';
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const {height,width,DimensionReducer}=DimenstionsCustom;

type propsType={
  route:any,
  navigation:any
}

const QuestionsScreen = ({route,navigation}:propsType) => {
  const {title}=route.params;
  const Navigation=useNavigation();
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
const [counter,setCounter]=React.useState<number>(0);

const HandleOnPressedQuitQuiz=((args:String)=>{
  if(args=='Quit Quiz'){
    navigation.navigate('HomeMenuTab');
  }
});

const HandleOnPressedNext=((args:String)=>{
  if(args=='Next'){
    let total=counter+1;
    if(total<20){
      setCounter(counter+1);
      setDisableBtn(false);
    }else{
      navigation.navigate('Results',{totalQuestions:total});
    }
  }
});

const handlePreventGoBack=useCallback(()=>{
  navigation.addListener('beforeRemove', (e:any) => {
    e.preventDefault();
    Alert.alert(
      'Discard changes?',
      'You have unsaved changes. Are you sure to discard them and leave the screen?',
      [
        { text: "Don't leave", style: 'cancel', onPress: () => {} },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]
    );
  });
  
},[navigation]);

  useEffect(()=>{
    handlePreventGoBack();
   
  },[data,handlePreventGoBack]);

  console.log(counter);
 
  return (
    <View
    style={styles.Container}
    className='b flex-1 bg-[#141933] px-5 pt-10 relative'
    >
      <Text className="b text-gray-500 text-[19px] mb-1">{title}</Text>
      <View>
        <Text><Text className='b text-[20px] text-white font-medium '>Question {counter+1<10?`0${counter+1}`:counter+1}</Text> <Text className='b text-[18px] text-gray-500 font-medium'>/20</Text></Text>
        <View className={`b mb-4 flex-row mt-3 justify-around`}>
          {
            track.map((value,index)=>{
              return <QuestionMarker questionstotal={20} status={value} key={index} data={data} elementIndex={index}/>
            })
          }
        </View>
      </View>
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
          operation={HandleOnPressedQuitQuiz}
          bg_Color={''}
          iconColor={'#8c8c8c'} 
          iconSize={16}
        />

        <ButtonComponent 
          iconName={''}
          text={'Next'}
          operation={HandleOnPressedNext}
          bg_Color={`#05d3f6`}
          iconColor={''} 
          iconSize={0}
        />
      </View>

    </View>
  );
}

export default QuestionsScreen;

const styles = StyleSheet.create({
  Container:{
    height:DimensionReducer(height),
    width:DimensionReducer(width),
  },
});