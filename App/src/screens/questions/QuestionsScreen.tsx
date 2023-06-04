/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import QuestionMarker from './QuestionMarker';
import QuestionBox from './QuestionBox';
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import APICollector from '../../assets/APIs/QuestionsApis';

const {height,width,DimensionReducer}=DimenstionsCustom;

type propsType={
  route:any,
  navigation:any
}

const QuestionsScreen = ({route,navigation}:propsType) => {
  const {GetQuestions}=APICollector();//get questions from an API
  const {title}=route.params;
  const Navigation=useNavigation();
  const WIDTH=DimensionReducer(width);

const [marksDisplay,setMarksDisplay]=React.useState<Boolean[]>([]);
const track=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
const [correctAnswer,setCorrectAnswer]=React.useState<Boolean>(false);
const [disableBtn,setDisableBtn]=React.useState<Boolean>(false);
const [counter,setCounter]=React.useState<number>(0);
const [retrivedAPIData,setRetrivedAPIData]=React.useState([]);
const [questionOptions,setQuestionOptions]=React.useState([]);

const shuffleArray=(array)=>{
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
};

const HandleOnPressedQuitQuiz=((args:String)=>{
  if(args=='Quit Quiz'){
    navigation.navigate('HomeMenuTab');
  }
});

const GenerateScores=()=>{
  let score=0;
  for(let i=0;i<marksDisplay.length;i++){
    console.log(marksDisplay[i]);
    if(marksDisplay[i]==true){
      score=score+1;
    }
  };

  return score;
};

const getQuestionOptionsAndShuffle=useCallback((_object:any)=>{
  const copyOptions = [..._object.incorrect_answers];
  copyOptions.push(_object.correct_answer);
  shuffleArray(copyOptions);
  return copyOptions;
},[]);

const HandleOnPressedNext=((args:String)=>{
  if(args=='Skip'){
    marksDisplay.push(false);
    if(counter!=19){
      setCounter(counter+1);
      setQuestionOptions(getQuestionOptionsAndShuffle(retrivedAPIData[counter+1]));      
    };
  }else if(args=='Show Results'){
    const scores=GenerateScores();
    navigation.navigate('Results',{score:scores});
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

const GetQuizeQuestions=useCallback(async()=>{
  GetQuestions()
  .then((value)=>{
    if(!(retrivedAPIData.length>0)){
      setRetrivedAPIData(value);
      setQuestionOptions(getQuestionOptionsAndShuffle(value[0]));
    } 
  });

},[GetQuestions, getQuestionOptionsAndShuffle, retrivedAPIData.length]);

// handle markings
const markerOperation=((args:Boolean)=>{
  const copyArray=[...marksDisplay];
  copyArray.push(args);
  setMarksDisplay(copyArray);
});

  useEffect(()=>{
    handlePreventGoBack();

    GetQuizeQuestions();
   
  },[GetQuizeQuestions, handlePreventGoBack]);

  return (
    <>
    {(retrivedAPIData.length>0)?(
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
                return <QuestionMarker questionstotal={20} status={value} key={index} data={marksDisplay} elementIndex={index}/>
              })
            }
          </View>
        </View>
        <View className=' mt-3'>
            <Text className='b text-[22px] text-white w-full text-justify'>
              {decodeURIComponent(retrivedAPIData[counter].question)}
            </Text>
            <View className='b mt-6'>
              {
                questionOptions.map((value,_index)=>
                  <QuestionBox 
                    answer={value}
                    key={_index}
                    disableBtn={disableBtn}
                    setDisableBtn={setDisableBtn} 
                    retrivedAPIData={retrivedAPIData[counter]} 
                    setCounter={setCounter} 
                    counter={counter} 
                    getQuestionOptionsAndShuffle={getQuestionOptionsAndShuffle} 
                    setQuestionOptions={setQuestionOptions}    
                    allData={retrivedAPIData} 
                    markerOperation={markerOperation}          
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
            text={counter!=19?'Skip':'Show Results'}
            operation={HandleOnPressedNext}
            bg_Color={`#05d3f6`}
            iconColor={''} 
            iconSize={0}
          />
        </View>
  
      </View>
    ):(
      <View className='b flex-1 bg-[#141933] justify-center items-center'>
        <ActivityIndicator color={'#05d3f6'} size={30}/>
      </View>
    ) }
    </>
  );
}

export default QuestionsScreen;

const styles = StyleSheet.create({
  Container:{
    height:DimensionReducer(height),
    width:DimensionReducer(width),
  },
});